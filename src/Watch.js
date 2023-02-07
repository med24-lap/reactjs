

const Watch = (props) => {

    return(
        <div className="Watch">

            {
        props.list.map(item=>(

                  <div className="Secondpage">
                    <img src={item.img} alt=""/>
                    <h3>{item.nom}</h3>
                    <button>Watch Now</button>
                        
                    
                 </div>       
                    ))
            }        
         </div>
         )     
    }

        
export default Watch