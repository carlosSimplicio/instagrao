import React from "react";
import styles from "./ErrorComponent.module.css";

type Props = {
  message: string;
};

const messageDisplayTime = 10000;

const timeBarStyle = {
  display: "block",
  width: "100%",
  height: "3px",
  backgroundColor: "var(--color-error)",
  animation: `slideTime ${messageDisplayTime / 1000}s forwards`,
};

const ErrorComponent: React.FC<Props> = ({ message }) => {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    if (message) {
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, messageDisplayTime);
    } else {
      setShow(false);
    }
  }, [message]);

  if (!show) return null;
  return (
    <div className={styles.errorContainer}>
      <p className={styles.errorMessage}>{message}</p>
      <span style={timeBarStyle} />
    </div>
  );
};

export default ErrorComponent;
