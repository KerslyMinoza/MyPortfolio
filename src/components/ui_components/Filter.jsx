
import './ui_components.css';
import Back from "../../assets/images/back.svg";
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Filter() {
  const filters = [
    'All',
    'Web App Design',
    'Mobile App Design',
    'Branding',
    'Illustrations'
  ];

  const [activeFilters, setActiveFilters] = useState(['All']);

  const handleFilterClick = (filter) => {
    if (filter === 'All') {
      // If clicking "All", deselect everything else
      setActiveFilters(['All']);
    } else {
      let updatedFilters = [...activeFilters];

      if (activeFilters.includes('All')) {
        // Remove "All" if selecting other filters
        updatedFilters = [];
      }

      if (updatedFilters.includes(filter)) {
        // If already selected, remove it
        updatedFilters = updatedFilters.filter((f) => f !== filter);
      } else {
        // Add new filter
        updatedFilters.push(filter);
      }

      // If none selected, default back to All
      if (updatedFilters.length === 0) {
        updatedFilters = ['All'];
      }

      setActiveFilters(updatedFilters);
    }
  };

  return (
    <div className="filter-container">
      {filters.map((filter) => (
        <div
          key={filter}
          className={activeFilters.includes(filter) ? 'filter-active' : 'filter'}
          onClick={() => handleFilterClick(filter)}
        >
          {filter}
        </div>
      ))}
    </div>
  );
}

export default Filter