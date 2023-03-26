// import logo from './logo.svg';
// import About from './Component/About';
import './App.css';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
import React,{useState} from 'react';
import Alert from './Component/Alert';
// import Color from './Component/Color';
// import { BrowserRouter as Router,Route,Link, Routes } from 'react-router-dom';
import Footer from './Component/Footer';

function App() {

      const[mode,mymode]=useState('light');  

      const[alert, setAlert] = useState(null);

      const showAlert = (message,type)=>{
        setAlert({
          msg : message,
          type : type
        })

        setTimeout(() => {
          setAlert(null);
        }, 1500);
        
      }


      const toggleMode =()=>{
        if(mode === 'dark')
        {
          document.body.style.backgroundColor='white';
          mymode('light')
          showAlert("Light Mode has been unable successfully !! " , "success");
        }
        else
        {
          document.body.style.backgroundColor='rgb(38 32 106)';
          mymode('dark');
          showAlert("Dark mode had been unable successfully !!" , "success");
        }
      }

      

  
  return (    


    <>
            <Navbar title = "TextUtils2" abouttext="About" mode={mode} toggleMode={toggleMode}  /> 
            <Alert alert={alert} />  



    <div className="container my-3">  
        {/* <About heading="About Us"/> */}

        <TextForm showAlert={showAlert} heading ="Enter the text here" mode={mode} toggleMode={toggleMode} alert={alert}/>

    </div>





    {/* <Router>


    <Navbar title = "TextUtils2" abouttext="About" mode={mode} toggleMode={toggleMode}  /> 


    <Alert alert={alert} />  

    <div className="container my-3">

    <Routes>
        <Route path='/about' element={<About heading="About Us"/>}/>
        
       

        <Route path='/' element={<TextForm showAlert={showAlert} heading ="Enter the text here" mode={mode} toggleMode={toggleMode} alert={alert}/>}/>    

    </Routes>

    </div>
    <div className='container'>
      
      <Footer/>

    </div>


    </Router> */}
    </>


    
  );

  
}

export default App;
