import './App.css';
import Navi from './Navi';
import NaviCategory from'./NaviCategory'
import Carousel from './Carousel';

function App() {
  return (
   <div > 
     <Navi></Navi>
     <NaviCategory></NaviCategory>
   
      <div>
        <Carousel></Carousel>
      </div>
      

    
   </div>
  );
}

export default App;
