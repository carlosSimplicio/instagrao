import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Logo.module.css";

interface LogoProps {
  size: "small" | "medium";
  isLink: boolean;
}

const Logo: React.FC<LogoProps> = ({ size, isLink = false }) => {
  const imageSize = size === "medium" ? 64 : 40;
  return (
    <Link href="/" className={isLink ? "" : styles.disabled}>
      <div
        className={`${size === "medium" ? styles.medium : styles.small} ${
          styles.logo
        }`}
      >
        <Image
          height={imageSize}
          width={imageSize}
          src="logo.svg"
          alt="Instagrão Logo"
        />
        <h1>Instagrao</h1>
      </div>
    </Link>
  );
};

export default Logo;
