const IDCards = (props) => {
    return ( 
        <div className="col-sm-4">
            <div className="card mx-2 my-2 bg-info">
                <div className="card-body">
                    <h4 className="card-title text-primary bg-warning">{props.title}</h4>
                    <p className="card-text">{props.link}</p>
                </div>
            </div>         
         </div>
     );
}
 
export default IDCards;