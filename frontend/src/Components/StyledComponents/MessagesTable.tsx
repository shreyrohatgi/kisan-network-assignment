import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import axios from "axios";
import React from "react";
import { useSnackbar } from "notistack";
import { CircularProgress } from "@mui/material";

interface Column {
  id: "name" | "date-time" | "otp";
  label: string;
  minWidth?: number;
  align?: "right";
}

interface IData {
  firstName: string;
  lastName: string;
  time: string;
  otp: string;
}

const columns: readonly Column[] = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "date-time", label: "Date-Time", minWidth: 170 },
  { id: "otp", label: "OTP", minWidth: 170 },
];

const MessagesTable: React.FC = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [data, setData] = React.useState<IData[]>();
  const { enqueueSnackbar } = useSnackbar();

  React.useEffect(() => {
    const getMessagesData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/sms`
        );
        if (res) {
          setData(res.data);
        }
        setLoading(false);
      } catch (error) {
        enqueueSnackbar("Server not responding", { variant: "error" });
        setLoading(false);
      }
    };
    getMessagesData();
  }, []);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <React.Fragment>
      {!loading ? (
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
                </TableRow>
              </TableHead>
              <TableBody>
                {data &&
                  data.length &&
                  data
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.firstName}
                        >
                          <>
                            <TableCell key={row.firstName}>
                              {row.firstName} {row.lastName}
                            </TableCell>
                            <TableCell>
                              {new Date(row.time).toLocaleDateString("en-us")}{" "}
                              {new Date(row.time).toLocaleTimeString("en-us")}
                            </TableCell>
                            <TableCell>{row.otp}</TableCell>
                          </>
                        </TableRow>
                      );
                    })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 20]}
            component="div"
            count={data ? data.length : 0}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      ) : (
        <Box
          component="span"
          sx={{ display: "flex", justifyContent: "center" }}
          pl="10px"
        >
          <CircularProgress />
        </Box>
      )}
    </React.Fragment>
  );
};

export default MessagesTable;
