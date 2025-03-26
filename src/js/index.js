const menu_btn = document.getElementById("menu-btn");
const main_menu = document.getElementById("main-menu");
const close_menu = document.getElementById("close");
const submit_btn = document.getElementById("submit-btn");
const book_card = document.getElementById("book-card");

const data = [
    {
        title: "Mind Reader",
        price: "Rp. 95.000,-",
        category: "Self Development",
        img: "./src/img/mind-reader.jpg",
        tokped: "https://www.tokopedia.com/socialagencybaru/mind-reader-david-j-lieberman?extParam=ivf%3Dfalse%26keyword%3Dmind+reader%26search_id%3D2025031900141241B499E9CA7D4A317L6Z%26shop_tier%3D2%26src%3Dsearch",
        shpee: "https://shopee.co.id/Buku-Mind-Reader-(David-J.-Lieberman)-i.63842097.23259039912",
        gramedia: "https://www.gramedia.com/products/mind-reader-1",
    },
    {
        title: "Your Mind Kills",
        price: "Rp. 85.000,-",
        category: "Self Development",
        img: "./src/img/your-mind.jpg",
        tokped: "https://www.tokopedia.com/penerbitharu/your-mind-kills-rifan-ulhaq-gradien?extParam=ivf%3Dfalse%26keyword%3Dyour+mind+kills%26search_id%3D2025031900124341B499E9CA7D4A139ARB%26shop_tier%3D2%26src%3Dsearch",
        shpee: "https://shopee.co.id/Your-Mind-Kills-By-Rifan-Ulhaq-i.368151573.22119897915",
        gramedia: "https://www.gramedia.com/products/mind-reader-1",
    },
    {
        title: "Atomic Habit",
        price: "Rp. 102.000,-",
        category: "Self Development",
        img: "./src/img/atomic.jpg",
        tokped: "https://www.tokopedia.com/gramedia-store/buku-self-help-atomic-habits-perubahan-kecil-yang-memberikan-hasil-luar-biasa-hc-james-clear-1729583406897465862?extParam=ivf%3Dtrue%26keyword%3Datomic+habits%26search_id%3D20250319001440F02082786878BC099YCU%26src%3Dsearch",
        shpee: "https://shopee.co.id/Atomic-Habits-Perubahan-Kecil-yang-Memberikan-Hasil-Luar-Biasa-(James-Clear)-i.63842097.5026039294?sp_atk=430b2b37-e546-482d-a5f4-6920b9b425db&xptdk=430b2b37-e546-482d-a5f4-6920b9b425db",
        gramedia: "https://www.gramedia.com/products/james-clear-atomic-habit",
    },
    {
        title: "Solo Leveling 08",
        price: "Rp. 85.000,-",
        category: "Comic",
        img: "./src/img/solo.avif",
        tokped: "https://www.tokopedia.com/gramedia-store/gramedia-buku-komik-solo-leveling-08-dubu-chugong?extParam=ivf%3Dfalse%26keyword%3Dsolo+leveling+08%26search_id%3D202503190017054D772CA12E0FD82964W1%26src%3Dsearch%26whid%3D4147220",
        shpee: "https://shopee.co.id/Komik-Solo-Leveling-08-(DUBU-CHUGONG)-i.63842097.26307965965?sp_atk=984f9750-8fe4-410f-b4b0-6fba3360b612&xptdk=984f9750-8fe4-410f-b4b0-6fba3360b612",
        gramedia: "https://www.gramedia.com/products/solo-leveling-08-komik",
    },
    {
        title: "Mind Reader",
        price: "Rp. 95.000,-",
        category: "Self Development",
        img: "./src/img/mind-reader.jpg",
        tokped: "https://www.tokopedia.com/socialagencybaru/mind-reader-david-j-lieberman?extParam=ivf%3Dfalse%26keyword%3Dmind+reader%26search_id%3D2025031900141241B499E9CA7D4A317L6Z%26shop_tier%3D2%26src%3Dsearch",
        shpee: "https://shopee.co.id/Buku-Mind-Reader-(David-J.-Lieberman)-i.63842097.23259039912",
        gramedia: "https://www.gramedia.com/products/mind-reader-1",
    },
    {
        title: "Solo Leveling 08",
        price: "Rp. 85.000,-",
        category: "Comic",
        img: "./src/img/solo.avif",
        tokped: "https://www.tokopedia.com/gramedia-store/gramedia-buku-komik-solo-leveling-08-dubu-chugong?extParam=ivf%3Dfalse%26keyword%3Dsolo+leveling+08%26search_id%3D202503190017054D772CA12E0FD82964W1%26src%3Dsearch%26whid%3D4147220",
        shpee: "https://shopee.co.id/Komik-Solo-Leveling-08-(DUBU-CHUGONG)-i.63842097.26307965965?sp_atk=984f9750-8fe4-410f-b4b0-6fba3360b612&xptdk=984f9750-8fe4-410f-b4b0-6fba3360b612",
        gramedia: "https://www.gramedia.com/products/solo-leveling-08-komik",
    },
];

let count = 0;

data.forEach((data) => {
    const book_card_content = document.createElement("section");
    book_card_content.className = "book-group";
    book_card_content.innerHTML = `<img src="${data.img}" alt="main-reader">
                    <div class="price-group">
                        <p>${data.title}</p>
                        <p>Catogory: ${data.category}</p>
                        <p>${data.price}</p>
                        <div class="link-group">
                            <a href="${data.tokped}" target="_blank">Tokopedia</a>
                            <a href="${data.shpee}" target="_blank">Shopee</a>
                            <a href="${data.gramedia}" target="_blank">Gramedia</a>
                        </div>
                        <button id="btn-price" onclick="alert('Successfully purchased book ${data.title} for ${data.price}')">Buy</button>
                    </div>`;
    book_card.appendChild(book_card_content);
});

menu_btn.addEventListener("click", () => {
    main_menu.style.right = "0rem";
});

close_menu.addEventListener("click", () => {
    main_menu.style.right = "-65rem";
});

// btn_start.addEventListener("click", (e) => {
//   let comp = Math.floor(Math.random() * 3) + 1;

//   if (parseInt(user_choice.value) === 1) {
//     user_img.src = "/src/img/rock.jpg";
//   } else if (parseInt(user_choice.value) === 2) {
//     user_img.src = "/src/img/paper.jpg";
//   } else {
//     user_img.src = "/src/img/scissors.jpg";
//   }

//   if (comp === 1) {
//     com_img.src = "/src/img/rock.jpg";
//   } else if (comp === 2) {
//     com_img.src = "/src/img/paper.jpg";
//   } else {
//     com_img.src = "/src/img/scissors.jpg";
//   }

//   if (parseInt(user_choice.value) === comp) {
//     label.innerText = "Draw Game!";
//   } else if (parseInt(user_choice.value) === 1 && comp === 3) {
//     label.innerText = "You Win!";
//     count++;
//   } else if (parseInt(user_choice.value) === 2 && comp === 1) {
//     label.innerText = "You Win!";
//     count++;
//   } else if (parseInt(user_choice.value) === 3 && comp === 2) {
//     label.innerText = "You Win!";
//     count++;
//   } else {
//     label.innerText = "You Lose!";
//     count--;
//   }

//   score.innerText = count;
// });
// submit_btn.addEventListener("click", (e)=> e.preventDefault());
