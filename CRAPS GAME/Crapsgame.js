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



///Graps HTML IDS

const crapsusernameinput = "craps-game2026"
const crapsRegistrationpane = "craps-registration-pane"
const crapsgamemainsection ="Crapsgame-Mainsection"
const crapstartMoney = "Moneycontainer"
const CrapsRounds =  "CrapsRoundssection"
const CrapsUserBetMoney = "Craps-User-Bet-Amount"


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
         currentMoney =startingMoney
         currentrounds = startingRounds
          setmoney(currentMoney)
          setrounds(currentrounds)
          beteven()
           setbet(minimumBet)
      }

      function setmoney(money){
         document.getElementById("Moneycontainer").innerHTML = money
      }

      function setrounds(rounds){
         document.getElementById("crapsroundsettings").innerHTML = rounds
      }
      


      function beteven(){
         choosebet(bets.even)
      }


      function betodd(){
         choosebet(bets.odd)
      }

      function choosebet (bet){
         currentbets = bet
         document.getElementById(currentbets).style.backgroundColor = "red"
         
         const deselect = bet == bets.even ? bets.odd : bets.even
         document.getElementById(deselect).style.backgroundColor = "transparent"
      }



      function increaseBet (){
         setbet(Math.min(currentBetAmount + minimumBet, currentMoney))
      }


      function decreaseBet (){
         setbet(Math.max(currentBetAmount-minimumBet,minimumBet))
      }


      function setbet(betmoney){
         currentBetAmount = betmoney
         document.getElementById(CrapsUserBetMoney).innerHTML= "$" + betmoney
      }