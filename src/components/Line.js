import React from 'react';
import 'RadialMenu.scss';

const Line = ({children}) => {
  return (
    <div className="radialMenu-line-container">
      <div className="radialMenu-text-container">
        {children}
      </div>
      <div className="radialMenu-line">
      </div>
    </div>
  )
}

export default Line;