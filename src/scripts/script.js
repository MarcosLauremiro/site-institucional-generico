/* ------------------------------- Coloque sua lógica aqui ------------------------------- */
function abrirModal(){
    const modal = document.querySelector('#modal')
    const bntHeader = document.querySelector('.header__button')
    const bntDuvidas = document.querySelector('.bnt__duvidas')

    bntHeader.addEventListener('click', () => {
        modal.showModal()
    })

    bntDuvidas.addEventListener('click', () => {
        modal.showModal()
    })

}

function fecharModal(){
    const modal = document.querySelector('#modal')
    const bntFechar = document.querySelector('.fechar__modal')

    bntFechar.addEventListener('click', () => {
        modal.close()
    })
}

abrirModal()
fecharModal()