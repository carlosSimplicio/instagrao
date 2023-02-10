import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <Logo size="small" isLink={true} />
        <div className={styles.navbar}>
          <Link href="/" className={styles.navBarItem} title="Página Inicial">
            <Image
              height={27}
              width={24}
              src="home-icon.svg"
              alt="Página Inicial"
            />
            <span>Página Inicial</span>
          </Link>
          <Link href="/" className={styles.navBarItem} title="Pesquisa">
            <Image
              height={27}
              width={24}
              src="search-icon.svg"
              alt="Pesquisa"
            />
            <span>Pesquisa</span>
          </Link>
          <Link href="/" className={styles.navBarItem} title="Explorar">
            <Image
              height={27}
              width={24}
              src="explore-icon.svg"
              alt="Explorar"
            />
            <span>Explorar</span>
          </Link>
          <Link href="/" className={styles.navBarItem} title="Mensagens">
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
            title="Notificações"
          >
            <Image
              height={27}
              width={24}
              src="notification-icon.svg"
              alt="Notificações"
            />
            <span>Notificações</span>
          </Link>
          <Link href="/" className={styles.navBarItem} title="Perfil">
            <Image height={27} width={24} src="profile-icon.svg" alt="Perfil" />
            <span>Perfil</span>
          </Link>
        </div>
      </div>
      <div className={styles.endNavBar}>
        <Link href="/" className={`${styles.navBarItem}`} title="Notificações">
          <Image height={27} width={24} src="more-icon.svg" alt="Mais" />
          <span>Mais</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
