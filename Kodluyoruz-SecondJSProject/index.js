let btnDOM = document.querySelector("#liveToastBtn")
let listDOM = document.querySelector("#list")
let taskDOM = document.querySelector("#task")
let ullength = document.getElementsByTagName("li")

for(let i=0; i < ullength.length;i++){ 
    let closer = document.createElement("span") 
    closer.textContent = "\u00D7" 
    closer.classList.add("close") 
    closer.onclick = removeButton
    ullength[i].append(closer)
    ullength[i].onclick = check 
}

btnDOM.addEventListener('click', elemanEkle)  


//Functions

function check(){
  this.classList.toggle("checked")
}

function removeButton(){
  this.parentElement.remove()
}

function elemanEkle() {
 
    if (taskDOM.value == "")  
    {   
    $(".error").toast("show")
    } 
    else 
    {
    $(".success").toast("show")

    let liDOM = document.createElement('li') 
    listDOM.appendChild(liDOM)
    liDOM.innerHTML = task.value 
    taskDOM.value = ""
   
    liDOM.onclick = check;
        
    let closeit = document.createElement("span")
        closeit.textContent = "\u00D7"
        closeit.classList.add("close")
        closeit.onclick = removeButton;
        
        liDOM.append(closeit)
        listDOM.append(liDOM)
        inputElement.value = ("")
}
}    