import Header from "@/components/common/header/Header";
import { Outlet } from "react-router-dom";


export default function RootLayout() {
  return (
    <div className="text-foreground h-screen w-screen flex items-center justify-center ">
      <div className="bg-primary w-full h-full min-w-[1440px] max-w-[1440px] flex flex-col">
        <Header />
        <main className="w-full h-full flex flex-col items-center justify-start pb-6 px-6 gap-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
