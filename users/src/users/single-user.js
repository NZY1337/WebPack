import React, { useState, useEffect } from "react";
import axios from 'axios'
import { Card } from 'primereact/card';

const SingleUser = ({match}) => {
    const [user, setUser] = useState(null);
    const {id} = match.params;

    useEffect(() => {

        let fetchUser = true;
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then((users) => {
            fetchUser && setUser(users.data);
        });

        return () => (fetchUser = false);
    }, [id]);

  return (

        <div className={'w-11 mx-auto mt-5'}>
            {user && <Card  title={user.name} subTitle={user.email} className={'col-3'}>
                <p className="p-m-0" style={{lineHeight: '1.5'}}>
                    Email: <span>{ user.email}</span>
                    WebSite: <span>{ user.website}</span>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                    quisquam repellat.
                </p>
            </Card>}
        </div>
  );
};

export default SingleUser;
