import { Box, Flex } from '@chakra-ui/react';
import Navbar from './Navbar';

const Layouts = ({ children }) => {
    return (
        <>
            <Navbar />
            <Box 
                py={['3', '3', '4', '6']} 
                px={['5', '5', '6%', '10%']}
            >
                {children}
            </Box>
        </>
    );
}
 
export default Layouts;