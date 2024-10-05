import { Button, Alert, Snackbar } from "@mui/material";
import styles from "./DeleteBtn.module.css";
import React, { useState } from "react";
import ClearIcon from '@mui/icons-material/Clear';
import { deleteGame } from "../../../Api/gamesAPI";
import { useNavigate } from 'react-router-dom';

type DeleteBtnProps = {
  gameId: string;
};

function DeleteBtn({ gameId }: DeleteBtnProps) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      await deleteGame(gameId);
      setOpen(true);
    } catch (error) {
      console.error('Error deleting the game:', error);
    }
  };

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
    navigate('/gallery');
  };

  return (
    <>
      <Button variant="outlined" color="error" className={styles.DeleteBtn} onClick={handleDelete}>
        Delete
        <ClearIcon fontSize="small" />
      </Button>

      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Game Review deleted successfully!
        </Alert>
      </Snackbar>
    </>
  );
}

export default DeleteBtn;