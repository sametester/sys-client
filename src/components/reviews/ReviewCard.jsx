import { useState } from 'react';
import timeSince from '../../services/timeSince';

function ReviewCard({ item }) {
  // console.log(item);
  // console.log(item.img);

  return (
    <>
      <div style={{ display: 'flex' }}>
        <img
          src={`${item.img}`}
          alt="food"
          style={{
            marginTop: '50px',
            marginLeft: '30px',
            width: '200px',
            height: '150px',
            objectFit: 'cover',
          }}
        />
        <div className="widget-item-detail ms-5 mt-5">
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
              <div className="widget-item-author-createddate-date"></div>
            </div>
          </div>
          <div className="widget-item-shortdesc" style={{ width: '300px' }}>
            {item.title}
          </div>
          <div className="widget-item-buttons">
            {' '}
            <a className="widget-item-btn widget-item-btn-readmore" href="#">
              <div>Read More</div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReviewCard;
