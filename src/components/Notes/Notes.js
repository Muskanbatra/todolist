import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Textarea from "@mui/joy/Textarea";
import { Grid } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function Notes() {

  return (
    <Card sx={{ width: "30%", margin: "auto", marginTop: "5rem" }}>
      <CardContent sx={{ margin: "auto" }}>
        <Grid sx={{display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center" , paddingBottom: "1rem"}} >
          <Typography>Add Your Notes</Typography>
          <AddIcon sx={{cursor:"pointer"}} /> 
        </Grid>
        <TextField
          sx={{ marginBottom: "2rem" }}
          id="standard-basic"
          label="Title"
          variant="standard"
        />

        <Typography>Description</Typography>
        <Textarea minRows={2} />
      </CardContent>
      <CardActions>
          <Button>Save</Button>
      </CardActions>
    </Card>
  );
}
