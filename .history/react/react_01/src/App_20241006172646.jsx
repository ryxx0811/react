import {useState} from 'react';

import Header from "./components/Header/Header";
import 
import CoreConcepts from './components/CoreConcepts';




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
