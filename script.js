$("#advicer")
.keyup(async function () {
    var input = document.getElementById('advicer').value;
    var result ="";
    if(input!=""){
        result = await search(input)

        if(result!=""){
            displayItems(result)
        }else{
            clearItems()
        }
    }else{
        clearItems()
    }
})
.change();

function displayItems(items){
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    i=0;
    for(i=0;i<items.length;i++){
        a[i].style.display = "block";
        a[i].textContent=items[i].value
    }
}
function clearItems(){
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for(i=0;i<10;i++)
        a[i].style.display = "none";

}
$("#myDropdown").click(
    async function( event ) {
        var target = $( event.target );
        if ( target.is( "a" ) ) {
            document.getElementById('advicer').value = target[0].outerText
            result = await search(target[0].outerText)
            displayItems(result)
        }
    }
)
async function search(query){
    var url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
    var token = "8b774b12d8ec56660580095dc0fa64a27730a560";
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
    
    let resp = await fetch(url, options)
    
    if (resp.ok) {
        let json = await resp.json();
        return json.suggestions
    } else {
        alert("Ошибка HTTP: " + response.status);
        return ""
    }
}