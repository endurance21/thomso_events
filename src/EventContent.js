import React from 'react' 
import './EventContent.css' 
import img from './assets/images/michael-afonso-z8Tul255kGg-unsplash.png' 
class EventContent extends React.Component {
   
    render(){

        return( <div className = "wrapper">
                  <div className  = "img_left"> <img src = {img} alt = "image2"/></div>
                  <div className  = "event_title">FOOTLOOSE</div>
                  <div className  = "event_title_description">STAGE DANCE COMPETITION</div>
                  <div className = "event_discription"> Inhabit hearing perhaps on ye do no. It maids decay as there he. Smallest on suitable disposed do although blessing he juvenile in. Society or if excited forbade. Here name off yet she long sold easy whom. Differed oh cheerful procured pleasure securing suitable in. Hold rich on an he oh fine. Chapter ability shyness article welcome be do on service.</div>
                  <div className = "event_prize_worth">PRIZE WORTH</div>
                  <div className = "event_prize_money_value">150K</div>
                  <div className = "event_rectangle1"></div>
                  <div className = "event_rectangle2"></div>
                  <div className = "event_addevent_button">Add event</div> 
                  <div className = "event_rulebook_button">Rulebook</div>
                  <div className = "corousel">
                      <span className = "hr1"></span>
                      <span className = "index1">HELLO</span>
                      <span className = "index2">ASBD</span>
                      <span className = "index3">ASDKJ</span>
                      <span className = "hr2"></span>
                  </div>                
                </div>
            )

    }

}
export default EventContent;