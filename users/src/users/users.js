import React,  { useEffect, useState } from "react";
import axios from "axios";
import UsersList from "./users-list";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        let fetchUsers = true;
        axios.get("https://jsonplaceholder.typicode.com/users").then((users) => {
            fetchUsers && setUsers(users.data);
        });

        return () => (fetchUsers = false);
    }, []);

    return (
        <div className="container">
            <div className="row  mt-5 ">
                <div className="col-lg">
                    <h4 className="font-weight-bold mb-2">
                        Users' List:{" "}
                            <span style={{ fontSize: "initial" }}>
                                <i>subcomponent</i>
                            </span>
                        </h4>
                    {users.length > 0 && <UsersList users={users} />}
                </div>
            </div>
        </div>

    )
}

export default Users;