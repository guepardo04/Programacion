function Sumar() {
    var base = document.getElementById('base').value;
    var altura = document.getElementById('altura').value;
    var perimetro = (parseFloat(base) * 2) + (parseFloat(altura) * 2);
    alert("El perimetro es: "+perimetro)
}