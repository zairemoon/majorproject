/* JavaScript for Major Project */

// AJAX function
function loadFileInto(recipeID, listName, whereTo) {

  // 1. creating a new XMLHttpRequest object
  ajax = new XMLHttpRequest();

  // 2. define the fromFile variable with the passed recipe name and list
  fromFile = "recipes.php?recipeID=" + recipeID + "&recipeList=" + listName;

  console.log("From URL: " + fromFile); // output the URL result to the browser's devtools console

  // 3. defines the GET/POST method, the source, and the async value of the AJAX object
  ajax.open("GET", fromFile, true);

  // 4. provides code to do something in response to the AJAX request
  ajax.onreadystatechange = function() {

    if ((this.readyState == 4) && (this.status == 200)) { // if .readyState is 4, the process is done; and if .status is 200, there were no HTTP errors

      console.log("AJAX response: " + this.responseText);

      if (this.responseText != 0) {
        // parse the JSON into an array
        responseArray = JSON.parse(this.responseText);

        // loop through the array to build up <li> tags for the list
        responseHTML = "";
        for (x = 0; x < responseArray.length; x++) {
          responseHTML += "<li>" + responseArray[x] + "</li>";
        }

        // update the DOM with the responseHTML
        document.querySelector(whereTo).innerHTML = responseHTML;

      } else {
        console.log("Error: no recipe/list found.");
      }

    } else if ((this.readyState == 4) && (this.status != 200)) { // if .readyState is 4, the process is done; and if .status is NOT 200, output the error into the console

      console.log("Error: " + this.responseText);

    }

  } // end ajax.onreadystatechange function

  // 5. let's go -- initiate request and process the responses
  ajax.send();

}

// write a generic recipe object constructor
function Recipe(recipeTitle, recipeImageSrc, recipeContributor, recipeSubtitle, recipeID) {

  this.title = recipeTitle;
  this.imgSrc = recipeImageSrc;
  this.contributor = recipeContributor;
  this.subtitle = recipeSubtitle;
  this.id = recipeID;

  this.displayRecipe = function() {

    layoutTitle = document.querySelectorAll("#titleBanner h1");
    layoutTitle[0].innerHTML = this.title;

    layoutContributor = document.querySelectorAll("#titleBanner h2");
    layoutContributor[0].innerHTML = this.contributor;

    layoutSubtitle = document.querySelectorAll("#titleBanner h3");
    layoutSubtitle[0].innerHTML = this.subtitle;

    document.getElementById("titleBanner").style.backgroundImage = "url(" + this.imgSrc + ")";

    loadFileInto(this.id, "ingredients", "#ingredients ul");
    loadFileInto(this.id, "directions", "#directions ol");
    loadFileInto(this.id, "review", "#review ul");

  }
}

spinachDip = new Recipe(
  "Spinach Dip",
  "https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2875&q=80",
  "Contributed by Michelle Barr on allrecipes.com",
  "Holiday Hot Spinach Dip",
  "spinachDip",
);

bakedBrie = new Recipe(
  "Baked Brie",
  "https://images.unsplash.com/photo-1597715293892-3adab9fcb33d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80",
  "Contributed by Chef John on allrecipes.com",
  "Baked Stuffed Brie with Cranberries & Walnuts",
  "bakedBrie",
);

candiedPecans = new Recipe(
  "Candied Pecans",
  "https://images.unsplash.com/photo-1580691154746-88bedf3c1e47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
  "Contributed by Alix on allrecipes.com",
  "Sweet & Salty Candied Pecans",
  "candiedPecans"
)

grinchKabobs = new Recipe(
  "Grinch Kabobs",
  "https://images.unsplash.com/photo-1580691155297-c6dfa3ca61c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  "Contributed by CNM Catering on allrecipes.com",
  "Delicious Holiday Snack",
  "grinchKabobs"
)

puffPastry = new Recipe(
  "Puff Pastry",
  "https://images.unsplash.com/photo-1638839097440-bed9a9e1473a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80",
  "Contributed by Tea on allrecipes.com",
  "Spinach & Ricotta Puff Pastry Christmas Tree",
  "puffPastry"
)

