import styles from "./Button.module.css";

type Props = {
  isLoading: boolean;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
};

const Button: React.FC<Props> = ({ isLoading, handleClick, children }) => {
  const content = isLoading ? (
    <span className={styles.loading}></span>
  ) : (
    children
  );
  console.log(content);
  return (
    <button className={styles.btn} onClick={handleClick}>
      {content}
    </button>
  );
};

export default Button;
