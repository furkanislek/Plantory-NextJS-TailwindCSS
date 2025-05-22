import Menu from "../Pages/Menu/page";
import Header from "../Pages/Header/page";
import BestSellers from "@/Pages/BestSellers/page";
import AboutPage from "@/Pages/About/page";
import ReviewPage from "@/Pages/Review/page";
import FooterPage from "@/Pages/Footer/page";

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
      <section>
        <AboutPage />
      </section>
      <section>
        <ReviewPage />
      </section>
      <footer>
        <FooterPage />
      </footer>
    </>
  );
}
