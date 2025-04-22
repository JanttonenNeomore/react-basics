import { useState } from 'react'
import {
  Tabs,
  Tab
} from '@mui/material';

// Pages
import BasicsPage from '../pages/BasicsPage';
import BookshopPage from '../pages/BookshopPage';
import TodoPage from '../pages/TodoPage';

const TabNavigation = () => {
  const [page, setPage] = useState('')

  const handleChange = (oEvent, sPageName) => {
    setPage(sPageName);
  }

  return (
    // Note, this might be old way of doing TabNavigation!
    // EXP uses more complex way of navigation like BrowserNavigation
    <>
        <Tabs
            value={page}
            onChange={handleChange}
            role="navigation"
            centered='true'
        >
            <Tab value='' label='Basics' />
            <Tab value='bookshop' label='Bookshop' />
            <Tab value='todo' label='Todo' />
        </Tabs>
        { page === '' && <BasicsPage /> }
        { page === 'bookshop' && <BookshopPage /> }
        { page === 'todo' && <TodoPage /> }
    </>
  )
}
export default TabNavigation