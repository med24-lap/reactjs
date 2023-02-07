

const Anime = (props) => {
    
  

   return(
    <div className='Anime'>
    

        {
       props.list.map(item=>(

            
                <div className='Page'>
                    <img className="e" src={item.image} alt=""/>
                    <h3 className="text">{item.nom}</h3>
                    <h3>{item.dst}</h3>
                    <button className="watch"> Watch Now</button>
                    </div>
            ))        
        }
    </div>
   )
}
 export default Anime