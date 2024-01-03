import { Link } from "react-router-dom"

interface Props{
    title:String,
    content:String,
    tags:String[],
    date:String,
    author:String,
    id:String
}
export default function BlogItem({id,title="Untitled",content,tags,date,author}:Props) {
  console.log(id,title,content,tags,date);
    // let {id,title,content,tags,date,author}=props;
    return (
<>
    {/* <div className="card note">
    <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">{content}</h6>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <p className="continue-reading">Continue reading &rarr;</p>
    </div>
    </div> */}

    <div className="mx-2 my-2">
      <div className="card note" >
        <div className="card-body">
          <h5 className="card-title mx-2 my-2">{title}</h5>
          <div><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
          { 
            tags.map((element,index)=>{
              return index<3 && <span className="mx-1 my-1 tag" key={index}>{element.slice(0,10)}</span>
            })
          }
          </div>
          <p className="card-text">
            {content.slice(0,370)}
            {content.length<=370? '': "...."}
          </p>
          <div className="dTime">{date.slice(11,16)}|{date.slice(0,10)}</div>
          { author?<div className="mx-1 my-1"><i><b>{author}</b></i></div>:""}
          <div className="readMore">
            <Link to={`/blog/${id}`} >
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
          </Link>
          </div>
        </div>
      </div>
    </div>
</>
  )
}
