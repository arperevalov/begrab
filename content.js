window.setTimeout(()=> {

    codeRun('.js-project-lightbox-link');

}, 1000)

let projectLinks = document.querySelectorAll('.ProjectCoverNeue-coverLink-102') 

Array.from(projectLinks).forEach(projectLink => {
    projectLink.addEventListener('click', function(){
        window.setTimeout(()=> {
            codeRun('.js-project-lightbox-link');
        }, 4000)
        
    })
})


function codeRun(element) {
    let imageParents = document.querySelectorAll(element);


    Array.from(imageParents).forEach(imageParent => {
        let button = document.createElement('a'),
            buttonCopy = document.createElement('a'),
            buttonsWrap = document.createElement('div'),
            img = imageParent.querySelector('img'),
            controls = imageParent.querySelector('.project-module__actions');

            if(img) {
                
                button.innerText = "Спиздить";
                button.className = "begrab__btn";
                // buttonCopy.innerText = "Скопировать";
                // buttonCopy.className = "begrab__btn";
                buttonsWrap.className = "begrab__wrap";

                buttonsWrap.appendChild(button);
                // buttonsWrap.appendChild(buttonCopy);
                imageParent.appendChild(buttonsWrap)
                

                

                button.addEventListener('click', (e) => {
                    let param = {src: img.src,
                    fileName: window.location.href};
                    e.stopPropagation()

                    chrome.runtime.sendMessage(param);
                });
            }

        // buttonCopy.addEventListener('click', () => {
        //     var canvas = document.createElement("canvas");
        //     canvas.width = img.width;
        //     canvas.height = img.height;
        //     var ctx = canvas.getContext("2d");
        //     ctx.drawImage(img, 0, 0);
        //     var imgd = canvas.toDataURL("image/png");
        //     return imgd;
        // });

    });
}
