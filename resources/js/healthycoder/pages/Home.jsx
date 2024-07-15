import React from 'react';
import Sidebar from '../components/Sidebar';
import QuoteBar from '../components/QuoteBar';
import '../../../css/home.scss';

const Home = () => {
  return (
    <div className="container-fluid p-0">
      <Sidebar />
      <QuoteBar />
      <div className="content">
        <div className="main-content">
          <h1 className="mb-4 text-center">Welcome to the Healthy Coder App</h1>
          <div className="d-flex justify-content-center">
            <div className="card-deck">
              {[1, 2, 3].map((index) => (
                <div key={index} className="card">
                  <img src="path_to_your_image" className="card-img-top" alt="Description" />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;