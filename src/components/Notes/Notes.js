import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Textarea from "@mui/joy/Textarea";
import { Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

// mui style uthaya hai wesite
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);
// props destructuring kiya hai props ka
export default function Notes({ addNotes }) {
  // state to store notes when use try to write title and desciption

  // temporary  data base that store single notes
  const [notes, setNotes] = useState({
    title: "",
    des: "",
  });

  // use to hidden the description and save button
  const [hidden, seHiden] = useState(false);

  // function when use click to save button
  const handleSaveNotes = () => {
    // array database store kar deta hai temporary  data base
    addNotes((preNotes) => {
      return [...preNotes, notes];
    });

    //temporary  data base ko khali kar do bhai
    setNotes({ title: "", des: "" });
  };

  const handleShow = () => {
    seHiden(true);
  };

  return (
    <Card sx={{ width: "30%", margin: "auto", marginTop: "5rem" }}>
      <CardContent sx={{ margin: "auto" }}>
        <Grid
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingBottom: "1rem",
          }}
        >
          <Typography>Add Your Notes</Typography>
          <AddIcon onClick={handleShow} sx={{ cursor: "pointer" }} />
        </Grid>

        <TextField
          sx={{ marginBottom: "2rem" }}
          id="standard-basic"
          label="Title"
          variant="standard"
          value={notes.title}
          onChange={(event) =>
            setNotes((pre) => ({ ...pre, title: event.target.value }))
          }
        />

        {hidden ? (
          <>
            <Typography>Description</Typography>
            <Textarea
              minRows={2}
              value={notes.des}
              onChange={(event) =>
                setNotes((pre) => ({ ...pre, des: event.target.value }))
              }
            />
          </>
        ) : (
          ""
        )}
      </CardContent>
      {hidden && (
        <CardActions>
          <Button onClick={handleSaveNotes}>Save</Button>
        </CardActions>
      )}
    </Card>
  );
}
