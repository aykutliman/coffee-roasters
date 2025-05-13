import Banner from "./components/Banner";
import Collection from "./components/Collection";
import FeatureSection from "./components/FeatureSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HowItWorks from "./components/HowItWorks";

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Collection />
      <FeatureSection />
      <HowItWorks />
      <Footer />
    </div>
  );
}

export default App;
