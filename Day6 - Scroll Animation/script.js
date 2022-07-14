const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes(){
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        // returns the top value of the box
        if(boxTop < triggerBottom){
            box.classList.add('show')
        }
        else{
            box.classList.remove('show')
        }
    })
}