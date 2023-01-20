import styles from "./Input.module.css";

type Props = {
  type: string;
  name: string;
  label: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
};

const Input: React.FC<Props> = ({ type, name, label, handleChange }) => {
  return (
    <input
      className={styles.input}
      type={type}
      name={name}
      placeholder={label}
      onChange={handleChange}
    />
  );
};

export default Input;
