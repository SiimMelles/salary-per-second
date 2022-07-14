import { Button, Container, styled, TableCell, TextField, Typography } from "@mui/material";

export const StyledHeader = styled(Typography)(() => ({
    color: "#6FFFE9",
    fontWeight: "500",
    fontSize: "1.5rem",
    padding: "2.5rem 1.5rem 1.5rem"
}));

export const StyledFrontPageText = styled(Typography)(() => ({
    color: "#FFF",
    fontWeight: "400",
    fontSize: "1.25rem",
    padding: "6rem 1.5rem 3rem"
}));

export const StyledSalaryHeader = styled(Typography)(() => ({
    color: "#6FFFE9",
    fontWeight: "500",
    fontSize: "1.5rem",
    padding: "2rem 0 1.25rem"
}));

export const StyledParagraph = styled(Typography)(() => ({
    color: "#FFF",    
    fontSize: "1rem",
    fontWeight: "400"
}));

export const StyledSalaryParagraph = styled(StyledParagraph)(() => ({
    fontSize: "1.5rem",
    fontWeight: "600"
}));

export const StyledSalaryText = styled(Typography)(() => ({
    color: "#FFF",
    fontWeight: "700",
    fontSize: "3.5rem",
    padding: "0.5rem 0 0"

}));

export const StyledTextField = styled(TextField)(() => ({
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
    marginBottom: "1rem"
}));

export const StyledButton = styled(Button)(() => ({
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


export const StyledContainer = styled(Container)(() => ({
    position: "relative",
    minHeight: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    background: "url('background.svg') no-repeat",
    ['@media (min-width:780px)']: { // eslint-disable-line no-useless-computed-key
        background: "linear-gradient(180deg, #0B132B 0%, #3A506B 100%)",
    },
    backgroundSize: "cover"
}));

export const StyledTableCell = styled(TableCell)(() => ({
    borderBottom: "none",
    padding: "0.5rem"
}));


