debugger;
// 1. ask the user the name
const responseFromPrompt = prompt("Enter your name");
// 2. if we get a null then console error saying no response received
if (responseFromPrompt == null) {
  alert("No response received!!!");
} else {
// 3. else we confirm with the user as what they entered is what they meant
  const responseFromConfirm = confirm("Is " + responseFromPrompt + " your name?");
  if (responseFromConfirm) {
// 4. if confirmed console the name
    console.info('Cool name!!!');
  } else {
// 5. else console that it does not make sense
    console.warn('OOPS, that does not make sense');
  }
}

if (responseFromPrompt) {
    console.log('response from prompt from if is:', responseFromPrompt);
} else {
    console.log('response from prompt from else is:', responseFromPrompt);
}
