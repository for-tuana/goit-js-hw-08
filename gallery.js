// function createGalleryMarkup(images) {
//     const { preview, original, description } = images;
//     let imagesContainer = images.map((image) => {
//         const li = document.createElement("li")
//         li.classList.add("gallery-item")

//         document.createElement("a")
//         a.classList.add("gallery-link")
//         a.href = original

//         document.createElement("img")
//         img.classList.add("gallery-image")
//         img.src = preview;
//         img.setAttribute("data-source", original);
//         img.alt = description;

//         a.appendChild(img);
//         li.appendChild(a);

//         document.querySelector(".gallery").appendChild(li);
//     )};
// }

function createGalleryMarkup(images) {
    const gallery = document.querySelector(".gallery");
    gallery.style.display = "flex";
    gallery.style.flexWrap = "wrap";
    gallery.style.gap = "10px";
    
    const markup = images.map(({ preview, original, description }) => {
        const li = document.createElement("li");
        li.classList.add("gallery-item");
        li.style.listStyle = "none";
        li.style.boxSizing = "border-box";
        li.style.width = "calc(25.33% - 10px)";

        const a = document.createElement("a");
        a.classList.add("gallery-link");
        a.href = original;

        const img = document.createElement("img");
        img.classList.add("gallery-image");
        img.src = preview;
        img.setAttribute("data-source", original);
        img.alt = description;
        img.style.width = "360px";
        img.style.height = "300px";
        
        

         a.addEventListener("click", (event) => {
            event.preventDefault(); 
        });

        a.appendChild(img);
        li.appendChild(a);

        return li;
    });

    gallery.append(...markup);
}

const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

createGalleryMarkup(images); 
const gallery = document.querySelector(".gallery");
console.log(gallery)

function displayLargeImage(event) {
    if (event.target.nodeName !== "IMG") {
        return;
    }

    const selectedLargeImageUrl = event.target.dataset.source;
    console.log(selectedLargeImageUrl);
    
    const largeImageContainer = document.createElement("div");
    largeImageContainer.classList.add("large-image-container");
    largeImageContainer.innerHTML = `<img src="${selectedLargeImageUrl}" alt="Selected Image" style="max-width: 100%; height: auto; margin-top: 20px;">`;
    document.body.append(largeImageContainer);
}

gallery.addEventListener("click", displayLargeImage);


