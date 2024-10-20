import { ReactNode } from "react";
import Header from "../header";

function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default MainLayout;
