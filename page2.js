/*page2*/
let currentIndex = 0;
const items = document.querySelectorAll('.menu-item');
const totalItems = items.length;

const nextBtn = document.getElementById('nextBtn');
const backBtn = document.getElementById('backBtn');

function updateSlider(index) {
    items.forEach((item, i) => {
        item.classList.remove('active');
        if (i === index) {
            item.classList.add('active');
        }
    });
}

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalItems; // วนกลับไปอันแรกถ้าถึงอันสุดท้าย
    updateSlider(currentIndex);
});

backBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems; // วนไปอันสุดท้ายถ้าถอยจากอันแรก
    updateSlider(currentIndex);
});