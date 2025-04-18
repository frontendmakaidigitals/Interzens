import React from "react";
import Link from "next/link";

const Logo = ({ className, source = 'https://media.githubusercontent.com/media/frontendmakaidigitals/Interzens/refs/heads/main/public/Logo.png' }: { className?: string, source?: string }) => {
  return (
    <Link href="/">
      <div className={`w-[220px] ${className}`}>
        <img src={source} alt="Logo" />
      </div>
    </Link>
  );
};

export default Logo;
