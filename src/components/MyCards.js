import Data from '../Data.json';
import IDCards from './IDCards';
import VideoCards from './VideoCards';
import PictureCards from './PictureCards';
import TextCards from './TextCards';

const MyCards = () => {
    //console.log(Data);
    return ( <div>
       <br></br>
       <h4 style={{color:'#012169'}}><b>Hi, Eagles!</b></h4>
        <h6>Next week will be the last time we're in your inbox until January. But for now, we're bringing you exciting news from around campus. Have a great rest of your week, Eagles!</h6>
        <br></br>
        <hr></hr>
        <h3 style={{color:'rgb(1, 33, 105)'}}><b>This week's top stories</b></h3>
        <div className="row">
        {Data.data.map((elem)=>{
            let res;
            elem.type === 'video'? res = <VideoCards key={elem.id} title={elem.title} link={elem.link} age={elem.age}/>: elem.type === 'picture'? res = <PictureCards key={elem.id} title={elem.title} link={elem.link} age={elem.age}/>: res = <TextCards key={elem.id} title={elem.title} link={elem.link} age={elem.age}/>
            return res
            // <IDCards key={elem.id} name={elem.name} state={elem.des} age={elem.age}/>
        })}
        </div>
    </div> );
}
 
export default MyCards;