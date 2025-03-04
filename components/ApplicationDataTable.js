import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const ApplicationDataTable = ({ data }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow >
            <TableCell color="text.secondary">Company</TableCell>
            <TableCell color="text.secondary">Position</TableCell>
            <TableCell color="text.secondary">Applied</TableCell>
            <TableCell color="text.secondary">Response</TableCell>
            <TableCell color="text.secondary">Interview</TableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell color="text.disabled">{row.company}</TableCell>
              <TableCell color="text.disabled">{row.position}</TableCell>
              <TableCell color="text.disabled">{row.applied}</TableCell>
              <TableCell color="text.disabled">{row.response}</TableCell>
              <TableCell color="text.disabled">{row.interview}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ApplicationDataTable;
