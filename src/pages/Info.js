import { useParams } from 'react-router-dom';
import AppService from '../services/AppService';
import {useState, useEffect} from 'react';
export default function Info () {
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  const [post, setPost] = useState({});
  useEffect( async () => {
    setComments( await AppService.getComments(id));
    setPost(await AppService.getPost(id));
  }, [])



  return (
    <div className='Info'>
    <h2> Post {id}</h2> 
    <h3> {post.title} </h3>
    <p> {post.body}</p>
    <div className='comments'>
      <h2> Comments </h2>
      {comments.map((comment) => (
        <div className='comment'>
          <h2>{comment.name}</h2>
          <h3>{comment.email}</h3>
          <p>{comment.body}</p>
        </div>
      ))}

    </div>
    
      
    </div>
  )
}