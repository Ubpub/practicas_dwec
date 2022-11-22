let li = document.querySelectorAll('li');
console.log(li);

Array.from(li).forEach( (item) => { // Se puede hacer directamente en la lista
    item.addEventListener('click', (e) => {
        if (!e.target.classList.contains("selected")) {
            li.forEach( (item) => {
                item.classList.remove("selected");
            } )
        }
        item.classList.toggle("selected");
    } );
} );