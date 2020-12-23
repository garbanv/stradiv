import React from 'react';

export default function Grid({title, img,price}) {
  return (
    
      <figure>

        <img
          src={img}
          alt="Stradivarius"
        />
        <figcaption>
          <a href="#">{title}</a>
        </figcaption>
      </figure>

  );
}
