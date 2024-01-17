
function tblSearch(){
  let input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("search-input");
  filter = input.value.toUpperCase();
  table = document.getElementById("transaction-tbl");
  tr = table.getElementsByTagName("tr");
  
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}

function dropdownActivate() {
  var dropdownContent = document.querySelector(".dropdown-content");
  if (dropdownContent.style.display === "none" || dropdownContent.style.display === "") {
    dropdownContent.style.display = "block";
  } else {
    dropdownContent.style.display = "none";
  }
}

function dropdownFilter(category){
  var cat = category + "-category"
  console.log(cat);
  var table = document.getElementById("transaction-tbl");
  var tr = table.getElementsByTagName("tr");
  var head = document.querySelector(".tbl-head")
  
  for (var i = 0; i < tr.length; i++) {
    var entry = tr[i];
    if (entry.classList.contains(cat)) {
      head.style.display = "";  
      tr[i].style.display = "";
    }
    else {
        head.style.display = "";
        tr[i].style.display = "none";
      }
    }       
  }


function formatCurrency(amount) {
  return new Intl.NumberFormat("en-US", {style: 'currency', currency: "USD"}).format(amount)
}

function filterAmount(min, max){
  var table = document.getElementById("transaction-tbl");
  var tr = table.getElementsByTagName("tr");
  var head = document.querySelector(".tbl-head")
  
  for (var i = 0; i < tr.length; i++) {
    var entry = tr[i];
    var amount = entry.getElementsByTagName("td")[2].textContent;
    if (amount < min || amount > max) {
        head.style.display = "";
        tr[i].style.display = "";
    }
  }
}

function formatDate(){}

    
function resetFilter(){
  var table = document.querySelector("#transaction-tbl");
  var tr = table.getElementsByTagName("tr");
  for (var i = 0; i < tr.length; i++) {
    tr[i].style.display = ""; }

  var checks = document.getElementsByClassName("cbox");
  
  for (var i = 0; i < categories.length; i++){
    if (checks.checked = true){
      checks.checked = false;
    }
  }
}



function changeLang(language){
  var languages = ["en", "es", "fr", "kr"];
  languages.forEach(function(lang){
    var langContent = document.querySelector("." + lang);
    if(lang === language){
      langContent.style.display = "block";
    } else {
      langContent.style.display = "none";
    }
  });
}