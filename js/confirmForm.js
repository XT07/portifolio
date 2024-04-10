function verifyForm(e, form){
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let errName = document.getElementById("errName");
    let errEmail = document.getElementById("errEmail");
    let errSubject = document.getElementById("errSubject");

    let emailOk = 0;
    let  nameOk = 0;
    let subjectOk = 0;

    errName.textContent = "";
    errEmail.textContent = "";
    errSubject.textContent = "";

    if(name == ""){
        errName.textContent = "Escreva o seu nome ...";
        console.log("Escreva o seu nome ...");
    } else {
        nameOk = 1;
    }

    if(email == ""){
        errEmail.textContent = "Coloque o seu e-mail ...";
    } else {
        if(email.includes("@")){
            emailOk = 1;
        } else {
            errEmail.textContent = "Coloque o @ no e-mail ...";
        }
    }

    if(subject == ""){
        errSubject.textContent = "Escreva o assunto do contato ...";
    } else {
        subjectOk = 1;
    }

    if(nameOk == 1 && emailOk == 1 && subjectOk == 1){
        window.alert("E-mail enviado")
        form.submit();
    }
}