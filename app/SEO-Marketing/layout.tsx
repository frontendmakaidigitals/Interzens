// This is the layout for the contact page
export const metadata = {
    title: 'SEO Marketing | Rank Higher & Drive Traffic with Interzens',
    description: 'Increase your online visibility with Interzens’s expert SEO marketing services. We optimize your website to boost rankings, traffic, and conversions.',
  };
  
  import { ReactNode } from 'react';

  interface ContactLayoutProps {
    children: ReactNode;
  }

  export default function SEOMarketing({ children }: ContactLayoutProps) {
    return (
      <>
       {children}
      </>
    );
  }
  