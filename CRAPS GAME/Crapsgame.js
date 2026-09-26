const crapsusernameinput = "craps-game2026"
const crapsRegistrationpane = "craps-registration-pane"
const crapsgamemainsection ="Crapsgame-Mainsection"




      function crapsgame() {
         let crapsusername = (document.getElementById(crapsusernameinput).value)
         alert("Got: " + crapsusername)
        removeRegistrationpane ()
        Showmaingamesection () 
      }

      function removeRegistrationpane () {
         document.getElementById(crapsRegistrationpane).style.display = "None"
      }


      function Showmaingamesection () {
          document.getElementById(crapsgamemainsection).style.display = "block"
      }