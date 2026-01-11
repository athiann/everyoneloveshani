// --- CONFIGURATION ---
const friendLetters = [
    {
        name: "norah",
        content: [
            "hani my mamah enak banget di ajak cerita, makasi ya hani kalo aku curhat cowoku itu kamu respon nya baik banget padahal kamu juga kadang at ur low phase tapi masi bisa nanggepin aku dengan baik aku sayang kamu banget hani",
            "my favorite memory of us si... kita ngonser bareng dan mundur ke belakang karna uda kehabisan energi sedangkan yang lain masi pada mau lanjut terus ke belakang beli es teh jumbo 10k ",
            "u deserve all of the kindness in this world hani, dont let someone lower urself and make u blaming urself, semua kebaikan yang uda kamu lakuin sangat sangat deserve buat dapet kembali dapet kebaikan itu juga",
            "JANGAN NGERASA BERSALAH KARNA PASANGANMU TREAT KAMU KAYA ANJNG. pls hargai diri kamu sendiri karna semua orang bersyukur dan bangga punya kamu, orang yang nyia” in kamu emang berarti dia anjing dan ga deserve buat sama kamu"
        ]
    },
    {
        name: "dinduy",
        content: [
            "hani km sgt sgt sgt keibuan dan punya dedikasi tinggi  aku suka bgt kerja sm km karena itu. km tau caranya ngobrol dan ngolah kata, gaada satu blunder pun yg aku inget tentang km pokonya best deh!!! sgt kagummmmm karena sebaik dan sesayang itu sm sekelilingnya ga heran semua orang cinta dan sayang hani",
            "my favourite memory adalah.. hani dan aku suka membicarakan chiikawa hehe",
            "keep your spirit awake han!! dont let the fire get out of you. semoga km selalu dikelilingi sama hal baik dan hal baik juga beriringan selalu menuju ke arahmu! i always be proud of who u are lopyu my genius hachiware",
            "hani semoga km bisa lebih mementingkan diri sendiri di atas semuanya di saat situasi memang memaksa km begitu yah jangan  jadi people pleaser cause you did not deserve thatt okei lopyu"
        ]
    },
    {
        name: "claudii",
        content: [
            "dari awal kenal hani pas ketuplak first gathering, aku udah langsung suka sama energinya. dia tuh orang yang gampang banget nyatuin orang2 (kayak panitia2 yg lain), apalagi kita masih sama-sama maba JUJURRR suasananya berasa akrab kayak udah saling kenal lama makaci hani, aku juga suka cara dia ngerespon temen2nyaa, kayak perhatian imut gemes gitu. jujur masih banyak banget hal yang aku suka dari hani, JUJURRR MASIH BANYAK BGT kayaak dari dia ngerespon temen2nya dan masih banyak lg. she’s literally such an angel  ",
            "kalo ngomongin memori favorit sih... banyak banget inimah.. hani bener bener baik bgt dan sabar bgt jujurrrr i love her ",
            "haniii, semoga kamu pelan2 bisa yaa ngelepas hal yang ngga bisa ngehargain kamuu yaa! orang yang bikin kamu capek, ragu, dan ngerasa kurang itu sebenernya ngga layak dapet hati kamu ;V (sori to say bye lelaki promed ui) KAMU TUH TERLALU BAIK BUAT DIA SUMPAAAHHH!!!! choose yourself first pleaseeee demi aku? karena apa yaa.. kamu tuh pantes banget buat dapetin yang jauh lebih tulus dan sayang bgt sm km (mungkin rifki? )",
            "aku tuh pengen hani lebih sayang sama dirinya sendiri, sama jangan capek2 ya warlok km tuh pp "
        ]
    },
    {
        name: "chikaa",
        content: [
            "HMMM HANII IS MY ROLE MODEL the way she speak, lead, learn, everything. Miss you hani",
            "memori fave aku... WKWKWKWKKW HANI PERNA IKUT AKU KE LATIHAN NATAL KRISTEN ANEH BGT",
            "semogaaa hani bisa terus bahagia dalam hidupnya! karena bahagia adalah obat dari semua hal di dunia ini",
            "HANI JANGAN SEDIH-SEDIH JANGAN GALAU JANGAN KIRA KAMU RENDAH, my independent women role model gue. YOU DESERVE ALL THE LOVEEEE"
        ]
    },
    {
        name: "whxuuu",
        content: [
            "seorang leader yang baik hati dan kompeten+++++, seorang pembimbing yg baik, all the best lah",
            "aku inget banget.. sebelum kita nonton CAPYTAL, hani udah hopelesss bgt karena ada kendala tiket, akhirnya gw coba cari bantuan ke orang lain dan akhirnya kita nonton konser bareng and seru”an bareng.",
            "hal yang ingin kusampaiin... LET THE MAGIC GUIDE YOUR JOURNEY ATLAS 2026",
            "Hani itu orang yg penuh sabar walaupun ada banyak hal yg ngebuat hani kesel, hani selalu bisa menghadapinya dengan baik dan membawakan hasil yang gokil, small things tapi ngasih feedback yg besar kepada banyak orang. keep the spirit han"
        ]
    },
    {
        name: "hanaa auliaa",
        content: [
            "HANIII LUCU BGT, LITERLI SUNSHINE!!!! positive energy carrier <33333 gumus bubub",
            "hani selalu ramah banget wow, mau situasi lagi hectic dia tetep se baik dan se ceria itu... selalu seneng gitu lo kalo di deket hani",
            "hani, I hope you will continue to be happy and be close to good people who always love you ^_______^",
            "hal yang aku ingin hani apresiasi di dirinya adalah... EVERYTHING ABOUT HER!!"
        ]
    },
    {
        name: "Navy",
        content: [
            "Hani itu humoris bangett, aku suka sifat humoris hani. Kaya kalau main sama hani tuh ga akan kehabisan topik deh, asik bangettt. Dia juga punya jiwa kepemimpinan yang buat dia makin kelihatan attractive dan berkharisma. Gacor banget deh hani ",
            "my favorite memory... Main ke pusdip berdua sama hani dan nyari sepeda tapi ternyata ga ada wkwkwkw ini kita jadinya beneran jalan dari feb ke pusdip tapi ga kerasa capeknya karena sepanjang jalan ada aja yg diketawain wkwkwk",
            "Hani harus selalu happy dan tetap semangat yaa, pokoknya tinggalin aja segala hal yg bikin kamu sedih. Kamu itu punya segudang potensi, jangan biarin diri kamu jatoh karena orang-orang yang gabisa menghargai kamu. GO HANI GO HANI GO!!!",
            "Segala hal dalam diri hani patut dihargai dan diapresiasi, jangan insecure, jangan merasa kecil apalagi karena omongan atau perbuatan orang-orang jahat di luar sana. HANI PANTAS UNTUK DICINTAI, DIHARGAI, DAN DIAPRESIASI BAHKAN OLEH DIRINYA SENDIRI "
        ]
    },
    {
        name: "-",
        content: [
            "hal yang aku sukai dari hani... teliti, peka, humble, well organized",
            "ga tau namaku walaupun sempet satu SMA (waktu jadi pj atlas)",
            "tetep jadi hani yang sabar, ramah, dan humble ke semua orang yh",
            "hal yang aku ingin hani apresiasi lebih di dirinya... ambisinya yang ga habis habis"
        ]
    },
    {
        name: "alterbee",
        content: [
            "kalo hal hal yang aku sukai dari hani... jujur, ada beberapa. hani itu tipe orang yang responsible dan reliable, the kind of person you feel safe to trust things with. kalau suatu hal dipegang hani, rasanya tenang karena tahu it’ll be handled with care. selain itu, hani itu pendengar yang baik, bukan cuma dengerin, tapi benar-benar hadir. setiap kali aku curhat atau minta saran, hani selalu respon dengan empati, ngga judgemental, dan somehow selalu bikin kepalaku lebih jernih setelahnya. it feels warm talking to you, like being understood without having to explain too much.",
            "salah satu yang paling aku inget adalah waktu hani jadi ketua panitia first gathering. aku kepilih jadi panitia di divisi perkap, dan jujur… aku bener-bener awam soal itu. aku sempet takut, ngerasa “aku bisa ngga ya?” tapi hani came in as a leader yang super calm dan supportive. kamu ngga pernah bikin aku ngerasa bodoh atau ketinggalan, malah pelan-pelan ngajarin dan ngebimbing sampai aku bisa belajar dan jalan bareng divisi lain. dari situ aku bener-bener ngerasa, “oh, leadership bisa sehangat ini ya.” yang bikin aku makin kagum, kita sama-sama linjur dari ipa murni tapi cara hani adapt, belajar, dan lead people itu cepat banget. you made everything feel possible dan itu keren banget jujur",
            "hani, please be yourself. jangan terlalu keras sama diri sendiri. kamu mungkin ngga selalu sadar, tapi banyak orang kagum sama kamu, termasuk aku. stop feeling small, because you’re already powerful in your own quiet way. your presence matters, your effort matters, and you’re loved more than you think. keep going, okay? the world needs your kind of warmth.",
            "aku harap hani bisa lebih menghargai proses dan perjalanan hidupmu sendiri. every step you take, every effort you put in, it all counts. kamu itu orang yang luar biasa, bukan karena pencapaian aja, tapi karena caramu bertumbuh, belajar, dan tetap jadi diri kamu. please be proud of yourself, hani. you deserve that."
        ]
    }
];
        
