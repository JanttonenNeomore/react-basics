import React, { useState } from 'react';
// import TodoDialog from './components/TodoDialog';
import {
  Grid,
  TextField
} from '@mui/material';

const TodoPage = () => {
    const [text, setText] = useState('')
    // const [newTodo, setNewTodo] = useState('')

    // TODO: 
    // Create function to add as a prop to dialog

    return (
        <>
          <Grid 
            container spacing={2}
            sx={{ justifyContent: 'space-between' }}>
            <Grid
                id="paper"
                size={12}
                sx={{
                    padding: '5px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                }}>
                {/* TODO: Conditional text if newTodo exists */}
                <p>Would you wanna write something?</p>
                <TextField
                    autoFocus
                    margin='dense'
                    name='text'
                    label='Text'
                    type='text'
                    variant='standard'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                {/* 
                    TODO:
                    Add dialog and props to dialog
                */}
            </Grid>
          </Grid>
        </>
      )
}
export default TodoPage