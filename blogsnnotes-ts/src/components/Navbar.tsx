import profileicon from '../assets/profile-icon.png'
import searchicon from '../assets/search-icon.png'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addBlog } from '../features/blogSlice'

function Navbar() {
  const dispatch = useDispatch();
  const addblog =()=>{
    let blog ={
      title:"Hello",
      content:"Var",
      tags:["hd","hadf"],
    }
    dispatch(addBlog(blog));
  }

  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Blogs</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Published</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Drafts/Notes</Link>
          
        </li>
        <li className="nav-item">
          <button className="nav-link active" style={{color:"red"}} aria-current="page" onClick={addblog} >Drafts/Notes</button>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2 search" type="search" placeholder="Search" aria-label="Search"/>
        <img className='search-icon' src={searchicon}></img>
      </form>
      

    <div className="center-dropdown">
        <button className="drop-button" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <img className='profile-icon' src={profileicon}></img>      
        </button>
        <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/signin">Sign in</Link></li>
            <li><Link className="dropdown-item" to="/register">Sign up</Link></li>
            <li><Link className="dropdown-item" to="/logout">Log out</Link></li>
        </ul>
    </div>

    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