// --- LOGIC ---
let currentLetterIndex = 0;
let isMusicPlaying = false;
const bgMusic = document.getElementById("bg-music");
const clickSound = document.getElementById("click-sound");
if(bgMusic) bgMusic.volume = 0.3; 

function playClick() {
    if(clickSound) {
        clickSound.currentTime = 0;
        clickSound.play();
    }
}

// WALKMAN: Plays click sound
function toggleMusic() {
    playClick(); // Click sound happens here
    if (isMusicPlaying) {
        bgMusic.pause();
    } else {
        bgMusic.play();
    }
    isMusicPlaying = !isMusicPlaying;
}

// MAILBOX: No click sound
function openMailbox() {
    // playClick();  <-- Removed
    document.getElementById("friend-overlay").style.display = "flex";
    document.getElementById("envelope-closed").style.display = "block";
    document.getElementById("paper-content").classList.add("hidden");
    loadLetterData(currentLetterIndex);
}

function loadLetterData(index) {
    const data = friendLetters[index];
    document.getElementById("sender-name").innerText = data.name;
    const bodyContainer = document.getElementById("letter-body");
    let htmlContent = `<p>Hi Hani,</p>`;
    data.content.forEach(paragraph => {
        htmlContent += `<p>${paragraph}</p>`;
    });
    htmlContent += `<p style="margin-top: 50px; text-align: right;">With love,<br>${data.name}</p>`;
    bodyContainer.innerHTML = htmlContent;
}

// ENVELOPE OPEN: No click sound
function revealLetter(event) {
    event.stopPropagation();
    // playClick();  <-- Removed
    document.getElementById("envelope-closed").style.display = "none";
    document.getElementById("paper-content").classList.remove("hidden");
}

function closeOverlay(event) {
    if (event.target.id === "friend-overlay") {
        document.getElementById("friend-overlay").style.display = "none";
        currentLetterIndex++;
        if (currentLetterIndex >= friendLetters.length) currentLetterIndex = 0;
    }
}

// SECRET LETTER LOGIC: No click sound
function triggerSecretGate() {
    // playClick();  <-- Removed
    document.getElementById("password-overlay").style.display = "flex";
}

function closePasswordGate() {
    document.getElementById("password-overlay").style.display = "none";
}

// NEW FUNCTION: Closes password overlay when clicking background
function closePasswordOverlay(event) {
    if (event.target.id === "password-overlay") {
        document.getElementById("password-overlay").style.display = "none";
    }
}

function checkPassword() {
    const input = document.getElementById("password-input").value;
    if (input === "28322") {
        window.location.href = "message.html";
    } else {
        document.getElementById("error-msg").style.display = "block";
    }
}