import React from 'react';

interface CardProps {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', margin: '10px 0' }}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Card;
