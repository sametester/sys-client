import { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import timeSince from '../../services/timeSince';

function ReviewCard({ item }) {
    // console.log(item);
    // console.log(item.img);

    return (
        <>
            <div className="d-flex w-75">
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
                    style={{ flexGrow: '2', width: '700px' }}
                >
                    <div className="widget-item-name">
                        <h4>
                            <Link to="#" title="Customer Support">
                                {item.headTitle}
                            </Link>
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
                        <Link
                            className="widget-item-btn widget-item-btn-readmore"
                            to="#"
                        >
                            <div>Read More</div>
                        </Link>
                    </div>
                </div>
                {/* <div style={{ width: '100%', display: 'flex', marginTop: '42px' }}> */}

                <Dropdown>
                    <Dropdown.Toggle variant="success">...</Dropdown.Toggle>

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
