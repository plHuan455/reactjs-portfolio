import Icon from "~atoms/Icon";
import { convertHours, convertMinutes, mapModifiers } from "../../../utils/funcs";
import { FiUser } from 'react-icons/fi';
import { IconType } from "react-icons";
import { string } from "yup";
import { useRef } from "react";

export interface InputProps extends Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'onChange'> {
  label?: string;
  value: string;
  error?: string;
  icon?: IconType
  variant?: 'auth';
  onChange?: (value: string) => void;
}

export const Input: React.FC<InputProps> = ({ icon, variant, id, value, error, label, onChange, ...args }) => {
  return <div className={mapModifiers("a-input", variant)}>
    {label && <label className="a-input_label" htmlFor={id}>{label}</label>}
    <div className="a-input_inputWrapper">
      <input
        {...args}
        id={id}
        value={value}
        className="a-input_input"
        onChange={(e) => { if (onChange) onChange(e.target.value) }}
      />
      {icon && <div className="a-input_icon">
        <Icon modifiers={['16x16', 'white']}>{icon}</Icon>
      </div>}
    </div>
    {error && <div className="a-input_error">{error}</div>}
  </div>
}

export interface CheckboxProps extends Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'onChange' | 'value'> {
  value?: boolean;
  onChange?: (value: boolean) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({ value = false, onChange, ...args }) => {
  return <div className="a-input checkbox">
    <input
      {...args}
      className="a-input_input"
      type="checkbox"
      checked={value}
      onChange={(e) => {
        if (onChange) onChange(e.target.checked)
      }}
    />
    <span className="a-input_checkmark" onClick={() => { if (onChange) onChange(!value) }} />
  </div>
}


export interface TimeInputProps extends Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'onChange' | 'value' | 'placeholder'> {
  value: number[];
  label?: string;
  error?: string;
  placeholderHours: string;
  placeholderMinutes: string;
  onChange: (value: number[]) => void;
}

export const TimeInput: React.FC<TimeInputProps> = ({placeholderHours, placeholderMinutes, value, error, label, onChange, ...args}) => {
  const minutesInputRef = useRef<HTMLInputElement>(null);
  const [hours, minutes] = value;

  const handleHoursChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const hoursStr = String(Number(e.target.value));
    if(hoursStr.length > 2  && !isNaN(Number(e.target.value))) {
      minutesInputRef.current?.focus();
      onChange([hours, convertMinutes(hoursStr[2])])
      return;
    }
    onChange([convertHours(e.target.value), value[1]])
  }

  return <div className="a-input a-input-time">
    {label && <label className="a-input_label">{label}</label>}
    <div className="a-input_inputWrapper">
      <input 
        className="a-input_input a-input_inputs_hours" 
        placeholder={placeholderHours} 
        value={hours < 10 ? `0${hours}`: hours}
        onChange={handleHoursChange}
      />
      <input 
        ref={minutesInputRef}
        className="a-input_input a-input_inputs_minutes" 
        placeholder={placeholderMinutes} 
        onBlur={args.onBlur}
        value={minutes < 10 ? `0${minutes}`: minutes}
        onChange={(e) => onChange([value[0] , convertMinutes(e.target.value)]) }
      />
    </div>
    {error && <div className="a-input_error">{error}</div>}
  </div>
}
