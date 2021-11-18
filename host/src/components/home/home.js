import React from "react";

import img from "../../../public/images/pexels-photo-9800866.jpeg";

const Home = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-12">
                    <h3>User's Host App:</h3>
                    <img alt={"homepage description"} className=" w-100" style={{ height: "500px", objectFit: "cover" }} src={img} />
                </div>
            </div>
        </div>
    );
};

export default Home;
