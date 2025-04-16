import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import TodoDialog from './components/TodoDialog';

const TodoPage = () => {
    const [text, setText] = useState('')
    // const [newTodo, setNewTodo] = useState('')

    // const handleTodoSubmit = (newTodo) => {
    //     setNewTodo(newTodo)
    // }


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
                    Add props to dialog
                */}
                <TodoDialog />
            </Grid>
          </Grid>
        </>
      )
}
export default TodoPage