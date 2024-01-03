//interface is used to specify the types of the data
interface Props{
    items:string[],
    heading:string,
    onclick:(item:string)=>void;
}

function List({items,heading,onclick}:Props){
    console.log(items);
return (
<>  
    <h1>{heading}</h1>
    {
        items.map((i)=>{
            return <p onClick={()=>{
                onclick(i);
            }}>{i}</p>
        })
    }
</>
)
}

export default List