// select container div

let container = document.querySelector('#container');

//add a button to add boxes

let addbtn = document.createElement('button');
addbtn.classList.add('addbtn');
addbtn.textContent = 'Add Boxes';
addbtn.style.fontSize = '18px';
document.body.appendChild(addbtn);
container.before(addbtn);
addbtn.addEventListener('click', addBoxes);
//function to add buttons with user's input
function addBoxes(){
    let numberOfBoxes =parseInt(prompt('Enter number of boxes: '));
    if(numberOfBoxes >100){
        alert('number of boxes should not be more than 100')
    }
    else{
        container.innerHTML = ''
        for(let i = 0; i<numberOfBoxes;i++){
            //create a div element
            let div = document.createElement('div');
            div.classList.add('divs');
            container.appendChild(div);
}
    }
    
    
}
for(let i = 0; i<256;i++){
    //create a div element
    let div = document.createElement('div');
    div.classList.add('divs');
    container.appendChild(div);
}

container.addEventListener('mouseover', (e)=>{
    if(e.target.classList.contains('divs')){
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }
})