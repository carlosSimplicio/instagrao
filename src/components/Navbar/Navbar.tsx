import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import ModalUpdate from "../Modal-Create/ModalUpdate";

const Navbar = () => {
  const [displaySearch, setDisplaySearch] = React.useState(false);
  const [displayCreate, setDisplayCreate] = React.useState(false);

  return (
    <>
      <div className={styles.fixedContainer} />
      <div
        className={`${displaySearch ? styles.searchActive : ""} ${
          styles.container
        }`}
      >
        <div className={styles.innerContainer}>
          <div className={styles.mainButtons}>
            <Logo size="small" isLink={true} />
            <div className={styles.navbar}>
              <Link
                href="/"
                className={styles.navBarItem}
                title="Página Inicial"
              >
                <Image
                  height={27}
                  width={24}
                  src="home-icon.svg"
                  alt="Página Inicial"
                />
                <span>Página Inicial</span>
              </Link>
              <a
                onClick={() => setDisplaySearch(!displaySearch)}
                className={styles.navBarItem}
                title="Pesquisa"
              >
                <Image
                  height={27}
                  width={24}
                  src="search-icon.svg"
                  alt="Pesquisa"
                />
                <span>Pesquisa</span>
              </a>
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
                <Image
                  height={27}
                  width={24}
                  src="profile-icon.svg"
                  alt="Perfil"
                />
                <span>Perfil</span>
              </Link>
              <a
                className={styles.navBarItem}
                title="Criar"
                onClick={() => setDisplayCreate(!displayCreate)}
              >
                <Image height={27} width={24} src="plus-icon.svg" alt="Criar" />
                <span>Criar</span>
              </a>
              <Link href="/" className={`${styles.navBarItem}`} title="Mais">
                <Image height={27} width={24} src="more-icon.svg" alt="Mais" />
                <span>Mais</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {displayCreate ? (
        <ModalUpdate show={() => setDisplayCreate(!displayCreate)} />
      ) : null}
    </>
  );
};

export default Navbar;
