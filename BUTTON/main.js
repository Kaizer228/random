let container = document.querySelector('.container');
let Yes = document.getElementById('Yes');
let No = document.getElementById('No');
let h1 = document.getElementById('h1');

No.addEventListener('click', () => {
    let maxX = container.clientWidth - Yes.clientWidth;
    let maxY = container.clientHeight - Yes.clientHeight;

    let x = Math.floor((Math.random() * maxX) + 1);
    let y = Math.floor((Math.random() * maxY) + 1);
    No.style.top = `${x}px`;
    No.style.left = `${y}px`;
    h1.innerHTML = "Ouch sakit";
});
Yes.addEventListener('click', () => {
    h1.innerHTML = "yieee yot na";
});