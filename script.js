const btn = document.querySelector("#submit");
const clearBtn = document.querySelector("#clear");
let firstName;
let lastName;
let country;
let number;
let state;
let city;
let village;

let userInfo = JSON.parse(localStorage.getItem('userInfo'));

if(!userInfo){
    btn.addEventListener("click",()=>{
        firstName = document.querySelector('#firstname').value;
        lastName = document.querySelector("#lastname").value;
        country = document.querySelector("#country").value;
        number = document.querySelector("#number").value;
        state = document.querySelector("#state").value;
        city = document.querySelector("#city").value;
        village = document.querySelector("#village").value;

        userInfo = {
            firstName : firstName,
            lastName  : lastName,
            country : country,
            number : number,
            state : state,
            city : city,
            village : village,
        }
    localStorage.setItem("userInfo",JSON.stringify(userInfo));
    })

}
else{
        document.querySelector('#firstname').value = userInfo.firstName;
        document.querySelector("#lastname").value = userInfo.lastName;
        document.querySelector("#country").value = userInfo.country;
        document.querySelector("#number").value = userInfo.number;
        document.querySelector("#state").value = userInfo.state;
        document.querySelector("#city").value = userInfo.city;
        document.querySelector("#village").value = userInfo.village;
}

clearBtn.addEventListener("click",()=>{
    localStorage.clear();
    window.location.assign('https://ajaysrawat07.github.io/Card-project/');
})





