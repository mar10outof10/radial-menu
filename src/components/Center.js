import React from 'react';
import 'RadialMenu.scss';
import Segment from 'components/Segment';

const Center = ({children, view}) => {
  return (
    <div className="radialMenu-center" style={{transform: `rotate(${view.rotation})`}}>
      {children}
    </div>
  )
}

export default Center;