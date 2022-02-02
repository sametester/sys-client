import axios from '../config/axios';
import { createContext, useState, useEffect } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const PostContext = createContext();

function PostContextProvider(props) {
  const { isLogin } = useContext(AuthContext);

  const [postReview, setPostReview] = useState([]);
  const [headTitle, setHeadTitle] = useState('');
  const [title, setTitle] = useState('');
  const [picture, setPicture] = useState('');

  // Get data post
  const fetchPost = async () => {
    console.log('H');
    const res = await axios.get('/posts/');
    setPostReview(res.data.posts);
  };

  useEffect(() => {
    fetchPost();
  }, [isLogin]);

  // Get data profile
  // // useEffect(() => {
  // // fetchPostProfile();
  // // }, []);

  const addPost = async () => {
    console.log(55555555);
    try {
      const res = await axios.post('/posts', {
        title: title,
        headTitle: headTitle,
        // img: picture,
      });
      console.log(res.status);
      const nextPost = [res.data.post, ...postReview];
      fetchPost();
      setPostReview(nextPost);
    } catch (e) {
      console.log(e.data);
    }
  };

  const updatePost = async (id, value) => {
    const idx = postReview.findIndex(item => item.id === id);
    const newPost = [...postReview];

    const res = await axios.put(`/posts/${id}`, { caption: value });

    newPost[idx] = res.data.post;

    setPostReview(newPost);
  };

  const deletePost = async id => {
    const res = await axios.delete(`/posts/${id}`);
    const newPost = postReview.filter(item => item.id !== id);
    setPostReview(newPost);
  };

  return (
    <PostContext.Provider
      value={{
        addPost,
        postReview,
        headTitle,
        setHeadTitle,
        title,
        setTitle,
        updatePost,
        deletePost,
        picture,
        setPicture,
        fetchPost,
      }}
    >
      {props.children}
    </PostContext.Provider>
  );
}

export default PostContextProvider;
export { PostContext };
