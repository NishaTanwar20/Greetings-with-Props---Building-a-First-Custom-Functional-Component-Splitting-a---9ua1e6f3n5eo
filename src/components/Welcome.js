// write code for Welcome component here
import React from 'react';
export default function Welcome(props){
    return (
       
        <React.Fragment>
            <h1>Hey !</h1>
            <h1>{props.name}</h1>
            <h2>Welcome to Newton School.</h2>
        </React.Fragment>
    );
    
}