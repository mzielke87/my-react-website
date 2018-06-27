import React from 'react';
import './BlogCard.css';

const BlogCard = (props) => {
  return (
    <div className="blog-card">
      <div className="blog-card-title">
          {props.title}
      </div>
      {/* <div className="blog-card-body">
          {props.body}
      </div> */}
      <div className="blog-card-image">
        {props.image}
      </div>
      {props.link != null && 
      <a className="blog-card-link" href={props.link} target="_blank" rel="noopener noreferrer">Read</a>}
    </div>
  );
};

export default BlogCard;