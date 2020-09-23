$( "#advicer" )
.keypress(function () {
    // filterFunction()

    // search($(this).val)
// search2()
// search().then(res=>console.log(res))
search()

    // $('#dialog_title_span').text("new dialog title");


})
.change();

// function filterFunction() {
//     var input, filter, ul, li, a, i;
//     input = document.getElementById("advicer");
//     filter = input.value.toUpperCase();
//     div = document.getElementById("myDropdown");
//     a = div.getElementsByTagName("a");
//     for (i = 0; i < a.length; i++) {
//       txtValue = a[i].textContent || a[i].innerText;
//       if (txtValue.toUpperCase().indexOf(filter) > -1) {
//         a[i].style.display = "";
//       } else {
//         a[i].style.display = "none";
//       }
//     }
//   }
async function search(){
    var url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
    var token = "8b774b12d8ec56660580095dc0fa64a27730a560";
    var query = "москва хабар";
    
    var options = {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Token " + token
        },
        body: JSON.stringify({query: query})
    }
    
    fetch(url, options)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log("error", error));
}