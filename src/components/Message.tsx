import { Avatar } from "@/components/ui/avatar";
import { Bot, User } from "lucide-react";

type MessageProps = {
  text: string;
  isBot: boolean;
};

export default function Message({ text, isBot }: MessageProps) {
  return (
    <div className={`flex ${isBot ? "justify-start" : "justify-end"} mb-2`}>
      <div
        className={`flex items-start ${
          isBot ? "flex-row" : "flex-row-reverse"
        } w-full`}
      >
        <Avatar className={`${isBot ? "mr-2" : "ml-2"}`}>
          {isBot ? <Bot className="text-lime-700" /> : <User className="text-sky-700" />}
        </Avatar>
        <div
          className={`p-2 rounded-lg break-words ${
            isBot ? "bg-gray-200 text-gray-800" : "bg-blue-500 text-white"
          }`}
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </div>
    </div>
  );
}
