import Link from 'next/link'
import React from 'react'
import styles from '@/styles/Card.module.css';
import Moment from 'react-moment';
import {url} from '@/actions/baseUrl';

const Card = ({post}) => {
  return (
    <Link href={`/posts/${post._id}`}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img className={styles.image} crossOrigin='anonymous' src={`${url}/posts/${post._id}/image`} alt={post.title} />
        </div>
        <div className={styles.body}>
          <div className={styles.title}>{post.title}</div>
          {/* <div
            className={styles.description}
            dangerouslySetInnerHTML={{
              __html: `${post.body.substring(0, 170)}...`,
            }}
          ></div> */}
          <div className={styles.metadata}>
            <div className={styles.date}>
              {/* <AccessTimeIcon /> */}
              <Moment fromNow>{post.createdAt}</Moment>
            </div>
            <div className={styles.viewsContainer}>
              {/* <VisibilityIcon /> */}
              <div className={styles.view}>
                {post.views}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Card