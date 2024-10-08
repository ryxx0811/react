import TabButton from "./TabButton"
import {}
export default function Examples(){
    return(
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
    )
}