import React from 'react';
import 'RadialMenu.scss';

const Line = ({children, segmentAction, dispatchView}) => {
  return (
    <div onClick={() => dispatchView({type: segmentAction})} className="radialMenu-line-container">
      <div className="radialMenu-text-container">
        {children}
      </div>
      <div className="radialMenu-line">
      </div>
    </div>
  )
}

export default Line;