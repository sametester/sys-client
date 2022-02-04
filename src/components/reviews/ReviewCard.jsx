import { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import timeSince from '../../services/timeSince';

function ReviewCard({ item }) {
  // console.log(item);
  // console.log(item.img);

  return (
    <>
      <div style={{ display: 'flex', width: '1500px' }}>
        <div style={{ width: '400px' }}>
          <img
            src={`${item.img}`}
            alt="food"
            style={{
              marginTop: '50px',
              marginLeft: '30px',
              width: '400px',
              height: '300px',
              objectFit: 'cover',
            }}
          />
        </div>

        <div
          className="widget-item-detail ms-5 mt-5"
          style={{ flexGrow: '1', width: '700px' }}
        >
          <div className="widget-item-name">
            <h4>
              <a href="#" title="Customer Support">
                {item.headTitle}
              </a>
            </h4>
          </div>

          <div className="widget-item-author">
            <div className="widget-item-author-createddate">
              <div className="widget-item-author-createddate-label">
                {timeSince(item.createdAt)}
              </div>
            </div>
          </div>
          <div className="widget-item-shortdesc">{item.title}</div>
          <div className="widget-item-buttons">
            {' '}
            <a className="widget-item-btn widget-item-btn-readmore" href="#">
              <div>Read More</div>
            </a>
          </div>
        </div>
        {/* <div style={{ width: '100%', display: 'flex', marginTop: '42px' }}> */}
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            ...
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
            <hr />
            <Dropdown.Item href="#/action-2">Delete</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        {/* </div> */}
      </div>
    </>
  );
}

export default ReviewCard;
