import * as React from 'react';
import Text from '../../atoms/Text';

export interface OptionsTypes {
  label: string;
  value: string;
}

export interface PulldownProps {
  selectedValue?: OptionsTypes;
  options: OptionsTypes[];
  placeholder?:string;
}

export default function Pulldown ({selectedValue, options, placeholder}: PulldownProps) {
  const [isShow, setIsShow] = React.useState<boolean>(false);
  return (
    <div className="m-pulldown">
      <div className="m-pulldown_title">
        <Text>{selectedValue ? selectedValue.label : placeholder}</Text>
      </div>
      {isShow && <ul className="m-pulldown_dropdown" onClick={()=>{ setIsShow(true)}}>
        {options.map(option =>
          <li className="m-pulldow_dropdown_item">{option.label}</li>
        )}  
      </ul>}
    </div>
  );
}
