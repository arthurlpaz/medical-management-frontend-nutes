import { Box, useTheme, Typography } from "@mui/material";
import { tokens } from "../../theme";
import PacientContextProvider from "../../context/PacientsContext";
import PacientsListInjured from "../../components/patient/PacientsListInjured";
import PerfilContextProvider, { PerfilContext } from "../../context/PerfilContext";
import PerfilList from "../../components/PerfilMedico/PerfilList";
import PerfilMedic from "../../components/PerfilMedico/PerfilMedic";

function PerfilMed() {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);


    return (

        <Box m="20px" >
            <Typography
                variant="h3"
                fontWeight="600"
                mb="10px"
                color={colors.grey[100]}
            >
                Perfil Médico
            </Typography>

            <Box
                display="grid"
                gridTemplateColumns="repeat(12, 1fr)"
                gridAutoRows="140px"
                gap="20px"
            >

                {/*Tabel section*/}
                <Box
                    mt="10px"
                    gridColumn="span 12"
                    gridRow="span 4"
                    backgroundColor={colors.primary[400]}
                >
                    <PerfilContextProvider>
                      <PerfilList/>
                    </PerfilContextProvider>
                </Box>
            </Box>
        </Box>
    )
}

export default PerfilMed;