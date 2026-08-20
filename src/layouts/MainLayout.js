import { LeftSidebar, RightSidebar } from "../components";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto flex min-h-screen max-w-[1280px]">
        <aside className="sticky top-0 h-screen w-[280px] shrink-0">
          <LeftSidebar />
        </aside>

        <main className="w-[600px] shrink-0 border-x border-gray-800">
          <Outlet />
        </main>

        <aside className="sticky bottom-0 w-[300px] shrink-0 self-end">
          <RightSidebar />
        </aside>
      </div>
    </div>
  );
};
