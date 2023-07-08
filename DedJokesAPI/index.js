let jokeBtn = document.getElementById("btn");
let joke = document.getElementById("idjoke");

const setHeader = {
  headers: {
    Accept: "application/json",
  },
};

// Using Promises
// function generateJokes() {
//   fetch("https://icanhazdadjoke.com", setHeader)
//     .then((res) => res.json())
//     .then((data) => {
//       joke.innerHTML = data.joke;
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }

// Using async await

const generateJokes = async () => {
  try {
    const res = await fetch("https://icanhazdadjoke.com", setHeader);
    const data = await res.json();
    joke.innerHTML = data.joke;
  } catch (error) {
    console.log(`The error is ${error}`);
  }
};

jokeBtn.addEventListener("click", generateJokes);
generateJokes();
