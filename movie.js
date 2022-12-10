// Movie App

var users = [
  {
    name: 'Henry Love',
    id: 5967,
    status: 'active',
    movies: [
          {
            name:"Spiderman",
            producer:"Marvel"
          },
          {
            name:"Justice League",
            producer:"DC"
          },
      ]
  }
  ]
  
  function Movie(id, username) {
    this.add = (name, producer) => {
      for(var user of users) {
        if(username === user.name || id === user.id) {
          user.movies.push(
            {
              name: name,
              producer: producer
            }
            )
        }
      }
    }
  }
  
  console.log(users[0])
  
  // Add a new movie for John Doe
var henry = new Movie(5967)

henry.add('Black Widow', 'Marvel')

  console.log(users[0])