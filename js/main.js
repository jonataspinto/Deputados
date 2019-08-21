const req = (url)=>{
    fetch(url).then(res=> res.json()).then(res =>{
        // console.log(res.dados)
        // console.log(res.dados[0].urlFoto)
        mountCard(res)
    }).catch(res=> {console.log(res)})
}

const mountCard = (content)=>{
    // console.log(content)
    for(let i = 0; i< content.dados.length; i++) {
        // console.log(content.dados[i].nome)
        // let date = new Date(element.commit.author.date)
        let ins = `

        <div class="col s12 m6 l4 center-align">
        <div class=" ">
          <div class="card">
            <div class="card-image">
              <img src="${content.dados[i].urlFoto}" style="width: 50$">
              <span class="card-title">${content.dados[i].nome}</span>
            </div>
            <div class="card-content">
              <p>${content.dados[i].email}</p>
            </div>
            <div class="card-action">
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
      </div>
        `
    document.getElementById('container').innerHTML += ins
        
    };
}

req("https://dadosabertos.camara.leg.br/api/v2/deputados?pagina=2&itens=12")

$('.dropdown-button').dropdown({
  inDuration: 100,
  outDuration: 25,
  // container: document.body
}); 

$( document ).ready(function() {
$('.sidenav').sidenav();
$('.tooltipped').tooltip();
$('.modal').modal();
});
