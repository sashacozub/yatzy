import React from 'react';

import { Button } from '@mui/material';

import './Header.css';

const Header = () => {
  return (
    <header>
      <h1>WTWT</h1>
      <ul className='genres-list'>
        <li>
          <Button className='genre-btn' variant='contained'>
            Action
          </Button>
        </li>
        <li>
          <Button className='genre-btn' variant='contained'>
            Comedy
          </Button>
        </li>
        <li>
          <Button className='genre-btn' variant='contained'>
            Drama
          </Button>
        </li>
        <li>
          <Button className='genre-btn' variant='contained'>
            Horror
          </Button>
        </li>
        <li>
          <Button className='genre-btn' variant='contained'>
            Sci-Fi
          </Button>
        </li>
        <li>
          <Button className='genre-btn' variant='contained'>
            Thriller
          </Button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
