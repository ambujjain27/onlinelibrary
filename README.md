The Application uses react for UI and redux for state management. 

Reducer is made in ./store/reducer.js file.

When we enter values in the text fields(Book name, Author name, count and book description), the corresponding local state of the form is changed, and when we click on add book button, the addbook() is called.
This function calls the dispach function with the type and value. This function calls the reducer which concats the state of this form with the initial state and the state is returned.

When the component is updated a table entry is generated.