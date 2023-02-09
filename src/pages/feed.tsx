import React from "react";
import styles from "../styles/feed.module.css";
import Navbar from "@/components/Navbar/Navbar";
import Post from "@/components/Post/Post";
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
    imagePaths = files.map((file) => "/feed-images/" + file);
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
  const i = imagePaths.slice(0, 6);
  return (
    <div className={styles.feedContainer}>
      <Navbar />
      <div className={styles.feed}>
        {i.map((file, index) => {
          return (
            <Post
              key={`${index}-${file}`}
              src={file}
              alt={`Some image ${index}`}
              priority={index === 0}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Feed;
