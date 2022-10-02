import { Box, Heading, Text } from "@chakra-ui/react";
import Link from 'next/link'

const BlogPost = (props) => {
    const Title = props.blogs.attributes.Title;
    const Content = props.blogs.attributes.Content;
    return (
        <Link href='/blog'>
            <Box as='a' cursor='pointer'>
                <Box
                    maxW='lg'
                    borderWidth='1px'
                    borderRadius='lg'
                    my='5'
                    mx='2'
                    boxShadow='md'
                >
                    <Heading size='lg' m='3' color='red.500'>{Title}</Heading>
                    <Text m='3' >{Content}</Text>
                </Box>
            </Box>
        </Link>
    );
}
 
export default BlogPost;