import React, { useState } from "react";
import styles from "./Form.module.css";
import { GameType } from "../../../types/gameTypes";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { Alert, Button, Snackbar } from "@mui/material";
import { updateGame } from "../../../Api/gamesAPI";
import { useNavigate } from "react-router-dom";

interface FormProps {
  game?: GameType;
}

const platforms = [
  {
    id: 1,
    value: "PC",
  },
  {
    id: 2,
    value: "Xbox",
  },
  {
    id: 3,
    value: "PlayStation",
  },
  {
    id: 4,
    value: "Nintendo Switch",
  },
];

function Form({ game }: FormProps) {

  const [title, setTitle] = useState(game?.title || "");
  const [platform, setPlatform] = useState(game?.platform || "");
  const [description, setDescription] = useState(game?.description || "");
  const [favCharacters, setFavCharacters] = useState(game?.favCharacters.join(", ") || "");
  const [poster, setPoster] = useState(game?.poster || "");
  const [rating, setRating] = useState(game?.rating || 0);
  //Snackbar
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">("success");
  const navigate = useNavigate();


  //UPDATE
  const handleUpdate = async () => {
    if (game && game._id) {
      try {
        await updateGame(game._id.toString(), {
          title,
          platform,
          description,
          favCharacters: favCharacters.split(",").map((char) => char.trim()), // Converte string para array
          poster,
          rating,
        });
        setSnackbarMessage("Review updated successfully!");
        setSnackbarSeverity("success");
        setOpenSnackbar(true);
      } catch (error) {
        console.error("Error updating review:", error);
        setSnackbarMessage("Error updating review!");
        setSnackbarSeverity("error");
        setOpenSnackbar(true);
      }
    }
  };

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
    navigate(`/games/${game?._id}`);
  };

  return (
    <section className={styles.Form}>
      <TextField
        required
        fullWidth
        focused
        label="Title"
        id="outlined-required"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        color="secondary"
        margin="normal"
      />

      <TextField
        required
        select
        fullWidth
        focused
        id="outlined-select"
        label="Platform"
        value={platform}
        onChange={(e) => setPlatform(e.target.value)}
        color="secondary"
        margin="normal"
        sx={{ color: "#e0ecfe" }}
      >
        {platforms.map((option) => (
          <MenuItem key={option.id} value={option.value}>
            {option.value}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        required
        fullWidth
        focused
        multiline
        rows={4}
        label="Description"
        id="outlined-multiline-static"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        color="secondary"
        margin="normal"
      />

      <TextField
        required
        fullWidth
        focused
        label="Favorite Characters"
        id="outlined-required"
        value={favCharacters}
        onChange={(e) => setFavCharacters(e.target.value)}
        color="secondary"
        margin="normal"
      />

      <TextField
        required
        fullWidth
        focused
        label="Poster"
        id="outlined-required"
        value={poster}
        onChange={(e) => setPoster(e.target.value)}
        color="secondary"
        margin="normal"
      />

      <TextField
        required
        fullWidth
        focused
        type="number"
        label="Rating"
        id="outlined-required"
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
        color="secondary"
        margin="normal"
      />

      <Button variant="contained" color="secondary" className={styles.editBtn} onClick={handleUpdate}>
        Edit Review
      </Button>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}  // Posição do Snackbar
      >
        <Alert onClose={handleClose} severity={snackbarSeverity}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </section>
  );
}

export default Form;
