import {useState} from 'react';

import Header from "./components/Header/Header";
import TabButton from "./components/TabButton";
import CoreConcepts from './components/CoreConcepts';
import { EXAMPLES } from './data';



function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton){
    setSelectedTopic(selectedButton)
  }

  return (
    <>
      <Header/>
      <main>
        <CoreConcepts />
        
      </main>
    </>
  );
}

export default App;
