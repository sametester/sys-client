import { Button, Modal, Form } from 'react-bootstrap';
import { useState } from 'react';
import { useContext } from 'react';
import { PostContext } from '../../contexts/PostContext';

function PostForm() {
  const [show, setShow] = useState(false);

  const { headTitle, setHeadTitle, title, setTitle, setPicture, addPost } =
    useContext(PostContext);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmitPost = e => {
    e.preventDefault();
    addPost();
    setShow(false);
    setHeadTitle('');
    setTitle('');
  };
  return (
    <>
      <div className="d-flex justify-content-end ">
        <Button
          type="button"
          className="btn btn-primary btn-block col-md-1 p-4"
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
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Modal.Body>
              <Form.Label>Head Title</Form.Label>
              <Form.Control
                className="mb-2"
                type="email"
                value={headTitle}
                onChange={e => setHeadTitle(e.target.value)}
              />

              <Form.Label>Title </Form.Label>
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
