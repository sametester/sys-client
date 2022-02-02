import PostHeader from '../posts/PostHeader';
import PostContent from '../posts/PostContent';
import PostFooter from '../posts/PostFooter';

function PostCard() {
  return (
    <div className="card mt-4">
      <PostHeader />
      <PostContent />
      <PostFooter />
    </div>
  );
}
export default PostCard;
