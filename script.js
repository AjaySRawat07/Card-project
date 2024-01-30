const fn = document.querySelector(".firstname");
const ln = document.querySelector(".lastname");
const cnt = document.querySelector(".country");
const ph = document.querySelector(".phonenumber");
const st = document.querySelector(".state");
const cty = document.querySelector(".city");
const vg = document.querySelector(".village");



function userinfo(){


    const f_n = prompt("enter your First name");
    const l_n = prompt("enter your Last name");
    const c_nt = prompt("enter your country");
    const ph_num = prompt("enter your Phone-number");
    const s_ty = prompt("enter your State");
    const c_ty = prompt("enter your City");
    const v_g = prompt("enter your Village");

    const userinformation ={
        f_n, 
        l_n,
        c_nt,
        ph_num,
        s_ty,
        c_ty,
        v_g
    };

    

    fn.innerText = f_n;
    ln.innerText = l_n;
    cnt.innerText = c_nt;
    ph.innerText = ph_num;
    st.innerText = s_ty;
    cty.innerText = c_ty;
    vg.innerText = v_g;

    let convert = JSON.stringify(userinformation);
    localStorage.setItem("user", convert);
    // console.log(userinformation);

    let after = JSON.parse(localStorage.getItem("user"));
    console.log(after);
}


if(localStorage.length == 0){
    userinfo();
}
else {
    let after = JSON.parse(localStorage.getItem("user"));
    // console.log(after);

    fn.innerText = after.f_n;
    ln.innerText = after.l_n;
    cnt.innerText = after.c_nt;
    ph.innerText = after.ph_num;
    st.innerText = after.s_ty;
    cty.innerText = after.c_ty;
    vg.innerText = after.v_g;


}

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");

}