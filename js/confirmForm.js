function verifyForm(e, form){
    e.preventDefault();

    let name = getElementById("name").value;
    let email = getElementById("email").value;
    let subject = getElementById("subject").value;

    let emailOk, nameOk, subjectOk = 0;

    if(empty(email)){
        window.alert("Escreva o seu e-mail ...");
    } else {
        if(email.includes("@")){
            emailOk = 1;
        } else {
            window.alert("Coloque o @ no e-mail ...");
        }
    }

    if(empty(name)){
        window.alert("Escreva o seu nome ...");
    } else {
        nameOk = 1;
    }

    if(empty(subject)){
        window.alert("Escreva o assunto do contato ...");
    } else {
        subjectOk = 1;
    }

    if(nameOk == 1 && emailOk == 1 && subjectOk == 1){
        form.submit();
    }

}