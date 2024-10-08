import CoreConcept from "../../../react_02/src/components/CoreConcept"
import { CORE_CONCEPTS } from "../data"

export default function CoreConcepts(){
    return(
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((item)=><CoreConcept {...item}/>)}   
          </ul>
        </section>
    )
}