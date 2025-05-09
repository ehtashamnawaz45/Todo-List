function todo() {
    let a = document.getElementById("inp").value
    if (a) {
        let b = JSON.parse(localStorage.getItem('todo1') ) || [];
        b.push(a)
        localStorage.setItem('todo1', JSON.stringify(b) )
    }
    tododata()
}
function tododata() {
    let b = JSON.parse(localStorage.getItem("todo1")) || []
    let h = document.getElementsByClassName("show")[0]
    h.innerHTML = ""
    b.forEach(function(bhai , index){
        f = document.createElement("div")
        f.classList.add("box")
        f.innerHTML = `<p>${bhai}</p>`
        h.appendChild(f)
        b = document.createElement("button")
        b.innerHTML = '<i>Delete</i>'
        f.appendChild(b)
        b.addEventListener("click" , function(){
            delete1(index)
        })
    });
}

function delete1(index){
    let b = JSON.parse(localStorage.getItem("todo1")) || []
    b.splice(index , 1)
    localStorage.setItem('todo1', JSON.stringify(b) )
    tododata()
}
todo()


