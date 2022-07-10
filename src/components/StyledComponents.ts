import { Button, Container, styled, TextField, Typography } from "@mui/material";

const StyledHeader = styled(Typography)(() => ({
    color: "#6FFFE9",
    fontWeight: "500",
    fontSize: "1.5rem",
    padding: "1.5rem"
}));

const StyledFrontPageText = styled(Typography)(() => ({
    color: "#FFF",
    fontWeight: "400",
    fontSize: "1.25rem",
    padding: "6rem 1.5rem 1.5rem"
}));

const StyledTextField = styled(TextField)(() => ({
    input: {
        marginLeft: "16px",
        textAlign: "center",
        color: "#FFF",
        "&::placeholder": {
            color: "rgba(255, 255, 255, 0.4)",
        },
    },
    "& fieldset": {
        borderRadius: "9px"
    },  
    borderRadius: "9px",
    width: "80%",
    backgroundColor: "#3A506B",
}));

const StyledButton = styled(Button)(() => ({
    margin: "1rem",
    padding: "0.75rem",
    width: "80%",
    background: "#5BC0BE",
    color: "#FFF",
    border: "1px solid #6FFFE9",
    borderRadius: "9px",
    "&:hover": {
        background: "#468f8e"
    }
}));


const StyledContainer = styled(Container)(() => ({
    position: "relative",
    minHeight: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    background: "url('background.svg') no-repeat",
    backgroundSize: "cover"
}));

export { StyledHeader, StyledFrontPageText, StyledTextField, StyledButton, StyledContainer }