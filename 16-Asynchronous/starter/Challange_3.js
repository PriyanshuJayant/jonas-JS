// const imgContainer = document.querySelector('.images');
// const img = document.createElement('img');
// img.src = 'img/img-1.jpg'
// img.classList.add('images');

// imgContainer.appendChild(img);

const wait = function (seconds) {
    return new Promise(function (resolve) {
        setTimeout(resolve, seconds * 1000);
    });
};

const imgContainer = document.querySelector('.images');
const createImage = function (imgPath) {
    return new Promise(function (resolve, reject) {
        const img = document.createElement('img');
        img.src = imgPath;
        img.addEventListener('load', function () {
            imgContainer.append(img);
            resolve(img);
        });
        img.addEventListener('error', function () {
            reject(new Error('Image not Found'));
        });
    });
};
let currentImg;

createImage('img/img-1.jpg')
    .then(img => {
        currentImg = img;
        console.log('Image 1 Loaded');
        return wait(3);
    })
    .then(() => {
        currentImg.style.display = 'none';
        return createImage('img/img-2.jpg');
    })
    .then(img => {
        currentImg = img;
        console.log('Image 2 Loaded');
        return wait(3);
    })
    .then(() => {
        currentImg.style.display = 'none';
    })
    .then((img) => {
        currentImg = img;
        console.log('Image 3 is Loaded');
        return createImage('img/img-1.jpg');
    })
    .catch(err => console.error(err));