import { useEffect } from "react";
import { useMercadopago } from "react-sdk-mercadopago";

export default function Checkout() {
  const mercadopago = useMercadopago.v2('TEST-bcfd2dc6-1894-4262-90a4-7b4d70bbb791', { 
    locale: 'pt-BR'
  });

  useEffect(() => {
    if (mercadopago) {
      mercadopago.checkout({
        preference: {
          id: '1023140205-e4f2e4c2-e4b8-4f51-9811-d93d8d99571d'
        },
        render: {
          container: '.cho-container',
          label: 'Pagar',
        }
      })
    }
}, [mercadopago])

  return (
    <div>
      <div className="cho-container" />
    </div>
  )
}