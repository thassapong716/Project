//import {Link} from 'react-router-dom'
const MyNavbar = () => {
    return (
        <nav className="navbar navbar-dark navbar-expand-sm fixed-top" style={{backgroundColor: '#bd5d38'}}>
        <div className="container">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#Navbar">
                <span className="navbar-toggler-icon"> </span>
            </button>
           <div className="collapse navbar-collapse" id="Navbar">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active"><a className="nav-link" to="/about"><span className="fa fa-home fa-lg"></span> Menu1</a></li>
                    <li className="nav-item"><a className="nav-link" to="/acads"><span className="fa fa-list fa-lg"></span>Menu2</a></li>
                    <li className="nav-item"><a className="nav-link" href="#techskills"><span className="fa fa-list fa-lg"></span>Menu3</a></li>
                    <li className="nav-item"><a className="nav-link" href="#projects"><span className="fa fa-info fa-lg"></span> Menu4</a></li>
                 </ul>       
            </div>
        </div>
        </nav>
      );
}
 
export default MyNavbar;