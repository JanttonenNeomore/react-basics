import { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const BasicsPage = () => {
    const [count, setCount] = useState(0)
    const [secondButtonCount, setSecondButtonCount] = useState(1)
    const [secondButtonCount2, setSecondButtonCount2] = useState(2)
    const [manyClicks, setManyClicks] = useState(false)
    const [isLoaded, setIsLoaded] = useState(false)

    // useEffect(() => {
    //     console.log('Initial load right?')
    // });

    useEffect(() => {
        setIsLoaded(true)
    }, [])

    useEffect(() => {   
        if (count === 40) {
            setManyClicks(true)
        }
    }, [count])


    /* =========================================================== */
	/* ES6 features	                                	   		   */
	/* =========================================================== */

    /* 
        Arrow functions:
        oneFuntion: function(oneParam) {
            do something with oneParam
        }
        ES6
        const oneFunction = (x) => {
            do something with one param
        }
    
        Template literals:
        let param = 'Hello ' + userParam + ', good morning!'
        ES6
        let param = `Hello ${userParam}, good morning!`
        
        Object destructuring:
        const person = {
            firstName: 'John',
            lastName: 'Johnson',
            email: 'j.johnson@mail.com'
        };
        ES6
        const { firstName, lastName, email } = person;
    */

    // Batching - Component re-renders after all state updates
    const increment = () => {
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
                    <p>Counters: {secondButtonCount} {secondButtonCount2} </p>
                    <Button onClick={increment}>Increment</Button>
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
                { isLoaded ? ( <p>Hello initial load is done</p> ) : ([])}
                { manyClicks ? ( <p>I quess you pressed button 40 times</p> ) : ([])}
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