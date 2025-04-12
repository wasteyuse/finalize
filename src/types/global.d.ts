
interface Window {
  cartPaypal?: {
    AddToCart: (params: { id: string }) => void;
    Cart: (params: { id: string }) => void;
  };
}

// Declare the custom PayPal web components
declare namespace JSX {
  interface IntrinsicElements {
    'paypal-add-to-cart-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      'data-id': string;
    };
    'paypal-cart-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      'data-id': string;
    };
  }
}
