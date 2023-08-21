let btn = document.getElementById("add-btn")
let container = document.getElementById("items")
let inp = document.getElementById("input")

btn.addEventListener("click", ()=>{
    let paragraph = document.createElement('p')
    paragraph.innerHTML = `
            <label class="container todo-items" id="items"><span id="val">${inp.value}</span>
                <input type="checkbox">
                <span class="checkmark"></span>
                <i class='bx bx-x' id="cancel"></i>
            </label>
            <hr>
        `
    
    container.appendChild(paragraph)
    inp.value = ""
    paragraph.addEventListener("dblclick", () =>{
        container.removeChild(paragraph)
    })

    paragraph.addEventListener("click", () => {
        document.getElementById("val").style.textDecoration = "line-through"
    })
})

