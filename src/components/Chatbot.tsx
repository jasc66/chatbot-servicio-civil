"use client";

import { qaPairs } from '@/data/question';
import { useState, useEffect, useRef } from 'react';

type Resource = {
  label: string;
  url: string;
};

type QuestionData = {
  question: string;
  keywords: string[];
  answer: string;
  category?: string;
  relatedQuestions?: string[];
  examples?: string[];
  tone?: string;
  resources?: Resource[];
};

type Message = {
  text: string;
  isBot: boolean;
};

const Button = ({ onClick, children }: { onClick: () => void; children: React.ReactNode }) => (
  <button
    onClick={onClick}
    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center"
  >
    {children}
  </button>
);

const Input = ({ value, onChange, placeholder }: { value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; placeholder: string }) => (
  <input
    type="text"
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className="flex-grow p-2 border rounded-l text-black"
  />
);

const ScrollArea = ({ children }: { children: React.ReactNode }) => (
  <div className="flex-grow overflow-y-auto p-4 bg-gray-100 rounded shadow" style={{ maxHeight: '400px' }}>
    {children}
  </div>
);

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([
    { text: '¡Hola! Soy el asistente virtual del Servicio Civil. ¿En qué puedo ayudarte?', isBot: true }
  ]);
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedMessages = localStorage.getItem('chatbotMessages');
      if (savedMessages) {
        setMessages(JSON.parse(savedMessages));
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem('chatbotMessages', JSON.stringify(messages));
    }
  }, [messages]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const normalizeText = (text: string) =>
    text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^\w\s]/gi, "");

  const handleSubmit = (e?: React.FormEvent<HTMLFormElement>) => {
    if (e) e.preventDefault();
    if (input.trim() === '') return;

    setMessages((prev: Message[]) => [...prev, { text: input, isBot: false }]);
    const response = getResponse(input);

    setTimeout(() => {
      setMessages((prev: Message[]) => [...prev, { text: response, isBot: true }]);
    }, 500);

    setInput('');
    setSuggestions([]);
  };

  const getResponse = (question: string) => {
    const normalizedQuestion = normalizeText(question);
    
    let bestMatch: QuestionData & { matches: number } = { 
      question: '', 
      keywords: [], 
      answer: '', 
      matches: 0, 
      relatedQuestions: [], 
      examples: [], 
      resources: [] 
    };
  
    for (const pair of qaPairs) {
      const matches = pair.keywords.filter(keyword => normalizedQuestion.includes(normalizeText(keyword))).length;
  
      if (matches > bestMatch.matches) {
        bestMatch = { ...pair, matches };
      }
    }
  
    if (bestMatch.matches > 0) {
      return formatResponse(bestMatch);
    } else {
      const filteredSuggestions = qaPairs
        .filter(pair => pair.keywords.some(keyword => normalizedQuestion.includes(normalizeText(keyword))))
        .map(pair => pair.question);
  
      setSuggestions(filteredSuggestions);
      return `¿Quizás quisiste preguntar algo de esto? Selecciona una de las opciones.`;
    }
  };

  const formatResponse = (match: QuestionData) => {
    let response = `<p>${match.answer}</p>`;
    
    if (match.relatedQuestions && match.relatedQuestions.length > 0) {
      response += `
        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4 rounded">
          <p class="font-semibold text-blue-700">Preguntas relacionadas:</p>
          <ul class="list-disc pl-5 text-blue-700">
            ${match.relatedQuestions.map(question => `<li>${question}</li>`).join('')}
          </ul>
        </div>`;
    }

    if (match.examples && match.examples.length > 0) {
      response += `
        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4 rounded">
          <p class="font-semibold text-blue-700">Ejemplos de preguntas:</p>
          <ul class="list-disc pl-5 text-blue-700">
            ${match.examples.map(example => `<li>${example}</li>`).join('')}
          </ul>
        </div>`;
    }

    if (match.resources && match.resources.length > 0) {
      response += `
        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4 rounded">
          <p class="font-semibold text-blue-700">Recursos adicionales:</p>
          <ul class="list-disc pl-5 text-blue-700">
            ${match.resources.map(resource => `<li><a href="${resource.url}" target="_blank" class="underline hover:text-blue-900">${resource.label}</a></li>`).join('')}
          </ul>
        </div>`;
    }

    return response;
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInput('');
    setSuggestions([]);
    setMessages((prev: Message[]) => [...prev, { text: suggestion, isBot: false }]);
    const response = getResponse(suggestion);

    setTimeout(() => {
      setMessages((prev: Message[]) => [...prev, { text: response, isBot: true }]);
    }, 500);
  };

  return (
    <div className="flex flex-col h-[600px] w-full max-w-md mx-auto border border-gray-200 rounded-lg overflow-hidden shadow-lg bg-white">
      <div className="bg-blue-600 text-white p-4">
        <h2 className="text-xl font-bold text-center">Chatbot Servicio Civil</h2>
      </div>
      <ScrollArea>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-4 ${message.isBot ? 'text-left' : 'text-right'}`}
          >
            <span
              className={`inline-block p-3 rounded-lg ${
                message.isBot
                  ? 'bg-gray-200 text-gray-900'
                  : 'bg-blue-600 text-white'
              }`}
              dangerouslySetInnerHTML={{ __html: message.text }}
            />
          </div>
        ))}
        {suggestions.length > 0 && (
          <div className="p-4 bg-gray-50 border-t">
            <p className="font-semibold">Sugerencias:</p>
            <ul>
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="text-blue-600 cursor-pointer hover:underline mt-2"
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
        <div ref={messagesEndRef} />
      </ScrollArea>
      <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200 flex items-center space-x-3">
        <div className="flex-grow">
          <Input
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              if (e.target.value.trim().split(" ").length === 1) {
                const normalizedInput = normalizeText(e.target.value);
                const filteredSuggestions = qaPairs
                  .filter(pair => pair.keywords.some(keyword => normalizeText(keyword).includes(normalizedInput)))
                  .map(pair => pair.question);
                setSuggestions(filteredSuggestions);
              } else {
                setSuggestions([]);
              }
            }}
            placeholder="Escribe tu pregunta aquí..."
          />
        </div>
        <Button onClick={() => handleSubmit()}>
          ✉️
          <span className="sr-only">Enviar</span>
        </Button>
      </form>
    </div>
  );
}
