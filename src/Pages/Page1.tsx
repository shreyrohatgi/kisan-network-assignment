import * as React from "react";
import { Chip, Paper } from "@mui/material";
import ContactTable from "../Components/StyledComponents/ContactsTable";

const Page1: React.FC = () => {
  return (
    <Paper
      elevation={12}
      variant="outlined"
      sx={{ display: "flex", gap: 2, flexDirection: "column", p: 5 }}
    >
      <Chip
        label="Contacts"
        size="medium"
        sx={{
          width: "fit-content",
          p: 3,
          "& .MuiChip-label": { fontSize: 26 },
        }}
      />
      <ContactTable />
    </Paper>
  );
};

export default Page1;
