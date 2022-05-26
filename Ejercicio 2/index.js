let texto= "";
let concatenacion = "";
while( texto != "esc"){
    texto = prompt("Ingrese un texto: ").toLowerCase();
    switch(texto){
        case "esc":
        alert("Usted presionó ESC")
        continue;
    }
    concatenacion = concatenacion + " " + texto;
    console.log(concatenacion);
}