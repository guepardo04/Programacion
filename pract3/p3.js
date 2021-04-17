function Sumar() {
    var base = document.getElementById('base').value;
    var altura = document.getElementById('altura').value;
    var area = (parseFloat(base) * parseFloat(altura)) / 2;
    alert("El area es: "+area)
}