
import React from 'react';
import './App.css';
// import EventCard from './eventCard.js'
import EventContent from './EventContent.js'



 class App extends React.Component{
  render(){
    // const row1 = ['EventCard1', 'EventCard2', 'EventCard3'];
    // const row2= ['EventCard4', 'EventCard5', 'EventCard6'];
    // const EventCardsRow1= row1.map(()=> { return <EventCard></EventCard>}) ;
    // const EventCardsRow2= row1.map(()=> { return <EventCard></EventCard>})
    return (
      <div> <EventContent></EventContent></div>
      // <div className = "event_card_wrapper" style = {{ display:'flex' , flexDirection:'column',justifyContent:'space-around', width:'90%' ,margin:'0 auto', marginTop:'10vh', backgroundColor:'pink'}}> 
      //   <div className = "event_card_row"style = {{ marginBottom:'18vh', display:'flex', justifyContent:'space-around' , paddingTop:'8vh' ,  flexWrap:'wrap' , height:'fit-content' , alignItems:'baseline'}}>{EventCardsRow1}</div>
      //   <div className = "event_card_row" style = {{ marginBottom:'18vh',  display:'flex', justifyContent:'space-around' , flexWrap:'wrap' , height:'fit-content' ,  alignItems:'baseline'}}>{EventCardsRow2}</div>
      // </div>
    )  
  }
}
export default App 

