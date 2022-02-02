function PostHeader() {
  return (
    <div className="d-flex justify-content-between py-2 px-3">
      <div className="d-flex flex-row align-items-center">
        <img
          src="https://i.imgur.com/pBcut2e.jpeg"
          width="50"
          className="rounded-circle"
          alt="user"
          role="button"
        />
        <div className="d-flex flex-column ms-2">
          <span className="fw-bold text-facebook" role="button">
            John Doe
          </span>
          <small className="text-muted fs-7">Today at 11.33</small>
        </div>
      </div>
      <div className="mt-1 text-muted">
        <div className="dropdown">
          <button className="btn text-muted" data-bs-toggle="dropdown">
            <i className="fa fa-ellipsis-h"></i>
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="/">
                Edit
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/">
                Delete
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PostHeader;
