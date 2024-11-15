export type Resource = {
    label: string;
    url: string;
  };
  
  export type QuestionData = {
    question: string;
    keywords: string[];
    answer: string;
    category?: string;
    relatedQuestions?: string[];
    examples?: string[];
    tone?: string;
    resources?: Resource[];
    additionalInfo?: {
      contactPerson?: string;
      phone?: string;
      email?: string;
      hours?: string;
    };
  };
  
  export type Message = {
    text: string;
    isBot: boolean;
  };
  export type ChatMessage = {
    text: string;
    isBot: boolean;
  };
  