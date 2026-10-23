import React from 'react';

function ProfileCard({ name, image, description }) {
  return (
    <div style={styles.card}>
      <img src={image} alt={name} style={styles.image} />
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
}

const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '20px',
    textAlign: 'center',
    width: '250px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    fontFamily: 'Arial, sans-serif'
  },
  image: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    objectFit: 'cover'
  }
};

export default ProfileCard;