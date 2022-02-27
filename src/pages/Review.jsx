// import NavbarComponent from '../components/layouts/NavbarComponent';
import axios from '../config/axios';
import { useState, useEffect, useContext } from 'react';
import ReviewCard from '../components/reviews/ReviewCard';
import { PostContext } from '../contexts/PostContext';
import PostForm from '../components/reviews/PostForm';

function Review() {
  const {
    // picture,
    // setPicture,
    postReview,
  } = useContext(PostContext);
  // const a = useContext(PostContext);

  // const [posts, setPosts] = useState([]);
  // console.log(posts);

  // const fetchPost = async () => {
  //   try {
  //     const res = await axios.get('/posts');
  //     setPosts(res.data.posts);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(() => {
  //   // console.log(a);
  //   fetchPost();
  // }, []);
  if (!postReview) {
    return <></>;
  }

  return (
    <>
      <PostForm />
      {/* <NavbarComponent /> */}
      <div
        className="d-flex flex-wrap"
        // style={{ display: 'flex', flexWrap: 'wrap' }}
      >
        {postReview.map(item => (
          <ReviewCard item={item} key={item.id} />
        ))}
      </div>
    </>
  );
}

export default Review;
