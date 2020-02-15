import React from 'react';
import './Avatar.css'


const AvatarList = (props) =>{
    return <div className="AvatarCss ma4 bg-light-purple dib pa4 grow shadow-4">
    <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="Avatar"/>
    <h1> {props.name}</h1>
    <p> {props.work} </p>
</div>
}
export default AvatarList;