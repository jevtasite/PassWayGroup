import { Navigation } from './components/Navigation/Navigation';
import { Hero } from './components/Hero/Hero';
import { WhoWeAre } from './components/WhoWeAre/WhoWeAre';
import { ElitePlayers } from './components/ElitePlayers/ElitePlayers';
import { Services } from './components/Services/Services';
import { WhyChoose } from './components/WhyChoose/WhyChoose';
import { Contact } from './components/Contact/Contact';
import { BackToTop } from './components/BackToTop/BackToTop';

function App() {
  return (
    <div className="min-h-screen bg-void-black">
      <Navigation />
      <main>
        <Hero />
        <WhoWeAre />
        <ElitePlayers />
        <Services />
        <WhyChoose />
        <Contact />
      </main>
      <BackToTop />
    </div>
  );
}

export default App;
