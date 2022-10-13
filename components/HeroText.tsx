import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const HeroText: React.FC<Props> = ({ children }) => (
  <p className="mt-6 text-base leading-relaxed text-gray-600 dark:text-gray-400">
    {children}
  </p>
);
