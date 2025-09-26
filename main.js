function checkName() {
    const fullName = "Trần Anh Phương";
    const parts = fullName.toLowerCase().split(" ");
    const input = document.getElementById('nameInput').value.trim().toLowerCase();
    const memoryBox = document.getElementById('memory-box');
    const confessBox = document.querySelector('.confess-box');

    if (input === fullName.toLowerCase()) {
        showModal('Hi em bé của anh nhaaa 💖');
        memoryBox.style.display = 'block';
        confessBox.style.display = 'none';
        showMemorySlide(0);
    } else if (
        input === parts[0] ||
        input === parts[0] + " " + parts[1] ||
        input === parts[1] ||
        input === parts[2] ||
        input === parts[1] + " " + parts[2]
    ) {
        showModal('Hãy nhập đầy đủ họ và tên nhé! 😘');
        memoryBox.style.display = 'none';
        confessBox.style.display = 'block';
    } else {
        showModal('Hình như cậu không phải người tớ đang chờ... 😳');
        memoryBox.style.display = 'none';
        confessBox.style.display = 'block';
    }
}

// Slide logic
let currentSlide = 0;
const totalSlides = 3;

function showMemorySlide(index) {
    for (let i = 0; i < totalSlides; i++) {
        const slide = document.getElementById(`memory-slide-${i}`);
        if (slide) {
            slide.style.display = i === index ? 'block' : 'none';
        }
    }
    currentSlide = index;
    // Ẩn nút prev nếu ở slide đầu, ẩn nút next nếu ở slide cuối
    document.getElementById('prev-memory').style.display = currentSlide === 0 ? 'none' : 'flex';
    document.getElementById('next-memory').style.display = currentSlide === totalSlides - 1 ? 'none' : 'flex';
}

document.getElementById('prev-memory').onclick = function() {
    if (currentSlide > 0) {
        showMemorySlide(currentSlide - 1);
    }
};
document.getElementById('next-memory').onclick = function() {
    if (currentSlide < totalSlides - 1) {
        showMemorySlide(currentSlide + 1);
    }
};

// Modal logic giữ nguyên
function showModal(message) {
    const modal = document.getElementById('modal');
    const msg = document.getElementById('modal-message');
    msg.textContent = message;
    modal.style.display = 'flex';
}

document.getElementById('modal-close').onclick = function() {
    document.getElementById('modal').style.display = 'none';
};

window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

// Thêm sự kiện cho nút "Đi xem phim cùng anh nhé?"
document.addEventListener('DOMContentLoaded', function() {
    const movieBtn = document.getElementById('go-movie-btn');
    if (movieBtn) {
        movieBtn.onclick = function() {
            document.getElementById('memory-box').style.display = 'none';
            document.getElementById('movie-box').style.display = 'block';
        };
    }
});