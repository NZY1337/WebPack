import React, { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import axios from 'axios'

const SingleUser = () => {
    const [user, setUser] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        let fetchUser = true;
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then((users) => {
            fetchUser && setUser(users.data);
        });

        return () => (fetchUser = false);
    }, [id]);

  return (
    <div className="container mt-5" key={id}>
      <div className="row">
        <div className="col-12">
            <h4>User Page:</h4>
          {user && (
            <div>
              <span>
                Name: <h6>{user.name}</h6>
              </span>
              <span>
                Phone: <p>{user.phone}</p>
              </span>
              <span>
                WebSite: <p>{ user.website}</p>
              </span>
              <span>
                Email: <p>{ user.email}</p>
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleUser;
