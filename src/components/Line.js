import React from 'react';
import 'RadialMenu.scss';

const Line = ({children}) => {
  return (
    <div className="radialMenu-line-container">
      <div className="radialMenu-line-text-container">
      </div>
      <div className="radialMenu-line">
        {children}
      </div>
    </div>
  )
}

export default Line;