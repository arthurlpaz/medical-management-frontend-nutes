import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import PacientContextProvider from "../../context/PacientsContext";
import PacientsListInjured from "../../components/patient/PacientsListInjured";

function MonitorarLesao() {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);


    return (

        <Box m="20px" >
            <h3>Monitorar Lesão</h3>

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
                    <PacientContextProvider>
                        <PacientsListInjured />
                    </PacientContextProvider>
                </Box>
            </Box>
        </Box>
    )
}

export default MonitorarLesao;