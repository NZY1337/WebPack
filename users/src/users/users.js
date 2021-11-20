import React,  { useEffect, useState } from "react";
import axios from "axios";
import UsersList from "./users-list";
import faker from 'faker';


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
        <div className={'w-10 mx-auto'}>
            <p>you have ${faker.random.number()} items in your cart</p>
            <h4>Users List:{" "}
                <span style={{ fontSize: "initial" }}><i>subcomponent</i></span>
            </h4>

            <div className="grid">
                {users.length > 0 && <UsersList users={users} />}
            </div>
         </div>

    )
}

export default Users;