  const emojiButtons = document.querySelectorAll(".emoji-btn");
  const resultMessage = document.getElementById("result-message");
  const randomEmojiDisplay = document.getElementById("random-emoji");
  const playAgainBtn = document.getElementById("play-btn");

  const emojis = ["😀","😂","😎","😍","😡"];

  let randomEmoji;

  function getRandomEmoji(){
    const randomIndex = Math.floor(Math.random() * emojis.length);
    return emojis[randomIndex];
  }

  function handleEmojiGuess(event){
    const userGuess = event.target.textContent;
    if(userGuess === randomEmoji){
        resultMessage.textContent = "Correct! You Guessed the right emoji!";
        resultMessage.style.color = "green"; 
    } else {
        resultMessage.textContent = `Oops! The Correct emoji was ${randomEmoji}`;;
        resultMessage.style.color = "red";
    }
    randomEmojiDisplay.textContent = randomEmoji;
    playAgainBtn.style.display = "inline-block"
    emojiButtons.forEach((button)=>{button.disabled = true});
  }
  function resetGame(){
    resultMessage.textContent="";
    playAgainBtn.style.display="none";
    randomEmoji=getRandomEmoji();
    randomEmojiDisplay.textContent = "❓";
    emojiButtons.forEach((button)=>{button.disabled = false});
  }
  emojiButtons.forEach((button)=>{
    button.addEventListener("click", handleEmojiGuess);
  });

  playAgainBtn.addEventListener("click", resetGame);

  resetGame();
