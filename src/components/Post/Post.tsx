import Image from "next/image";
import React from "react";
import CommentInput from "../CommentInput/CommentInput";
import styles from "./Post.module.css";

interface PostProps {
  src: string;
  alt: string;
  priority?: boolean;
}
const Post: React.FC<PostProps> = ({ src, alt, priority = false }) => {
  return (
    <div className={styles.container}>
      <div className={styles.userInfo}>
        <div className={styles.userProfileInfo}>
          <a href="/">
            <Image
              src="profile-icon.svg"
              alt="User profile"
              width={32}
              height={32}
            />
          </a>
          <span className={styles.userInfoText}>
            <a href="/">joazinhoDaRoca</a>
            <span>•</span>
            <span>9 h</span>
          </span>
        </div>
        <a href="/" className={styles.options}>
          ...
        </a>
      </div>
      <div className={styles.imgContainer}>
        <Image fill src={src} alt={alt} priority={priority} />;
      </div>
      <div className={styles.postInfo}>
        <div className={styles.postButtons}>
          <div className={styles.interactionButtons}>
            <a href="/">
              <Image
                src="like-icon.svg"
                alt="Curtir foto"
                width={32}
                height={32}
              />
            </a>
            <a href="/">
              <Image
                src="comment-icon.svg"
                alt="Comentar"
                width={32}
                height={32}
              />
            </a>

            <a href="/">
              <Image
                src="share-icon.svg"
                alt="Compartilhar post"
                width={32}
                height={32}
              />
            </a>
          </div>
          <a href="/">
            <Image
              src="save-icon.svg"
              alt="Salvar post"
              width={32}
              height={32}
            />
          </a>
        </div>
        <div className={styles.likeCount}>
          <a href="/">200.000 curtidas</a>
        </div>
      </div>
      <div className={styles.postDescription}>
        <a href="" className={styles.userPostNick}>
          joazinhoDaRoca
        </a>
        <p>
          A natureza tem seus mistérios e é preciso respeitá-los. A segunda
          temporada de Cidade Invisível tá chegando. 🌿👀🦋
        </p>
      </div>
      <div className={styles.commentSection}>
        <a href="/" className={styles.viewComments}>
          Ver todos os comentários
        </a>
        <div className={styles.comments}>
          <a href="" className={styles.userPostNick}>
            mariazinhaDoCeleiro
          </a>
          <p>Nossa Joãozinho, mas que coisa mais lindas</p>
        </div>
        <CommentInput />
      </div>
    </div>
  );
};

export default Post;
