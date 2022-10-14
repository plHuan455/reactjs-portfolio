export interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label?: string;
  value: string;
  error?: string;
  onInputChange?: (value: string) => void;
}

const Input: React.FC<InputProps> = ({ id, value, error, label, onInputChange, ...args }) => {
  return <div className="a-input">
    {label && <label className="a-input_label" htmlFor={id}>{label}</label>}
    <input
      {...args}
      id={id}
      value={value}
      onChange={(e) => { if (onInputChange) onInputChange(e.target.value) }}
    />
    {error && <div className="a-input_error">{error}</div>}
  </div>
}

export default Input;
