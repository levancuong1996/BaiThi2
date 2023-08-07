var colorArray = [];
const random = () => {
    const type = document.getElementById('type');
    const background = document.getElementById('main');
    const colorCode = document.getElementById('colorCode');
    if (type.value.toString() === '1') {
        do {
            var randomColor = "#" + Math.floor(Math.random() * 0xffffff).toString(16);
        }while (randomColor.length !== 7);
        background.style.removeProperty("background-image");
        background.style.backgroundColor = randomColor;
        colorCode.value = randomColor;
    }else {
        if (colorCode.value.trim()) {
            colorArray = colorCode.value.split(', ');
        }else {
            colorArray = [];
        }
        do {
            var randomColor = "#" + Math.floor(Math.random() * 0xffffff).toString(16);
        }while (randomColor.length !== 7);
        colorArray.push(randomColor);
        background.style.removeProperty("background-color");
        console.log(colorArray)
        if (colorArray.length > 1) {
            background.style.backgroundImage = `linear-gradient(${colorArray.join(", ")})`
        }else {
            background.style.removeProperty("background-image");
            background.style.backgroundColor = colorArray[0];
        }
        colorCode.value = `${colorArray.join(', ')}`;
    }
    
}

const copy = () => {
    const colorCode = document.getElementById('colorCode');
    if (colorCode.value) {
        navigator.clipboard.writeText(colorCode.value);
        alert(`Đã copy mã màu ${colorCode.value}`)
    }else {
        alert(`Bạn chưa random mã màu`)
    }
    
}