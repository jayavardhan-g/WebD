import React from 'react'
import {Link} from 'react-router-dom'
import Contactcard from './contactcard.js';
import "./contact-list.css"

function Contactlist(props){
        const Deletecontact=props.Deletecontact;
        const Contactcards=props.contacts.map((contact)=>{
          return  (
          <div>
            <Contactcard contact={contact} Deletecontact={Deletecontact} />
            </div>
          );
        })
        
        return (
            <div>
            <div className='list'>
            <h2>Contact list</h2>
            <Link to="/addcontact">
            <button class="but">Add contact</button>
            </Link>
            </div>
            {Contactcards}
            </div>
        );
}
export default Contactlist;