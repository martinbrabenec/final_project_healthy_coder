import React from 'react';
import Sidebar from '../components/Sidebar';

const Home = () => {
  return (
    <div className="container-fluid">
      <Sidebar />
      <div className="content">
        <div className="quote-container">
          <p className="quote-text">Quote of the day: "Your inspirational quote here."</p>
        </div>
        <h1 className="mb-4 text-center">Welcome to the Healthy Coder App</h1>
        <div className="d-flex justify-content-center">
          <div className="card-deck">
            <div className="card">
              <img src="path_to_your_image" className="card-img-top" alt="Description" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
            <div className="card">
              <img src="path_to_your_image" className="card-img-top" alt="Description" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
            <div className="card">
              <img src="path_to_your_image" className="card-img-top" alt="Description" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
