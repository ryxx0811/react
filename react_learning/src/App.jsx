import { CORE_CONCEPTS } from "./data";
import CoreConcepts from "./components/CoreConcept";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
          <ul>
            <CoreConcepts 
            title={CORE_CONCEPTS[0].title} 
            image={CORE_CONCEPTS[0].image} 
            description={CORE_CONCEPTS[0].description} 
            />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
