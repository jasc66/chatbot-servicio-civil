import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const NEXT_PUBLIC_OPENAI_API_KEY = process.env.NEXT_PUBLIC_AI21_API_KEY;

async function getOpenAIResponse(prompt: string) {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/completions',
      {
        model: 'text-davinci-003', // o el modelo de tu elección
        prompt: prompt,
        max_tokens: 100, // Ajusta el número de tokens según tus necesidades
        temperature: 0.7, // Controla la creatividad de la respuesta
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${NEXT_PUBLIC_OPENAI_API_KEY}`,
        },
      }
    );

    return response.data.choices[0].text;
  } catch (error) {
    console.error('Error al obtener respuesta de OpenAI:', error);
    throw new Error('Error al comunicarse con OpenAI');
  }
}
