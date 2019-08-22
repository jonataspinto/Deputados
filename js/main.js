$('.dropdown-button').dropdown({
  inDuration: 100,
  outDuration: 25,
  // container: document.body
}); 

$( document ).ready(function() {
$('.sidenav').sidenav();
$('.slider').slider();
$('.tooltipped').tooltip();
$('.modal').modal();
});

const getdeputados = (url)=>{
    fetch(url).then(res=> res.json()).then(res =>{
        montaCard(res)
        // console.log(res.dados[1])
    }).catch(res=> {console.log(res)})
}

const getpartidos = (url)=>{
    fetch(url).then(res=> res.json()).then(res =>{
        // console.log(res.dados)
    }).catch(res=> {console.log(res)})
}


const montaCard = (content)=>{
  for(let i = 0; i< content.dados.length; i++) {
      let card = `
      <aside class="col s12 m6 l4 ">
        <div class="card">
          <div class=" card horizontal center-align">
            <img src="${content.dados[i].urlFoto}" style="width: 40%">
            <h5 class="card-content" >${content.dados[i].siglaPartido}<h5/>
          </div>
          <div class="card-content">
            <span class="card-title">${content.dados[i].nome}</span>
            <p>${content.dados[i].email}</p>
          </div>
          <div class="card-action">
            <a href="#">ID: ${content.dados[i].id}</a>
          </div>
        </div>
      </aside>
      `
  document.getElementById('deputados').innerHTML += card        
  };
}

getdeputados("https://dadosabertos.camara.leg.br/api/v2/deputados?pagina=2&itens=12")

getpartidos("https://dadosabertos.camara.leg.br/api/v2/partidos")



