const buttons=document.querySelector('.button');
const body=document.querySelector('body');

buttons.array.forEach( function(button) {
    console.log(button);
    button.addEventListner('click',function(e){
        console.log(e);
        console.log(e.target) //e.target means where the event got triggered.

        switch (e.target.id) 
        {
            case 'grey':
            case 'white':
            case 'blue':
            case 'yellow':
                body.style.backgroundColor = e.target.id;
                break;
            default:
                console.log('Invalid color selected');
                break;
        }   
    })
});
 