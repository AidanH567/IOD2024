import React from 'react';
import './App.css'

export function Greeting(props) {
    return (
      <div className="Greeting">
        <h3>Hello {props.name || 'World'}!</h3>
        {props.children}
      </div>
    );
  }