simpleTurkey = new Recipe(
  "Roast Turkey",
  "https://images.unsplash.com/photo-1574672281194-db420378032d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
  "Contributed by Syd on all recipes.com",
  "A Simply Perfect Roast Turkey",
  "simpleTurkey",
)

honeyHam = new Recipe(
  "Glazed Ham",
  "https://images.unsplash.com/photo-1636301089839-967b4305d777?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
  "Contributed by Colleen on allrecipes.com",
  "Honey Glazed Ham",
  "honeyHam",
)

primeRib = new Recipe(
  "Prime Rib",
  "https://images.unsplash.com/photo-1625604087024-7fb428fc4626?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  "Contributed by Judy2River on allrecipes.com",
  "Christmas Prime Rib",
  "primeRib",
)

choppedPork = new Recipe(
  "Pork Chops",
  "https://images.unsplash.com/photo-1622052073730-04bbc497be48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2114&q=80",
  "Contributed by AllRecipesMember on allrecipes.com",
  "Caramel Apple Pork Chops",
  "choppedPork",
)

fullRoast = new Recipe(
  "Roast",
  "https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2367&q=80",
  "Contributed by Salsiepie on allrecipes.com",
  "Fullproof Rib Roast",
  "fullRoast",
)

gratinPotato = new Recipe(
  "Au Gratin Potatos",
  "https://images.unsplash.com/photo-1508313880080-c4bef0730395?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2272&q=80",
  "Contributed by Cathy Martin on allrecipes.com",
  "Creamy Au Gratin Potatoes",
  "gratinPotato",
)

greenBean = new Recipe(
  "Green Bean Casserole",
  "https://images.unsplash.com/uploads/141143339879512fe9b0d/f72e2c85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
  "Contributed by Jan on allrecipes.com",
  "Best Green Bean Casserole",
  "greenBean",
)

classicSweet = new Recipe(
  "Sweet Potatoes",
  "https://images.unsplash.com/photo-1541809570-35dcc3a080c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1625&q=80",
  "Contributed by Michelle Rene on allrecipes.com",
  "Classic Candied Sweet Potatoes",
  "classicSweet",
)

garlicMash = new Recipe(
  "Garlic Potatoes",
  "https://images.unsplash.com/photo-1631898039984-fd5f61fe8732?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
  "Contributed by Shawnah on allrecipes.com",
  "Red Garlic Mashed Potatoes",
  "garlicMash",
)

MacCheese = new Recipe(
  "Mac and Cheese",
  "https://images.unsplash.com/photo-1612152328178-4a6c83d96429?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2825&q=80",
  "Contributed by Judy on allrecipes.com",
  "Homemade Mac & Cheese",
  "MacCheese",
)

spicePie = new Recipe(
  "Pumpkin Pie",
  "https://images.unsplash.com/photo-1606443457823-860525939221?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2874&q=80",
  "Contributed by Eagle Brand on allrecipes.com",
  "Spicy Pumpkin Pie",
  "spicePie"
)

crinkleCookies = new Recipe(
  "Cookies",
  "https://images.unsplash.com/photo-1654178990976-b88c403b3257?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2825&q=80",
  "Contributed by Ingrid on allrecipes.com",
  "Chocolate Crinkle Cookies",
  "crinkleCookies"
)

christmasToffee = new Recipe(
  "Toffee",
  "https://images.unsplash.com/photo-1633964913707-0bed7de47021?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80",
  "Contributed by FunkySeaMonkey on allrecipes.com",
  "Christmas Toffee",
  "christmasToffee"
)

carrotCake = new Recipe(
  "Cake",
  "https://images.unsplash.com/photo-1595080622896-844ff207e639?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80",
  "Contributed by The All Recipes Community on allrecipes.com",
  "Carrot Cake",
  "carrotCake"

)

whiteRasp = new Recipe(
  "Cheesecake",
  "https://images.unsplash.com/photo-1609501967126-1a43c02f655c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80",
  "Contributed by Cindy Catudal Shank on allrecipes.com",
  "White Chocoloate CheeseCake",
  "whiteRasp"

)

