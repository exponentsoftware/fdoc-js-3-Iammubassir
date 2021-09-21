
/* b. Create a function called ***signIn*** which allows user to sign in to the application
 */

const signIn = (user_input) => {
    for (let user of users) {
      if (
        user.email == user_input.email &&
        user.password == user_input.password
      ) {
        user.isLoggedIn = true;
        return "Welcome to the application " + user.username;
      }
    }
    return "Email or Password incorrect";
  };
  
  const user_input = {
    email: "brook@brook.com",
    password: "123111",
  };
  // console.log(signIn(user_input));