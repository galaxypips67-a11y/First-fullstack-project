///Craps Game MAIN Data

let crapsusername  = ""


///Graps Game settings

const  startingMoney =  1000 //Stores the Game settings to initial deposit and rounds
const startingRounds = 0
const   bets = {
   even: "EVEN",
   odd:   "ODD"
}                     //create the type of bets we are about to make.

const minimumBet = 100

//In-Game Variables
let currentMoney = startingMoney
let currentrounds = startingRounds //Runs when the Page loads for the first time
let currentbets = bets.even
let currentBetAmount = minimumBet
let canchangeBet = true


///Graps HTML IDS

const crapsusernameinput = "craps-game2026"
const crapsRegistrationpane = "craps-registration-pane"
const crapsgamemainsection ="Crapsgame-Mainsection"
const crapstartMoney = "Moneycontainer"
const CrapsRounds =  "CrapsRoundssection"
const CrapsUserBetMoney = "Craps-User-Bet-Amount"
const dicerollElements = "Craps-rolldice-animation-container"
const rolldicenodisplay = "Craps-rolldice-nodisplay"


///Graps Input user
      function crapsgame() {
        crapsusername = (document.getElementById(crapsusernameinput).value)
        let crapsfirstcharacter= /^[0-9]|[^a-zA-Z0-9._]/g 
        
        if (crapsusername.length < 5 || crapsfirstcharacter.test(crapsusername) ){
         alert("Username must be at least 5 characters long, alphanumeric and underscore, no spaces. And must not start with a number")

        }else{ 
        removeRegistrationpane ()
        Showmaingamesection () 
        crapsgamesetting()
      }}

      function removeRegistrationpane () {
         document.getElementById(crapsRegistrationpane).style.display = "None"
      }


      function Showmaingamesection () {
          document.getElementById(crapsgamemainsection).style.display = "block"
      }


      function crapsgamesetting(){
         document.getElementById("CrapsUsercontainer").innerHTML =  crapsusername
          setmoney(startingMoney)
          setrounds( startingRounds)
          beteven()
           setbet(minimumBet)
      }

      function setmoney(money){
         currentMoney = money
         document.getElementById("Moneycontainer").innerHTML = money
      }

      function setrounds(rounds){
          currentrounds =rounds
         document.getElementById("crapsroundsettings").innerHTML = rounds
      }
      


      function beteven(){
         choosebet(bets.even)
      }


      function betodd(){
         choosebet(bets.odd)
      }

      function choosebet (bet){
         if (canchangeBet){
             currentbets = bet
         document.getElementById(currentbets).style.backgroundColor = "red"
         const deselect = bet == bets.even ? bets.odd : bets.even
         document.getElementById(deselect).style.backgroundColor = "transparent"
         }
        
      }



      function increaseBet (){
         setbet(Math.min(currentBetAmount + minimumBet, currentMoney))
      }


      function decreaseBet (){
         setbet(Math.max(currentBetAmount-minimumBet,minimumBet))
      }



      function setbet(betmoney){
         if (canchangeBet){
         currentBetAmount = betmoney
         document.getElementById(CrapsUserBetMoney).innerHTML= "$" + betmoney
         }
    
      }



      function Rolldice(){
         canchangeBet = false
         formatdicerolled()
         document.getElementById(rolldicenodisplay).style.display = "none"
         const dicerollelement = document.getElementById(dicerollElements)
         rollADie({ element: dicerollelement, numberOfDice: 2, callback:processdiceresult, delay:10000000});
      }

         


     window.addEventListener("resize", formatdicerolled)
      function formatdicerolled(){
         console.log("resized")
         const vw = window.innerWidth*0.8
         const vh = window.innerHeight*0.8
         const widthscale = Math.min(700,vw,vh)
         const heightscale = widthscale * 0.714
         const scale = heightscale/367.8528
         document.getElementById(dicerollElements).style.transform = "scale(" + scale + ")"
      }

      function processdiceresult(diceresult){
         const sum = diceresult.reduce((partialSum, a) => partialSum + a, 0);
          let diceResult = bets.even
          if (sum % 2 === 1 ){
            diceResult = bets.odd
          }
         setrounds(currentrounds + 1)
          if(diceResult === currentbets){
            setmoney(currentMoney + currentBetAmount)
          }else{
            setmoney(currentMoney - currentBetAmount)
          }
      }
      