import React, {useReducer} from 'react';
import 'RadialMenu.scss';
import Center from 'components/Center';
import Segment from 'components/Segment';

const ROTATE0 = "0deg";
const ROTATE90 = "90deg";
const ROTATE180 = "180deg";
const ROTATE270 = "270deg";

const segmentAction = [ROTATE0, ROTATE90, ROTATE180, ROTATE270]

const RadialMenu = () => {
  
  const viewReducer = (state, action) => {
    switch(action.type) {
      case ROTATE0:
        return {...state, rotation: ROTATE0, rotateID: 0}
      case ROTATE90:
        return {...state, rotation: ROTATE90, rotateID: 1}
      case ROTATE180:
        return {...state, rotation: ROTATE180, rotateID: 2}
      case ROTATE270:
        return {...state, rotation: ROTATE270, rotateID: 3}
      default:
        return state;
    }
  }
  
  const [view, dispatchView] = useReducer(viewReducer, {
    rotation: "0deg"
  })
  
  return (
    <div className="radialMenu">
      <div className="radialMenu-container">
        <Center dispatchView={dispatchView} view={view}>
          <Segment segmentAction={segmentAction[4 % (0 + view.rotateID)]} dispatchView={dispatchView} />
          <Segment segmentAction={segmentAction[4 % (1 + view.rotateID)]} dispatchView={dispatchView} />
          <Segment segmentAction={segmentAction[4 % (2 + view.rotateID)]} dispatchView={dispatchView} />
          <Segment segmentAction={segmentAction[4 % (3 + view.rotateID)]} dispatchView={dispatchView} />
        </Center>
      </div>
    </div>
  )
};

export default RadialMenu;