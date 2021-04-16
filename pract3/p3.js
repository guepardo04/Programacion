function Sumar() {
    var base = document.getElementById('base').value;
    var altura = document.getElementById('altura').value;
    var suma = (parseFloat(base) * parseFloat(altura)) / 2;
    alert("La suma es: "+suma)
}