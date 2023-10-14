import './Card.css'
function Card(props){
    return(
        <div>
        <div className="card">
        <img className="city-image" src={props.image}></img>
        <h4 className="city-price">{props.price}</h4>
        <h3 className="city-name">{props.name}</h3>
        <p className="city-info">{props.info}</p>
        <button className="button" onClick={()=>props.removeTours(props.id)}>Not Interested</button>
    </div>
        </div>
    
    )
};
export default Card;