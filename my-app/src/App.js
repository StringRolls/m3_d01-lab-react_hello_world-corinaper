import './App.css';
import Button from './components/Button';
import Main from './components/Main';
import SectionIcon from './components/SectionIcon';

import declarative from './images/icon1.png';
import components from './images/icon2.png';
import singleWay from './images/icon3.png';
import jsxIcon from './images/icon4.png';


function App() {
  return (
    <div className="App">
   
      <Main>
        <Button/>
      </Main>
      <div className='icons'>
          <SectionIcon
          image={declarative}
          h3Text="Declarative"
          paragraph="React makes it pinless to create interactive UIs"
          />
          <SectionIcon
          image={components}
          h3Text="Components"
          paragraph="Build encapsulated components that manage their state."
          />
          <SectionIcon
          image={singleWay}
          h3Text="Single-Way"
          paragraph="A set of immutable values are passed to the components."
          />
          <SectionIcon
          image={jsxIcon}
          h3Text="JSX"
          paragraph="Statically-types, designed to run on modern browsers."
          />
    </div>

    </div>
  );
}
export default App;