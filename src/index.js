import React, { Component } from 'react';
import ReactDOM from 'react-dom';



// functional Component
// const App = () => {
//     window.navigator.geolocation.getCurrentPosition(
// (position) => console.log(position), 
// (err) => console.log(err))



//     return <div>Lattiude: </div>
// };



//class component
class App extends React.Component {
    //initiliza state
constructor(props){
  super(props);// have to call 

  //this is the only time we do direct assignemnt to state
this.state = {
    lat: null, errorMessage: ''
};


 window.navigator.geolocation.getCurrentPosition(
     (position) => {
         //we called set state!!
         this.setState({lat: position.coords.latitude});


     },
     (err) => {
         this.setState({errorMessage: err.message})
     }
 );
}

//react says that we have to define render!! 
    render() {
           

if (this.state.errorMessage && !this.statee.lat){
return <div>Error {this.state.errorMessage}</div>
}
if(!this.state.errorMessage && this.state.late){
    return <div>Lattitue {this.state.lat}</div>
}

return <div>Loading!</div>

};

}




ReactDOM.render( <App/> , document.querySelector('#root'));