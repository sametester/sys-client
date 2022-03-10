import { useRef, useState } from 'react';
import { Dropdown, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Modal } from 'bootstrap';
import timeSince from '../../services/timeSince';
import { useContext } from 'react';
import { PostContext } from '../../contexts/PostContext';
import './reviewcard.css';
import axios from '../../config/axios';
import { AuthContext } from '../../contexts/AuthContext';

function ReviewCard({ item }) {
  const { updatePost, deletePost, fetchPost } = useContext(PostContext);
  const { userData } = useContext(AuthContext);

  const [editHeadTitle, setEditHeadTitle] = useState(item.headTitle);
  const [editTitle, setEditTitle] = useState(item.title);
  const [editPicture, setEditPicture] = useState(item.img);

  const [modal, setModal] = useState(null);
  const [isLike, setIsLike] = useState(
    item.Likes.findIndex(item => item.userId === userData.id) !== -1
  );

  // console.log(item);

  const modalEl = useRef();
  const modalEl2 = useRef();
  const modalEl3 = useRef();

  const handleClickShowEditForm = () => {
    const modalObject = new Modal(modalEl2.current);
    setModal(modalObject);
    modalObject.show();
  };

  const handleClickEditPost = e => {
    e.preventDefault();
    updatePost(item.id, editPicture, editTitle, editHeadTitle);
    fetchPost();
    modal.hide();
  };

  const handleClickShowDeleteForm = () => {
    const modalObject = new Modal(modalEl.current);
    setModal(modalObject);
    modalObject.show();
  };

  const handleClickDeletePost = e => {
    e.preventDefault();
    deletePost(item.id);
    modal.hide();
  };

  const handleClickShowReadMore = () => {
    const modalObject = new Modal(modalEl3.current);
    setModal(modalObject);
    modalObject.show();
  };

  const likePost = () => {
    axios.post(`/posts/like/${item.id}`).then(res => {
      setIsLike(true);
      fetchPost();
    });
  };

  const unLikePost = () => {
    axios.delete(`/posts/like/${item.id}`).then(res => {
      setIsLike(false);
      fetchPost();
    });
  };

  return (
    <>
      <div className="d-flex w-75 mb-5">
        <div>
          <img
            src={`${item.img}`}
            className=" mt-2 ms-5 "
            alt="food"
            style={{
              width: '300px',
              height: '300px',
              objectFit: 'cover',
            }}
          />
        </div>

        <div
          className="widget-item-detail ms-5 mt-5 "
          style={{
            flexGrow: '2',
            width: '700px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div className="widget-item-name">
              <h4>
                <h4 to="#" title="Customer Support">
                  {item.headTitle}
                </h4>
              </h4>
            </div>

            <div>
              {item?.User?.firstName} {item?.User?.lastName}
            </div>

            <div className="widget-item-author">
              <div className="widget-item-author-createddate">
                <div className="widget-item-author-createddate-label">
                  {item.createdAt}
                </div>
              </div>
            </div>

            <div className="widget-item-shortdesc">
              {item.title.length > 60
                ? item.title.slice(1, 100) + '...'
                : item.title}
            </div>

            <div
              style={{
                color: 'blue',
                textDecoration: 'underline',
                cursor: 'pointer',
                display: 'inline-block',
              }}
              onClick={handleClickShowReadMore}
            >
              {item.title.length > 60 ? 'Read More' : <></>}
            </div>
          </div>

          <div>
            <button className="btn" onClick={isLike ? unLikePost : likePost}>
              <i className={`bi bi-hand-thumbs-up${isLike ? '-fill' : ''}`}></i>
            </button>
            {item.Likes.length + ' ' + 'Likes'}
          </div>
        </div>

        {item.userId === userData.id ? (
          <Dropdown>
            <Dropdown.Toggle variant="success">...</Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={handleClickShowEditForm}>
                Edit
              </Dropdown.Item>
              <hr />
              <Dropdown.Item onClick={handleClickShowDeleteForm}>
                Delete
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ) : (
          <></>
        )}
      </div>

      {/* More Detail */}
      <div className="modal" ref={modalEl3}>
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">More Detail</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              />
            </div>

            <div className="d-flex pe-4 pt-4">
              <div style={{ paddingBottom: '50px' }}>
                <img
                  src={`${item.img}`}
                  className=" mt-2 ms-5 "
                  alt="food"
                  style={{
                    width: '300px',
                    height: '300px',
                    objectFit: 'cover',
                  }}
                />
              </div>

              <div
                className="widget-item-detail ms-5 mt-5 "
                style={{
                  flexGrow: '3',
                  width: '700px',
                  paddingBottom: '50px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div className="widget-item-name">
                    <h4>
                      <Link to="#" title="Customer Support">
                        {item.headTitle}
                      </Link>
                    </h4>
                  </div>
                  <div>
                    {item?.User?.firstName} {item?.User?.lastName}
                  </div>

                  <div className="widget-item-author">
                    <div className="widget-item-author-createddate">
                      <div className="widget-item-author-createddate-label">
                        {timeSince(item.createdAt)}
                      </div>
                    </div>
                  </div>
                  <div className="widget-item-shortdesc cardTitle">
                    {item.title}
                  </div>
                </div>
                <div>
                  <button
                    className="btn"
                    onClick={isLike ? unLikePost : likePost}
                  >
                    <i
                      className={`bi bi-hand-thumbs-up${isLike ? '-fill' : ''}`}
                    ></i>
                  </button>
                  {item.Likes.length + ' ' + 'Likes'}
                </div>
              </div>

              {item.userId === userData.id ? (
                <Dropdown>
                  <Dropdown.Toggle variant="success">...</Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item onClick={handleClickShowEditForm}>
                      Edit
                    </Dropdown.Item>
                    <hr />
                    <Dropdown.Item onClick={handleClickShowDeleteForm}>
                      Delete
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Edit Form */}
      <div className="modal" ref={modalEl2}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title fw-bold">Edit Post</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              />
            </div>

            <div className="p-4">
              <Form.Label>Head Title</Form.Label>
              <Form.Control
                className="mb-2"
                type="email"
                value={editHeadTitle}
                onChange={e => setEditHeadTitle(e.target.value)}
              />

              <Form.Label>Title </Form.Label>
              <Form.Control
                className="mb-2"
                as="textarea"
                rows={3}
                value={editTitle}
                onChange={e => setEditTitle(e.target.value)}
              />

              <Form.Label>Images</Form.Label>
              <Form.Control
                type="file"
                className="form-control"
                onChange={e => {
                  if (e.target.files[0]) {
                    setEditPicture(e.target.files[0]);
                  }
                }}
              />
            </div>
            <div className="modal-body">
              <div className="d-grid">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleClickEditPost}
                >
                  Update Post
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Delete Form */}
      <div className="modal" ref={modalEl}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title fw-bold">Delete Post</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              />
            </div>

            <div className="p-4">Confirm to delete post</div>
            <div className="modal-body">
              <div className="d-grid">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleClickDeletePost}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReviewCard;
