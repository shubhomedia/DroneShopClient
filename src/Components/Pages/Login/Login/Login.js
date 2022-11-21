import React from 'react';
import './Login.css';
import Avatar from '@mui/material/Avatar';
import { Box, Container, Typography } from '@mui/material';



const Login = () => {

    const singin = () => {
        const handleSubmit = (event) => {
            event.preventDefault();
            const data = new FormData(event.currentTarget);
            console.log({
                email: data.get('email'),
                password: data.get('password')
            });
        };
    };

    return (
        <Container>
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'colum',
                    alignItems: 'center',
                }}
            >

                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>

            </Box>
        </Container>
    );
};

export default Login;