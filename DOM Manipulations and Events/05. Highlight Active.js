function focused(){
    let inputs = document.getElementsByTagName('input');
    
    for(let input of inputs){
        input.addEventListener('focus',(event)=>{
            event.target.parentElement.setAttribute('class','focused');
        });
        input.addEventListener('blur',(event)=>{
            event.target.parentElement.setAttribute('class','');
        });
    }
}