import axios from 'axios';

const getPaginatedPosts = async (pageNumber) => {
  
  if (!localStorage.allPosts) {
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts');
    localStorage.setItem('allPosts', JSON.stringify(data));
  } 
  const allPosts = JSON.parse(localStorage.getItem('allPosts'));
  const posts = allPosts.slice(pageNumber* 20, (pageNumber+1)*20);
  return posts;
}

const getComments = async (postID) => {
  const {data: comments} = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postID}/comments`);
  return comments;
} 

const getPost = async (postID) => {
  const {data: post} = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postID}`);
  return post;
}

export default { getPaginatedPosts, getComments, getPost };
