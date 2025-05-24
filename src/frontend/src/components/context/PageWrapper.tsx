// src/components/PageWrapper.tsx
import { useEffect } from "react";

interface PageWrapperProps {
  title: string;
  children: React.ReactNode;
}

const PageWrapper = ({ title, children }: PageWrapperProps) => {
  useEffect(() => {
    document.title = `ShopFront - ${title}`;
  }, [title]);

  return <>{children}</>;
};

export default PageWrapper;
