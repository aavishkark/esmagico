import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import HeroTwo from './Components/HeroTwo/HeroTwo';
import Banner from './Components/Banner/Banner';
import HeroThree from './Components/HeroThree/HeroThree';
import HeroFour from './Components/HeroFour/HeroFour';
import HeroFile from './Components/HeroFive/HeroFile';
import HeroEmi from './Components/HeroEmi/HeroEmi';
import HeroRefer from './Components/HeroRefer/HeroRefer';
import Faq from './Components/Faq/Faq';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <HeroTwo/>
      <Banner/>
      <HeroThree/>
      <HeroFour/>
      <HeroFile/>
      <HeroEmi/>
      <HeroRefer/>
      <Faq/>
      <Footer/>
    </div>
  );
}

export default App;
