const VideoCards = (props) => {
    return ( 
        <div className="col-sm-4">
            <div className="card w-49 mx-2 my-2 bg-info">
                <div className="card-body">
                    <h4 className="card-title text-primary bg-warning">{props.title}</h4>
                    <iframe width="420" height="315" src={props.link}>
                    </iframe>
                    {/* <p className="card-text">From: {props.state}, Age: {props.age} years</p> */}
                </div>
            </div>         
         </div>
     );
}
 
export default VideoCards;