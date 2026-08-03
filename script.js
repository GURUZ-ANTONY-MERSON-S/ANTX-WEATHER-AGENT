import { createChat } from "https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js";

createChat({
  webhookUrl:
    "https://guruz-antony-merson-s.app.n8n.cloud/webhook/3d378f80-0b87-4fe2-a67d-2ad32988220b/chat",

  target: "#n8n-chat",

  mode: "fullscreen",

  showWelcomeScreen: false,

  defaultLanguage: "en",

  initialMessages: [
    "👋 Welcome to Guruz Weather AI!",
    "Ask me about the weather in any city."
  ],

  i18n: {
    en: {
      title: "🌦️ Guruz Weather AI",
      subtitle: "Powered by n8n",
      footer: "",
      getStarted: "Start",
      inputPlaceholder: "Ask your weather question..."
    }
  }
});