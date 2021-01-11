import React from 'react';
import { Badge } from "react-bootstrap";

function BlogPost(props) {
  return (
    <a href={`https://www.starlingbank.com${props.blogLink}`}>
      <figure>
        <img src={`https://www.starlingbank.com${props.imageSrc}`} alt={`${props.blogTitle} article`}></img>
        <figcaption>
          <p className='title'>{props.blogTitle}</p>
          <p><strong>Author:</strong> {props.author}</p>
          <p><em>{props.date}</em></p>
          <Badge aria-label={`Category: ${props.category}`}>{props.category}</Badge>
				</figcaption>
      </figure>
    </a>
  );
}	

export default BlogPost;