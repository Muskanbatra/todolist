import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function Shownotes() {
  return (
    <Grid
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
        margin: "auto",
      }}
    >
      <Card sx={{ width: "90%", marginTop: "5rem", marginLeft: "2rem" }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Title
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Description
          </Typography>
        </CardContent>

        <CardActions>
          <Button size="small">Delete</Button>
        </CardActions>
      </Card>
      <Card sx={{ width: "90%", marginTop: "5rem", marginLeft: "2rem" }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Title
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Description
          </Typography>
        </CardContent>

        <CardActions>
          <Button size="small">Delete</Button>
        </CardActions>
      </Card>
      <Card sx={{ width: "90%", marginTop: "5rem", marginLeft: "2rem" }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Title
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Description
          </Typography>
        </CardContent>

        <CardActions>
          <Button size="small">Delete</Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
