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
            const nextPost = [res.data.post, ...postReview];
            console.log(res.data.post);
            fetchPost();
            setPostReview(nextPost);
        } catch (err) {
            console.log(err.data);
        }
    };

    const updatePost = async (id, value1, value2, value3) => {
        const formData = new FormData();
        formData.append('profileImg', value1);
        formData.append('title', value2);
        formData.append('headTitle', value3);

        const idx = postReview.findIndex((item) => item.id === id);
        const newPost = [...postReview];
        const res = await axios.patch(`/posts/${id}`, formData);
        newPost[idx] = res.data.post;
        setPostReview(newPost);
    };

    const deletePost = async (id) => {
        await axios.delete(`/posts/${id}`);
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
