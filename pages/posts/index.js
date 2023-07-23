import { index } from '@/actions/postsApi';
import Card from '@/components/Card';
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

const Posts = ({posts}) => {
  const generatePosts = () => {
		return posts?.map(post => {
			return (
				<Col sm={12} md={4} lg={4}>
					<Card post={post} />
				</Col>
			)
		})
	}
  return (
    <Container style={{paddingTop: 150}}>
			<Row>
				{generatePosts()}
			</Row>
		</Container>
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