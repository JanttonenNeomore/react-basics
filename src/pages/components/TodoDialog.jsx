import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

const TodoDialog = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClickOpen = () => {
        setIsOpen(false);
    };
  
    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <>
            <Grid
                id="paper"
                size={4}
                sx={{
                    padding: '5px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                }}>
                <Button variant="outlined" onClick={handleClickOpen}>
                    Open simple dialog
                </Button>
            </Grid>
            { isOpen && (
                <Dialog 
                    fullWidth
                    open={isOpen}
                    onClose={handleClose} 
                    aria-labelledby="customized-dialog-title">
                    <DialogTitle>Todo Dialog</DialogTitle>
                    <DialogContent>
                    {/* TODO
                        Create input that uses props
                    
                    */}
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        {/* 
                        TODO: we would like to use parent components function here
                        <Button onClick={handleTodoSubmit}>Submit</Button> 
                        */}
                    </DialogActions>
                </Dialog>
            )}
        </>
    );
}
export default TodoDialog
TodoDialog.PropTypes = {

}