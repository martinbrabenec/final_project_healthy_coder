import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../../css/alternatives.scss';

function Alternatives() {
  const [alternativeActivities, setAlternativeActivities] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; // 3 rows of 4 items

  useEffect(() => {
    axios.get('/api/alternative_activities')
      .then(response => {
        setAlternativeActivities(response.data);
      })
      .catch(error => {
        console.error('Error fetching alternative activities:', error);
      });
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = alternativeActivities.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageCount = Math.ceil(alternativeActivities.length / itemsPerPage);

  return (
    <div className="container">
      <h2 className="my-4">Alternative Activities</h2>
      <div className="row">
        {currentItems.map(activity => {
          const imagePath = `/assets/alternative_activities/${activity.link_to_photo}`;
          return (
            <div className="col-md-3" key={activity.id}>
              <div className="card-container">
                <div className="card-flipper">
                  <div className="card-front">
                    <img src={imagePath} alt={activity.alternative_activity} />
                  </div>
                  <div className="card-back">
                    <h3>{activity.alternative_activity}</h3>
                    <a href={activity.external_info} target="_blank" rel="noopener noreferrer">
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="pagination-container">
        {pageCount > 1 && (
          <div className="pagination">
            {Array.from({ length: pageCount }, (_, i) => (
              <button 
                key={i} 
                onClick={() => paginate(i + 1)} 
                className={currentPage === i + 1 ? 'active' : ''}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Alternatives;