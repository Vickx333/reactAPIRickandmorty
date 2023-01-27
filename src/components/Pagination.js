import React from 'react'

const Pagination = ({ prev, next, onPrevious, onNext}) => {

     const bprevious = () =>{
      onPrevious();

     }
     const bnext = () =>{
     onNext();
     }
  return (
   <nav className='my-3'>
     <ul className='pagination justify-content-center'>
          {
               prev ?
          
          <li className='page-item mx-3'>
               <button className='page-link ' onClick={bprevious}>atras</button>
          </li>
          :
          null
}
{
     next ?
          <li className='page-item'>
               <button className='page-link' onClick={bnext}>siguiente</button>
          </li>
          : 
          null
}
     </ul>
   </nav>
  )
}

export default Pagination