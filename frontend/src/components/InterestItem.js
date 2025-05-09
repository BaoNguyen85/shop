import React from 'react';
import './InterestItem.css';

function InterestItem({ shape, icon, label, bgColor, imageUrl }) {
  return (
    <div
      className={`interest-item ${shape}`}
      style={{
        backgroundColor: bgColor,
        backgroundImage: imageUrl ? `url(${imageUrl})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="icon">{icon}</div>
      <div className="label">{label}</div>
    </div>
  );
}

export default InterestItem;
