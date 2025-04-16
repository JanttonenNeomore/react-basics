import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

const BookDialog = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [newBook, setNewBook] = useState({})
    let editMode = props.editMode || false;

    useEffect(() => {
        if (isOpen && editMode) {
            setNewBook({
                id: props.editBook.id,
                bookTitle: props.editBook.bookTitle,
                bookAuthor: props.editBook.bookAuthor, 
                publishingYear: props.editBook.publishingYear, 
                bookGenre: props.editBook.bookGenre 
            })
        } else if (isOpen){
            setNewBook({
                id: props.bookList.length + 1,
                bookTitle: '', 
                bookAuthor: '', 
                publishingYear: 2025, 
                bookGenre: ''
            })
        }
    }, [isOpen])

    const handleClickOpen = () => {
        setIsOpen(true);
    };
  
    const handleClose = () => {
        setIsOpen(false);
    };
    
    const handleSave = (event) => {
        event.preventDefault();
        if(editMode) {
            props.saveEditedBook(newBook)
        } else {
            // You would like to have some validation but textfield inputs already handle that
            // const isInvalid = Object.keys(newBook).some(sKey => !newBook[sKey])
            props.addBook(newBook)
        }
        handleClose();
    };


    // You can also just use function to handle input change
    // const handleChange = (event) => {
    //     setNewBook({...newBook, [event.target.name]: event.target.value});
    // }

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
            { editMode ? 
                (<Button variant="outlined" onClick={handleClickOpen}>
                    Edit
                </Button> ) :             
                (<Button variant="outlined" onClick={handleClickOpen}>
                    Open simple dialog
                </Button>)}
            </Grid>
            { isOpen && (
                // <Dialog 
                //     fullWidth
                //     open={isOpen}
                //     onClose={handleClose} 
                //     aria-labelledby="customized-dialog-title"
                //     // slotprops: The props used for each slot inside
                //     slotProps={{
                //         paper: {
                //         component: 'form',
                //         onSubmit: e => handleSave(e)
                //         },
                //     }}
                // >
                <Dialog 
                    fullWidth
                    open={isOpen}
                    onClose={handleClose} 
                    aria-labelledby="customized-dialog-title">
            { editMode ? ( <DialogTitle>Edit Mode</DialogTitle> ) :
            ( <DialogTitle>Add new book</DialogTitle> )}
            <DialogContent>
                { editMode ? 
                ( <DialogContentText>
                    Edit current book
                  </DialogContentText> ) : 
                ( <DialogContentText>
                    Add a new book and press Submit
                  </DialogContentText> )}

                {/* <TextField
                    autoFocus
                    required
                    margin='dense'
                    name='bookTitle'
                    label='Book Title'
                    type='text'
                    variant='standard'
                    value={newBook.bookTitle}
                    onChange={handleChange}
                /> */}

                <TextField
                    autoFocus
                    fullWidth
                    required
                    margin='dense'
                    name='bookTitle'
                    label='Book Title'
                    type='text'
                    variant='standard'
                    value={newBook.bookTitle}
                    onChange={e => setNewBook({ ...newBook, bookTitle: e.target.value })}
                />

                <TextField
                    autoFocus
                    fullWidth
                    required
                    margin='dense'
                    name='bookAuthor'
                    label='Book Author'
                    type='text'
                    variant='standard'
                    value={newBook.bookAuthor}
                    onChange={e => setNewBook({ ...newBook, bookAuthor: e.target.value })}
                />

                <TextField
                    autoFocus
                    fullWidth
                    required
                    margin='dense'
                    name='publishingYear'
                    label='Publishing year'
                    type='number'
                    variant='standard'
                    value={newBook.publishingYear}
                    onChange={e => setNewBook({ ...newBook, publishingYear: e.target.value })}
                />

                <TextField
                    autoFocus
                    fullWidth
                    required
                    margin='dense'
                    name='bookGenre'
                    label='Genre'
                    type='text'
                    variant='standard'
                    value={newBook.bookGenre}
                    onChange={e => setNewBook({ ...newBook, bookGenre: e.target.value })}
                />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSave}>Submit</Button>
                </DialogActions>
            </Dialog>
            )}
        </>
    );
}
export default BookDialog;    
BookDialog.propTypes = {
    addBook: PropTypes.func,
    saveEditedBook: PropTypes.func,
    bookList: PropTypes.array.isRequired,
    editBook: PropTypes.object,
    editMode: PropTypes.bool.isRequired
};