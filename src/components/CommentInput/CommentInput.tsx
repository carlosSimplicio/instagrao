import React from "react";
import styles from "./CommentInput.module.css";

const CommentInput = () => {
  const [comment, setComment] = React.useState("");
  return (
    <div className={styles.container}>
      <textarea
        value={comment}
        rows={1}
        placeholder="Adicione um comentário..."
        onChange={(e) => setComment(e.target.value)}
      />
      {comment ? <button>Publicar</button> : null}
    </div>
  );
};

export default CommentInput;
