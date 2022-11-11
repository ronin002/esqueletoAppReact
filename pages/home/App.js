

import Home from './home'

import Header from  './../../components/home/Header/Header';
import Login from './../../components/Login/Login';
import Register from './../../components/Register/Register';
import Recovery from './../../components/Recovery/Recovery';

function App() {
  return (
    <>
     

        <Header/>
         <Home/> 
         <Login/>
         <Recovery/>
         <Register/>
        {/* 
         <Login/>
        <Register/>
        
       
        */}
        
      

    </>
  );
}

export default App;
