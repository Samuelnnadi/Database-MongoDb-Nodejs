import React from 'react';

const Card = ({imgsrc,movieName,movieRating,moviePrice,movieDiscount,movieDescription,movieLink , disabled})=>{

return(

    <div   className='card' >
        <div className='card-body'>

                 <div className='card-header'>
                    <img className='img img-fluid w-100 ' style={{height:"400px",cursor:"pointer"}} src={imgsrc} alt={movieName} />
                 </div>

                 <div className='card-footer'>

                   <a className='card-title fs-3 fw-bold text-primary' style={{cursor:"pointer"}}>{movieName}</a>

                   <div className='card-subtitle w-100 px-1 my-2' >{movieDescription}</div>


                   <div className='d-flex justify-content-between' >
                   <div className='fw-bold fs-3'><span  style={{fontSize:"20px",fontWeight:"normal",color:"gray"}}>Price:</span>{moviePrice}</div>
                   <div className='fw-300 fs-3 my-2' style={{color:"silver"}}><span  style={{fontSize:"20px",fontWeight:"normal",color:"gray"}}>Discount:</span>{movieDiscount}</div>
                   </div>


                   <div className='my-2 text-primary'>Rating:<span className='text-secondary fs-3 fw-400 mx-2'>{movieRating}</span></div>

                   <a href={movieLink} download={movieName} className='btn btn-lg btn-danger' disabled={disabled}>Download for free</a>
                
                 </div>

        </div>
    </div>
   
)

}

export default Card;