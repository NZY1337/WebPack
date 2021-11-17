import Card from "react-bootstrap/Card";
import { NavLink } from "react-bootstrap";
// import { Link } from "react-router-dom";

const UsersList = ({ users }) => {
  const renderUsers = () => {
    return users.map((user) => {
      return (
        <div className="col-lg-4 mb-4" key={user.id}>
          <Card>
            <NavLink href={`/users/${user.id}`}>{user.name}</NavLink>
            <Card.Body>
              <Card.Title>City: {user.address.city}</Card.Title>
              <Card.Text>Email: {user.email}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      );
    });
  };

  return <div className="row">{users.length > 0 ? renderUsers() : "No users atm"}</div>;
};

export default UsersList;
