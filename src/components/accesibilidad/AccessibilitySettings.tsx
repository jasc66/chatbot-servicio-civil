'use client';

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sun, X } from 'lucide-react';

type AccessibilitySettingsProps = {
  onSettingsChange: (settings: { contrast?: boolean; fontSize?: 'small' | 'medium' | 'large'; textToSpeech?: boolean }) => void;
  initialSettings: { contrast: boolean; fontSize: 'small' | 'medium' | 'large'; textToSpeech: boolean };
  onClose: () => void;
};

export default function AccessibilitySettings({ onSettingsChange, initialSettings, onClose }: AccessibilitySettingsProps) {
  const [contrast, setContrast] = useState(initialSettings.contrast);
  const [fontSize, setFontSize] = useState<"small" | "medium" | "large">(initialSettings.fontSize);
  const [isTextToSpeechEnabled, setTextToSpeechEnabled] = useState(initialSettings.textToSpeech);

  const handleContrastToggle = () => {
    setContrast(!contrast);
  };

  const handleFontSizeChange = (size: "small" | "medium" | "large") => {
    setFontSize(size);
  };

  const handleTextToSpeechToggle = () => {
    setTextToSpeechEnabled(!isTextToSpeechEnabled);
  };

  const applySettings = () => {
    onSettingsChange({ contrast, fontSize, textToSpeech: isTextToSpeechEnabled });
    onClose();
  };

  useEffect(() => {
    document.documentElement.classList.remove('text-small', 'text-medium', 'text-large');
    document.documentElement.classList.add(`text-${fontSize}`);
  }, [fontSize]);

  useEffect(() => {
    if (contrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
  }, [contrast]);

  return (
    <Card className="w-full max-w-sm bg-slate-200 text-card-foreground">
      <CardHeader className="bg-primary text-primary-foreground relative">
        <CardTitle className="text-2xl font-bold">Opciones de Accesibilidad</CardTitle>
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute top-2 right-2 text-primary-foreground hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-foreground"
          onClick={onClose}
          aria-label="Cerrar configuración de accesibilidad"
        >
          <X className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="space-y-6 bg-background text-foreground">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="contrast-toggle" className="text-base">
              Contraste Alto
            </Label>
            <p className="text-sm text-muted-foreground">
              Aumenta el contraste para mejorar la legibilidad
            </p>
          </div>
          <div
            role="switch"
            aria-checked={contrast}
            tabIndex={0}
            className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors bg-gray-400 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            onClick={handleContrastToggle}
            onKeyDown={(e) => e.key === 'Enter' && handleContrastToggle()}
            style={{
              backgroundColor: contrast ? "#007bff" : "#e5e7eb",
              border: "2px solid #000",
            }}
          >
            <span
              className={`${
                contrast ? "bg-white" : "bg-primary"
              } inline-block h-5 w-5 rounded-full transform transition-transform ${
                contrast ? "translate-x-5" : "translate-x-1"
              }`}
              style={{
                border: "1px solid #000"
              }}
            />
          </div>
        </div>

        <div className="space-y-3">
          <Label htmlFor="font-size" className="text-base">
            Tamaño de Fuente
          </Label>
          <RadioGroup
            id="font-size"
            value={fontSize}
            onValueChange={handleFontSizeChange}
            className="flex space-x-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="small" id="small" />
              <Label htmlFor="small">Pequeño</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="medium" id="medium" />
              <Label htmlFor="medium">Mediano</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="large" id="large" />
              <Label htmlFor="large">Grande</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="text-to-speech-toggle" className="text-base">
              Lector de Texto
            </Label>
            <p className="text-sm text-muted-foreground">
              Activa la lectura en voz alta del contenido
            </p>
          </div>
          <div
            role="switch"
            aria-checked={isTextToSpeechEnabled}
            tabIndex={0}
            className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors bg-gray-400 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            onClick={handleTextToSpeechToggle}
            onKeyDown={(e) => e.key === 'Enter' && handleTextToSpeechToggle()}
            style={{
              backgroundColor: isTextToSpeechEnabled ? "#007bff" : "#e5e7eb",
              border: "2px solid #000",
            }}
          >
            <span
              className={`${
                isTextToSpeechEnabled ? "bg-white" : "bg-primary"
              } inline-block h-5 w-5 rounded-full transform transition-transform ${
                isTextToSpeechEnabled ? "translate-x-5" : "translate-x-1"
              }`}
              style={{
                border: "1px solid #000"
              }}
            />
          </div>
        </div>

        <div className="pt-4">
          <Button 
            className="w-full bg-primary text-primary-foreground hover:bg-slate-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            onClick={applySettings}
            aria-label="Aplicar cambios de accesibilidad"
          >
            <Sun className="w-4 h-4 mr-2 " />
            Aplicar Cambios
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
