import { FC, ReactNode } from "react";
import NavBar from "./NavBar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-grow mt-0">{children}</main>
      
    </div>
  );
};

export default Layout;
