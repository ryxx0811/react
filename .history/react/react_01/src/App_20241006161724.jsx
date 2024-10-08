import {useState, Fragment} from 'react';
import { CORE_CONCEPTS } from "./data";
import CoreConcepts from "./components/CoreConcept";
import Header from "./components/Header";
import TabButton from "./components/TabButton";
import { EXAMPLES } from './data';



function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton){
    setSelectedTopic(selectedButton)
  }

  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
          <ul>
            {CORE_CONCEPTS.map((item)=><CoreConcepts {...item}/>)}   
          </ul>
        </section>
        <section id='examples'>
          <h2>Example</h2>
          <menu>
            <TabButton isSelected={selectedTopic==='components'} onSelect={()=>handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic==='jsx'} onSelect={()=>handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic==='props'} onSelect={()=>handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic==='state'} onSelect={()=>handleSelect('state')}>State</TabButton>
          </menu>
          {!selectedTopic ? 
          (
          <p>Please select a topic.</p>
          ) : (
          <div id='tab-content'>   
             <h3>{EXAMPLES[selectedTopic].title}</h3>
             <p>{EXAMPLES[selectedTopic].description}</p>
             <pre>
               <code>{EXAMPLES[selectedTopic].code}</code>
             </pre>      
          </div>
          )
       }
          
        </section>
      </main>
    </div>
  );
}

export default App;
