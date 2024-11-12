'use client';
import { useState, useEffect, useRef } from 'react';
import { qaPairs } from '@/data/question';

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

const Button = ({ onClick, children, type = "button" }: { onClick: () => void; children: React.ReactNode; type?: "button" | "submit" | "reset" }) => (
  <button
    onClick={onClick}
    type={type}
    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center justify-center"
    style={{ minWidth: '48px' }}
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
    className="w-full p-2 border rounded-l text-black text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
);

const ScrollArea = ({ children }: { children: React.ReactNode }) => (
  <div className="flex-grow overflow-y-auto p-2 bg-gray-100 rounded shadow" style={{ maxHeight: 'calc(60vh)' }}>
    {children}
  </div>
);

async function getHuggingFaceResponse(prompt: string) {
  try {
    const response = await fetch('/api/huggingface', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`API error: ${response.status} - ${JSON.stringify(errorData)}`);
    }

    const data = await response.json();
    return data.text;
  } catch (error) {
    console.error('Error al obtener respuesta de Hugging Face:', error);
    return 'Lo siento, ha ocurrido un error al comunicarse con Hugging Face.';
  }
}



export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([
    { text: '¡Hola! Soy el asistente virtual del Servicio Civil. ¿En qué puedo ayudarte?', isBot: true }
  ]);
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  console.log(process.env.NEXT_PUBLIC_HUGGINGFACE_API_KEY)
  useEffect(() => {
    const savedMessages = localStorage.getItem('chatbotMessages');
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('chatbotMessages', JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim() === '') return;
  
    const userMessage = { text: input, isBot: false };
    setMessages(prev => [...prev, userMessage]);
  
    // Estado de carga
    const loadingMessage = { text: "Cargando respuesta...", isBot: true };
    setMessages(prev => [...prev, loadingMessage]);
  
    const response = await getHuggingFaceResponse(input);
  
    // Reemplazar el mensaje de "Cargando" con la respuesta real
    setMessages(prev => prev.slice(0, -1)); // Eliminar "Cargando"
    const botMessage = { text: response, isBot: true };
    setMessages(prev => [...prev, botMessage]);
  
    setInput('');
    setSuggestions([]);
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
            >
              {message.text}
            </span>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </ScrollArea>
      <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200 flex items-center space-x-3">
        <div className="flex-grow">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escribe tu pregunta aquí..."
          />
        </div>
        <Button onClick={() => {}} type="submit">
          ✉️
          <span className="sr-only">Enviar</span>
        </Button>
      </form>
    </div>
  );
}
