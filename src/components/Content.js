import React from "react";
import './Content.css'
import ItemLise from './ItemList'
const Content = ({ title }) => {
  return (
    <div className='content'>
      <h1>{title}</h1> 
      <ItemLise />
    </div>
   
  );
};

export default Content;
