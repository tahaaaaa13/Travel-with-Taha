import { useState } from 'react';
import './App.css';
import data from './data';
import Tours from './components/Tours';

function App() {
  const[tours,setTours]=useState(data);
  function removeTours(id){
    const newTours=tours.filter(tour=>tour.id!==id
      );
      setTours(newTours);
  }


  return (
    
    <div className="App">
    <Tours tours={tours} removeTour={removeTours}></Tours>
    
    </div>
  );
}

export default App;
