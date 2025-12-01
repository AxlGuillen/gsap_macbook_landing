import Navbar from './components/navbar.jsx';
import Hero from './components/hero.jsx';
import ProductViewer from './components/ProductViewer.jsx';
import Showcase from './components/Showcase.jsx';
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
      </main>
    );
}

export default App;