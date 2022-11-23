const main = document.querySelector("main");
let fragment = document.createDocumentFragment()

for(let i = 0; i < proyectos.length; i++){
    actual = proyectos[i]

    let div = document.createElement("DIV");

    div.innerHTML = `
    <div class="project">
            <div class="project__header">
                <div class="header__img">
                    <img src="./assets/img/${i+1}.jpg" alt="">
                </div>

                <div class="info">
                    <p>day</p>
                    <span>${i+1}</span>
                </div>
            </div>
            <!-- //// -->
            <div class="project__body">
                <p class="title">${actual.titulo}</p>
                <div class="buttom">
                    <a href="${actual.link}">Ver</a>
                    <a href="">Github</a>

                </div>
            </div>
        </div>`

        fragment.appendChild(div)
}


main.appendChild(fragment)