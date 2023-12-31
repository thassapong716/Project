const IDCards = (props) => {
    return ( 
        <div>
            <div className="card w-25 float-start mx-1 my-1 bg-info">
                <div className="card-body">
                    <h4 className="card-title bg-warning">{props.name}</h4>
                    <p className="card-text">From: {props.state}, Age: {props.age} years</p>
                </div>
            </div>         
        </div>
     );
}
 
export default IDCards;