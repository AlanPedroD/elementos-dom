let elementoH1 = document.querySelector("h1");

elementoH1.innerText = "Título, Listas e link feitos no JS"

let link = document.querySelector("a");

link.innerText = "Proz educação"


let listaNaoOrdenada = document.querySelector("ul");

listaNaoOrdenada.innerHTML = 
`
  <li>Elemento não ordenado 01</li>
  <li>Elemento não ordenado 02</li>
  <li>Elemento não ordenado 03</li>

`

let listaOrdenada = document.querySelector("ol");

listaOrdenada.innerHTML = 
`
  <li><a href="https://www.youtube.com/watch?v=SLf6FUNymxc" target="_blank">Curso HTML</a></li>
  <li><a href="https://www.youtube.com/watch?v=vwbegraDXD8" target="_blank">Curso CSS</a></li>
  <li><a href="https://www.youtube.com/watch?v=4kNINY_I4IU&list=PLnDvRpP8BnexyabTa4NQrLy3s5NowwAxb" target="_blank">Curso JS</a></li>
  
`
