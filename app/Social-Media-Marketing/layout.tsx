// This is the layout for the contact page
export const metadata = {
  title: "Result-Driven Social Media Marketing Services  | Interzens",
  description:
    "Grow your brand with Interzens' expert social media marketing services in India. We specialize in strategy, content creation, and paid campaigns to boost engagement and sales. Elevate your social presence today!",
};

import { ReactNode } from "react";

interface ContactLayoutProps {
  children: ReactNode;
}

export default function SocialMediaMarketing({ children }: ContactLayoutProps) {
  return <>{children}</>;
}
