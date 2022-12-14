import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function FooterBlock({title, value}) {
  return (
    <Box>
      <Card variant="outlined">
        <CardContent>
        <Typography sx={{ fontSize: 14, textAlign: 'center' }} color="text.secondary" allign="center">
            {title}
        </Typography>
        <Typography sx={{ fontSize: 28, textAlign: 'center' }} variant="body2">
            { value }
        </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
