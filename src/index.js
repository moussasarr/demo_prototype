import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ReactSwipe from 'react-swipe'




var Home = React.createClass({
   render: function(){

    return(


    <div className="homeView">
      <div className="row header">
       <div className= "col-lg-3">
        <h2> Header 1</h2>
       </div>

       <div className= "col-lg-3">
        <h2> Header 2</h2>
       </div>


      <div className= "col-lg-3">
        <h2> Header 3</h2>
       </div>
   

       <div className= "col-lg-3">
        <h2> Header 4</h2>
       </div>
    </div>





     <div className="row intro">
       <div className="col-lg-3">
        <p> Lorem ipsum dolor sit amet, utamur persius definiebas qui cu. Te pertinax inciderint eum, et consul animal sapientem ius, his debitis abhorreant efficiantur an. Et oportere indoctum quo, duo ad modo inciderint. Cu odio aeque oportere usu, wisi viris molestie te vel, ut pro labitur ponderum definiebas. Eu pro deseruisse constituam conclusionemque, vis splendide intellegat ullamcorper in. Stet zril nonumy cu vel, eum esse malis necessitatibus ne, ad pri modus intellegat.</p>
       </div>

       <div className="col-lg-3">
        <p> Lorem ipsum dolor sit amet, utamur persius definiebas qui cu. Te pertinax inciderint eum, et consul animal sapientem ius, his debitis abhorreant efficiantur an. Et oportere indoctum quo, duo ad modo inciderint. Cu odio aeque oportere usu, wisi viris molestie te vel, ut pro labitur ponderum definiebas. Eu pro deseruisse constituam conclusionemque, vis splendide intellegat ullamcorper in. Stet zril nonumy cu vel, eum esse malis necessitatibus ne, ad pri modus intellegat.</p>
       </div>


      <div className="col-lg-3">
        <p> Lorem ipsum dolor sit amet, utamur persius definiebas qui cu. Te pertinax inciderint eum, et consul animal sapientem ius, his debitis abhorreant efficiantur an. Et oportere indoctum quo, duo ad modo inciderint. Cu odio aeque oportere usu, wisi viris molestie te vel, ut pro labitur ponderum definiebas. Eu pro deseruisse constituam conclusionemque, vis splendide intellegat ullamcorper in. Stet zril nonumy cu vel, eum esse malis necessitatibus ne, ad pri modus intellegat.</p>
       </div>
   

       <div className="col-lg-3">
        <p> Lorem ipsum dolor sit amet, utamur persius definiebas qui cu. Te pertinax inciderint eum, et consul animal sapientem ius, his debitis abhorreant efficiantur an. Et oportere indoctum quo, duo ad modo inciderint. Cu odio aeque oportere usu, wisi viris molestie te vel, ut pro labitur ponderum definiebas. Eu pro deseruisse constituam conclusionemque, vis splendide intellegat ullamcorper in. Stet zril nonumy cu vel, eum esse malis necessitatibus ne, ad pri modus intellegat.</p>
       </div>
     </div>







     <div className="row pic">
       <div className="col-lg-3">
         <img src='images/image1'  style={{width: '25vw', height: '25vh' }}/>
       </div>

       <div className="col-lg-2">
        <img src='images/image3'  style={{width: '25vw', height: '25vh' }}/>
       </div>


      <div className="col-lg-3">
        <img src='images/image3' style={{width: '25vw', height: '25vh' }}/> 
      </div>
   

       <div className="col-lg-3">
        <img src='images/image4'  style={{width: '25vw', height: '25vh' }}/> 
       </div>

    </div>


























    </div>
     
      );
     }
}); 
















ReactDOM.render(
  <Home />,
  document.getElementById('root')
);