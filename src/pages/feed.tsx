import React from "react";
import styles from "../styles/feed.module.css";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";

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
            <div>
              <Image
                key={`${index}-${file}`}
                src={file}
                alt="Some image"
                width={462}
                height={562}
                unoptimized
                priority={index === 0}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Feed;
