import React from 'react';
import { MdArrowBackIosNew } from 'react-icons/md';
import Icon from '~atoms/Icon';
import Text from '~atoms/Text';

interface HeadControlProps {
  backBtnTitle: string;
  onClick: () => void;
}

const HeaderControl: React.FC<HeadControlProps> = ({ backBtnTitle, onClick }) => {
  return <div className="t-headerControl" onClick={onClick}>
    <div className="t-headerControl_icon">
      <Icon modifiers={['white']}>{MdArrowBackIosNew}</Icon>
    </div>
    <div className="t-headerControl_text">
      <Text modifiers={['16x24', 'white']}>{backBtnTitle}</Text>
    </div>
  </div>
};

HeaderControl.defaultProps = {
};

export default HeaderControl;

