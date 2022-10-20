import Icon from "~atoms/Icon";
import { mapModifiers } from "../../../utils/funcs";
import { FiUser } from 'react-icons/fi';
import { IconType } from "react-icons";

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