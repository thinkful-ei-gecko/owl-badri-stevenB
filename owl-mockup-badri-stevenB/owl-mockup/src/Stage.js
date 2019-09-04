import React from 'react';


export default function(props){
    console.log(props.abc);
    const theStage = props.abc.filter(val => val.onStage === true).map(val => {
        return <div key={val.id} className='stagePeople'><img src={val.avatar} alt={val.name}/>{val.name}</div>;
    });
    return <section className='stageBox'>{ theStage }</section>;
}