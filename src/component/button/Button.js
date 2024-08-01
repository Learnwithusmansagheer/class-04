import React from 'react'
import './Button.css'
export default function Button(props) {
  return (
    <button id='button' type="button" className={`btn btn-primary ${props.className}`} style={props.style}>{props.title}</button>
  )
}
