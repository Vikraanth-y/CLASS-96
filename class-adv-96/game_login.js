
function addUser() {
  document.getElementById("player1_name_input").value;
   document.getElementById("player2_name_input").value;

    //Set "player1_name" using localStorage.setItem() function
	  //Set "player2_name" using localStorage.setItem() function

player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

    window.location = "game_page.html";
}

