import { Box, Center, Flex, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import BlogPost from "../components/BlogPost";
import axios from 'axios';

const Blog = (blogposts) => {
    return (
        <>
            <Grid
                templateAreas={`"header nav"
                  "main nav"
                  "footer footer"`}
                gridTemplateColumns={'1fr 300px'}
                gridTemplateRows={'50px 1fr 50px'}
                h='200px'
                gap='1'
                fontWeight='bold'
            >
                <GridItem area={'header'}>
                    <Box>
                        <Heading>
                            Blog Posts
                        </Heading>
                    </Box>
                </GridItem>
                <GridItem border='1px' borderColor='gray.200' area={'nav'} borderRadius='lg' boxShadow='lg' p='4'>
                    <Box>
                        Side Bar
                        <Text fontSize='xs' mt='3'>
                            What do you put in a side bar?
                        </Text>
                    </Box>
                </GridItem>
                <GridItem pl='2' area={'main'} justify='space-between'>
                    <Center>
                        <Box>
                            {blogposts && Object.values(blogposts).map(blog => (
                                <BlogPost key={blog.id} blogs={blog} />
                            ))}
                        </Box>
                    </Center>
                </GridItem>
                <GridItem area={'footer'} py='10'>
                    <Flex justify='space-between' align='center'>
                        <Text fontSize='xs'>
                            Jerome Blog
                        </Text>
                        <Text fontSize='xs'>
                            2022
                        </Text>
                    </Flex>
                </GridItem>
            </Grid>
        </>
    );
}

Blog.getInitialProps = async ctx => {
    try {
        const res = await axios.get('http://localhost:1337/api/blogs');
        const blogposts = res.data.data;
        return blogposts;
    } catch (error) {
        return { error };
    }
}

export default Blog;