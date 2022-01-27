import NavbarComponent from '../components/layouts/NavbarComponent';
import ReviewCard from '../components/reviews/ReviewCard';

function Review() {
  return (
    <>
      <NavbarComponent />
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
    </>
  );
}

export default Review;
