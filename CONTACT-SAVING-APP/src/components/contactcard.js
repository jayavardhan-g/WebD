import React from 'react';
import './contactcard.css';

function Contactcard(props){
    
    return (  
    <div className='container'> 
    <div className="name">
        {props.contact.name}
    </div>
    <div className='email'>
        {props.contact.email}
    </div>
    <div className='icon'>
    <i className="fas fa-trash" onClick={()=>{
        return props.Deletecontact(props.contact.name);
    }}></i>
    </div>
    </div >
    )
}
export default Contactcard;