import {Link} from 'react-router-dom';
export default function Post ( {post} ) {

  return (
    <div className='post'> 
      <h1> {post.id}</h1>
      <Link to={`/info/${post.id}`}>
        <h2> {post.title} </h2>
      </Link>
      <p> {post.body} </p>
    </div>
  )

}