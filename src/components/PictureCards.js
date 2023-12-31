const PicCards = (props) => {
    return ( 
        <div className="col-sm-4">            
            <div className="card mx-2 my-2 bg-info">
                <img className="card-img-top" src={props.link} alt="Title" />
                <div className="card-body">
                    <h4 className="card-title text-primary bg-warning">{props.title}</h4>
                    
                    {/* <p className="card-text">From: {props.state}, Age: {props.age} years</p> */}
                </div>
            </div>         
        </div>
     );
}
 
export default PicCards;