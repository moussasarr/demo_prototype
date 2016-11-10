import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Carousel extends React.Component {
  constructor() {
    super();
    
    this.state = {
        slides: ['pane 1', 'pane 2', 'pane 3']
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
                {slide.toUpperCase()}
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








