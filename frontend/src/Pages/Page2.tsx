import * as React from "react";
import { Chip, Paper } from "@mui/material";
import MessagesTable from "../Components/StyledComponents/MessagesTable";

const Page2: React.FC = () => {
  return (
    <Paper
      elevation={12}
      variant={"outlined"}
      sx={{ display: "flex", gap: 2, flexDirection: "column", p: 5 }}
    >
      <Chip
        label="Messages"
        size="medium"
        sx={{
          width: "fit-content",
          p: 3,
          "& .MuiChip-label": { fontSize: 26 },
        }}
      />

      <MessagesTable />
    </Paper>
  );
};

export default Page2;
