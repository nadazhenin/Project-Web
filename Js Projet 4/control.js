
function verif(){
    nom=document.getElementById('n').value;
    Prénom=document.getElementById('pre').value;
    Email=document.getElementById('e').value;
    Motdepasse=document.getElementById('m').value;
    Confirmermotdepasse=document.getElementById('c').value;
    Genref=document.getElementById('f').checked;
    Genrem=document.getElementById('m').checked;
    pays=document.getElementById('country').value;
    if(nom==""){
        window.alert("enter le nom");
    }
    if(Prénom==""){
        window.alert("entrer le prenom");
    }
    if(Email==""){
        window.alert("entrer lemail");
    }
    if(Email.indexOf("@")==-1){
        window.alert("verifier votre email");
    }
    if(Motdepasse==""){
        window.alert("entrer le mot de passe");
    }
    if(Confirmermotdepasse!=Motdepasse){
        window.alert("verifier votre mot de passe ");
    }
    if(!Genref && !Genrem){
        window.alert("coucher le genre ");
    }
    
    
    if(pays=="pays"){
        window.alert("choisire le pays ");
    }

    }


