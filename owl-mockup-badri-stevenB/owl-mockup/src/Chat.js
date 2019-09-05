import React from 'react';
import participants from './participant-list';


export default function(props){
        const chatLogWithParties = props.log.map(event => {
            const party = participants.find(participant => participant.id === event.participantId);
            return {
                ...party,
                ...event
            }
        })
    //{new Date(val.timestamp).toString()}
        //should store in order of time...
    const printJsx = [];
    chatLogWithParties.forEach(val => {
      if(val.onStage && val.type==='join') {
          printJsx.push(<li key={val.id}><b>{val.name}</b> joined.</li>)
      }
      if(val.type==='clap') {
        printJsx.push(<li key={val.id}><b>{val.name}</b> clapped.</li>)
      }
      if(val.type==='leave') {
        printJsx.push(<li key={val.id}><b>{val.name}</b> left.</li>)
    }
    if(val.type==='join-stage') {
        printJsx.push(<li key={val.id}><b>{val.name}</b> joined the stage.</li>)
    }
    if(val.type==='leave-stage') {
        printJsx.push(<li key={val.id}><b>{val.name}</b> left the stage.</li>)
    }
    if(val.type==='raise-hand') {
        printJsx.push(<li key={val.id}><b>{val.name}</b> raised their hand.</li>)
    }
    if(val.type==='thumbs-down') {
        printJsx.push(<li key={val.id}><b>{val.name}</b> gave a thumbs down.</li>)
    }
    if(val.type==='thumbs-up') {
        printJsx.push(<li key={val.id}><b>{val.name}</b> gave a thumbs up. </li>)
    }
    if(val.type==='message') {
        printJsx.push(<li key={val.id}><b>{val.name}</b> {new Date(val.timestamp).toString()} {val.message}</li>)
    }
  
    })
    
    return <div className='chat-box'>Chat: <ul >{printJsx}</ul></div>;
}
