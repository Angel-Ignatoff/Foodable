 const itemname = document.querySelector('#txt');
const itemQuantity = document.querySelector('#number');
 const subButton = document.querySelector('.sub-btn');
 const list = document.querySelector('.itemlist ul');




subButton.addEventListener('click', (e)=>{
    if(itemname.value != ""){
        e.preventDefault();
        //create list 
        const myli = document.createElement('li');
        myli.innerHTML = itemname.value;
        list.appendChild(myli);
        //cross
        const mySpan = document.createElement('span');
        mySpan.innerHTML = 'x'; 
        myli.appendChild(mySpan);
    }
    const close = document.querySelectorAll('span');
    for ( let i = 0; i < close.length; i++){
        close[i].addEventListener('click', ()=>{
            close[i].parentElement.style.opacity = 0;
            setTimeout(()=>{
                close[i].parentElement.style.display = "none";
                close[i].parentElement.remove();
            },500);
        })
    }
    itemname.value = "";
});

