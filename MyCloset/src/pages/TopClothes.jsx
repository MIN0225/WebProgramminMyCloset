import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar/Navbar'
import './MyClothes.css';
import { Link } from 'react-router-dom';

function TopClothes() {
  const [topClothes, setTopClothes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    const allClothes = JSON.parse(localStorage.getItem('clothes')) || [];
    const filteredClothes = allClothes.filter(clothe => clothe.type === 'top');
    setTopClothes(filteredClothes);
  }, []);

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(topClothes.length / itemsPerPage)));
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentClothes = topClothes.slice(startIndex, endIndex);

  return (
    <div>
      <h1>Top Clothes</h1>
      <Navbar />
      <br />
      <div className='clothes-container'>
        {currentClothes.map((clothe, index) => (
          // <Link to={`/clothes/${index}`} key={index}>
            <div key={index}>
              <img src={clothe.image} alt={clothe.name} />
              <p>{clothe.name}</p>
              <p>{clothe.price}</p>
            </div>
          // </Link>
        ))}
      </div>

      <div className='add-button-container'>
        <button className='add-button' onClick={handlePrevious}>Previous</button>
        <button className='add-button' onClick={handleNext}>Next</button>
      </div>
    </div>
  )
}

export default TopClothes