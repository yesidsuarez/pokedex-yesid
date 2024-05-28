import React from 'react'
import '../../pages/styles/pokedex.css';

const Pagination = ({ pokePerPage, totalPokemons, paginate, currentPage }) => {
    const pageNumbers = [];

    const totalPage = Math.ceil(totalPokemons / pokePerPage);

    const startPage = Math.max(1, currentPage - 1);
    const endPage = Math.min(totalPage, currentPage + 1);

    for (let i = startPage; i <= endPage; i++) {  
        pageNumbers.push(i);
    }

    const handleStart = (event) => {
        event.preventDefault();
        paginate(1);
    };

    const handleEnd = (event) => {
        event.preventDefault();
        paginate(totalPage);
    };

    const handleNext = (event) => {
        event.preventDefault();
        if (currentPage < totalPage) {
            paginate(currentPage + 1);
        }
    };

    const handlePrevious = (event) => {
        event.preventDefault();
        if (currentPage > 1) {
            paginate(currentPage - 1);
        }
    };

    return (
        <nav>
            <ul className='pagination'>
                <button className='pagination__btn' onClick={handleStart}>◀</button>
                <button className='pagination__btn' onClick={handlePrevious}>◁</button>
                {pageNumbers.map(number => (
                    <button
                        key={number}  // Añadiendo la propiedad key
                        className='pagination__btn'
                        onClick={(e) => {
                            e.preventDefault();
                            paginate(number);
                        }}
                        href='/#/pokedex'
                    >
                        {number}
                    </button>
                ))}
                <button className='pagination__btn' onClick={handleNext}>▷</button>
                <button className='pagination__btn2' onClick={handleEnd}>▶</button>
            </ul>
        </nav>
    );
};

export default Pagination;
