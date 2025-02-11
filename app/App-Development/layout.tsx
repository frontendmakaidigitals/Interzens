// This is the layout for the contact page
export const metadata = {
    title: ' App Development | Custom Mobile & Web Apps by Interzens',
    description: 'Transform your ideas into powerful mobile and web apps with Interzens. We design and develop custom, high-performance applications according to your business needs.',
  };
  
  import { ReactNode } from 'react';

  interface ContactLayoutProps {
    children: ReactNode;
  }

  export default function ContactLayout({ children }: ContactLayoutProps) {
    return (
      <>
       {children}
      </>
    );
  }
  