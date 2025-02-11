// This is the layout for the contact page
export const metadata = {
    title: 'IT Consulting & Advisory | Expert Solutions by Interzens',
    description: 'Optimize your technology strategy with Interzens’s IT consulting and advisory services. Our experts provide tailored solutions to improve efficiency, security, and growth.',
  };
  
  import { ReactNode } from 'react';

  interface ContactLayoutProps {
    children: ReactNode;
  }

  export default function ItConsulting({ children }: ContactLayoutProps) {
    return (
      <>
       {children}
      </>
    );
  }
  