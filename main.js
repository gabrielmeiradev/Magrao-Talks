function playFala(fala){
    let path = 'audio'
    let file = '';
    switch(fala){
        case 'onde_eu_vou':
            file = 'onde eu vou.mp3'
            break
        case 'baile_das_casinha':
            file = 'baile das casinha.mp3'
            break
        case 'to_esperando_o_busao':
            file = 'to esperando o busao.mp3'
            break
    }

    let audio = new Audio(path + '/' + file)
    audio.play()
}