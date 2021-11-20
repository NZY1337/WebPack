import React from 'react';
import faker from 'faker';

const Footer = () => {
    return (
        <footer className="container-fluid py-3 fixed-bottom" style={{ background: "black", color: "#fff" }}>
            <div className="row justify-content-center">
                <div className="col-lg text-center">
                    <p>Current Subscribers: ${faker.random.number()}</p>
                    <p className="mt-2 mb-0">
                        Footer subcomponent - imported with Webpack{" "}

                        <span>
                          <b>
                            <u>Module Federation Plugin</u>
                          </b>
                        </span>
                    </p>
                    <small className="text-secondary">Softvision@2021 - all rights reserved</small>
                </div>
            </div>
        </footer>
    );
}

export default Footer;