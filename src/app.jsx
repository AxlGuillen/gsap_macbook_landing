import Navbar from './components/navbar.jsx';
import Hero from './components/hero.jsx';
import ProductViewer from './components/ProductViewer.jsx';
import Showcase from './components/Showcase.jsx';
import Performance from './components/Performance.jsx';
import Features from "./components/Features.jsx";
import Highlights from "./components/Highlights.jsx";
import Footer from "./components/footer.jsx";
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
    return (
      <main>
        <Navbar />
        <Hero />
        <ProductViewer />
        <Showcase />
        <Performance />
        <Features />
        <Highlights />
        <Footer />
      </main>
    );
}

export default App;