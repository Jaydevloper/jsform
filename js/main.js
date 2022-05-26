const elForm = document.getElementById("form");
const elName = document.querySelector("#name");
const elSurname = document.querySelector("#surname");
const elAdd = document.querySelector("#add");
const elAddres = document.querySelector("#addres");

function submitbtn (event){
    event.preventDefault();
    if (elName.value.trim() && elSurname.value.trim()){
        // console.log(elName.value,elSurname.value,elAdd.value);
        document.body.innerHTML = `<ul class ="site-btn-list">
        <li class ="site-btn-list__item">
        <h2 class ="site-btn-list__item-head">
        ${elName.value} 
        </h2>
        </li>
        <li class ="site-btn-list__item">
        <h2 class ="site-btn-list__item-head">
        ${elSurname.value} 
        </h2>
        </li>
        <li class ="site-btn-list__item">
        <h2 class ="site-btn-list__item-head">
        ${elAdd.value} 
        </h2>
        </li>
        <li class ="site-btn-list__item">
        <h2 class ="site-btn-list__item-head">
        ${elAddres.value} 
        </h2>
        </li>
        </ul>`
        console.log(body);
    }
    event.target.reset();
    return event;
}
elForm.addEventListener('submit', submitbtn);

