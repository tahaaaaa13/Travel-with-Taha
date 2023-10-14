import Card from "./Card";
import './Tours.css';
function Tours({tours},{removeTours}){
    return(
        <div className="tour-div">
            <h1 className="heading">Travel with Taha</h1>
            <div className="tour-section">
              {
                tours.map(tour=>{
                    return <Card {...tour} removeTour={removeTours}></Card>
                })
              }
            </div>
        </div>

    )
};
export default Tours;