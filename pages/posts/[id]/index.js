import React from "react";
import styles from "@/styles/PostShow.module.css";
import { show } from "@/actions/postsApi";
import { url } from "@/actions/baseUrl";
import { Button } from "react-bootstrap";
import { useRouter } from "next/router";

const PostShow = ({ post }) => {
	const router = useRouter();


  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          crossOrigin="anonymous"
          alt={post.title}
          className={styles.image}
          src={`${url}/posts/${post._id}/image`}
        />
      </div>
      <div className={`d-flex gap-4 mt-4`}>
        <h3 className={styles.title}>{post.title}</h3>
				<Button onClick={() => router.push(`/posts/${post._id}/edit`)}>Edit</Button>
      </div>
      <div
        className={styles.title}
        dangerouslySetInnerHTML={{ __html: post.body }}
      ></div>
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  const res = await show(ctx.query.id);
  return {
    props: {
      post: res.data,
    },
  };
};

export default PostShow;
