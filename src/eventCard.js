import React from 'react';                                                                                                                                                                              
import './App.css';
import image1 from './assets/images/grass.png'
import TweenMax from '../node_modules/gsap'
import { Linear , Expo ,Elastic ,Power4} from 'gsap';

const body = document.body;
const docEl = document.documentElement;
const getMousePos = (e) => {
  let posx = 0;
  let posy = 0;
  if (!e) e = window.event;
  if (e.pageX || e.pageY) 	{
    posx = e.pageX;
    posy = e.pageY;
  }
  else if (e.clientX || e.clientY) 	{
    posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
    posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
  }
  return { x : posx, y : posy }
};


class EventCard  extends React.Component {
  constructor(){
   super(); 
   this.tiltconfig = {   
    title: {translation : {x: [-10,10], y: [14,-14]}},
    number: {translation : {x: [-15,15], y: [-10,10]}},
    img: {translation : {x: [-20,22], y: [-10,1]}}
   }; 
  }
  
tilt = (ev)=> {
    // Get mouse position.
    const mousepos = getMousePos(ev);
          // Document scrolls.
          const docScrolls = {left : body.scrollLeft + docEl.scrollLeft, top : body.scrollTop + docEl.scrollTop};
          const bounds = this.DOM.eventItem.getBoundingClientRect();
          // Mouse position relative to the main element (this.DOM.el).
          const relmousepos = {
              x : mousepos.x - bounds.left - docScrolls.left, 
              y : mousepos.y - bounds.top - docScrolls.top 
          };
          // Movement settings for the tilt elements.
          for (let key in this.tiltObjects) {
              let t = this.tiltconfig[key].translation;
              // Animate each of the elements..
              TweenMax.to(this.tiltObjects[key], 2, {
					      ease: Elastic.easeOut,
                  x: (t.x[1]-t.x[0])/bounds.width*relmousepos.x + t.x[0],
                  y: (t.y[1]-t.y[0])/bounds.height*relmousepos.y + t.y[0],
              });
          }
    }

resetTilt(){
			for (let key in this.tiltObjects) {
                TweenMax.to(this.tiltObjects[key], .4 , {
					      ease:Linear.easeOut,
                    x: 0,
                    y: 0
                });
            }
    }
scaleUp(){
      TweenMax.to(this.DOM.eventItem,2,{
        scaleX:1.02,
        ease:Elastic.easeIn
      });
      
    }
scaleDown(){
      TweenMax.to(this.DOM.eventItem,2,{
        scale:1,
        ease:Elastic.easeOut
      });

    }


handleMouseMove = (e) =>{
      this.tilt(e);   
    }
handleMouseOut = (e)=>{
    this.resetTilt();
    this.scaleDown();
  }
handleMouseOver = ()=>{
    TweenMax.to(this.DOM.eventItem,2,{
      scale:1.2,
      ease:Elastic.easeOut

    });
  }

componentDidMount()
{    this.DOM = { 
        eventItem: this.refs.event_item,
        img : this.refs.event_item_img ,
        title:this.refs.event_item_title,
        number:this.refs.event_item_number
    }
    this.tiltObjects = { 
      img:this.DOM.img, 
      title:this.DOM.title, 
      number:this.DOM.number
    }  

  }  
 
render(){ 
    return (
        <div className = "event_item"  style = { {marginLeft:'15px' }} ref = "event_item" onMouseMove = { this.handleMouseMove }  onMouseOut = { this.handleMouseOut} onMouseOver = { this.handleMouseOver}>
          <a href="#" className = "event_item1" >
              <img className="event_item_img" ref = "event_item_img" src = {image1}/>
            <h3 className ="event_item_title" ref = "event_item_title">Tour of my Life</h3>
            <h2 className = "event_item_number"  ref ="event_item_number">B05</h2>
          </a>
        </div>
     );
  }
}


export default EventCard;
 
