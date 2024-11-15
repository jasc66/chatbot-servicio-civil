"use client";

import { useState, useEffect, useRef } from "react";
import { qaPairs, basicQuestions } from "@/data/question";
import { qaPairsSystems } from "@/data/qaPairsSystems";
import { qaPairsContact } from "@/data/qaPairsContact"; // Importa el nuevo arreglo
import sitemapKeywords from "@/data/sitemapKeywords";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import Message from "@/components/Message";
import { Send, Settings } from "lucide-react";
import AccessibilitySettings from "./accesibilidad/AccessibilitySettings";
import {QuestionData, ChatMessage } from "@/types/chatbot";


export default function Chatbot() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      text: "¡Hola! Soy el asistente virtual del Servicio Civil. ¿En qué puedo ayudarte?",
      isBot: true,
    },
  ]);
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [showAccessibilitySettings, setShowAccessibilitySettings] =
    useState(false);
  const [accessibilitySettings, setAccessibilitySettings] = useState({
    contrast: false,
    fontSize: "medium" as "small" | "medium" | "large",
    textToSpeech: false,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedMessages = localStorage.getItem("chatbotMessages");
      if (savedMessages) {
        setMessages(JSON.parse(savedMessages));
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("chatbotMessages", JSON.stringify(messages));
    }
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    applyAccessibilitySettings(accessibilitySettings);
  }, [accessibilitySettings]);

  const normalizeText = (text: string) =>
    text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^\w\s]/gi, "");

  const handleSubmit = (e?: React.FormEvent<HTMLFormElement>) => {
    if (e) e.preventDefault();
    if (input.trim() === "") return;

    setMessages((prev) => [...prev, { text: input, isBot: false }]);
    const response = getResponse(input);

    setTimeout(() => {
      setMessages((prev) => [...prev, { text: response, isBot: true }]);
    }, 500);

    setInput("");
    setSuggestions([]);
    setShowSuggestions(false);
  };

  const getResponse = (question: string) => {
    const normalizedQuestion = normalizeText(question);

    // Prioridad alta: Búsqueda en qaPairsContact
    const bestMatchContact = qaPairsContact.reduce(
      (best, current) => {
        const currentScore = current.keywords.reduce((score, keyword) => {
          return normalizedQuestion.includes(normalizeText(keyword))
            ? score + 1
            : score;
        }, 0);
        return currentScore > best.score
          ? { data: current, score: currentScore }
          : best;
      },
      { data: null as QuestionData | null, score: 0 }
    );

    if (bestMatchContact.data && bestMatchContact.score > 0) {
      setSuggestions(
        bestMatchContact.data.relatedQuestions ||
          [...qaPairs, ...qaPairsSystems, ...qaPairsContact]
            .map((q) => q.question)
            .slice(0, 5)
      );
      return formatResponse(bestMatchContact.data);
    }

    // Búsqueda en basicQuestions
    const matchedBasic = basicQuestions.find((item) =>
      item.keywords.some((keyword) =>
        normalizedQuestion.includes(normalizeText(keyword))
      )
    );

    if (matchedBasic) {
      setSuggestions(
        [...qaPairs, ...qaPairsSystems, ...qaPairsContact]
          .map((q) => q.question)
          .slice(0, 5)
      );
      return matchedBasic.answer;
    }

    // Búsqueda en sitemapKeywords
    const matchedSitemap = sitemapKeywords.find((item) =>
      item.keywords.some((keyword) =>
        normalizedQuestion.includes(normalizeText(keyword))
      )
    );

    if (matchedSitemap) {
      setSuggestions(
        [...qaPairs, ...qaPairsSystems, ...qaPairsContact]
          .map((q) => q.question)
          .slice(0, 5)
      );
      return `
        <p>Para más información sobre este tema, puedes visitar:</p>
        <div class="bg-accent text-accent-foreground border-l-4 border-primary p-4 mt-4 rounded">
          <a href="${matchedSitemap.url}" target="_blank" class="text-primary underline hover:text-primary/90">
            ${matchedSitemap.description}
          </a>
        </div>
      `;
    }

    // Búsqueda en qaPairsSystems
    const bestMatchSystems = qaPairsSystems.reduce(
      (best, current) => {
        const currentScore = current.keywords.reduce((score, keyword) => {
          return normalizedQuestion.includes(normalizeText(keyword))
            ? score + 1
            : score;
        }, 0);
        return currentScore > best.score
          ? { data: current, score: currentScore }
          : best;
      },
      { data: null as QuestionData | null, score: 0 }
    );

    if (bestMatchSystems.data && bestMatchSystems.score > 0) {
      setSuggestions(
        bestMatchSystems.data.relatedQuestions ||
          [...qaPairs, ...qaPairsSystems, ...qaPairsContact]
            .map((q) => q.question)
            .slice(0, 5)
      );
      return formatResponse(bestMatchSystems.data);
    }

    // Búsqueda en qaPairs
    const bestMatchGeneral = qaPairs.reduce(
      (best, current) => {
        const currentScore = current.keywords.reduce((score, keyword) => {
          return normalizedQuestion.includes(normalizeText(keyword))
            ? score + 1
            : score;
        }, 0);
        return currentScore > best.score
          ? { data: current, score: currentScore }
          : best;
      },
      { data: null as QuestionData | null, score: 0 }
    );

    if (bestMatchGeneral.data && bestMatchGeneral.score > 0) {
      setSuggestions(
        bestMatchGeneral.data.relatedQuestions ||
          [...qaPairs, ...qaPairsSystems, ...qaPairsContact]
            .map((q) => q.question)
            .slice(0, 5)
      );
      return formatResponse(bestMatchGeneral.data);
    }

    // Sugerencias si no hay coincidencia exacta
    const filteredSuggestions = [
      ...qaPairs,
      ...qaPairsSystems,
      ...qaPairsContact,
    ]
      .filter((pair) =>
        pair.keywords.some((keyword) =>
          normalizedQuestion.includes(normalizeText(keyword))
        )
      )
      .map((pair) => pair.question)
      .slice(0, 5);

    setSuggestions(filteredSuggestions);
    return filteredSuggestions.length > 0
      ? `No encontré una respuesta exacta, pero quizás estas preguntas te puedan ayudar:`
      : `Lo siento, no pude encontrar una respuesta a tu pregunta. ¿Podrías reformularla o ser más específico?`;
  };

  const formatResponse = (match: QuestionData) => {
    let response = `<p>${match.answer}</p>`;

    if (match.tone === "formal") {
      response += `<p class="mt-4">Para obtener más información, no dudes en consultar los recursos que te hemos proporcionado.</p>`;
    } else if (match.tone === "informal") {
      response += `<p class="mt-4">¡Espero que esta información te haya ayudado! 😊 Si tienes más preguntas, ¡estoy aquí para ayudarte!</p>`;
    }

    if (match.relatedQuestions && match.relatedQuestions.length > 0) {
      response += `
        <div class="bg-indigo-100 text-indigo-800 border-l-4 border-indigo-500 p-4 mt-4 rounded">
          <p class="font-semibold">Preguntas relacionadas:</p>
          <ul class="list-disc pl-5">
            ${match.relatedQuestions
              .map((question) => `<li>${question}</li>`)
              .join("")}
          </ul>
        </div>`;
    }

    if (match.examples && match.examples.length > 0) {
      response += `
        <div class="bg-green-100 text-green-800 border-l-4 border-green-500 p-4 mt-4 rounded">
          <p class="font-semibold">Ejemplos:</p>
          <ul class="list-disc pl-5">
            ${match.examples.map((example) => `<li>${example}</li>`).join("")}
          </ul>
        </div>`;
    }

    if (match.resources && match.resources.length > 0) {
      response += `
        <div class="bg-purple-100 text-purple-800 border-l-4 border-purple-500 p-4 mt-4 rounded">
          <p class="font-semibold">Recursos adicionales:</p>
          <ul class="list-disc pl-5">
            ${match.resources
              .map(
                (resource) =>
                  `<li><a href="${resource.url}" target="_blank" class="underline hover:text-purple-700">${resource.label}</a></li>`
              )
              .join("")}
          </ul>
        </div>`;
    }

    if (match.additionalInfo) {
      response += `
        <div class="bg-gray-100 text-gray-800 border-l-4 border-gray-500 p-4 mt-4 rounded">
          <p class="font-semibold">Información de contacto adicional:</p>
          <ul class="list-disc pl-5">
            ${
              match.additionalInfo.contactPerson
                ? `<li><strong>Persona de contacto:</strong> ${match.additionalInfo.contactPerson}</li>`
                : ""
            }
            ${
              match.additionalInfo.phone
                ? `<li><strong>Teléfono:</strong> ${match.additionalInfo.phone}</li>`
                : ""
            }
            ${
              match.additionalInfo.email
                ? `<li><strong>Email:</strong> <a href="mailto:${match.additionalInfo.email}" class="underline hover:text-gray-700">${match.additionalInfo.email}</a></li>`
                : ""
            }
            ${
              match.additionalInfo.hours
                ? `<li><strong>Horario:</strong> ${match.additionalInfo.hours}</li>`
                : ""
            }
          </ul>
        </div>`;
    }

    return response;
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInput("");
    setSuggestions([]);
    setShowSuggestions(false);
    setMessages((prev) => [...prev, { text: suggestion, isBot: false }]);
    const response = getResponse(suggestion);

    setTimeout(() => {
      setMessages((prev) => [...prev, { text: response, isBot: true }]);
    }, 500);
  };

  const handleAccessibilitySettingsChange = (settings: {
    contrast?: boolean;
    fontSize?: "small" | "medium" | "large";
    textToSpeech?: boolean;
  }) => {
    setAccessibilitySettings((prev) => ({ ...prev, ...settings }));
    applyAccessibilitySettings(settings);
  };

  const handleCloseAccessibilitySettings = () => {
    setShowAccessibilitySettings(false);
  };

  const applyAccessibilitySettings = (settings: {
    contrast?: boolean;
    fontSize?: "small" | "medium" | "large";
    textToSpeech?: boolean;
  }) => {
    if (settings.contrast !== undefined) {
      if (settings.contrast) {
        document.documentElement.classList.add("high-contrast");
      } else {
        document.documentElement.classList.remove("high-contrast");
      }
    }

    if (settings.fontSize) {
      document.documentElement.classList.remove(
        "text-sm",
        "text-base",
        "text-lg"
      );
      document.documentElement.classList.add(`text-${settings.fontSize}`);
    }

    if (settings.textToSpeech !== undefined) {
      console.log(
        `Text-to-speech ${settings.textToSpeech ? "enabled" : "disabled"}`
      );
    }
  };

  return (
    <div
      className={`relative bg-background text-foreground ${
        accessibilitySettings.contrast ? "high-contrast" : ""
      }`}
    >
      <Card className="w-full max-w-md sm:max-w-lg lg:max-w-2xl mx-auto p-4 sm:p-6 bg-white shadow-lg rounded-lg border border-gray-300 relative flex flex-col h-[70vh] sm:h-[80vh]">
        <CardHeader className="bg-primary text-primary-foreground p-3 sm:p-4 rounded-t-lg">
          <CardTitle className="text-lg sm:text-xl font-bold text-center">
            Chatbot Servicio Civil
          </CardTitle>
          <Button
            variant="outline"
            size="icon"
            className="absolute top-2 right-2 bg-primary-foreground text-primary hover:bg-red-500 focus:ring-2 focus:ring-ring"
            onClick={() =>
              setShowAccessibilitySettings(!showAccessibilitySettings)
            }
            aria-label="Configuración de accesibilidad"
          >
            <Settings className="h-4 w-4" />
          </Button>
        </CardHeader>

        {/* Contenedor de contenido flexible para mantener el footer abajo */}
        <div className="flex-grow overflow-hidden flex flex-col">
          <CardContent className="p-4 sm:p-5 bg-gray-50 overflow-auto flex-grow">
            <ScrollArea className="pr-2 sm:pr-4">
              {messages.map((message, index) => (
                <Message
                  key={index}
                  text={message.text}
                  isBot={message.isBot}
                />
              ))}
              <div ref={messagesEndRef} />
            </ScrollArea>
          </CardContent>

          {/* Sugerencias */}
          {showSuggestions && suggestions.length > 0 && (
            <div className="p-4 bg-white shadow-lg border-t rounded-t-lg">
              <p className="font-semibold mb-1 text-sm sm:text-base">
                Sugerencias:
              </p>
              <div className="flex flex-wrap gap-1 sm:gap-2">
                {suggestions.map((suggestion, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="text-xs px-2 py-1 sm:text-sm break-normal whitespace-normal max-w-full bg-sky-200"
                  >
                    {suggestion}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer siempre al final */}
        <CardFooter className="p-3 sm:p-4 border-t">
          <form onSubmit={handleSubmit} className="flex w-full space-x-2">
            <Input
              value={input}
              onChange={(e) => {
                const currentValue = e.target.value;
                setInput(currentValue);

                if (currentValue.trim() === "") {
                  setSuggestions([]);
                  setShowSuggestions(false);
                } else {
                  const normalizedInput = normalizeText(currentValue);
                  const filteredSuggestions = [
                    ...qaPairs,
                    ...qaPairsSystems,
                    ...qaPairsContact,
                  ]
                    .filter((pair) =>
                      normalizeText(pair.question).includes(normalizedInput)
                    )
                    .map((pair) => pair.question)
                    .slice(0, 5);
                  setSuggestions(filteredSuggestions);
                  setShowSuggestions(true);
                }
              }}
              placeholder="Escribe tu pregunta aquí..."
              className="flex-grow text-xs sm:text-sm"
            />
            <Button type="submit" className="p-2 sm:p-3">
              <Send className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="sr-only">Enviar</span>
            </Button>
          </form>
        </CardFooter>
      </Card>

      {showAccessibilitySettings && (
        <div className="absolute top-0 right-0 mt-16 mr-4 z-50 bg-popover text-popover-foreground shadow-lg rounded-lg p-3 sm:p-4">
          <AccessibilitySettings
            onSettingsChange={handleAccessibilitySettingsChange}
            initialSettings={accessibilitySettings}
            onClose={handleCloseAccessibilitySettings}
          />
        </div>
      )}
    </div>
  );
}
