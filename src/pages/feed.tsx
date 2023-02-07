import React from "react";
import styles from "../styles/feed.module.css";
import Navbar from "@/components/Navbar/Navbar";

interface FeedProps {
  imagePaths: Array<string>;
}

const getFeedImages = async () => {
  var fs = require("node:fs/promises");
  let imagePaths: Array<string> = [];
  try {
    const files: Array<string> = await fs.readdir(
      "/home/carlossimplicio/Documents/instagrao/public/feed-images"
    );
    imagePaths = files.map((file) => "feed-images/" + file);
  } catch (error) {
    console.log(error);
  }
  return imagePaths;
};

export const getServerSideProps = async () => {
  const imagePaths = await getFeedImages();
  return {
    props: {
      imagePaths,
    },
  };
};

const Feed: React.FC<FeedProps> = ({ imagePaths }) => {
  console.log(imagePaths);
  return (
    <div className={styles.feedContainer}>
      <Navbar />
      <div className={styles.feed}></div>
    </div>
  );
};

export default Feed;
