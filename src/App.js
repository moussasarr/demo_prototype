import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import ReactSwipe from 'react-swipe';

var App = React.createClass({
  render: function(){
     return (
            <ReactSwipe className="carousel" swipeOptions={{continuous: false}}>
                <div>PANE 1</div>
                <div>PANE 2</div>
                <div>PANE 3</div>
            </ReactSwipe>
        );
 


  }



})
   

ReactDOM.render(
    <App />, 
    document.getElementById('app')
);



export default App;
