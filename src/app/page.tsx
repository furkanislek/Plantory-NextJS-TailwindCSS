import Menu from "../Pages/Menu/page";
import Header from "../Pages/Header/page";
import BestSellers from "@/Pages/BestSellers/page";
import AboutPage from "@/Pages/About/page";

export default function Home() {
  return (
    <>  
      <main className="h-screen w-full overflow-hidden relative">
        <div className="absolute w-full z-10">
          <Menu />
      </div>
      <Header />
    </main>
    <section className="min-h-screen w-full overflow-hidden relative">
      <BestSellers />
    </section>
    <section className="">
      <AboutPage />
    </section>
    </>
  );
}
