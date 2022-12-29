const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const pic2="D:\GitHub\sixi1116\image文件夹\gallery-start\pic2.jpg"
const pic3="D:\GitHub\sixi1116\image文件夹\gallery-start\pic3.jpg"
const pic4="D:\GitHub\sixi1116\image文件夹\gallery-start\pic4.jpg"
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
imageFilenames=[pic2,pic3,pic4]
/* Declaring the alternative text for each image file */
alternativeText=["b","c","d"]
/* Looping through images */
for (let i=0;i<imageFilenames.length;i++){
    const img=document.createElement("img")
    img.src=imageFilenames[i]
   thumbBar.appendChild(img)

}



// const newImage = document.createElement('img');
// newImage.setAttribute('src', xxx);
// newImage.setAttribute('alt', xxx);
// thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
