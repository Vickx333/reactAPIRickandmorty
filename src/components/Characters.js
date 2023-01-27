import React from 'react';

const Characters = ({characters = []}) => {
  return (
    <div className='row'>
     {characters.map((item, index) =>(
              <div key={index} className='col mb-4' >
               <div className='card shadow p-4 mb-5 bg-body rounded' style={{minWidth: '200px'}}>
                    <img src={item.image} alt=""/>
                    <div className='card-body text-bg-light p-3' >
                         <h5>{item.name}</h5>
                         <hr/>
                         <p>location: {item.location.name}</p>
                         <p>species: {item.species}</p>
                         <p>status: {item.status}</p>
                         <a href="" className=' btn btn-warning'>capitulos</a>
                         </div>
               </div>
              </div> 
          )) }
     </div>
  );
};

export default Characters