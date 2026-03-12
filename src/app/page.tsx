import TopMenu from "./components/TopMenu";
import CenterImage from "./components/CenterImage";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="d-flex flex-column min-vh-100">
      <TopMenu />
      <CenterImage />
      <Footer />
    </main>
  );
}