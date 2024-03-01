import Sidebar from "@/components/shared/Sidebar";
import MobileNav from "@/components/shared/MobileNav";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="root">
      {/* MobileNav component */}
      <MobileNav />

      {/* Sidebar component */}
      <Sidebar />
      <div className="root-container">
        <div className="wrapper">{children}</div>
      </div>
    </main>
  );
}

export default Layout;
