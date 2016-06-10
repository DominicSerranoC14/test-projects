
var featuredContent = document.getElementById("applyForm");
var nameContent = document.getElementById("name");
var addressContent = document.getElementById("address");
var emailContent = document.getElementById("email");
var numberContent = document.getElementById("number");
var HTMLstring = '';


document.getElementById("featureButton").addEventListener("click", function() {
   HTMLstring += '<div class="formReturn">';
   HTMLstring += '<p>' + nameContent.value + '</p>';
   HTMLstring += '<p>' + addressContent.value + '</p>';
   HTMLstring += '<p>' + emailContent.value + '</p>';
   HTMLstring += '<p>' + numberContent.value + '</p>';
   HTMLstring += '<div>';
   featuredContent.innerHTML += HTMLstring;
});

// create array

//select input elements and store each into a variable
  //---with function?
  //store in obj in array
  //if loop to iterate through and print to page
