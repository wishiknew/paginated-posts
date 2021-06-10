import AppService from '../services/AppService';
import {useState, useEffect} from 'react';
import Post from '../components/Post';
import {useParams} from 'react-router-dom';

export default function Posts () {
  const { pageNumber } = useParams();
  const p = parseInt(pageNumber, 10);
  const [posts, setPosts] = useState([]);


  useEffect(async () => {
    const posts = await AppService.getPaginatedPosts(p)
    setPosts(posts) ;
  }, [pageNumber])

  return (
    <div className='posts'>{posts.map((post) => <Post post={post}/>)}</div>
  )
}