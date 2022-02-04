import { Button, Modal, Form } from 'react-bootstrap';
import { useState } from 'react';
import { useContext } from 'react';
import { PostContext } from '../../contexts/PostContext';

function PostForm() {
  const [show, setShow] = useState(false);

  const {
    headTitle,
    setHeadTitle,
    title,
    setTitle,
    // picture,
    // setPicture,
    addPost,
  } = useContext(PostContext);

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
        {/* <div className=" col-md-6 text-center "> */}
        <Button
          type="button"
          className="btn btn-primary btn-block col-md-1 p-4"
          // variant="primary"
          onClick={handleShow}
        >
          Post
        </Button>
        {/* </div> */}
      </div>

      <Form>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Post!</Modal.Title>
          </Modal.Header>
          {/* <Form onSubmit={handleSubmitPost}> */}
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Modal.Body>
              <Form.Label>Head Title</Form.Label>
              <Form.Control
                type="email"
                placeholder=""
                value={headTitle}
                onChange={e => setHeadTitle(e.target.value)}
              />
              {/* </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            > */}
              <Form.Label>Title!</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={title}
                onChange={e => setTitle(e.target.value)}
              />

              {/* **</Form.Group>
            <Form.Group controlId="formFile" className="mb-3">*** */}
              <Form.Label>Images</Form.Label>
              <Form.Control
                type="file"
                className="form-control"
                //** */ value={picture}
                //** */ onChange={e => setPicture(e.target.value)}
              />
            </Modal.Body>{' '}
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

//* ใส่ บรรทัด ก่อน 72  </Modal.Body>{' '}
// {/* **</Form.Group>
//             <Form.Group controlId="formFile" className="mb-3">*** */}
//             <Form.Label>Images</Form.Label>
//             <Form.Control
//               type="file"
//               className="form-control"
//               //** */ value={picture}
//               //** */ onChange={e => setPicture(e.target.value)}
//             />
