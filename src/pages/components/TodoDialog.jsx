import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
    Button,
    TextField,
    Grid,
    Dialog,
    DialogTitle,
    DialogActions,
    DialogContent
} from '@mui/material';

const TodoDialog = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClickOpen = () => {
        setIsOpen(false);
    };
  
    const handleClose = () => {
        setIsOpen(false);
    };

    const handleTodoSubmit = (newText) => {
        console.log(newText);
        // TODO 
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
                        <Button onClick={handleTodoSubmit}>Submit</Button> 
                    </DialogActions>
                </Dialog>
            )}
        </>
    );
}
export default TodoDialog
TodoDialog.PropTypes = {

}