import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ReactSwipe from 'react-swipe'





class Carousel extends React.Component {
  constructor() {
    super();
    
    this.state = {
        slides: ['images/image1.jpg', 'images/image2.jpg', 'images/image3.jpg']
    };
  }    
  
  componentDidUpdate(prevProps, prevState) {
    // due to buggy iframe behavior
    window.dispatchEvent(new Event('resize'));
  }
  
  next() {
    this.refs.reactSwipe.next();
  }

  prev() {
    this.refs.reactSwipe.prev();
  }
  
  addSlide() {
    const slides = this.state.slides;
    slides.push(`pane ${slides.length + 1}`);
    this.setState({ slides });
  }

  render() {
    return (
      <div>
         <ReactSwipe className="carousel" swipeOptions={{continuous: false}}>
          {this.state.slides.map(slide => {
            return (
              <div key={slide} className="item">
                <img src={slide} alt="Person" style={{width: '80vw', height: '80vh' }}/>
              </div>
            );
          })}
        </ReactSwipe>
      </div>
    );
  }
}

ReactDOM.render(
  <Carousel />,
  document.getElementById('root')
);