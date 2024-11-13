'use client'

import { qaPairs, basicQuestions } from '@/data/question'
import sitemapKeywords from '@/data/sitemapKeywords'
import { useState, useEffect, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar } from "@/components/ui/avatar"
import { Send, Bot, User } from 'lucide-react'

type Resource = {
  label: string
  url: string
}

type QuestionData = {
  question: string
  keywords: string[]
  answer: string
  category?: string
  relatedQuestions?: string[]
  examples?: string[]
  tone?: string
  resources?: Resource[]
}

type Message = {
  text: string
  isBot: boolean
}

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([
    { text: '¡Hola! Soy el asistente virtual del Servicio Civil. ¿En qué puedo ayudarte?', isBot: true }
  ])
  const [input, setInput] = useState('')
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)


  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedMessages = localStorage.getItem('chatbotMessages')
      if (savedMessages) {
        setMessages(JSON.parse(savedMessages))
      }
    }
  }, [])

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem('chatbotMessages', JSON.stringify(messages))
    }
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const normalizeText = (text: string) =>
    text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^\w\s]/gi, "")

  const handleSubmit = (e?: React.FormEvent<HTMLFormElement>) => {
    if (e) e.preventDefault()
    if (input.trim() === '') return

    setMessages((prev: Message[]) => [...prev, { text: input, isBot: false }])
    const response = getResponse(input)

    setTimeout(() => {
      setMessages((prev: Message[]) => [...prev, { text: response, isBot: true }])
    }, 500)

    setInput('')
    setSuggestions([])
    setShowSuggestions(false)
  }

  const getResponse = (question: string) => {
    const normalizedQuestion = normalizeText(question)

    // Check if the question matches any sitemapKeywords
    const matchedSitemap = sitemapKeywords.find(item => 
      item.keywords.some(keyword => normalizedQuestion.includes(normalizeText(keyword)))
    )

    if (matchedSitemap) {
      setSuggestions(qaPairs.map(q => q.question).slice(0, 5)) // Sugerir solo preguntas de qaPairs
      return `
        <p>Para más información sobre este tema, puedes visitar:</p>
        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4 rounded">
          <a href="${matchedSitemap.url}" target="_blank" class="text-blue-600 underline hover:text-blue-900">
            ${matchedSitemap.description}
          </a>
        </div>
      `
    }

    // Check if the question matches any basicQuestions
    const matchedBasic = basicQuestions.find(item => 
      item.keywords.some(keyword => normalizedQuestion.includes(normalizeText(keyword)))
    )

    if (matchedBasic) {
      setSuggestions(qaPairs.map(q => q.question).slice(0, 5)) // Sugerir solo preguntas de qaPairs
      return matchedBasic.answer
    }

    // Use fuzzy matching for qaPairs for a more relevant response
    const bestMatch = qaPairs.reduce((best, current) => {
      const currentScore = current.keywords.reduce((score, keyword) => {
        return normalizedQuestion.includes(normalizeText(keyword)) ? score + 1 : score
      }, 0)
      return currentScore > best.score ? { data: current, score: currentScore } : best
    }, { data: null as QuestionData | null, score: 0 })

    if (bestMatch.data && bestMatch.score > 0) {
      setSuggestions(bestMatch.data.relatedQuestions || qaPairs.map(q => q.question).slice(0, 5))
      return formatResponse(bestMatch.data)
    }

    // If no match is found, suggest based on qaPairs only
    const filteredSuggestions = qaPairs
      .filter(pair => pair.keywords.some(keyword => normalizedQuestion.includes(normalizeText(keyword))))
      .map(pair => pair.question)
      .slice(0, 5)

    setSuggestions(filteredSuggestions)
    return filteredSuggestions.length > 0
      ? `No encontré una respuesta exacta, pero quizás estas preguntas te puedan ayudar:`
      : `Lo siento, no pude encontrar una respuesta a tu pregunta. ¿Podrías reformularla o ser más específico?`
  }

  const formatResponse = (match: QuestionData) => {
    let response = `<p>${match.answer}</p>`
    
    if (match.relatedQuestions && match.relatedQuestions.length > 0) {
      response += `
        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4 rounded">
          <p class="font-semibold text-blue-700">Preguntas relacionadas:</p>
          <ul class="list-disc pl-5 text-blue-700">
            ${match.relatedQuestions.map(question => `<li>${question}</li>`).join('')}
          </ul>
        </div>`
    }

    if (match.examples && match.examples.length > 0) {
      response += `
        <div class="bg-green-50 border-l-4 border-green-500 p-4 mt-4 rounded">
          <p class="font-semibold text-green-700">Ejemplos:</p>
          <ul class="list-disc pl-5 text-green-700">
            ${match.examples.map(example => `<li>${example}</li>`).join('')}
          </ul>
        </div>`
    }

    if (match.resources && match.resources.length > 0) {
      response += `
        <div class="bg-purple-50 border-l-4 border-purple-500 p-4 mt-4 rounded">
          <p class="font-semibold text-purple-700">Recursos adicionales:</p>
          <ul class="list-disc pl-5 text-purple-700">
            ${match.resources.map(resource => `<li><a href="${resource.url}" target="_blank" class="underline hover:text-purple-900">${resource.label}</a></li>`).join('')}
          </ul>
        </div>`
    }

    return response
  }

  const handleSuggestionClick = (suggestion: string) => {
    setInput('')
    setSuggestions([])
    setShowSuggestions(false)
    setMessages((prev: Message[]) => [...prev, { text: suggestion, isBot: false }])
    const response = getResponse(suggestion)

    setTimeout(() => {
      setMessages((prev: Message[]) => [...prev, { text: response, isBot: true }])
    }, 500)
  }

  return (
    <Card className="w-full max-w-lg lg:max-w-3xl mx-auto p-4 sm:p-6 bg-white shadow-lg rounded-lg border border-gray-300 relative">
      <CardHeader className="bg-primary text-primary-foreground p-4 rounded-t-lg">
        <CardTitle className="text-xl sm:text-2xl font-bold text-center">Chatbot Servicio Civil</CardTitle>
      </CardHeader>
      <CardContent className="p-4 sm:p-6 bg-gray-50 rounded-b-lg">
        <ScrollArea className="h-[300px] sm:h-[400px] lg:h-[500px] pr-2 sm:pr-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.isBot ? 'justify-start' : 'justify-end'} mb-2 sm:mb-4`}
            >
              <div className={`flex items-start ${message.isBot ? 'flex-row' : 'flex-row-reverse'} w-full sm:w-auto`}>
                <Avatar className={`w-8 h-8 sm:w-10 sm:h-10 ${message.isBot ? 'mr-2' : 'ml-2'}`}>
                  {message.isBot ? (
                    <Bot className="w-6 h-6 sm:w-8 sm:h-8 text-gray-600" />
                  ) : (
                    <User className="w-6 h-6 sm:w-8 sm:h-8 text-gray-600" />
                  )}
                </Avatar>
                <div
                  className={`p-2 sm:p-3 rounded-lg break-words text-sm sm:text-base leading-relaxed ${
                    message.isBot ? 'bg-gray-200 text-gray-800' : 'bg-blue-500 text-white'
                  }`}
                  style={{ maxWidth: "100%", overflowWrap: "break-word", wordBreak: "break-word" }}
                  dangerouslySetInnerHTML={{ __html: message.text }}
                />
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </ScrollArea>
      </CardContent>
      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute bottom-20 left-0 w-full p-4 bg-white shadow-lg rounded-t-lg">
          <p className="font-semibold mb-1 text-sm sm:text-base">Sugerencias:</p>
          <div className="flex flex-wrap gap-1 sm:gap-2">
            {suggestions.map((suggestion, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                onClick={() => handleSuggestionClick(suggestion)}
                className="text-xs px-2 py-1 sm:text-sm"
              >
                {suggestion}
              </Button>
            ))}
          </div>
        </div>
      )}
      <CardFooter className="p-4 border-t">
        <form onSubmit={handleSubmit} className="flex w-full space-x-2">
          <Input
            value={input}
            onChange={(e) => {
              const currentValue = e.target.value
              setInput(currentValue)

              if (currentValue.trim() === '') {
                setSuggestions([])
                setShowSuggestions(false)
              } else {
                const normalizedInput = normalizeText(currentValue)
                const filteredSuggestions = qaPairs
                  .filter(pair => normalizeText(pair.question).includes(normalizedInput))
                  .map(pair => pair.question)
                  .slice(0, 5)
                setSuggestions(filteredSuggestions)
                setShowSuggestions(true)
              }
            }}
            placeholder="Escribe tu pregunta aquí..."
            className="flex-grow text-sm sm:text-base"
          />
          <Button type="submit" className="p-2 sm:p-3">
            <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-1" />
            Enviar
          </Button>
        </form>
      </CardFooter>
    </Card>
  )
}
