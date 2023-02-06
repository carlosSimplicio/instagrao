import React from "react";
import styles from "../styles/feed.module.css";
import Navbar from "@/components/Navbar/Navbar";

const Feed = () => {
  return (
    <div className={styles.feedContainer}>
      <Navbar />
      <div className={styles.feed}></div>
    </div>
  );
};

export default Feed;
