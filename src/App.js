import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import HeroTwo from './Components/HeroTwo/HeroTwo';
import Banner from './Components/Banner/Banner';
import HeroThree from './Components/HeroThree/HeroThree';
import HeroFour from './Components/HeroFour/HeroFour';
import HeroFile from './Components/HeroFive/HeroFile';
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
    </div>
  );
}

export default App;
