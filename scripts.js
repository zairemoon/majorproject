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
  "https://images.unsplash.com/photo-1578283326173-fbb0f83b59b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80",
  "Contributed by Michelle Barr",
  "Holiday Hot Spinach Dip",
  "spinachDip",
);

bakedBrie = new Recipe(
  "Baked Brie",
  "https://images.unsplash.com/photo-1597715293892-3adab9fcb33d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80",
  "Contributed by Chef John",
  "Baked Stuffed Brie with Cranberries & Walnuts",
  "bakedBrie",
);

candiedPecans = new Recipe(
  "Candied Pecans",
  "https://images.unsplash.com/photo-1580691154746-88bedf3c1e47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
  "Contributed by Alix",
  "Sweet & Salty Candied Pecans",
  "candiedPecans"
)

grinchKabobs = new Recipe(
  "Grinch Kabobs",
  "https://images.unsplash.com/photo-1580691155297-c6dfa3ca61c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  "Contributed by CNM Catering",
  "Delicious Holiday Snack",
  "grinchKabobs"
)

puffPastry = new Recipe(
  "Puff Pastry",
  "https://images.unsplash.com/photo-1638839097440-bed9a9e1473a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80",
  "Contributed by Tea",
  "Spinach & Ricotta Puff Pastry Christmas Tree",
  "puffPastry"
)

roastTurkey = new Recipe(
  "Roast Turkey",
  "https://images.unsplash.com/photo-1574672281194-db420378032d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
  "Contributed by Syd",
  "A Simply Perfect Roast Turkey",
  "roastTurkey",
)

honeyHam = new Recipe(
  "Honey Ham",
  "https://images.unsplash.com/photo-1605926637412-b0cd5a3e3543?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2825&q=80",
  "Contributed by Colleen",
  "Honey Glazed Ham",
  "honeyHam",
)

primeRib = new Recipe(
  "Prime Rib",
  "https://images.unsplash.com/photo-1625604087024-7fb428fc4626?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  "Contributed by Judy2River",
  "Christmas Prime Rib",
  "primeRib",
)

choppedPork = new Recipe(
  "Pork Chops",
  "https://images.unsplash.com/photo-1622052073730-04bbc497be48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2114&q=80",
  "Contributed by AllRecipesMember",
  "Caramel Apple Pork Chops",
  "choppedPork",
)

roastRib = new Recipe(
  "Roast",
  "https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2367&q=80",
  "Contributed by Salsiepie",
  "Fullproof Rib Roast",
  "roastRib",
)

gratinPotato = new Recipe(
  "Au Gratin Potatos",
  "https://images.unsplash.com/photo-1508313880080-c4bef0730395?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2272&q=80",
  "Contributed by Cathy Martin",
  "Creamy Au Gratin Potatoes",
  "gratinPotato",
)

greenBean = new Recipe(
  "Green Bean Casserole",
  "https://images.unsplash.com/uploads/141143339879512fe9b0d/f72e2c85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
  "Contributed by Jan",
  "Best Green Bean Casserole",
  "greenBean",
)

sweetPotato = new Recipe(
  "Sweet Potatoes",
  "https://images.unsplash.com/photo-1541809570-35dcc3a080c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1625&q=80",
  "Contributed by Michelle Rene",
  "Classic Candied Sweet Potatoes",
  "sweetPotato",
)

redPotato = new Recipe(
  "Garlic Potatoes",
  "https://images.unsplash.com/photo-1631898039984-fd5f61fe8732?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
  "Contributed by Shawnah",
  "Red Garlic Mashed Potatoes",
  "redPotato",
)

MacCheese = new Recipe(
  "Mac and Cheese",
  "https://images.unsplash.com/photo-1612152328178-4a6c83d96429?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2825&q=80",
  "Contributed by Judy",
  "Homemade Mac & Cheese",
  "MacCheese",
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


  document.querySelector("#entreeRecipe1").onclick = function() {
    roastTurkey.displayRecipe();
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
    roastRib.displayRecipe();
  }


  document.querySelector("#sideRecipe1").onclick = function() {
    gratinPotato.displayRecipe();
  }
  document.querySelector("#sideRecipe2").onclick = function() {
    greenBean.displayRecipe();
  }
  document.querySelector("#sideRecipe3").onclick = function() {
    sweetPotato.displayRecipe();
  }
  document.querySelector("#sideRecipe4").onclick = function() {
    redPotato.displayRecipe();
  }
  document.querySelector("#sideRecipe5").onclick = function() {
    MacCheese.displayRecipe();
  }


  document.querySelector("#dessertRecipe1").onclick = function() {
    piePumpkin.displayRecipe();
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
    cheeseCake.displayRecipe();
  }


  document.querySelector("#drinkRecipe1").onclick = function() {
    cranPunch.displayRecipe();
  }
  document.querySelector("#drinkRecipe2").onclick = function() {
    hotCocoa.displayRecipe();
  }
  document.querySelector("#drinkRecipe3").onclick = function() {
    christmasMimosa.displayRecipe();
  }
  document.querySelector("#drinkRecipe4").onclick = function() {
    appleCider.displayRecipe();
  }
  document.querySelector("#drinkRecipe5").onclick = function() {
    holidayPunch.displayRecipe();
  }

} // end window.onload