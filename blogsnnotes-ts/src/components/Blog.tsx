interface Props{
    title:string,
    content:string
}

export default function Blog({title,content}:Props) {
  return (
    <>
        <h1>{title}</h1>
        <p>{content}</p>
    </>
  )
}
