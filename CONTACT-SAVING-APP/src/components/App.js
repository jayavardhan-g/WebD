import React,{ useState, useEffect } from 'react'
import Header from './header'
import {BrowserRouter, Routes ,Route,Link } from 'react-router-dom';
import Addcontact from './addcontact'
import Contactlist from './contactlist'

function App(){
    var [contacts,setcontacts]=useState([]);
    function Addcontacthandler(contact){
        setcontacts([...contacts,contact]);
    }
    function Deletecontact(name){
        const updatedlist=contacts.filter((contact)=>{
            return name!==(contact.name);
        });
        setcontacts(updatedlist);
    }
    useEffect( ()=>{
        const getcontacts=JSON.parse(localStorage.getItem('contacts',JSON.stringify(contacts)));
        if(getcontacts){
            setcontacts(getcontacts);
        }

    },[]);
    useEffect( ()=>{
        localStorage.setItem('contacts',JSON.stringify(contacts));
    },[contacts]);

    return (
        /*<div>
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route  path="/add" render={()=>{
                <Addcontact Addcontacthandler={Addcontacthandler}/>
            }}/>
            <Route  path="/" render={()=>{
              <Contactlist contacts={contacts} Deletecontact={Deletecontact}/>  
            }
            }/>
        </Routes>
        </BrowserRouter>
        {
            /*
            <Addcontact Addcontacthandler={Addcontacthandler}/>
            <Contactlist contacts={contacts} Deletecontact={Deletecontact}/>
            
        }
        </div>*/
        <div>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path='/' element={<Contactlist contacts={contacts} Deletecontact={Deletecontact}/>}/>
                    <Route path="/addcontact" element={<Addcontact Addcontacthandler={Addcontacthandler}/>}/>
                </Routes>
            </BrowserRouter>
        </div>


    );
}
export default App;
