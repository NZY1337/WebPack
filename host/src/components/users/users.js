import React, { lazy, Suspense } from "react";
const UsersLazy = lazy(() => import("users/App"));
const SubAAppLazy = lazy(() => import("subA/App"));

const Users = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UsersLazy />
      <SubAAppLazy />
    </Suspense>
  );
};

export default Users;
