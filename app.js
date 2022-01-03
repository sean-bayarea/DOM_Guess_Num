let min=1,
    max=10,
    guessLeft=3,
    winnNum=randomNum(min,max);

const game=document.querySelector('#game'),
      minNum=document.querySelector('.min-num'),
      maxNum=document.querySelector('.max-num'),
      guessBtn=document.querySelector('#guess-btn'),
      guessInput=document.querySelector('#guess-input'),
      message=document.querySelector('.message');

// assign the min and max number
minNum.textContent=min;
maxNum.textContent=max;

// start over
game.addEventListener('mousedown',function(e)
{
    if (e.target.className==="play-again"){
        window.location.reload();
    }
})

// listen to Click
guessBtn.addEventListener('click',function(){
    inputNum=parseInt(guessInput.value)
    console.log(inputNum)
    // judge the number
    if (isNaN(inputNum)|| inputNum <min || inputNum > max)
    {
        console.log(inputNum)
        
        message.color='red';
        message.textContent="input number is out of scope or no input."
    }
    else if(inputNum===winnNum)
    {
        guessInput.disabled=true;
        showMessage(true, `${winnNum} is correct`,true);
    }
    else
    {   
        guessLeft -=1;
        if (guessLeft<=0)
        {
            guessInput.disabled=true;
            showMessage(false, `Your LOST, the correct Number is ${winnNum}`,true);
           
        }
        else
        {
            guessInput.value="";
            showMessage(false, `${inputNum} is not Correct, ${guessLeft} guess left.`,false);
        }

        
    }
})

function showMessage(won, msg, reStart)
{
    won===true? color='green': color='red'
    guessInput.style.borderColor=color;
    message.style.color=color;
    message.textContent=msg;

    if (reStart)
    {
        guessBtn.value='Play again';
        guessBtn.className+="play-again";
    }
}

function randomNum(min,max)
{
    value1=Math.floor(Math.random()*(max-min)+min);
    return value1;
}