import React ,  {useState,useEffect} from 'react';
import Card from './Card';



const CardHolder = ()=>{    
    const [data , setData ]  = useState([{}]);

useEffect(()=>{
(async()=>{
  const db = await fetch('https://angelblogngwo.herokuapp.com/');
  const  db_value =  await db.json();
 setData(db_value);
console.log(db_value)


})()

},[])

   return(
       <div  className='container'>
           <div className='row'>
              {  
                data.map((item,id)=>{
                 return(

                   <div className="col-md-4 mt-4" key={Math.random()}>
                <Card  imgsrc={item.imageUrl} movieName={item.imageName} movieDescription={item.movieDescription} moviePrice={item.moviePrice} movieDiscount={item.movieDiscount} movieRating={item.movieRating} />              
               </div>

                 )
              })
            



              }


           
           
           
             {/* <Card  imgsrc={"https://media.istockphoto.com/photos/gangster-picture-id1080357266?k=20&m=1080357266&s=612x612&w=0&h=l8GbnyMKsYrA8xjeC77ptEzCvYkP4hCtdsh8ru_zbkY="}/>              
             <Card  imgsrc={"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/feel-good-happy-movies-1581461298.jpg?crop=0.503xw:1.00xh;0.0929xw,0&resize=640:*"}/>              
             <Card  imgsrc={"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-movies-1606255499.jpg?crop=0.511xw:1.00xh;0.107xw,0&resize=640:*"}/>              
             <Card  imgsrc={"https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1591908418-516Bk9B6xDL.jpg?crop=1xw:1xh;center,top&resize=480:*"}/>              
             <Card  imgsrc={"https://m.media-amazon.com/images/M/MV5BMTM2MTA3MDczNF5BMl5BanBnXkFtZTcwNjU0MTA1Nw@@._V1_FMjpg_UX1000_.jpg"} disabled={true}/>              
  */}


           </div>
       </div>
   )


}

export default CardHolder;