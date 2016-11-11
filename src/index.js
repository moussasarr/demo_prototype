import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ReactSwipe from 'react-swipe'





class Carousel extends React.Component {
  constructor() {
    super();
    
    this.state = {
        slides: [<img src='./images/image1.jpg' role="presentation" />, <img src='./images/image2.jpg' role="presentation" />, <img src='./images/image3.jpg' role="presentation" />, <img src='./images/image4.jpg' />, <img src='./images/image5.jpg' role="presentation" />, <img src='./images/image6.jpg' role="presentation"/>, <img src='./images/image7.jpg' role="presentation" />, <img src='./images/image8.jpg' role="presentation"/>, <img src='./images/image9.jpg' role="presentation"/>, <img src='./images/image10.jpg' role="presentation"/>, <img src='./images/image11.jpg' role ="presentation" />, <img src='./images/image12.jpg' role="presentation" />, <img src='./images/image13.jpg' role="presentation"/>, <img src='./images/image14.jpg' role="presentation"/>, <img src='./images/image15.jpg' role="presentation"/>]
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
          <button type="button" onClick={this.prev}>Prev</button>
          <button type="button" onClick={this.next}>Next</button>
          <button type="button" onClick={this.addSlide}>Add Slide</button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Carousel />,
  document.getElementById('root')
);








































