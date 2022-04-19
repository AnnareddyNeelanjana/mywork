import builder from './builder.jpg';
import './mainpage.css'

const Header= ({subtitle,anotherTitle}) => (
  
 <header id='h' className="row">
     <div className="col-md-4">
         <img src={builder} className='rounded-circle logo ' alt='logohere'/>
        
     </div>

     <div className="col-md-8">
        
        <div className="row subtitle">  {subtitle} </div> 
        <div className="row anotherTitle" >{anotherTitle} </div>
        </div>
           
 </header>

);

export default Header
