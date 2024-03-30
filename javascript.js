// trigger to play music in the background with sweetalert
window.addEventListener('load', () => {
    Swal.fire({
        title: 'Do you want to play music in the background?',
        // text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
    }).then((result) => {
        if (result.isConfirmed) {
            document.querySelector('.song').play();
            animationTimeline();
        } else {
            animationTimeline();
        }
    });
});
// animation timeline
const animationTimeline = () => {
    // split chars that needs to be animated individually
    const kata = document.getElementById('kata');
    const p7 = document.getElementById('p7');
    const whatsapp = document.getElementById("whatsapp");
    const nomor = "6281254976507";
    const pesan = "Halo sayang, yuk kita kawin! :p"
    const whatsappUrl = `https://wa.me/${nomor}?text=${encodeURIComponent(pesan)}`;

    //button1
    const myButton1 = document.getElementById('myButton1');

    // button 2
    const myButton2 = document.getElementById('myButton2');

    const belia = document.getElementById("belia");

    const ideaTextTrans = {
        opacity: 0,
        y: -20,
        rotationX: 5,
        skewX: "15deg"
    }

    const ideaTextTransLeave = {
        opacity: 0,
        y: 20,
        rotationY: 5,
        skewX: "-15deg"
    }

    // timeline
    const tl = new TimelineMax();

    const tl2 = new TimelineMax();

    tl.to('.container', 0.6, {
        visibility: "visible"
    })
    .from('.p1', 0.7, {
        opacity: 0,
        y: 10
    })
    .from(".p2", 0.4, {
        opacity: 0,
        y: 10
    })
    .to(".p1",
        0.7,
        {
            opacity: 0,
            y: 10
        },
    "+=3.5")
    .to(".p2",
        0.7,
        {
            opacity: 0,
            y: 10
        },
    "-=1")
    .from(".p3", 0.7, {
        opacity: 0,
        y: 10
    })
    .to(".p3",
        0.7,
        {
            opacity: 0,
            y: 10
        },
    "+=3")
    .from(".p4", 0.7, {
        y: 10,
        opacity: 0,
    })
    .to(
        ".p4",
        0.7, {
            opacity: 0,
            y: 10
        },
    "+=1")
    .from(".p5", 0.7, ideaTextTrans)
    .to(".p5", 0.7, ideaTextTransLeave, "+=2.5")


    .from("button", 0.5, {
        scale: 0.2,
        opacity: 0,
    })

    // Tambahkan event listener untuk menghilangkan kedua tombol saat tombol A diklik dengan transisi
    myButton1.addEventListener('click', function() {
        // Sembunyikan tombol A dan B dengan transisi ease-out
        gsap.to([myButton1, myButton2], { opacity: 0, duration: 1, ease: "power2.out", onComplete: hideButtons });
        gsap.to(p7, {
            duration: 1, // durasi animasi (1 detik)
            opacity: 1, // ubah opasitas menjadi 1 (munculkan teks)
            ease: "power2.out" // efek transisi ease
        });
        kata.style.display = "block";
        p7.style.display = "block";
        tl.from(".p6", 0.7, {opacity: 1, y: 10})
        .to(".p6", 0.7, {opacity: 1, y: 10})
        .from(".belia",{opacity: 1, visibility: "visible", scale: 1, }, "+=2")
        .to(".belia",0.7, {opacity: 0, y: 10},"+=1")
        .from(".caesar",0.7, {opacity: 1, })
        .to(".caesar",0.7,{opacity: 0, y: 10,},"+=1")
        .from(".caesar2", 0.7, {y: 10, opacity: 1, })
        .to(".caesar2", 0.7, {opacity: 0, y: 10, }, "+=1")
        .from(".kita", 0.7, {y: 30, opacity: 1, })
        .to(".kita", 0.7, {opacity: 0, y: 10, });
        tl.from(".kata", 0.7, {opacity: 1, visibility: "visible", ideaTextTrans, y: 10})
        .to(".kata", 0.7, {opacity: 1, y: 10})
        .from(".p7", 0.7, {opacity: 1, visibility: "visible", y: 10, duration: 6})
        .to(".p6", 0.7, {opacity: 1, y: 10})
    });
    

    function hideButtons() {
        myButton1.style.display = 'none';
        myButton2.style.display = 'none';
    }
    whatsapp.addEventListener("click", function(){
        window.open(whatsappUrl);
    });
    
    // Tambahkan event listener untuk mengaktifkan animasi ketika tombol diklik
    myButton2.addEventListener('click', function() {
    // Menentukan posisi acak untuk tombol (misalnya, menggunakan nilai acak untuk posisi left dan top)
        const randomLeft = Math.random() * 250;
        const randomTop = Math.random() * 250;
        // Mengubah posisi tombol
        myButton2.style.left = randomLeft + 'px';
        myButton2.style.top = randomTop + 'px';
      });
      
}


    //button 1
    

    

    // Membuat animasi dengan GSAP
    // gsap.to(button, {scale: 0.2, duration: 0.3, ease: 'power2.inOut', yoyo: true, opacity: 0});
 
    // .to("button", 1, {
    //     scale: 0.2, opacity: 0,
    // })
 
    // .staggerTo(
    //     ".hbd-chatbox span",
    //     1.5, {
    //         visibility: "visible",
    //     },
    //     0.05
    // )
    // .to(".button", 0.1, {
    //     backgroundColor: "rgb(127, 206, 248)",
    // },
    // "+=4")
    // .from(".belia", 0.7)
    // .to(".belia", 0.7, "+=2.5")
