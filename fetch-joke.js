const jokeURI = 'https://sv443.net/jokeapi/v2/joke/Programming';

// fetch information
const getJoke = async () => {
  try {
    const response = await fetch(jokeURI)
    const obj = await response.json()
    console.log(`FETCHED. Response JSON ${obj}`)
    console.log(JSON.stringify(obj));
    const joke = obj.joke  || 'No joke for you.'
    document.getElementById("joke").innerHTML = joke;
  } catch (error) { console.error(error) }
}

 const area =(x,y,z) => {
   return Math.sqrt(((x + y + z)/2)*(((x + y + z)/2)-x)*(((x + y + z)/2)-y)*(((x + y + z)/2)-z));
  }