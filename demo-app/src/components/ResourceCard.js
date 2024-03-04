import React from 'react';

const ResourceCard = ({ resource }) => {
  return (
    <div className="resource-card-container">
      <div className="resource-card">
        <h3>{resource.resource_name}</h3>
        <p>{resource.description}</p>
        {resource.video_link ? (
          <iframe 
          width="100%" 
          height="315" 
          src="https://www.youtube.com/embed/wkse4PPxkk4?si=MhzL-zCbv86JmB_i" 
          title={resource.resource_name} 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowfullscreen>
          </iframe>
        ) : (
          <img src={resource.img} alt={resource.resource_name} />
        )}
        <a href={resource.website_link} target="_blank" rel="noopener noreferrer">Learn More</a>
      </div>
    </div>
  );
};

export default ResourceCard;