//     .from(".idea-3", 0.7, ideaTextTrans)
//     .to(".idea-3 strong", 0.5, {
//         scale: 1.2,
//         x: 10,
//         backgroundColor: "rgb(21, 161, 237)",
//         color: "#fff",
//     })
//     .to(".idea-3", 0.7, ideaTextTransLeave, "+=2.5")
//     .from(".idea-4", 0.7, ideaTextTrans)
//     .to(".idea-4", 0.7, ideaTextTransLeave, "+=2.5")
//     .from(
//         ".idea-5",
//         0.7, {
//             rotationX: 15,
//             rotationZ: -10,
//             skewY: "-5deg",
//             y: 50,
//             z: 10,
//             opacity: 0,
//         },
//         "+=1.5"
//     )
//     .to(
//         ".idea-5 span",
//         0.7, {
//             rotation: 90,
//             x: 8,
//         },
//         "+=1.4"
//     )
//     .to(
//         ".idea-5",
//         0.7, {
//             scale: 0.2,
//             opacity: 0,
//         },
//         "+=2"
//     )
//     .staggerFrom(
//         ".idea-6 span",
//         0.8, {
//             scale: 3,
//             opacity: 0,
//             rotation: 15,
//             ease: Expo.easeOut,
//         },
//         0.2
//     )
//     .staggerTo(
//         ".idea-6 span",
//         0.8, {
//             scale: 3,
//             opacity: 0,
//             rotation: -15,
//             ease: Expo.easeOut,
//         },
//         0.2,
//         "+=1.5"
//     )
//     .staggerFromTo(
//         ".baloons img",
//         2.5, {
//             opacity: 0.9,
//             y: 1400,
//         }, {
//             opacity: 1,
//             y: -1000,
//         },
//         0.2
//     )
//     .from(
//         ".profile-picture",
//         0.5, {
//             scale: 3.5,
//             opacity: 0,
//             x: 25,
//             y: -25,
//             rotationZ: -45,
//         },
//         "-=2"
//     )
//     .from(".hat", 0.5, {
//         x: -100,
//         y: 350,
//         rotation: -180,
//         opacity: 0,
//     })
//     .staggerFrom(
//         ".wish-hbd span",
//         0.7, {
//             opacity: 0,
//             y: -50,
//             // scale: 0.3,
//             rotation: 150,
//             skewX: "30deg",
//             ease: Elastic.easeOut.config(1, 0.5),
//         },
//         0.1
//     )
//     .staggerFromTo(
//         ".wish-hbd span",
//         0.7, {
//             scale: 1.4,
//             rotationY: 150,
//         }, {
//             scale: 1,
//             rotationY: 0,
//             color: "#ff69b4",
//             ease: Expo.easeOut,
//         },
//         0.1,
//         "party"
//     )
//     .from(
//         ".wish h5",
//         0.5, {
//             opacity: 0,
//             y: 10,
//             skewX: "-15deg",
//         },
//         "party"
//     )
//     .staggerTo(
//         ".eight svg",
//         1.5, {
//             visibility: "visible",
//             opacity: 0,
//             scale: 80,
//             repeat: 3,
//             repeatDelay: 1.4,
//         },
//         0.3
//     )
//     .to(".six", 0.5, {
//         opacity: 0,
//         y: 30,
//         zIndex: "-1",
//     })
//     .staggerFrom(".nine p", 1, ideaTextTrans, 1.2)
//     .to(
//         ".last-smile",
//         0.5, {
//             rotation: 90,
//         },
//         "+=1"
//     );
// // Restart Animation on click
// const replyBtn = document.getElementById("replay");
// replyBtn.addEventListener("click", () => {
//     tl.restart();
// });
// }