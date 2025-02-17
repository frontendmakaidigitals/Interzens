// This is the layout for the contact page
export const metadata = {
  title:
    "Professional Photography & Videography Services | Interzens",
  description:
    "Capture stunning visuals with Interzens’ expert photography and videography services. We specialize in high-quality content for brands, events, product shoots, and more to elevate your marketing. Let’s create powerful visuals together!",
};

import { ReactNode } from "react";

interface ContactLayoutProps {
  children: ReactNode;
}

export default function Photography({ children }: ContactLayoutProps) {
  return <>{children}</>;
}
