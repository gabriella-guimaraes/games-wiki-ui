import React from 'react';
import styles from './EditBtn.module.css';
import { Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';

type EditBtnProps = {
    gameId: string
}

function EditBtn({ gameId }: EditBtnProps) {
    const navigate = useNavigate();

    const handleNavigate = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        navigate(`/editReview/${gameId}`);
    }

  return (
    <>
        <Button variant='outlined' color='primary' className={styles.EditBtn} onClick={handleNavigate}>
            Edit
            <EditIcon fontSize='small' />
        </Button>
    </>
  )
}

export default EditBtn;