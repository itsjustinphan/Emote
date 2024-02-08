import React, { useState, useEffect } from "react";
import { handleScroll } from "./App";
import Button from 'react-bootstrap/Button';
import ResourceCard from "./ResourceCard";
import resourcesData from "../data/resources.json";

//Renders the landing page for users
export default function Fear() {
    const [resources, setResources] = useState([]);


    useEffect(() => {
      const happyResources = resourcesData.filter(
        (resource) => resource.emotion === "Fear"
      );
      setResources(happyResources);
    }, []);
  
    return (
      <div>
        <header>
            <h1>Fear Resources</h1>
        </header>
  
        <div className="resource-container">
          {resources.map((resource, index) => (
            <ResourceCard key={index} resource={resource} />
          ))}
        </div>
      </div>
    );
  }
  