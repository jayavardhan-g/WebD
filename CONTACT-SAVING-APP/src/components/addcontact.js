import React from 'react'
import './addcontact.css'
import {useNavigate,Link} from 'react-router-dom';
class Addcontact extends React.Component{
    state={
        name :"",
        email:"",
    };
    render(){
        
        return (
             <div className='input'>
             <h2 className='add-contact'>Add Contact</h2>
             <form className='form'   onSubmit={(e)=>{
                 e.preventDefault();    
                 this.props.Addcontacthandler(this.state);
                 this.setState({name: ""});
                 this.setState({email: ""});
                 
                 console.log(this.props.history);
             }}>
                <div className='name name1'>
                    <label htmlFor='select1'>Name</label>
                    <span className="box box1">
                    <input type='text' id='select1' className='size size2' name='name' placeholder='Name'
                    value={this.state.name} onChange={(e) =>{
                        this.setState({name:e.target.value});
                        
                    }}/>
                    </span>
                </div>
                <div className='name email'>
                    <label htmlFor='select2'>Email</label>
                    <span className='box box2'>
                    <input type='email' id='select2' className='size size1' name='name' placeholder='Email' onChange={(e)=>{
                            this.setState({email:e.target.value});
                    }}
                    value={this.state.email}  />
                    </span>
                </div>
                <button type='submit'>
                    <Link to="/">
                    Add
                    </Link>
                    </button>
                
             </form>
             </div>
        );
    }

}
export default Addcontact;