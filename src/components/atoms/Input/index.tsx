export interface InputProps extends Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'onChange'> {
  label?: string;
  value: string;
  error?: string;
  onChange?: (value: string) => void;
}

export const Input: React.FC<InputProps> = ({ id, value, error, label, onChange, ...args }) => {
  return <div className="a-input">
    {label && <label className="a-input_label" htmlFor={id}>{label}</label>}
    <input
      {...args}
      id={id}
      value={value}
      className="a-input_input"
      onChange={(e) => { if (onChange) onChange(e.target.value) }}
    />
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