import React, { useState } from 'react'
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import {useNavigate} from "react-router-dom";
import { signUp } from '../../../services/service.auth';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" target="_blank" href="https://github.com/arthurlpaz">
                Arthur |
            </Link>
            {' '}
            <Link color="inherit" target="_blank" href="https://github.com/joycelimaa">
                Kaique |
            </Link>
            {' '}
            <Link color="inherit" target="_blank"  href="https://github.com/KaiqueIvo04">
                Joyce
            </Link>
            {' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

function SignUp() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isRegistered, setIsRegistered] = useState(false);


    const navigate = useNavigate();

    const handleSignUp = async (event) => {
        event.preventDefault();
        
        try {
            const data = { name, email, password, confirmPassword };

            console.log(data);

            await signUp(data);
            setIsRegistered(true);
        } catch (error) {
            console.log(error);
        }
    };

    const handleSignin = () => {
        navigate('/auth/signin');
    }

    return (
        <>
            <Box
                sx={{
                    my: 8,
                    mx: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
                id="grid"
            >
                <Typography component="h1" variant="h5">
                    Cadastro
                </Typography>
                <Box component="form" noValidate onSubmit={handleSignUp} sx={{ mt: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                autoComplete="given-name"
                                name="nome"
                                required
                                fullWidth
                                id="firstName"
                                label="Nome"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                fullWidth
                                id="email"
                                label="Email"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                fullWidth
                                name="senha"
                                label="Senha"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                                fullWidth
                                name="senha"
                                label="Digite a senha novamente"
                                type="password"
                                id="repetPassword"
                                autoComplete="new-password"
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Cadastrar
                    </Button>
                    <Grid item xs={12}>
                        {isRegistered && (
                            <div>
                                <p>Cadastro realizado! Acesse com suas credencias na página de Login</p>
                            </div>
                        )}
                    </Grid>

                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link component="button" onClick={handleSignin} style={{color: "dodgerblue"}}>Já possui uma conta? Entrar</Link>
                        </Grid>
                    </Grid>
                    <Copyright sx={{ mt: 5 }} />
                </Box>
            </Box>
        </>
    );
}

export default SignUp;