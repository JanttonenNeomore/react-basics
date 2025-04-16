import React, { useState } from 'react';
import DataGridTable from './components/DataGridTable'
import Grid from '@mui/material/Grid';
import BookDialog from './components/BookDialog';

const BookshopPage = () => {
  const initialRows = [
    { id: 1, bookTitle: 'Hunger Games', bookAuthor: 'Suzane Collins', publishingYear: 2008, bookGenre: 'Dystopia'},
    { id: 2, bookTitle: 'Twilight', bookAuthor: 'Stephenie Meyers', publishingYear: 2005, bookGenre: 'Fantasy romance'},
    { id: 3, bookTitle: 'This Is How You Lose the Time War', bookAuthor: 'Amal El-Mohtar', publishingYear: 2019, bookGenre: 'Sience fiction'}
  ];
  const [rows, setRows] = useState(initialRows);

  const handleAddBook = (newBook) => {
    const newArray = rows.concat([newBook]);
    setRows(newArray);
  };

  const saveChanges = (editedBook) => {
    console.log('We are in BookShop ', editedBook)
  }

  return (
    <>
      <Grid 
        container spacing={2}
        sx={{ justifyContent: 'center' }}>
        <DataGridTable tableData={rows} saveEditedBook={saveChanges}/>
        <BookDialog addBook={handleAddBook} bookList={rows} editMode={false} />
      </Grid>
    </>
  )
}

export default BookshopPage