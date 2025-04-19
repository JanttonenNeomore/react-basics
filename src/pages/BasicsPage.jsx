import { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';

// Conditional rendering
// Creating component outside of the main component
const IsLoaded = ({ isLoaded }) => {
    if (isLoaded) {
        return <p>Hello initial load is done</p>
    }
    return <p>Opps initial load is not done?</p>
}

const AlertMessage = ({ alert }) => {
    if (alert.visible) {
       return (
        <Alert severity="error" sx={{ mt: 2 }}>
            {alert.message}
        </Alert>
       )
    }
    return null
}

const BasicsPage = () => {
    const [count, setCount] = useState(0)
    const [secondButtonCount, setSecondButtonCount] = useState(1)
    const [secondButtonCount2, setSecondButtonCount2] = useState(2)
    const [isLoaded, setIsLoaded] = useState(false)
    const [alert, setAlert] = useState({
        visible: false,
        message: ''
    })

    // useEffect(() => {
    //     console.log('Initial load right?')
    // });

    useEffect(() => {
        setIsLoaded(true)
    }, [])

    useEffect(() => {   
        if (count === 20) {
            setAlert({
                visible: true,
                message: 'I quess you pressed button 20 times'
            })
        }
    }, [count])

    // Batching - Component re-renders after all state updates
    const batchingMultipleStates = () => {
        setSecondButtonCount(secondButtonCount + 1);
        setSecondButtonCount2(secondButtonCount2 + 1);
    }

  return (
    <>  
        <Grid 
            container spacing={2}
            sx={{ justifyContent: 'center' }}>

            {/* useState */}
            <Grid
                id="paper"
                size={4}
                sx={{
                    padding: '5px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                }}>
                <h2>useState</h2>

                {/* Typical button with a state */}
                <Button onClick={() => setCount((count) => count + 1)}>
                    Button count {count}
                </Button>
                
                {/* Button with batching */}
                <h3>Button with batching</h3>
                <Grid
                    sx={{ display: 'flex', flexDirection: 'row'}}>
                    <p>Counters: {secondButtonCount} {secondButtonCount2}    </p>
                    <Button onClick={batchingMultipleStates}>Batch</Button>
                </Grid>
            </Grid>

            {/* useEffect */}
            <Grid
                id="paper"
                size={4}
                sx={{
                    padding: '5px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                }}>
                <h2>useEffect</h2>

                {/* Initial load & conditional rendering */}
                <IsLoaded isLoaded={isLoaded} />
                <AlertMessage alert={alert} />

                {/* Other way to do conditional rendering:
                { alert.visible ? (
                    <Alert severity="error" sx={{ mt: 2 }}>
                        {alert.message}
                    </Alert> )
                : null }
                */}
                <Button 
                    variant='outlined' 
                    onClick={() => setIsLoaded(false)} 
                    disabled={!isLoaded}>
                    Set isLoaded
                </Button>
            </Grid>
        </Grid>
    </>
  )
}

export default BasicsPage

/* =========================================================== */
/* ES6 features	                                	   		   */
/* =========================================================== */

/* 
    Arrow functions:
    oneFuntion: function(oneParam) {
        do something with oneParam
    }
    ES6
    const oneFunction = (oneParam) => {
        do something with one param
    }

    Template literals:
    let param = 'Hello ' + userParam + ', good morning!'
    ES6
    let param = `Hello ${userParam}, good morning!`
    
    Object destructuring:
    const person = {
        firstName: 'Abby',
        lastName: 'Wabby',
        email: 'j.wabby@mail.com'
    };
    ES6
    const { firstName, lastName, email } = person;
*/