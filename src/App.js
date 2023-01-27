
import React, {useEffect, useState}from 'react';
import Navbar from './components/Navbar'
import Characters from './components/Characters'
import Pagination  from './components/Pagination';



function App() {
const [characters, setCharacters] = useState([]);
const [info, setInfo] = useState({});

  let url = 'https://rickandmortyapi.com/api/character';

  const fetchcharacters = (url) => {

    fetch(url)
.then(response => response.json())
.then(data => {setCharacters(data.results)
     setInfo(data.info)
})
.catch(error => console.log(error))
  };

  const onPrevious = () =>{
    fetchcharacters(info.prev);

  }
  const onnext = () =>{
    fetchcharacters(info.next);
    
  }

  useEffect(() => {
    fetchcharacters(url);
  },[])

  return (
    <>
    <Navbar brand="Rick and morty app"/>
    
    
    <div className='container cont  mt-3'>
    
    <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onnext}/>
      <Characters characters={characters}/>
      <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onnext}/>


    </div>
    </>
   
  );
}

export default App;
