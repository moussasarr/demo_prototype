import React, { Component } from 'react';
import './App.css';

class Carousel extends React.Component {
  constructor() {
    super();
    
    this.state = {
        slides: ['<img src="../images/image1" />', '<img src="../images/image2" />', '<img src="../images/image3" />', '<img src="../images/image4" />', '<img src="../images/image5" />', '<img src="../images/image6" />', '<img src="../images/image7" />', '<img src="../images/image8" />', '<img src="../images/image9" />', '<img src="../images/image10" />', '<img src="../images/image11" />', '<img src="../images/image12" />', '<img src="../images/image13" />', '<img src="../images/image14" />', '<img src="../images/image15" />']
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
        <ReactSwipe ref="reactSwipe" className="carousel">
          {this.state.slides.map(slide => {
            return (
              <div key={slide} className="item">
                {slide}
              </div>
            );
          })}
        </ReactSwipe>

        <div>
          <button type="button" onClick={::this.prev}>Prev</button>
          <button type="button" onClick={::this.next}>Next</button>
          <button type="button" onClick={::this.addSlide}>Add Slide</button>
        </div>
      </div>
    );
  }
}





export default Carousel;








