import Link from 'next/link'
import { HamburgerIcon } from '@chakra-ui/icons';
import { coloring } from './data';
import {
    Box,
    Button,
    Show,
    Hide,
    IconButton,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerBody,
    useDisclosure,
    Stack,
    HStack,
    Flex,
    Heading,
    Divider
} from '@chakra-ui/react';


const NavDrawer = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const handleClick = () => {
        onOpen()
    }

    return (
        <Flex>
            <IconButton
                colorScheme='red'
                aria-label='Call Segun'
                size='md'
                icon={<HamburgerIcon />}
                onClick={() => handleClick()}
            />

            <Drawer onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerBody mt='40px'>
                        <Stack spacing='4'>
                            <Link href='/'><Button as='block' onClick={onClose} cursor='pointer' colorScheme='red' variant='ghost'>Home</Button></Link>
                            <Link href='/blog'><Button as='block' onClick={onClose} cursor='pointer' colorScheme='red' variant='ghost'>Blog</Button></Link>
                            <Link href='/about'><Button as='a' onClick={onClose} cursor='pointer' colorScheme='red' variant='ghost'>About</Button></Link>
                            <Divider />
                            <Link href='/login'><Button as='a' onClick={onClose} cursor='pointer' colorScheme='red' >Log Out</Button></Link>
                        </Stack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Flex>
    );
}

const Navbar = (props) => {
    return (
        <Flex py={['3', '3', '4', '6']} px={[4, 6, '6%', '10%']} justify='space-between' align='center' boxShadow='md' bg='blackAlpha.900' m='0'>
            <Box>
                <Link href='/'><Heading as='h1' color='red.500' cursor='pointer'>Jerome</Heading></Link>
            </Box>
            <Show above='md'>
                <HStack spacing='3'>
                    <Link href='/'><Button as='a' cursor='pointer' variant='ghost' colorScheme='red'>Home</Button></Link>
                    <Link href='/blog'><Button as='a' cursor='pointer' variant='ghost' colorScheme='red'>Blog</Button></Link>
                    <Link href='/about'><Button as='a' cursor='pointer' variant='ghost' colorScheme='red'>About</Button></Link>
                    <Link href='/login'><Button as='a' cursor='pointer' colorScheme='red'>Log Out</Button></Link>
                </HStack>
            </Show>
            <Hide above='md'>
                <NavDrawer coloring={coloring}/>
            </Hide>
        </Flex>
    );
}

export default Navbar;