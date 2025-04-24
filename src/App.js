import { Container } from 'react-bootstrap';
import './App.css';
import { FaCircle } from "react-icons/fa";
import { useEffect, useState } from 'react';

function App() {
  let [apii, setApii] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(res => res.json())
      .then(data => setApii(data.results));
  }, []); 

  return (
    <Container className='d-flex flex-wrap justify-content-center '>
      {apii.map((item) => {
        return (
          <div className='m-2 flex-wrap' key={item.id}>
            <div className="bg-gray-700 rounded-lg shadow-lg flex flex-wrap coll gap-4 mr-5 mb-5">
              <img
                src={item.image}
                alt={`${item.name} character image`}
                className="rounded-l-lg w-48 h-50 object-contain"
              />
              <div className="p-4">
                <h2 className="text-white text-xl font-bold">

                  <a href={item.url}>

                    <h2>{item.name}</h2>
                  </a>
                </h2>
                <p className="text-gray-400 flex items-center gap-2">
                  <FaCircle
                    className={

                      item.status === 'Alive'
                        ? 'text-green-500'
                        : item.status === 'Dead'
                          ? 'text-red-500'
                          : 'text-gray-400'
                    }
                  />
                  {item.status} - {item.species}
                </p>

                <p className="text-gray-400 mt-2">Last known location:</p>
                <p className="text-white"><a href={item.url}>
                  <h2>{item.location.name}</h2>
                </a>
                </p>
                <p className="text-gray-400 mt-2">First seen in:</p>
                <p className="text-white">{item.id}</p>
              </div>
            </div>
          </div>
        );
      })}
    </Container>
  );
}

export default App;