// This is the layout for the contact page
export const metadata = {
  title: " Result-Oriented SEO Marketing Services | Interzens",
  description:
    " Boost your online visibility with Interzens' expert SEO marketing services in India. We specialize in on-page & off-page SEO, keyword optimization, and link building to drive organic traffic and higher rankings. Get started today!",
};

import { ReactNode } from "react";

interface ContactLayoutProps {
  children: ReactNode;
}

export default function SEOMarketing({ children }: ContactLayoutProps) {
  return <>{children}</>;
}
