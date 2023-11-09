import React, { useState, useEffect, useRef } from 'react'
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

import NavBarH from './NavBarH';
import Cards from './Cards';

export default function HomeNike() {

     useEffect(() => {
    
    }, []);
  
    return (
        <>
          <NavBarH/>
          <Cards/>
        </>
    )
}