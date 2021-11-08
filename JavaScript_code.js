function openlogin(){
    var loginScreen = document.getElementById('login');
    var displaySetting = login.style.display;
    if (displaySetting == 'block') {
        loginScreen.style.display = 'none';
    }
    else{
        loginScreen.style.display = 'block';
    }
}
function passwordverify(){
    var a = document.querySelector("#passwordentry").value ;
    if(a == "stephep69"){
        window.location.href = "editorial_page.html"
    }
    else{
        document.write("Incorrect Password")
    }
}