const crapsusernameinput = "craps-game2026"
const crapsRegistrationpane = "craps-registration-pane"
const crapsgamemainsection ="Crapsgame-Mainsection"




      function crapsgame() {
         let crapsusername = (document.getElementById(crapsusernameinput).value)
       


         

        let crapsfirtchar = /^[0-9]|[^a-zA-Z0-9]/g 
        
        if (crapsusername.length < 5 || crapsfirtchar.test(crapsusername) ){
         alert("Username must be at least 5 characters long, alphanumeric and underscore, no spaces. And must not start with a number")

        }else{ 
        removeRegistrationpane ()
        Showmaingamesection () 
      }}

      function removeRegistrationpane () {
         document.getElementById(crapsRegistrationpane).style.display = "None"
      }


      function Showmaingamesection () {
          document.getElementById(crapsgamemainsection).style.display = "block"
      }