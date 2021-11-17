import React, { lazy, Suspense } from "react";
const SubAAppLazy = lazy(() => import("subA/App"));

import img from "../public/images/pexels-photo-9800866.jpeg";

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-12">
            <h3>User's Host App:</h3>
            <img className=" w-100" style={{ height: "500px", objectFit: "cover" }} src={img} />
          </div>
        </div>
      </div>

      <SubAAppLazy />
    </Suspense>
  );
};

export default App;
