import './App.css';
import React, { useState } from 'react';
import Title from './component/title';
import Model from './component/model';

function App() {
  let [showEvent, setEvent] = useState(true);
  let [outputFromArray, setOutputFromArray] = useState([
    {title: "hello i am abijeet", id: 1},
    {title: "from laxmimarga", id: 2},
    {title: "studying at bachelor", id: 3},
    {title: "in Itahari Namuna College", id: 4},
  ])

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
          <React.Fragment key={event.id}>
            <h1>{event.title}</h1> 
            <button onClick={ () => handleDelete(event.id) }> Delete </button>
          </React.Fragment>
        ))}
      </div>

      {/* html tempelate cannot be assed in prop's so we use function extractor with html starting and ending tags */}
      {/* <Model/>  {* when we want to only one component *} */}

      <Model>
        <div className="modal">
            <h2> 10% Off Coupon Discount!!! </h2>
            <p> Use Ab1jeet_Is_Don at checkout  </p>
        </div>
      </Model>
    </div>

  );
}

export default App;
