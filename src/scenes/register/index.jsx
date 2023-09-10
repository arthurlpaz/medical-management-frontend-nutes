import React, { useState } from "react";
import { Box, useTheme, Typography } from "@mui/material";
import PacientsList from "../../components/patient/PacientsList"
import PacientContextProvider from "../../context/PacientsContext";
import { tokens } from "../../theme";

function Register() {

      
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  
 
  return(
      
      <Box  m="20px" >
          <Typography
                variant="h3"
                fontWeight="600"
                mb="10px"
                color={colors.grey[100]}
            >
                Registrar Paciente
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
                  <PacientContextProvider>
                      <PacientsList/>
                  </PacientContextProvider>
                  
                       
              </Box>
          </Box>
      </Box>
  )
}

export default Register;