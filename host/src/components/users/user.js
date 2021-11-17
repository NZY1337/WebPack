import React, { useState, useEffect, Suspense, lazy } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
  const SingleUserLazy = lazy(() => import("users/SingleUser"));
  const [user, setUser] = useState(null);
  const { id: userId } = useParams();

  useEffect(() => {
    const fetchUser = true;
    axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`).then((users) => {
      fetchUser && setUser(users.data);
    });

    return () => (fetchUser = false);
  }, [userId]);

  return (
    <div className="container my-5">
      <div className="row">
        <Suspense fallback="Loading...">
          <SingleUserLazy id={userId} user={user} />
        </Suspense>
      </div>
    </div>
  );
};

export default User;
