import Sidebar from "@/components/shared/Sidebar";
import MobileNav from "@/components/shared/MobileNav";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="root">
      {/* Sidebar component */}
      <Sidebar />

      {/* MobileNav component */}
      <MobileNav />

      <div className="root-container">
        <div className="wrapper">{children}</div>
      </div>
    </main>
  );
}

export default Layout;
