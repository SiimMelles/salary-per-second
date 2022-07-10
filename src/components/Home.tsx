import { Grid, InputAdornment } from "@mui/material";
import { useState } from "react";
import { StyledButton, StyledFrontPageText, StyledHeader, StyledTextField } from "./StyledComponents";


export default function Home() {
    
    const [salary, setSalary] = useState("" as string);

    const submitSalary = () => {
        if (salary !== "") {
            console.log(salary)
            parseInt(salary);
        }
    }


    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const onlyNums = e.target.value.replace(/[^0-9]/g, '');
        if (onlyNums.length === 0) {
            setSalary("");
        } else if (onlyNums.length < 20) {
            setSalary(onlyNums);
        }
    }

    const renderSalaryForm = () => {
        return (
            <Grid container direction="column" alignContent="center">
                <Grid item textAlign="center">
                    <StyledHeader>
                        Salary per second
                    </StyledHeader>
                </Grid>
    
                <Grid item textAlign="center" sx={{ padding: "1.5rem 2rem"}}>
                    <StyledFrontPageText>
                        Start by typing your salary in the box and hitting go:
                    </StyledFrontPageText>
    
                    <StyledTextField
                        InputProps={{
                            onChange: (e) => handleChange(e),
                            value: salary,
                            endAdornment: <InputAdornment position="end"><p style={{color: "#FFF"}}>€</p></InputAdornment>
                        }}
                     placeholder="Your salary here"/>
                     <StyledButton onClick={() => submitSalary()}>Go</StyledButton>
                </Grid>
            </Grid>
        );
    }

    return renderSalaryForm()
}