/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'; // Import the useState hook

import 'bootstrap/dist/css/bootstrap.css';
import './assets/all.min.css';
import './assets/app.css';

function App() {
  // Initialize packlist as a state variable
  const [packlist, setPacklist] = useState([
    { name: 'Passport', IsPacket: true },
    { name: 'toothbrush', IsPacket: true },
    { name: 'tablet', IsPacket: true },
    { name: 'clothes', IsPacket: true }
  ]);

  // Define a function to toggle the IsPacket property
  const toggleIsPacket = (index) => {
    setPacklist(prevPacklist => {
      const updatedPacklist = [...prevPacklist];
      updatedPacklist[index].IsPacket = !updatedPacklist[index].IsPacket;
      return updatedPacklist;
    });
  }

  // New function to handle item click
  const handleItemClick = (index) => {
    setPacklist(prevPacklist => {
      const updatedPacklist = [...prevPacklist];
      updatedPacklist[index].IsPacket = !updatedPacklist[index].IsPacket;
      return updatedPacklist;
    });
  }

  return (
    <>
      <h1>List Item</h1>
      <ul>
        {packlist.map((item, index) => {
          return (
            <li key={index} onClick={() => handleItemClick(index)}>
              {item.IsPacket === true ?
                <div>
                  {item.name}
                  <span className='done'>
                    Done
                  </span>
                </div>
                :
                <div>
                  <del>{item.name}</del>
                  <span>
                    <i className="fa-solid fa-x"></i>
                  </span>
                </div>
              }
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default App;
