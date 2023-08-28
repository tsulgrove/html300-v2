// Code that requires the DOM be loaded should not be run until the DOM is loaded
document. addEventListener("DOMContentLoaded", function(){

  // Find the example form, and handle its submit event
  const exampleForm = document.querySelector('#example-form')

  exampleForm.addEventListener('submit', function(event){
    // Prevent the form from trying to submit to a server
    event.preventDefault()

    // An array that we can transform based on user input
    let data = [0, 1, 2, 3, 5, 8]

    const inputField = document.querySelector('#example-form .input')
    const userInput = inputField.value
    const userNumber = parseInt(userInput)

    // If the user's input was a number, push it into the array and continue
    if(!isNaN(userNumber)){
      data.push(userNumber)

      // Use reduce to sum all the numbers in the data array
      const sum = data.reduce((accumulator, currentElement) => accumulator + currentElement);

      // Output the total to the page- no need to convert the numeric sum back to a string, HTML will just print the number as a string
      document.querySelector('#example-form .output').innerHTML = sum
    }

    // Clear the form field so the user can try again
    inputField.value = ''
  })


  // add array by the value
  const form1 = document.querySelector('#form1')

  form1.addEventListener('submit', function(event){
    // Prevent the form from trying to submit to a server
    event.preventDefault()

    // An array that we can transform based on user input
    let data = [0, 1, 2, 3, 5, 8]

    const inputField = document.querySelector('#form1 .input')
    const userInput = inputField.value
    const userNumber = parseInt(userInput)

    // If the user's input was a number
    if(!isNaN(userNumber)){

      // Use map to add the value to each array member
      const output = data.map(function(value) { return value + userNumber});

      // Output the total to the page- no need to convert the numeric sum back to a string, HTML will just print the number as a string
      document.querySelector('#form1 .output').innerHTML = output
    }

    // Clear the form field so the user can try again
    inputField.value = ''
  })


  const form2 = document.querySelector('#form2')
  // find elements above or below value
  form2.addEventListener('submit', function(event){
    // Prevent the form from trying to submit to a server
    event.preventDefault()

    // An array that we can transform based on user input
    let data = [0, 1, 2, 3, 5, 8]

    const inputField = document.querySelector('#form2 .input')
    const userInput = inputField.value
    const userNumber = parseInt(userInput)

    // If the user's input was a number
    if(!isNaN(userNumber)){

      // use filter to filter the array values
      const output = data.filter(function(value) { return value > userNumber});

      // Output the total to the page- no need to convert the numeric sum back to a string, HTML will just print the number as a string
      document.querySelector('#form2 .output').innerHTML = output
    }

    // Clear the form field so the user can try again
    inputField.value = ''
  })


  const form3 = document.querySelector('#form3')
  // try and find the value

  form3.addEventListener('submit', function(event){
    // Prevent the form from trying to submit to a server
    event.preventDefault()

    // An array that we can transform based on user input
    let data = [0, 1, 2, 3, 5, 8]

    const inputField = document.querySelector('#form3 .input')
    const userInput = inputField.value
    const userNumber = parseInt(userInput)

    // If the user's input was a number
    if(!isNaN(userNumber)){

      // Check if the array includes the number
      const output = data.includes(userNumber)

      // Output the total to the page- no need to convert the numeric sum back to a string, HTML will just print the number as a string
      document.querySelector('#form3 .output').innerHTML = output
    }

    // Clear the form field so the user can try again
    inputField.value = ''
  })


  const form4 = document.querySelector('#form4')
  // print out with string interpolation

  form4.addEventListener('submit', function(event){
    // Prevent the form from trying to submit to a server
    event.preventDefault()

    const inputField = document.querySelector('#form4 .input')
    const userInput = inputField.value
    const userNumber = parseInt(userInput)

    // If the user's input was a number
    if(!isNaN(userNumber)){

      // Build out the string output
      const output = `Your number is: ${userNumber}`

      // Output the total to the page- no need to convert the numeric sum back to a string, HTML will just print the number as a string
      document.querySelector('#form4 .output').innerHTML = output
    }

    // Clear the form field so the user can try again
    inputField.value = ''
  })
})