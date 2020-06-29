function buscarcep() {

    let pegacep = ""

    pegacep =  document.getElementById("cep").value
    tamanho = pegacep.length

    if(tamanho >8){
        document.getElementById("busca").setAttribute('style', 'display:none')
        document.getElementById("resultado").setAttribute('style', 'display:block')
        document.getElementById("alerta").setAttribute('style', 'display:none')
        document.getElementById("mapa").setAttribute('src', 'https://www.google.com.br/maps?q='+ pegacep +',%20Brasil&output=embed')

        fetch('https://viacep.com.br/ws/'+pegacep+'/json//').then(function(response){
            return response.json()
        })
        .then(function(res){
        cep = res
        document.getElementById("rua").innerHTML = cep.logradouro
        document.getElementById("bairro").innerHTML = cep.bairro
        document.getElementById("cidade").innerHTML = cep.localidade
        document.getElementById("uf").innerHTML = cep.uf

        })
    }else{
        document.getElementById("alerta").setAttribute('style', 'display:block')
    }
}

function novaBusca(){
    document.getElementById("resultado").setAttribute('style', 'display:none')
    document.getElementById("busca").setAttribute('style', 'display:block')
    document.getElementById("cep").value = ""
    document.getElementById("bairro").innerHTML = ""
    document.getElementById("cidade").innerHTML = ""
    document.getElementById("rua").innerHTML = ""
    document.getElementById("uf").innerHTML = ""
}

window.onload = function () {
    new Vue({
        el: '#cep'
    })
}

  