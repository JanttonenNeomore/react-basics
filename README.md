# React Basics

### Setting up the application

```shell
npm install
npm run dev
```

### Handy tools for browser

 - [React Development Tools](https://react.dev/learn/react-developer-tools)
 - [Redux DevTools](https://github.com/reduxjs/redux-devtools)

### ReactDev - real good info!

 - [Thinking in React](https://react.dev/learn/thinking-in-react)
 - [State: A Component's Memory](https://react.dev/learn/state-a-components-memory)
 - [Render and Commit](https://react.dev/learn/render-and-commit)
 - [Extracting State Logic into a Reducer](https://react.dev/learn/extracting-state-logic-into-a-reducer)
 - [Scaling Up with Reducer and Context](https://react.dev/learn/scaling-up-with-reducer-and-context)

### Useful ES6 features
#### Arrow functions
```shell
    oneFuntion: function(x) {
        return x + x;
    }

    // ES6
    const oneFunction = (x) => {
        return x + x;
    }

    const oneFunction = x => x + x;
```

#### Template literals
```shell
    let sentence = 'Hello ' + userParam + ', good morning!'

    // ES6
    let sentence = `Hello ${userParam}, good morning!`
```

#### Object destructuring
```shell
    const newBook = {
        bookTitle: 'Hunger Games',
        bookAuthor: 'Suzane Collins',
        publishingYear: 2008,
        bookGenre: 'Dystopia' 
    }

    // ES6
    const { bookTitle, bookAuthor, publishingYear, bookGenre } = newBook;
```
