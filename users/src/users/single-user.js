import React from "react";

const SingleUser = ({ id, user }) => {
  return (
    <div className="container" key={id}>
      <div className="row">
        <div className="col-12">
          {user && (
            <div>
              <span>
                Name: <h6>{user && user.name}</h6>
              </span>
              <span>
                Phone: <p>{user && user.phone}</p>
              </span>
              <span>
                WebSite: <p>{user && user.website}</p>
              </span>
              <span>
                Email: <p>{user && user.email}</p>
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleUser;
