// JavaScript
const letters = document.querySelectorAll('.welcome-portfolio span');

// Khởi tạo màu xen kẽ (P xanh, o trắng, r xanh,...)
letters.forEach((span, i) => {
    span.classList.add(i % 2 === 0 ? 'filled' : 'outlined');
    span.classList.add('blinking'); // tất cả đều nhấp nháy
});

// Đảo trạng thái xanh ↔ trắng sau mỗi 1.2s
setInterval(() => {
    letters.forEach((span) => {
        span.classList.toggle('filled');
        span.classList.toggle('outlined');
    });
}, 1200);

/*====================================================*/

// JS tự động thêm hiệu ứng xen kẽ nhấp nháy
const softskills = document.querySelectorAll(".softskill");

setInterval(() => {
    softskills.forEach((skill, index) => {
        if (index % 2 === 0) {
            skill.classList.toggle("blink");
        } else {
            skill.classList.remove("blink");
        }
    });
}, 1000);

/*====================================================*/

const container = document.querySelector('.software-skills');
const cards = container.querySelectorAll('.skill-card');

// Thứ tự chạy chu vi cho lưới 4x2
const perimeterOrder = [0, 4, 5, 6, 7, 3, 2, 1];

let step = 0;

setInterval(() => {
    // Bỏ active cũ
    cards.forEach(c => c.classList.remove('active'));

    // Lấy index tiếp theo trong chu vi
    const activeIndex = perimeterOrder[step % perimeterOrder.length];
    cards[activeIndex].classList.add('active');

    step++;
}, 2000);

/*==============================*/