cranPunch = new Recipe(
  "Cranberry Punch",
  "https://images.unsplash.com/photo-1620401493372-81df268809f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2592&q=80",
  "Contributed by Kada on allrecipes.com",
  "Delicious Cran Punch",
  "cranPunch"

)

holidayDrink = new Recipe(
  "Holiday Punch",
  "https://images.unsplash.com/photo-1600332062685-9192c8cc948c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2960&q=80",
  "Contributed by Aleta on allrecipes.com",
  "Christmas Punch",
  "holidayDrink"

)

orangeMimosa = new Recipe(
  "Mimosa",
  "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2835&q=80",
  "Contributed by Jodie Hamrick on allrecipes.com",
  "Christmas Morning Mimosa",
  "orangeMimosa"

)

appleCider = new Recipe(
  "Apple Cider",
  "https://images.unsplash.com/photo-1569383549224-4709f3502c94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
  "Contributed by",
  "Hot Apple Cider",
  "appleCider"

)

hotCocoa = new Recipe(
  "Cocoa",
  "https://images.unsplash.com/photo-1608735483220-4e7239a08ba5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2864&q=80",
  "Contributed by",
  "Candy Cane Hot Chocolate",
  "hotCocoa"

)

window.onload = function() {

  document.querySelector("#appRecipe1").onclick = function() {
    spinachDip.displayRecipe();
  }
  document.querySelector("#appRecipe2").onclick = function() {
    bakedBrie.displayRecipe();
  }
  document.querySelector("#appRecipe3").onclick = function() {
    candiedPecans.displayRecipe();
  }
  document.querySelector("#appRecipe4").onclick = function() {
    grinchKabobs.displayRecipe();
  }
  document.querySelector("#appRecipe5").onclick = function() {
    puffPastry.displayRecipe();
  }

  // Entrees

  document.querySelector("#entreeRecipe1").onclick = function() {
    simpleTurkey.displayRecipe();
  }
  document.querySelector("#entreeRecipe2").onclick = function() {
    honeyHam.displayRecipe();
  }
  document.querySelector("#entreeRecipe3").onclick = function() {
    primeRib.displayRecipe();
  }
  document.querySelector("#entreeRecipe4").onclick = function() {
    choppedPork.displayRecipe();
  }
  document.querySelector("#entreeRecipe5").onclick = function() {
    fullRoast.displayRecipe();
  }

  // Sides

  document.querySelector("#sideRecipe1").onclick = function() {
    gratinPotato.displayRecipe();
  }
  document.querySelector("#sideRecipe2").onclick = function() {
    greenBean.displayRecipe();
  }
  document.querySelector("#sideRecipe3").onclick = function() {
    classicSweet.displayRecipe();
  }
  document.querySelector("#sideRecipe4").onclick = function() {
    garlicMash.displayRecipe();
  }
  document.querySelector("#sideRecipe5").onclick = function() {
    MacCheese.displayRecipe();
  }

  // Dessert

  document.querySelector("#dessertRecipe1").onclick = function() {
    spicePie.displayRecipe();
  }
  document.querySelector("#dessertRecipe2").onclick = function() {
    crinkleCookies.displayRecipe();
  }
  document.querySelector("#dessertRecipe3").onclick = function() {
    christmasToffee.displayRecipe();
  }
  document.querySelector("#dessertRecipe4").onclick = function() {
    carrotCake.displayRecipe();
  }
  document.querySelector("#dessertRecipe5").onclick = function() {
    whiteRasp.displayRecipe();
  }

  // Drinks

  document.querySelector("#drinkRecipe1").onclick = function() {
    cranPunch.displayRecipe();
  }
  document.querySelector("#drinkRecipe2").onclick = function() {
    holidayDrink.displayRecipe();
  }
  document.querySelector("#drinkRecipe3").onclick = function() {
    orangeMimosa.displayRecipe();
  }
  document.querySelector("#drinkRecipe4").onclick = function() {
    appleCider.displayRecipe();
  }
  document.querySelector("#drinkRecipe5").onclick = function() {
    hotCocoa.displayRecipe();
  }

} // end window.onload