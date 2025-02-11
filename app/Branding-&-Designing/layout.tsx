// This is the layout for the contact page
export const metadata = {
    title: 'Branding & Designing | Create a Strong Identity with Interzens',
    description: 'Craft a memorable brand with Interzens’s branding and design services. We create visually stunning logos, designs, and strategies that resonate with your target audience.',
  };
  
  import { ReactNode } from 'react';

  interface ContactLayoutProps {
    children: ReactNode;
  }

  export default function Branding({ children }: ContactLayoutProps) {
    return (
      <>
       {children}
      </>
    );
  }
  