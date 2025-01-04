let N,H,C,PS,SS,U,J,I,D,T;

document.getElementById("btn").onclick = function(){
    N = document.getElementById("name").value
    H = document.getElementById("height").value
    C = document.getElementById("complexion").value
    PS = document.getElementById("primarySchool").value
    SS = document.getElementById("secondarySchool").value
    U = document.getElementById("university").value
    J = document.getElementById("job").value
    I = document.getElementById("content")
    D = document.getElementById("dream").value 
    T = document.getElementById("title")
    
     T.textContent = `AUTOBIOGRAPHY OF ${N}`
     I.textContent = `My name is ${N}, I am ${H} tall and ${C} in complexion. I attended ${PS} primary school, as well as attending ${SS} for my secondary education. I also had my bachelor's degree from ${U}. I am currently a ${J}. Although my dream as always been ${D}.` 
}