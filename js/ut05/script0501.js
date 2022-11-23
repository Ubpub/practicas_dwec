let lista = document.querySelector("ul");
console.log(lista);

lista.addEventListener('click', (e) => {
    if (!e.target.classList.contains('selected')) {
        let li = document.getElementsByTagName('li');
        if (!e.ctrlKey) {
            Array.from(li).forEach( (item) => {
                item.classList.remove('selected');
            } )
        }
        e.target.classList.add('selected');
    } else {
        let selectedItems = document.querySelectorAll('.selected');
        if (Array.from(selectedItems).length > 1 && !e.ctrlKey) {
            Array.from(selectedItems).forEach( (item) => {
                if(item != e.target) {
                    item.classList.remove('selected');
                }
            } )
        } else {
            e.target.classList.remove('selected');
        }
    }
})
