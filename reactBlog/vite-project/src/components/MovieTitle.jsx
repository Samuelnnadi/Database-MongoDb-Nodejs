import React from 'react';
import styled from 'styled-components'


const RowHolder = styled.div`
  margin-top:50px;
`;


const MovieTitle = ()=>{
   return(
    <div  className='container '>
        <RowHolder className='row'>
             <div className=' w-100 h-20 d-flex justify-content-between align-items-center'>
             <div  className='text-secondry fs-1 fw-400'>
                All Movies
            </div>

            <div>

             <form  className='d-flex'>
              <input className='form-control' placeholder='Search movies...' />
              <button className='btn btn-lg btn-outline-primary'>search</button>
             </form>

            </div>

             </div>
        </RowHolder>
    </div>
   )
}

export default MovieTitle;