import React from "react";
import {
  Box,
  Button,
  Card,
  Chip,
  Paper,
  TextField,
  CircularProgress,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSnackbar } from "notistack";

const NewMessage: React.FC = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const { enqueueSnackbar } = useSnackbar();
  const otp = Math.floor(100000 + Math.random() * 900000);
  const { state } = useLocation();
  const navigate = useNavigate();

  const sendMessage = async () => {
    if (state) {
      const data = {
        firstName: state.firstName,
        lastName: state.lastName,
        otp,
        receiverNumber: state.number,
      };

      try {
        setLoading(true);
        await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/sms`, data);
        enqueueSnackbar("Success", { variant: "success" });
        navigate("/message");
        setLoading(false);
      } catch (error) {
        enqueueSnackbar("An Error occured", { variant: "error" });
        setLoading(false);
      }
    }
  };

  return (
    <Paper
      elevation={12}
      variant="outlined"
      sx={{ display: "flex", gap: 2, flexDirection: "column", p: 5 }}
    >
      <Chip
        label="New Message"
        size="medium"
        sx={{
          width: "fit-content",
          p: 3,
          "& .MuiChip-label": { fontSize: 26 },
        }}
      />
      <Box>
        <Card sx={{ maxWidth: 300, p: 2, display: "flex", gap: 2 }}>
          <TextField
            fullWidth
            disabled
            variant="standard"
            placeholder="Add message"
            value={`Hi, Your OTP is : ${otp}`}
          />
          {loading ? (
            <Box component="span" sx={{ display: "flex" }} pl="10px">
              <CircularProgress />
            </Box>
          ) : (
            <Button variant="outlined" onClick={sendMessage}>
              Send
            </Button>
          )}
        </Card>
      </Box>
    </Paper>
  );
};

export default NewMessage;
