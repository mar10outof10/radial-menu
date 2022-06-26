import React from 'react';
import 'RadialMenu.scss';
import Center from 'components/Center';
import Segment from 'components/Segment';

const RadialMenu = () => {
  return (
    <div className="radialMenu">
      <div className="radialMenu-container">
        <Center>
          <Segment/>
          <Segment/>
          <Segment/>
          <Segment/>
        </Center>
      </div>
    </div>
  )
};

export default RadialMenu;