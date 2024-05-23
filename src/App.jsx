import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';
import TabButton from './components/TabButtons/TabButton.jsx';


function App() {
  function handleClick(selectedButton){

    console.log(selectedButton);
}
  return (
    <div>
      <Header />
      <main>
      <section id ="core-concepts">
      <h3>Core Concepts</h3>
{/* <h2>Time to get started!</h2> */}
        <ul>
          <CoreConcept 
          title={CORE_CONCEPTS[0].title}
          description={CORE_CONCEPTS[0].description}
            image={CORE_CONCEPTS[0].image}
          />
         
        <CoreConcept {...CORE_CONCEPTS[1]}  /> 
        <CoreConcept {...CORE_CONCEPTS[2]}  />

         <CoreConcept title={CORE_CONCEPTS[3].title} 
          description={CORE_CONCEPTS[3].description}
          image={CORE_CONCEPTS[3].image}
        />
        </ul>
      </section>

      <section id="examples">
      <h2>Examples</h2>
      <menu>
      <TabButton onSelect={() => handleClick('components')}>Components</TabButton>
      <TabButton onSelect={() => handleClick('jsx')}>JSX</TabButton>
      <TabButton onSelect={() => handleClick('props')}>Props</TabButton>
      <TabButton onSelect={() => handleClick('state')}>State</TabButton>
      
      </menu>
            
      </section>
      </main>
    </div>
  );
}

export default App;