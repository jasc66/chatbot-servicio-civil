// // src/app/api/huggingface/route.ts
// import { NextResponse } from 'next/server';
// import axios from 'axios';

// const HUGGINGFACE_API_KEY = process.env.NEXT_PUBLIC_HUGGINGFACE_API_KEY;

// if (!HUGGINGFACE_API_KEY) {
//   throw new Error('La variable de entorno HUGGINGFACE_API_KEY no está configurada');
// }

// // Función para intentar la llamada a la API con reintentos
// async function fetchHuggingFaceResponse(prompt: string, retries = 3, delay = 5000): Promise<string> {
//   for (let i = 0; i < retries; i++) {
//     try {
//       const response = await axios.post(
//         'https://api-inference.huggingface.co/models/distilgpt2',
//         { inputs: prompt },
//         {
//           headers: {
//             'Authorization': `Bearer ${HUGGINGFACE_API_KEY}`,
//             'Content-Type': 'application/json',
//           },
//         }
//       );

//       return response.data[0]?.generated_text || 'No se pudo generar una respuesta';
//     } catch (error) {
//       if (axios.isAxiosError(error) && error.response?.status === 503) {
//         const estimatedTime = error.response?.data?.estimated_time || delay;
//         console.warn(`Modelo cargándose, reintentando en ${estimatedTime} ms...`);
//         await new Promise(resolve => setTimeout(resolve, estimatedTime));
//       } else {
//         throw error; // Lanzar error si no es de carga (503)
//       }
//     }
//   }
//   throw new Error('El modelo no está disponible después de varios intentos');
// }

// export async function POST(request: Request) {
//   try {
//     const { prompt } = await request.json();

//     if (!prompt) {
//       return NextResponse.json(
//         { message: 'El prompt no puede estar vacío' },
//         { status: 400 }
//       );
//     }

//     // Intentar obtener respuesta de Hugging Face con reintentos
//     const messageContent = await fetchHuggingFaceResponse(prompt);
//     return NextResponse.json({ text: messageContent });

//   } catch (error) {
//     console.error('Error al obtener respuesta de Hugging Face:', error);

//     if (axios.isAxiosError(error) && error.response) {
//       return NextResponse.json(
//         { message: 'Error al comunicarse con Hugging Face', details: error.response.data },
//         { status: error.response.status || 500 }
//       );
//     }

//     return NextResponse.json(
//       { message: 'Error interno del servidor', details: error instanceof Error ? error.message : 'Error desconocido' },
//       { status: 500 }
//     );
//   }
// }
