import React, { useState } from 'react'
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";
import { signIn } from "../../../services/service.auth";

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://seniorsaudemovel.netlify.app/">
                Arthur | Kaique | Joyce
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    /// const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiIsImtpZCI6IjFjZTc3ZTk2MmM3MmM2YzU1NzNhMjA5Y2U5MWZjNjExIn0.e30.dSWAdZItBouMaKpgyl0tFw8GA-bCJtoGIHeisEtdN7msK_Q64xa-jQTiz6IABEY5WtzaJ7qVnJOUUGj0wWk6eg";

    const handleLogin = async (event) => {
        event.preventDefault();

        //const data = new FormData(event.currentTarget);

        try {
            const data = {email, password};
            navigate("/Home");
            console.log(data);
            await signIn(data);
        } 
        catch (error) {
            console.log(error);    
        }
    };

    const handleSignup = () => {
        navigate('/auth/signup');
    }

    return (
        <div>
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
                    Login
                </Typography>
                <Box component="form" noValidate onSubmit={handleLogin} sx={{ mt: 1 }}>
                    <TextField
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        margin="normal"
                        required
                        fullWidth
                        name="senha"
                        label="Senha"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Lembre-se de mim"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Entrar
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Esqueceu sua senha?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link component="button" onClick={handleSignup} style={{color: "dodgerblue"}}>Não Possui uma conta? Cadastre-se</Link>
                        </Grid>
                    </Grid>
                    <Copyright sx={{ mt: 5 }} />
                </Box>
            </Box>
        </div>
    );
}

export default SignIn;