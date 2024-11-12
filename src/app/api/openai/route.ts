import { NextResponse } from 'next/server';
import axios from 'axios';

const API_URL = 'http://localhost:300/api/openai'; // Ajusta la URL para que coincida con Mockoon

export async function POST(request: Request) {
  try {
    const { prompt } = await request.json();

    if (!prompt) {
      return NextResponse.json(
        { message: 'El prompt no puede estar vacío' },
        { status: 400 }
      );
    }

    const response = await axios.post(
      API_URL,
      {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }],
        max_tokens: 50,
        temperature: 0.5,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    const messageContent = response.data.choices[0]?.message?.content || 'No se pudo generar una respuesta';
    return NextResponse.json({ text: messageContent });

  } catch (error) {
    console.error('Error completo:', error);

    return NextResponse.json(
      { 
        message: 'Error al comunicarse con Mockoon',
        details: error instanceof Error ? error.message : 'Error desconocido'
      },
      { status: 500 }
    );
  }
}

