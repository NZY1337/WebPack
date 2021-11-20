import React from 'react';
import { Card } from 'primereact/card';
import {Button} from 'primereact/button';

import PropTypes from 'prop-types';

const UsersList = ({ users }) => {
  const header = <img style={{width:'100%', height:'200px', objectFit:'cover'}} alt="Card" src='https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?cs=srgb&dl=pexels-mohamed-abdelghaffar-771742.jpg&fm=jpg'/>;

  const footer = (user) => {
      return (
        <a style={{textDecoration:'none'}} href={`/users/${user.id}`}>
            <Button label="Go To" icon="pi pi-check" id={user.id}/>
        </a>
      )
  }

  const renderUsers = () => {
    return users.map((user) => {
      return (
        <div key={user.id} className={'col-3'}>
          <Card header={header} title={user.name} subTitle={user.email} footer={footer(user)}>
            <p className="p-m-0" style={{lineHeight: '1.5'}}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
              quisquam repellat.
            </p>
          </Card>
        </div>
      );
    });
  };

  return <>{users.length > 0 ? renderUsers() : "No users atm"}</>;
};

UsersList.propTypes = {
  users:PropTypes.array
}

export default UsersList;
