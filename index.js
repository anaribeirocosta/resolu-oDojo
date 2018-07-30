let botaomodal = document.querySelector(".chamamodal");
let botaoAdd = document.querySelector("#addsala");
let modal = document.querySelector(".maemodal");
let salas = document.querySelector("#salas");
let sala =  document.querySelectorAll('.novasala');
// let maemodal = document.querySelector(')

//abre caixa de diálogo 
botaomodal.addEventListener('click', function(){
    modal.style.display = 'flex';
    modal.classList.remove(".maemodal");
    modal.classList.add(".ativamodal")
});

//saai da caixa de diálogo
// modal.addEventListener('click',function(){
//     modal.style.display = 'none';
// });

//adicionar nova sala
botaoAdd.addEventListener('click', function(){
    let div = document.createElement("div");
    div.setAttribute('class','novasala');
    div.classList.add('novasala');
    modal.style.display = 'none';
    salas.appendChild(div);
    let inputnome = document.querySelector('#inputnome').value
    let inputnumero = document.querySelector('#numerolugares').value
    
    let h2 = document.createElement('h2')
    h2.innerHTML = `Sala ${inputnome}`;
    div.appendChild(h2)
    
    let p = document.createElement('p')
    p.innerHTML = `${inputnumero} lugares`;
    div.appendChild(p)
    div.onclick = reserva;
    function reserva() {
        div.setAttribute ('class','novasalareservada');
    }    
})
  //reservar a sala

