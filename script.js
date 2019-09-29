/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// checks if js is running or not
console.log('JS is running');


function percentage(dgpa){
  
}

function empty_check() {
  console.log("Checks started ...");
  var check_val = $("#DGPA").val();
  if(check_val ==  "") {
    alert("please enter a value in the DGPA field.");
  }else {
    percentage(check_val);
  }
}

function calculate() {
  console.log("calculate is running ..");
  $("#submit").click(function() {
      empty_check();    
  });

}

$(calculate());
