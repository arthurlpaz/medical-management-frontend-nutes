import React from "react";

const Footer = () => (
    <footer className="Footer" style={{
        textAlign: "center",
        padding: "20px 0",
    }}>
        <div className="FooterContent" style={{
            color: "gray",
            fontWeight: "bold",
        }}>
            <p>&copy; {new Date().getFullYear()} - Núcleo de Tecnologias Estratégicas em Saúde. Todos os direitos reservados.</p>
        </div>
    </footer>
);

export default Footer;
