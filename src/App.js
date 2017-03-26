import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { StaggeredMotion, spring } from 'react-motion';

class ViewSlide extends Component {
  render() {
    const isActive = this.props.active ? "active" : "";
        const classes = "ViewSlide " + isActive;
        return (
          <div style={this.props.style}  
               className={classes}
               onClick={this.props.onClick}>
            {this.props.children} 
          </div>
        )
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state ={
      activeSlideIndex: 0,
            // Working on a better version where you just pass children with a triggers and x prop.
            slides: [
                {
                    triggers: 1,
                    x: 0,
                    content: (
                        <h1>Aww yeah. React Motion Flexbox Slider. <span style={{fontSize: "0.3em"}}>(Just click-y click.)</span></h1>
                    )
                },
                 {
                    triggers: 2,
                    x: 100,
                    content: (
                        <h1>Slidin'</h1>
                    )
                },
                 {
                    triggers: 3,
                    x: 200,
                    content: (
                        <h1>We slippin' n' slidin' all over da place</h1>
                    )
                },
                {
                    triggers: 0,
                    x: 300,
                    content: (
                        <h1>Let's Go back to the start</h1>
                    )
                },
                {
                    triggers: 0,
                    x: 400,
                    content: (
                        <h1>Secret slide!</h1>
                    )
                }
              ]
            }
    }

    setActiveSlide(slideIndex) {
       this.setState({activeSlideIndex: slideIndex});
    }

    render() {
      let slides = this.state.slides;
      return(
        <StaggeredMotion
          defaultStyle={slides}
          styles={prevInterpolatedStyles => prevInterpolatedStyles.map((_, i) => {
            return i === 0 ? {x: -(this.state.activeSlideIndex * 100)} : {x: prevInterpolatedStyles[i - 1].x + 100}
          })}>
          {interpolatingStyles => 
              <div className="ViewSlider">
                {interpolatingStyles.map((style, i) => {
                  const active = i == this.state.activesSlidIndex,
                    slide = this.state.slides[i];
                    return (
                      <ViewSlide
                        style={{left: `${style.x}%`}}
                        active={active}
                        key={i}
                        onClick={this.setActiveSlide.bind(this, slide.triggers)}>
                          <h1>{slide.content}</h1>
                      </ViewSlide>
                      );
                })}
              </div>
          }
        </StaggeredMotion>
        );
    }
  }
  


export default App;
