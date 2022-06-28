import React from 'react';
import 'RadialMenu.scss';
import Line from 'components/Line';

const Segment = () => {
  return (
    <div className="radialMenu-segment">
      <Line style={{height: "75px", width: "100px", position: "absolute", top: "100px"}}>
        Asdf
      </Line>
      <Line style={{height: "75px", width: "100px", position: "absolute", top: "100px"}}>
        Hey
      </Line>
      <Line style={{height: "75px", width: "100px", position: "absolute", top: "100px"}}>
        Lorem Ipsum
      </Line>
    </div>
  )
}

export default Segment;