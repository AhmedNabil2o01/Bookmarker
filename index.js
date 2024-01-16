var namInput = document.getElementById("nameInput");
var UrlInput = document.getElementById("UrlInput");

var DataList = [];


if (localStorage.getItem("list") != null) {
    DataList = JSON.parse(localStorage.getItem("list"));
    disdisplayData(DataList);
}

function AddData() {

    if (ValidatName() && ValidatURL() == true) {
        Data = {
            name: namInput.value,
            Url: UrlInput.value,
        }
        DataList.push(Data);
        localStorage.setItem("list", JSON.stringify(DataList));
        disdisplayData()
        clearForm()

    }
    else {
        alert('Name or Url Invalid')
    }
}
function clearForm() {
    namInput.value = ``;
    UrlInput.value = ``;

}

function disdisplayData() {
    var cartona = ``;
    for (var i = 0; i < DataList.length; i++) {
        cartona += `
        <tr>
        <td>`+ (i + 1) + `</td>
        <td>`+ DataList[i].name + `</td>
       
        <td><button class="btn btn-success"> <a target="_blank" class="text-decoration-none text-white" href="https://${DataList[i].Url}"><i class="fa-solid fa-eye pe-2"></i> Visit</a></button></td>
        <td><button onclick="DeletData(${i})" type="button" class="btn btn-danger"><i class="fa-solid fa-trash-can"></i> Delet</button></td>
     </tr> 
        
        `
    }

    document.getElementById("myData").innerHTML = cartona
}
function DeletData(x) {
    DataList.splice(x, 1);
    localStorage.setItem("list", JSON.stringify(DataList));
    disdisplayData(DataList);

}

function ValidatName() {
    var Regex = /^(.){3,20}$/;
    return Regex.test(namInput.value);
}

function ValidatURL() {
    var Regex = /^[A-Za-z]{3,9}\.[A-Za-z]{3}$/;
    return Regex.test(UrlInput.value);
}