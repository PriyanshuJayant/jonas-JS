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

// createImage('img/img-1.jpg')
//     .then(img => {
//         currentImg = img;
//         console.log('Image 1 Loaded');
//         return wait(3);
//     })
//     .then(() => {
//         currentImg.style.display = 'none';
//         return createImage('img/img-2.jpg');
//     })
//     .then(img => {
//         currentImg = img;
//         console.log('Image 2 Loaded');
//         return wait(3);
//     })
//     .then(() => {
//         currentImg.style.display = 'none';
//     })
//     .then((img) => {
//         currentImg = img;
//         console.log('Image 3 is Loaded');
//         return createImage('img/img-1.jpg');
//     })
//     .catch(err => console.error(err));

const loadNPause = async () => {
    try {
        // Load Image 1
        let img = await createImage('img/img-1.jpg');
        console.log('Image 1 Loaded');
        await wait(2);
        img.style.display = 'none';

        // Load Image 2
        img = await createImage('img/img-2.jpg');
        console.log('Image 2 Loaded');
        await wait(2);
        img.style.display = 'none';

        // Load Image 3
        img = await createImage('img/img-3.jpg');
        console.log('Image 3 Loaded');
        await wait(2);

    } catch (err) {
        console.error(err);
    }
}
// loadNPause()

// Part 2
const loadAll = async (imgArr) => {
    try {
        const imgs = imgArr.map(async img => 
            await createImage(img)
            // .then(res => console.log(res))
        );
        // console.log();

        const imgsEl = await Promise.all(imgs );
        console.log(imgsEl);
        imgsEl.forEach(img => img.classList.add('parallel'));
        
    } catch (error) {

    }
}
loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);