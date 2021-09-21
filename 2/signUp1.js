/* a. Create a function called ***signUp*** which allows user to add to the collection. 
 If user exists, inform the user that he has already an account.
*/

const signup = (newuser) => {
    let count = 0;
    for (let user of users) {
      if (user.email == newuser.email) {
        count++;
        return "User already exists";
      }
    }
    if (count == 0) {
      users.push(newuser);
      return "The user has been added";
    }
  };
  
  const newuser = {
    _id: "d6ye9y",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "17/05/2019 10:00 AM",
    isLoggedIn: false,
  };
  // console.log(signup(newuser));