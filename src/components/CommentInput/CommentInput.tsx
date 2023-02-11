import React from "react";
import styles from "./CommentInput.module.css";

const minHeight = "24px";

const CommentInput = () => {
  const [comment, setComment] = React.useState("");
  const [rows, setRows] = React.useState(1);
  const input = React.useRef(null);

  const handleChange = ({ target }: { target: HTMLTextAreaElement }) => {
    target.style.height = "auto";
    target.style.height = target.scrollHeight + "px";
    setComment(target.value);
  };

  return (
    <div className={styles.container}>
      <textarea
        value={comment}
        ref={input}
        rows={rows}
        placeholder="Adicione um comentário..."
        onChange={handleChange}
      />
      {comment ? <button>Publicar</button> : null}
    </div>
  );
};

export default CommentInput;
