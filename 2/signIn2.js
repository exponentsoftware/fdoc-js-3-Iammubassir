
/* b. Create a function called ***signIn*** which allows user to sign in to the application
 */
const users = [
    {
            _id: 'ab12ex',
            username: 'Alex',
            email: 'alex@alex.com',
            password: '123123',
            createdAt:'17/05/2019 9:00 AM',
            isLoggedIn: false
    },
    {
            _id: 'fg12cy',
            username: 'Asab',
            email: 'asab@asab.com',
            password: '123456',
            createdAt:'17/05/2019 9:30 AM',
            isLoggedIn: true
    },
    {
            _id: 'zwf8md',
            username: 'Brook',
            email: 'brook@brook.com',
            password: '123111',
            createdAt:'17/05/2019 9:45 AM',
            isLoggedIn: true
    },
    {
            _id: 'eefamr',
            username: 'Martha',
            email: 'martha@martha.com',
            password: '123222',
            createdAt:'17/05/2019 9:50 AM',
            isLoggedIn: false
    },
    {
            _id: 'ghderc',
            username: 'Thomas',
            email: 'thomas@thomas.com',
            password: '123333',
            createdAt:'17/05/2019 10:00 AM',
            isLoggedIn: false
    }
    ];
const signIn = (userInput) => {
    for (let user of users) {
      if (
        user.email == userInput.email &&
        user.password == userInput.password
      ) {
        user.isLoggedIn = true;
        return "Welcome to the application " + user.username;
      }
    }
    return "Email or Password incorrect";
  };
  
  const user_input = {
    email: 'thomas@thomas.com',
    password: '123333',
  };
  console.log(signIn(user_input));