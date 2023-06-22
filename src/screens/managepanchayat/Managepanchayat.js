import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Managepanchayat.scss";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#607163",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  no,
  username,
  emailId,
  createdOn,
  status,
  formview,
  rejectreason
) {
  return { no, username, emailId, createdOn, status, formview, rejectreason };
}

const rows = [
  createData(1, "a", "a@gmnail.com", 23 / 5 / 2022, "Approved", "ok", "-"),
  createData(
    2,
    "b",
    "a@gmnail.com",
    23 / 5 / 2022,
    "Rejected",
    23 / 5 / 2022,
    "-"
  ),
  createData(3, "c", "a@gmnail.com", 23 / 5 / 2022, "Approved"),
  createData(4, "d", "a@gmnail.com", 23 / 5 / 2022, "Approved"),
  createData(5, "e", "a@gmnail.com", 23 / 5 / 2022, "Rejected"),
];

export default function ManagePanchayat() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
      }}
    >
      <div style={{ width:"70%", padding: "30px" }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="right">S.No</StyledTableCell>
                <StyledTableCell align="right">User Name</StyledTableCell>
                <StyledTableCell align="right">Email Id</StyledTableCell>
                <StyledTableCell align="right">Created On</StyledTableCell>
                <StyledTableCell align="right">Status</StyledTableCell>
                <StyledTableCell align="right">Form View</StyledTableCell>
                <StyledTableCell align="right">Reject Reason</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell align="right">{row.no}</StyledTableCell>
                  <StyledTableCell align="right">
                    {row.username}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.emailId}</StyledTableCell>
                  <StyledTableCell align="right">
                    {row.createdOn}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.status}</StyledTableCell>
                  <StyledTableCell align="right">
                    {row.formview}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.rejectreason}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
