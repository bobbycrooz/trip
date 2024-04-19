import Feeds from "@/components/feeds";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

export default function Home ()
{
  return (
    <div className="w-screen h-screen bg-muted">
      <Navbar />
      <main className="grid w-full grid-cols-9">
        <Sidebar />
        <Feeds/>
      </main>
    </div>
  );
}
