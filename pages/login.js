import { Button, Input, InputGroup, InputRightElement, IconButton, Box, Heading } from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import Head from "next/head";
import React from 'react';

const Username = () => {
    return (
        <Input
            focusBorderColor='red.500'
            placeholder='Username'
            mt='3'
        />
    );
}

const PasswordInput = () => {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    return (
        <InputGroup size='md' mt='5'>
            <Input
                pr='4.5rem'
                type={show ? 'text' : 'password'}
                placeholder='Password'
                focusBorderColor='red.500'
            />
            <InputRightElement width='4.5rem'>
                <IconButton
                    variant='ghost'
                    aria-label='view-password'
                    size='sm'
                    onClick={handleClick}
                >
                    {show ? <ViewIcon /> : <ViewOffIcon />}
                </IconButton>
            </InputRightElement>
        </InputGroup>
    )
}

const Login = () => {
    return (
        <Box 
            px={['10%', '22%', '28%', '35%']}
            py={['40%', '15%', '18%', '13%']}
        >
            <Head>
                <title>Login - Jerome</title>
                <meta name="description" content="Sample Blog" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Box>
                <Heading as='h2' ml='4'>Log In</Heading>
                <Username />
                <PasswordInput />
                <Button mt='3' colorScheme='red' color='white' display='flex' justify='flex-end'>Log In</Button>
            </Box>
        </Box>
    );
}
 
export default Login;