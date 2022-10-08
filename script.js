var y = Math.floor(Math.random() * 100 )+ 1;
console.log(y)

var allowedguesses = 1;




var guess = document.getElementsByClassName("guess")
var button = document.getElementById("button")
button.addEventListener("click", guessthenumber)
function guessthenumber(e) {
    e.preventDefault()
   
 
    console.log(allowedguesses)
    var x = document.getElementById("guessField").value;
    console.log(x)
        if (x == y)
        {
            alert("YAY! You got the right number in " + allowedguesses + " tries!");
            document.body.style.backgroundColor = "green"
            setTimeout(() => {window.location.reload() 
                }, "3000")
                
           
    
           
        }
        else if (x > y) 
        {
            
            alert("try a lower number");
            document.body.style.backgroundColor = 'red'
        
            allowedguesses++;
            if (allowedguesses == 6 ){
                alert("You ran out of tries")
                window.location.reload()
            }
        }
        else if (x < y)
        {
            
            alert("try higher");
            document.body.style.backgroundColor = 'red'
            allowedguesses++;
            if (allowedguesses == 6 ){
                alert("You ran out of tries")
                window.location.reload() 
            }
        }
       
}



