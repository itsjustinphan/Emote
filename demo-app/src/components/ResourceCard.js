import React from 'react';

const ResourceCard = ({ resource }) => {
  return (
    <div className="resource-card-container">
      <div className="resource-card">
        <h3>{resource.resource_name}</h3>
        <p>{resource.description}</p>
        <img src={resource.img} alt={resource.resource_name} />
        <a href={resource.website_link} target="_blank" rel="noopener noreferrer">Learn More</a>
      </div>
    </div>
  );
};

export default ResourceCard;
