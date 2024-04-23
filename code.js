function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res') 

    if (fano.value == 0 || fano.value > ano){
        window.alert('Erro!')
    }
    else{
        var idade = ano - Number(fano.value)
        var fsex = document.getElementsByName('sex') //[0] = masculino    [1] = feminino
        var genero = '' //Vazia

        var img = document.createElement('img')
        img.setAttribute('id', 'foto') //mesma coisa que: <img id='foto' ... >

        if( fsex[0].checked) {
            genero = 'Homem'

            if (idade < 5){
                //bebe
                img.setAttribute('src', 'imagens/bebemenino.png')
            }
            else if (idade < 18){
                //menino
                img.setAttribute('src', 'imagens/menino.png')
            }
            else if (idade < 60){
                //homem
                img.setAttribute('src', 'imagens/homem.png')
            }
            else {
                //velho
                img.setAttribute('src', 'imagens/velho.png')
            }
        }
        else{
            genero = 'Mulher'

            if (idade < 5){
                //bebe menina
                img.setAttribute('src', 'imagens/bebemenina.png')
            }
            else if (idade < 18){
                //menina
                img.setAttribute('src', 'imagens/menina.png')
            }
            else if (idade < 60){
                //meulher
                img.setAttribute('src', 'imagens/mulher.png')
            }
            else {
                //velha
                img.setAttribute('src', 'imagens/velha.png')
            }
        }

        res.innerHTML = `Você é um(a) ${genero} e você tem ${idade} anos.` //mesagem no final

        res.appendChild(img)
    }
}
