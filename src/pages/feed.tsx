import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/feed.module.css";

const Feed = () => {
  return (
    <div className={styles.feedContainer}>
      <div className={styles.navbar}>
        <Link href="/">
          <div className={styles.feedLogo}>
            <Image height={35} width={32} src="logo.svg" alt="Instagrão Logo" />
            <h1 className="logo">Instagrao</h1>
          </div>
        </Link>
        <Link href="/" className={styles.navBarItem}>
          <Image
            height={27}
            width={24}
            src="home-icon.svg"
            alt="Página Inicial"
          />
          <span>Página Inicial</span>
        </Link>
        <Link href="/" className={styles.navBarItem}>
          <Image height={27} width={24} src="search-icon.svg" alt="Pesquisa" />
          <span>Pesquisa</span>
        </Link>
        <Link href="/" className={styles.navBarItem}>
          <Image height={27} width={24} src="explore-icon.svg" alt="Explorar" />
          <span>Explorar</span>
        </Link>
        <Link href="/" className={styles.navBarItem}>
          <Image
            height={27}
            width={24}
            src="message-icon.svg"
            alt="Mensagens"
          />
          <span>Mensagens</span>
        </Link>
        <Link
          href="/"
          className={`${styles.navBarItem} ${styles.navBarItemNotification}`}
        >
          <Image
            height={27}
            width={24}
            src="notification-icon.svg"
            alt="Notificações"
          />
          <span>Notificações</span>
        </Link>
        <Link href="/" className={styles.navBarItem}>
          <Image height={27} width={24} src="profile-icon.svg" alt="Perfil" />
          <span>Perfil</span>
        </Link>
      </div>
      <div className={styles.feed}></div>
    </div>
  );
};

export default Feed;
