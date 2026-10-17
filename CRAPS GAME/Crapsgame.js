///Craps Game MAIN Data

let crapsusername  = ""


///Graps Game settings

const  startingMoney =  1000 //Stores the Game settings to initial deposit and rounds
const startingRounds = 0

//In-Game Variables
let currentMoney = startingMoney
let currentrounds = startingRounds //Runs when the Page loads for the first time




///Graps HTML IDS

const crapsusernameinput = "craps-game2026"
const crapsRegistrationpane = "craps-registration-pane"
const crapsgamemainsection ="Crapsgame-Mainsection"
const crapstartMoney = "Moneycontainer"
const CrapsRounds =  "CrapsRoundssection"


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
      }

      function setmoney(money){
         document.getElementById("Moneycontainer").innerHTML = money
      }

      function setrounds(rounds){
         document.getElementById("crapsroundsettings").innerHTML = rounds
      }