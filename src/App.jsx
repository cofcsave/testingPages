import Header from './components/Header/Header';
import './styles.css';
import waterLongImg from "./assets/water-long2.png";
import Instruction from './components/Instruction/Instruction';
import Classes from './components/Classes/Classes';
import Schedule from './components/Schedule/Schedule';
import Rentals from './components/Rentals/Rentals';
import Travel from './components/Travel/Travel';
import Footer from './components/Footer/Footer';

function App() {

  return (
    
    <div className="web-contain aboveWaterImg">
      <Header />
      <section className="aboveWater">
      </section>
      <section className="waterLine" id="instruct">
          <img src={waterLongImg} alt="Background" />
      </section>
      <Instruction />
      <Classes />
      <Schedule />
      <Rentals />
      <Travel />
      <Footer />
    </div>
  )
}

export default App
