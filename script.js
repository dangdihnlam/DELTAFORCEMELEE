
/* ================================
   DELTA FORCE - WEAPON ARCHIVE
================================ */

const weapons = {
    weapon1: {
        name: "COMBAT KNIFE",
        vietnamese: "Dao chiến đấu",
        image: "images/weapon1.png",
        description: "Thiết kế dao chiến đấu mang phong cách quân sự cổ điển. Hình dáng gọn gàng, tạo cảm giác mạnh mẽ và tối giản."
    },

    weapon2: {
        name: "KARAMBIT",
        vietnamese: "Dao Karambit",
        image: "images/weapon2.png",
        description: "Một thiết kế có đường cong đặc trưng, nổi bật với kiểu dáng độc đáo và phong cách hiện đại."
    },

    weapon3: {
        name: "BUTTERFLY KNIFE",
        vietnamese: "Dao bướm",
        image: "images/weapon3.png",
        description: "Mẫu dao có cấu trúc hai phần tay cầm đặc trưng. Thiết kế được yêu thích nhờ vẻ ngoài khác biệt."
    },

    weapon4: {
        name: "TACTICAL DAGGER",
        vietnamese: "Dao găm chiến thuật",
        image: "images/weapon4.png",
        description: "Mang phong cách thiết kế hiện đại, đường nét sắc gọn và vẻ ngoài đậm chất chiến thuật."
    },

    weapon5: {
        name: "MACHETE",
        vietnamese: "Mã tấu",
        image: "images/weapon5.png",
        description: "Thiết kế lưỡi dài, bản rộng và mang phong cách mạnh mẽ. Đây là một hình tượng thường xuất hiện trong các bộ sưu tập quân sự."
    },

    weapon6: {
        name: "TOMAHAWK",
        vietnamese: "Rìu chiến thuật",
        image: "images/weapon6.png",
        description: "Thiết kế rìu nhỏ mang phong cách hiện đại, tạo điểm nhấn bằng hình dáng đặc trưng và kết cấu chắc chắn."
    },

    weapon7: {
        name: "COMBAT BATON",
        vietnamese: "Gậy chiến thuật",
        image: "images/weapon7.png",
        description: "Vật phẩm có kiểu dáng đơn giản, thiên về phong cách thiết bị chiến thuật và tính thẩm mỹ công nghiệp."
    },

    weapon8: {
        name: "TRENCH KNIFE",
        vietnamese: "Dao chiến hào",
        image: "images/weapon8.png",
        description: "Thiết kế lấy cảm hứng từ các vật phẩm quân sự lịch sử, tạo cảm giác cổ điển và cứng cáp."
    },

    weapon9: {
        name: "SURVIVAL KNIFE",
        vietnamese: "Dao sinh tồn",
        image: "images/weapon9.png",
        description: "Mang phong cách dụng cụ dã ngoại, với thiết kế thể hiện sự bền bỉ và tinh thần khám phá."
    },

    weapon10: {
        name: "SHORT SWORD",
        vietnamese: "Kiếm ngắn",
        image: "images/weapon10.png",
        description: "Một thiết kế kiếm ngắn mang nét cổ điển, kết hợp với phong cách trưng bày hiện đại."
    },

    weapon11: {
        name: "KUKRI",
        vietnamese: "Dao Kukri",
        image: "images/weapon11.png",
        description: "Nổi bật bởi đường cong đặc trưng và hình dáng mang đậm dấu ấn văn hóa lịch sử."
    },

    weapon12: {
        name: "HEAVY BLADE",
        vietnamese: "Đại đao",
        image: "images/weapon12.png",
        description: "Mẫu vũ khí có thiết kế lớn, tạo cảm giác uy nghi và là điểm nhấn trong bộ sưu tập."
    }
};

/* MỞ HỒ SƠ */
function showCharacter(id) {
    const weapon = weapons[id];

    if (!weapon) return;

    document.getElementById("modalWeaponImage").src = weapon.image;
    document.getElementById("modalWeaponImage").alt = weapon.name;

    document.getElementById("modalWeaponName").textContent = weapon.name;
    document.getElementById("modalWeaponVietnamese").textContent = weapon.vietnamese;
    document.getElementById("modalWeaponDescription").textContent = weapon.description;

    document.getElementById("weaponModal").classList.add("active");

    document.body.style.overflow = "hidden";
}

/* ĐÓNG HỒ SƠ */
function closeCharacter() {
    document.getElementById("weaponModal").classList.remove("active");

    document.body.style.overflow = "";
}

/* BẤM RA NGOÀI ĐỂ ĐÓNG */
document.getElementById("weaponModal").addEventListener("click", function(event) {
    if (event.target === this) {
        closeCharacter();
    }
});

/* PHÍM ESC ĐỂ ĐÓNG */
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeCharacter();
    }
});

/* ==========================================
   BACK TO TOP BUTTON
========================================== */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {
    if (window.scrollY > 500) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});

backToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
