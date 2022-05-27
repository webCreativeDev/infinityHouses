export function disableKeys(){
document.querySelector(".numberOfGuests").addEventListener("keypress", function (evt) {
    console.log(evt.target.value.length)
    if (evt.which != 8 && evt.which != 0 && evt.which < 48 || evt.which > 57)
    {
        evt.preventDefault();
    } else if ( evt.target.value.length > 1 ){
        evt.preventDefault();
    }

});
}

