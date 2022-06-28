import React from 'react';
import 'RadialMenu.scss';
import Segment from 'components/Segment';

const Center = ({children}) => {
  return (
    <div className="radialMenu-center">
      {children}
    </div>
  )
}

export default Center;