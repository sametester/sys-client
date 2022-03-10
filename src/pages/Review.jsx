// import NavbarComponent from '../components/layouts/NavbarComponent';
import { useContext } from 'react';
import ReviewCard from '../components/reviews/ReviewCard';
import { PostContext } from '../contexts/PostContext';
import PostForm from '../components/reviews/PostForm';

function Review() {
  const { postReview } = useContext(PostContext);
  if (!postReview) {
    return <></>;
  }

  return (
    <>
      <PostForm />
      {/* <NavbarComponent /> */}
      <div className="d-flex flex-wrap">
        {postReview.map(item => (
          <ReviewCard item={item} key={item.id} />
        ))}
      </div>
    </>
  );
}

export default Review;
