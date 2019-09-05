import React from 'react';



export default function(props){
    const inSessionArr = props.xyz.filter((val, i) => val.inSession === true).map((val, i) => <li key={i}> <img src={val.avatar} alt={val.name} 
style={{borderRadius: "50%", height: "35px", border: "1px solid black"}}/> 
    {val.name} {val.inSession && <div className="green-dot" />}{!val.inSession && <div className="grey-dot" />}{val.onStage && 'on stage'}</li>)
    const notInSessionArr = props.xyz.filter((val, i) => val.inSession === false).map((val, i) => <li key={i}> <img src={val.avatar} alt={val.name} 
    style={{borderRadius: "50%", height: "35px", border: "1px solid black"}}/> 
        {val.name} {val.inSession && <div className="green-dot" />}{!val.inSession && <div className="grey-dot" />}not in session{val.onStage && 'on stage'}</li>)
    return <ul>{ inSessionArr } {notInSessionArr}</ul>
}
