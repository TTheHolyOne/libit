// Where ur shower joke is put
const joke = document.getElementById("thought");
const btn = document.querySelector("button");


//Generate them!!!
async function gen() {
    try {
      const response = await fetch("https://official-joke-api.appspot.com/random_joke");
      const data = await response.json();
    
      const question = data.setup;
      const answer = data.punchline;
      showJoke(question, answer);
   
    } catch (error) {
      console.log("Error: "+error);
    }
  };
  
  function showJoke(question, answer) {
    joke.innerText = question+"\n\n\n"+answer;
  };
  
  btn.addEventListener("click", () => {
    document.getElementById("footer").style.visibility = "visible";
    gen();
  });