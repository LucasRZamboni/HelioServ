import { useCallback } from 'react';

export function useWhatsApp() {
  const openWhatsApp = useCallback(() => {
    const phoneNumber = '+5511999670155';
    const message = 'Olá, gostaria de fazer um orçamento!';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  }, []);

  return { openWhatsApp };
}