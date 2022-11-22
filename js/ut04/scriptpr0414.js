let products = [
    {
      id: '1000',
      product: 'Fresas de Huelva',
      price: 410,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/fresas.jpg',
    },
    {
      id: '1001',
      product: 'Kiwi amarillo',
      price: 245,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/kiwis.jpg',
    },
    {
      id: '1002',
      product: 'Manzana roja',
      price: 195,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/manzanas_rojas.jpg',
    },
    {
      id: '1003',
      product: 'Manzana verde',
      price: 170,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/manzanas_verdes.jpg',
    },
    {
      id: '1004',
      product: 'Melón',
      price: 135,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/melones.jpg',
    },
    {
      id: '1005',
      product: 'Naranja valenciana',
      price: 160,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/naranjas.jpg',
    },
    {
      id: '1006',
      product: 'Pera conferencia',
      price: 210,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/peras.jpg',
    },
    {
      id: '1007',
      product: 'Plátano',
      price: 260,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/platanos.jpg',
    },
    {
      id: '1008',
      product: 'Sandía',
      price: 115,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/sandias.jpg',
    },
    {
      id: '1009',
      product: 'Uva',
      price: 195,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/uvas.jpg',
    },
    {
      id: '1010',
      product: 'Aguacate',
      price: 415,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/aguacate.jpg',
    },
    {
      id: '1011',
      product: 'Cereza del Bierzo',
      price: 520,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/cereza.jpg',
    },
    {
      id: '1012',
      product: 'Granada',
      price: 310,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/granada.jpg',
    },
    {
      id: '1013',
      product: 'Limón',
      price: 155,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/limon.jpg',
    },
    {
      id: '1014',
      product: 'Nectarina',
      price: 180,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/nectarina.jpg',
    },
    {
      id: '1015',
      product: 'Piña',
      price: 320,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/pineapple.jpg',
    },
  
]

let cesta = [];

let page = 1;
let tamano = 8;
let numPaginas = Math.ceil(products.length / tamano);
showProductsPaginado();

function showProducts() {
  let products_section = document.getElementById('products-section');
  for (let i = 0; i < products.length; i++) {
    // Llama a la función createProduct para crear un producto con los valores pasador por parámetros
    let producto = createProduct(products[i].id, products[i].product, products[i].price, products[i].image);
    products_section.append(producto); // Lo añade a la sección de productos
  }
}

function showProductsPaginado() {
  let products_section = document.getElementById('products-section');
  products_section.textContent = "";
  if (products.length > tamano) {
    products.filter( (_, index) => (index / tamano) >= page - 1 && (index / tamano) < page)
            .forEach( ({ id, product, price, image }) => {
              let producto = createProduct(id, product, price, image);
              products_section.append(producto); // Lo añade a la sección de productos
            } );
    

    // menuPaginado();
    products_section.append(menuPaginado());
    let anterior = document.getElementById("prev");
    anterior.addEventListener('click', () => {
      if (page != 1) {
        page--;
        showProductsPaginado();
      }
    });

    let siguiente = document.getElementById("next");
    siguiente.addEventListener('click', () => {
      if (page != numPaginas) {
        page++;
        showProductsPaginado();
      }
    });

  } else {
    showProducts();
  }
}

function createProduct(id, product, price, image) {
  // Div general para el producto
    let producto = document.createElement('div');
    producto.classList.add("producto");
    // El id se genera para asignar el botón al producto
    producto.setAttribute("data-id-product", id) // Se le asigna un id al div del producto entero

    // Div para la imagen del producto
    let imagen = document.createElement('img');
    imagen.setAttribute("src", image);
    imagen.classList.add("img-prod");

    // Div para el nombre del producto
    let nombre = document.createElement('div');
    nombre.classList.add("fruit-name");
    nombre.textContent = product;

    // Div para el precio y botón añadir
    let datos = document.createElement('div');
    let boton = document.createElement('div');
    boton.classList.add("btn");
    boton.classList.add("btn-add-product");
    boton.setAttribute("data-id-product", id); // Se le asigna un id al div del botón
    datos.classList.add("datos-prod");

    let precio = (price.toString()).slice(0, 1) + "." + (price.toString()).slice(1);
    datos.textContent = `${ precio } €/Kg`;
    boton.textContent= "Añadir";

    boton.addEventListener('click', () => {
      let resul = cesta.filter( ({producto}) => producto = product );
      console.log(resul);
      if (cesta.includes(product)) {
        console.log("holaaa");
      } else {
        cesta.push(
          {
            "cantidad": 1,
            "producto": product,
            "precio": price,
          }
        )
        console.log(cesta);
      }
    } );

    datos.append(boton);

    // Añade los divs creados al div del producto
    producto.append(imagen);
    producto.append(nombre);
    producto.append(datos);

    return producto;
}

function menuPaginado() {
    let pages = document.createElement("div");
    pages.classList.add("menu-paginas");
    pages.innerHTML = `
      <div class="anterior" id="prev">&#9754;</div>
      <span class="texto">Mostrando página ${ page } de ${ numPaginas }</span>
      <div class="siguiente" id="next">&#10151;</div>
    `;

    return pages;
}

