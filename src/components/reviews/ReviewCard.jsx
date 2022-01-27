import React from 'react';

function ReviewCard() {
  return (
    <>
      <div style={{ display: 'flex' }}>
        <img
          src="https://res.cloudinary.com/dwqidrcfo/image/upload/v1642473374/bru38y8ggktct2nasg1j.jpg"
          alt="food"
          style={{
            marginTop: '50px',
            marginLeft: '30px',
            width: '200px',
            height: '150px',
          }}
        />
        <div className="widget-item-detail ms-5 mt-5">
          <div className="widget-item-name">
            <h4>
              <a href="#" title="Customer Support">
                Coffee or Tea
              </a>
            </h4>
          </div>
          <div className="widget-item-author">
            <div className="widget-item-author-createddate">
              <div className="widget-item-author-createddate-label">
                Date: 10-01-2018
              </div>
              <div className="widget-item-author-createddate-date"></div>
            </div>
          </div>
          <div className="widget-item-shortdesc" style={{ width: '300px' }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore,
            atque obcaecati fugit amet dolore rerum molestiae quisquam
            dignissimos magnam ab?
          </div>
          <div className="widget-item-buttons">
            {' '}
            <a className="widget-item-btn widget-item-btn-readmore" href='#"'>
              <div>Read More</div>
            </a>
          </div>
          <div
            className=" widget-item-rates widget-detail-ratings"
            data-vote=""
            title="0.00"
          ></div>

          <div className="widget-item-values"> </div>
        </div>
      </div>
    </>
  );
}

export default ReviewCard;
