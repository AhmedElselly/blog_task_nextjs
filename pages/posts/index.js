import React from 'react'

const Posts = () => {
  return (
    <div>Posts</div>
  )
}


export const getServerSideProps = async (ctx) => {
    const res = await index();
    return {
      props: {
        posts: res.data,
      },
    };
  };
  

export default Posts