function validate(){
    let input = document.getElementById('email');
    input.addEventListener('change',(event)=>{
        let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let result = pattern.exec(input.value);
        if(result === null){
            input.setAttribute('class','error');
        }
        else {
            input.setAttribute('class','');
        }

    });

}