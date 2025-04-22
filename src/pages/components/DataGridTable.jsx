import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Grid from '@mui/material/Grid';
import BookDialog from './BookDialog';

const DataGridTable = (props) => {
    const [columnDefs] = useState([
        { field: 'id', headerName: 'ID', width: 50 },
        { field: 'bookTitle', headerName: 'Title', sortable: true, filter: true, width: 300 },
        { field: 'bookAuthor', headerName: 'Author', sortable: true, filter: true, width: 200 },
        { field: 'publishingYear', headerName: 'Year published', sortable: true, filter: true, width: 150 },
        { field: 'bookGenre', headerName: 'Genre', sortable: true, filter: true, width: 200 },
        {
          headerName: 'Edit book',
          width: 300,
          renderCell: (params) => (
            <BookDialog 
              bookList={props.bookList} 
              editBook={params.row} 
              editMode={true} 
              saveEditedBook={props.saveEditedBook} />
          )
        },
    ]);

    return (
        <Grid sx={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={props.tableData}
            columns={columnDefs}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            disableRowSelectionOnClick='true'
          />
        </Grid>
      );
}

export default DataGridTable;