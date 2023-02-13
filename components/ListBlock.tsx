import * as React from "react";
import Box from "@mui/material/Box";
import { type } from "os";

interface propsTypes {
  name: string;
}

export default function ListBlock({name}:propsTypes) {
  return (
    <div style={{ width: "100%" }}>
      <Box
        component="span"
        sx={{
          display: "flex",
          m: 1,
          paddingLeft: 1,
          color: "#363740",
          border: "1px solid",
          borderColor: "#A4A6B3",
          borderRadius: 2,
          fontSize: "0.875rem",
          fontWeight: "700",
          justifyContent: "space-between",
          bgcolor: "#FFFF"
        }}
      >
        <Box sx={{ paddingTop: 1, paddingBottom: 1 }}>{name}</Box>
        <Box
          sx={{
            display: "flex",
            p: 1,
            bgcolor: "#A4A6B3",
            borderTopRightRadius: 3,
            borderBottomRightRadius: 3,
            alignContent: "center"
          }}
        >
          2
        </Box>
      </Box>
    </div>
  );
}
