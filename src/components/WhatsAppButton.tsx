import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => (
  <a
    href="https://wa.me/5511932997159?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20informações%20sobre%20uma%20peça."
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 h-14 w-14 flex items-center justify-center rounded-full bg-whatsapp animate-pulse-whatsapp"
    aria-label="WhatsApp"
  >
    <MessageCircle className="h-7 w-7 text-white" />
  </a>
);

export default WhatsAppButton;
