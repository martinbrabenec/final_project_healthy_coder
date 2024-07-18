import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import '../../../css/searchbar.scss';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [data, setData] = useState({
    activities: [],
    alternative_activities: [],
    recipes: [],
  });
  const [filteredResults, setFilteredResults] = useState({
    activities: [],
    alternative_activities: [],
    recipes: [],
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('/api/data');
      setData(data);
      setFilteredResults(data);
    };
    fetchData();
  }, []);

  const handleSearch = (e) => {
    const searchQuery = e.target.value.toLowerCase();
    setQuery(searchQuery);

    if (searchQuery.length > 2) {
      const filteredActivities = data.activities.filter(activity =>
        activity.name.toLowerCase().includes(searchQuery) ||
        activity.description.toLowerCase().includes(searchQuery)
      );

      const filteredAlternativeActivities = data.alternative_activities.filter(altActivity =>
        altActivity.alternative_activity.toLowerCase().includes(searchQuery)
      );

      const filteredRecipes = data.recipes.filter(recipe =>
        recipe.name.toLowerCase().includes(searchQuery)
      );

      setFilteredResults({
        activities: filteredActivities,
        alternative_activities: filteredAlternativeActivities,
        recipes: filteredRecipes,
      });
    } else {
      setFilteredResults(data);
    }
  };

  const handleResultClick = (item) => {
    navigate('/ingredients', { state: { item } });
  };

  return (
    <div className="search-container">
      <div className="input-group">
        <input
          type="text"
          className="form-control custom-search"
          placeholder="Search"
          aria-label="Search"
          value={query}
          onChange={handleSearch}
        />
        <button className="btn btn-outline-secondary search-button" type="button">
          <FaSearch />
        </button>
      </div>
      {query && (
        <div className="search-results">
          {filteredResults.activities.length > 0 && (
            <>
              <h5>Activities</h5>
              <ul className="result-list">
                {filteredResults.activities.map(activity => (
                  <li key={activity.id} className="result-item" onClick={() => handleResultClick(activity)}>
                    <img className="result-thumbnail" src={`/assets/activities/${activity.image.split('/').pop()}`} alt={activity.name} />
                    <span>{activity.name}</span>
                  </li>
                ))}
              </ul>
            </>
          )}
          {filteredResults.alternative_activities.length > 0 && (
            <>
              <h5>Alternative Activities</h5>
              <ul className="result-list">
                {filteredResults.alternative_activities.map(altActivity => (
                  <li key={altActivity.id} className="result-item" onClick={() => handleResultClick(altActivity)}>
                    <img className="result-thumbnail" src={`/assets/alternative_activities/${altActivity.link_to_photo}`} alt={altActivity.alternative_activity} />
                    <span>{altActivity.alternative_activity}</span>
                  </li>
                ))}
              </ul>
            </>
          )}
          {filteredResults.recipes.length > 0 && (
            <>
              <h5>Recipes</h5>
              <ul className="result-list">
                {filteredResults.recipes.map(recipe => (
                  <li key={recipe.id} className="result-item" onClick={() => handleResultClick(recipe)}>
                    <img className="result-thumbnail" src={`/assets/food images/${recipe.photo}`} alt={recipe.name} />
                    <span>{recipe.name}</span>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
