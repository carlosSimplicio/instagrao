import styles from "./Input.module.css";

type Props = {
  type: string;
  name: string;
  label: string;
  value: string | number;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
};

const Input: React.FC<Props> = ({ type, name, label, value, handleChange }) => {
  return (
    <input
      className={styles.input}
      type={type}
      name={name}
      placeholder={label}
      value={value}
      onChange={handleChange}
    />
  );
};

export default Input;
