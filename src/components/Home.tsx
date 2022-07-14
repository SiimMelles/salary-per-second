import { Grid, InputAdornment, Switch, Table, TableBody, TableRow } from "@mui/material";
import { useState } from "react";
import { StyledButton, StyledFrontPageText, StyledHeader, StyledParagraph, StyledSalaryHeader, 
    StyledSalaryParagraph, StyledSalaryText, StyledTableCell, StyledTextField } from "./StyledComponents";

export default function Home() {

    const [showForm, setShowForm] = useState(true as boolean);

    const [monthlySalary, setMonthlySalary] = useState(true as boolean);
    
    const [salary, setSalary] = useState("" as string);

    const submitSalary = () => {
        if (salary !== "") {
            console.log(salary)
            let sal = parseInt(salary);
            setSalary(monthlySalary ? (sal * 12).toString() : sal.toString());
            setShowForm(false);
        }
    }

    const renderSalaryNumber = (x: number) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const clearAll = () => {
        setSalary("");
        setShowForm(true);
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
                    <Grid textAlign="center" alignItems="center" justifyContent="center" container>
                        <Grid item>
                            <StyledParagraph style={{opacity: monthlySalary ? "0.5" : "1"}}>
                                per Year
                            </StyledParagraph>
                        </Grid>
                        <Grid item>
                            <Switch
                                checked={monthlySalary}
                                onChange={() => setMonthlySalary(!monthlySalary)}
                                value="salaryType"
                            />
                        </Grid>
                        <Grid item>
                            <StyledParagraph style={{opacity: monthlySalary ? "1" : "0.5"}}>
                                per Month
                            </StyledParagraph>
                        </Grid>
                    </Grid>
                     <StyledButton onClick={() => submitSalary()}>Go</StyledButton>
                </Grid>
            </Grid>
        );
    }

    const renderEarningPage = () => {
        return (
            <Grid container direction="column" alignContent="center">
                <Grid item textAlign="center">
                    <StyledSalaryHeader>
                        You are earning
                    </StyledSalaryHeader>
                    <StyledSalaryText>
                        {renderSalaryNumber(parseInt(salary))}€
                    </StyledSalaryText>
                    <StyledParagraph sx={{ fontWeight: 400 }}>
                        per
                    </StyledParagraph>
                    <StyledParagraph sx={{ fontWeight: 500, fontSize: "1.5rem", paddingTop: "0.125rem"}}>
                        Year
                    </StyledParagraph>
                    <StyledSalaryHeader sx={{padding: "2.5rem 5rem 0.75rem"}}>
                        Which means you are earning
                    </StyledSalaryHeader>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <StyledTableCell align="right">
                                    <StyledSalaryParagraph>
                                        {Math.trunc(parseInt(salary) * 10000 / 6912000) / 10000}€
                                    </StyledSalaryParagraph>
                                </StyledTableCell>
                                <StyledTableCell>
                                    <StyledParagraph>
                                        per second
                                    </StyledParagraph>
                                </StyledTableCell>
                            </TableRow>
                            <TableRow>
                                <StyledTableCell align="right">
                                    <StyledSalaryParagraph>
                                    {Math.trunc(parseInt(salary) * 1000 / 115200) / 1000}€
                                    </StyledSalaryParagraph>
                                </StyledTableCell>
                                <StyledTableCell>
                                    <StyledParagraph>
                                        per minute
                                    </StyledParagraph>
                                </StyledTableCell>
                            </TableRow>
                            <TableRow>
                                <StyledTableCell align="right">
                                    <StyledSalaryParagraph>
                                        {Math.trunc(parseInt(salary) * 100 / 1920) / 100}€
                                    </StyledSalaryParagraph>
                                </StyledTableCell>
                                <StyledTableCell>
                                    <StyledParagraph>
                                        per hour
                                    </StyledParagraph>
                                </StyledTableCell>
                            </TableRow>
                            <TableRow>
                                <StyledTableCell align="right">
                                    <StyledSalaryParagraph>
                                        {Math.trunc(parseInt(salary) * 100 / 240) / 100}€
                                    </StyledSalaryParagraph>
                                </StyledTableCell>
                                <StyledTableCell>
                                    <StyledParagraph>
                                        per day
                                    </StyledParagraph>
                                </StyledTableCell>
                            </TableRow>
                            <TableRow>
                                <StyledTableCell align="right">
                                    <StyledSalaryParagraph>
                                        {Math.trunc(parseInt(salary) * 100 / 12) / 100}€
                                    </StyledSalaryParagraph>
                                </StyledTableCell>
                                <StyledTableCell>
                                    <StyledParagraph>
                                        per month
                                    </StyledParagraph>
                                </StyledTableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <StyledButton onClick={() => clearAll()}>Go back</StyledButton>
                </Grid>
            </Grid>
        );
    }

    return showForm ? renderSalaryForm() : renderEarningPage()
}
