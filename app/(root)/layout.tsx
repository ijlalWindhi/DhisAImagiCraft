import Navbar from "@/components/shared/Navbar";
import Sidebar from "@/components/shared/Sidebar";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="root">
      {/* Sidebar component */}
      <Sidebar />

      {/* Navbar component */}
      <Navbar />
      <div className="root-container">
        <div className="wrapper">{children}</div>
      </div>
    </main>
  );
}

export default Layout;
