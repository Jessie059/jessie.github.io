
function imgClink() {
    let myImage = document.querySelector('img');
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/3.jpeg') {
        myImage.setAttribute('src', 'images/2.jpeg');
    } else {
        myImage.setAttribute('src', 'images/3.jpeg');
    }
}

function setUserName() {
    let myHeading = document.querySelector('h1');
    let myName = prompt('请输入你的名字。');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = '你好，' + myName;
    }
}
function getUserName() {
    let myHeading = document.getElementById('demo');
    if (!localStorage.getItem('name')) {
        setUserName();
    } else {
        let storedName = localStorage.getItem('name');
        myHeading.textContent = '你好，' + storedName;
    }
}
