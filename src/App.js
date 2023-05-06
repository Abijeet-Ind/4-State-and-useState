import './App.css';
import { useState } from 'react';
import Title from './component/title';

function App() {
  let [showEvent, setEvent] = useState(true);
  let [outputFromArray, setOutputFromArray] = useState([
    {title: "hello i am abijeet", id: 1},
    {title: "from laxmimarga", id: 2},
    {title: "studying at bachelor", id: 3},
    {title: "in Itahari Namuna College", id: 4},
  ])
  console.log(showEvent);

  const handleDelete = (id) => {
    setOutputFromArray((prevEvents)=>{
      return prevEvents.filter((event) => {
        return id !== event.id;
      })
    })

    console.log(id);
    console.log('---');
  }

  
  const title = "Another Title";
  const subtitle = "Another subtitle";
   
  return (
    <div className='App'>
      
      <Title title="Basic Information About Abijeet" subtitle="is Listed Below" />
      <Title title={title} subtitle={subtitle} />

      {showEvent && 
        <div>
          <button onClick={() => setEvent(false)}> Hide </button>
        </div>
      }

      {!showEvent && <div>
        <button onClick={() => setEvent(true)} > Show </button>
      </div>}

      <div className='displayArray'>
        {showEvent && outputFromArray.map((event, index) => (
          <div key={event.id}>
            <h1>{event.title}</h1> 
            <button onClick={ () => handleDelete(event.id) }> Delete </button>
          </div>
        ))}
      </div>
    </div>

  );
}

export default App;
