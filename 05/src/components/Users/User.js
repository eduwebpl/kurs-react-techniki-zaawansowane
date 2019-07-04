import React from 'react';
import { createPlaceholderImage } from 'helpers';

const User = ({name, age}) => (
  <div className="card">
    <div className="card-content">
      <div className="media">
        <div className="media-left">
          <figure className="image is-48x48">
            <img src={createPlaceholderImage(96)} alt="" />
          </figure>
        </div>
        <div className="media-content">
          <p className="title is-4">{name}, {age}</p>
          <p className="subtitle is-6">@{name.toLowerCase()}</p>
        </div>
      </div>
    </div>
  </div>
);

export default User;