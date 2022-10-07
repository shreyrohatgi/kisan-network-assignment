import {
  Box,
  Button,
  Chip,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ContactInfoPage: React.FC = () => {
  const [data, setData] = React.useState<{
    firstName: string;
    lastName: string;
    number: string;
  }>();
  interface Column {
    id: "name" | "phoneNumber";
    label: string;
    minWidth?: number;
    align?: "right";
  }

  const columns: readonly Column[] = [
    { id: "name", label: "Name", minWidth: 170 },
    { id: "phoneNumber", label: "Phone Number", minWidth: 100 },
  ];

  const { state } = useLocation();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (state) {
      console.log(state);
      setData(state);
    }
  }, []);

  return (
    <Paper
      elevation={12}
      variant="outlined"
      sx={{ display: "flex", gap: 2, flexDirection: "column", p: 5 }}
    >
      <Chip
        label="Contact Info"
        size="medium"
        sx={{
          width: "fit-content",
          p: 3,
          "& .MuiChip-label": { fontSize: 26 },
        }}
      />
      <Box>
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                  <TableCell />
                </TableRow>
              </TableHead>
              <TableBody>
                {data && (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={data.firstName}
                  >
                    <>
                      <TableCell key={data.firstName}>
                        {data.firstName} {data.lastName}
                      </TableCell>
                      <TableCell key={data.number}>{data.number}</TableCell>
                      <TableCell>
                        <Button
                          variant="outlined"
                          onClick={() =>
                            navigate("/newMessage", { state: data })
                          }
                        >
                          Send Messages
                        </Button>
                      </TableCell>
                    </>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
    </Paper>
  );
};

export default ContactInfoPage;
