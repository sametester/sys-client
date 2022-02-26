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
        // console.log('H');
        const res = await axios.get('/posts/');
        setPostReview(res.data.posts);
    };

    useEffect(() => {
        fetchPost();
    }, [isLogin]);

    const addPost = async () => {
        try {
            const formData = new FormData();
            formData.append('profileImg', picture);
            formData.append('title', title);
            formData.append('headTitle', headTitle);

            const res = await axios.post('/posts', formData);
            console.log(res.status);
            const nextPost = [res.data.post, ...postReview];
            fetchPost();
            setPostReview(nextPost);
        } catch (err) {
            console.log(err.data);
        }
    };

    const updatePost = async (id, value) => {
        const idx = postReview.findIndex((item) => item.id === id);
        const newPost = [...postReview];

        const res = await axios.put(`/posts/${id}`, { caption: value });

        newPost[idx] = res.data.post;

        setPostReview(newPost);
    };

    const deletePost = async (id) => {
        const res = await axios.delete(`/posts/${id}`);
        const newPost = postReview.filter((item) => item.id !== id);
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
