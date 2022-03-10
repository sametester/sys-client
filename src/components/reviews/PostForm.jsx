import { Button, Modal, Form } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { PostContext } from '../../contexts/PostContext';
import { ErrorContext } from '../../contexts/ErrorContext';
import Spinner from '../utils/Spinner';

function PostForm() {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const { headTitle, setHeadTitle, title, setTitle, setPicture, addPost } =
    useContext(PostContext);

  const { error, setError } = useContext(ErrorContext);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmitPost = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      await addPost();
      setShow(false);
      setHeadTitle('');
      setTitle('');
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {loading && <Spinner />};
      <div className="d-flex justify-content-end ">
        <Button
          type="button"
          className="btn btn-primary btn-block col-md-1 p-4 me-4"
          onClick={handleShow}
        >
          Post
        </Button>
      </div>
      <Form>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Post!</Modal.Title>
          </Modal.Header>
          <Form.Group className="mb-3">
            <Modal.Body>
              <Form.Label>Head Title</Form.Label>
              <Form.Control
                className="mb-2"
                type="text"
                value={headTitle}
                onChange={e => setHeadTitle(e.target.value)}
              />

              <Form.Label>Title</Form.Label>
              <Form.Control
                className="mb-2"
                as="textarea"
                rows={3}
                value={title}
                onChange={e => setTitle(e.target.value)}
              />

              <Form.Label>Images</Form.Label>
              <Form.Control
                type="file"
                className="form-control"
                onChange={e => {
                  if (e.target.files[0]) {
                    setPicture(e.target.files[0]);
                  }
                }}
              />
            </Modal.Body>
          </Form.Group>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type="submit" variant="primary" onClick={handleSubmitPost}>
              Post
            </Button>
          </Modal.Footer>
        </Modal>
      </Form>
    </>
  );
}

export default PostForm;
