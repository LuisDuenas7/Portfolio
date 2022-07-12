
import './App.css';
import About from './components/about';
import Footer from './components/footer';
import Header from './components/header';
import Home from './components/home';
import Portafolio from './components/portafolio';



function App() {
  return (
    
       <div className='main-box'> 
        
            <Header/> 
            <Home/>
            <About/>
            <Portafolio/> 
            <Footer/> 
            
            
          
        
     </div>
 
  );
}

export default App;
