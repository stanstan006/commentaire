const testimonial =[
    {
        name:"stan",
        photoUrl: "https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?q=80&w=898&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        Text: "J'utilise les produits Apple depuis plusieurs années, et je suis extrêmement satisfait de leur qualité et de leur performance. L'intégration harmonieuse entre mon iPhone, mon MacBook et mon iPad rend mon expérience utilisateur fluide et sans interruption. La qualité de fabrication est remarquable, avec des matériaux premium qui résistent bien à l'usure quotidienne. De plus, le service client est exceptionnel, offrant une assistance rapide et efficace. En résumé, Apple propose une technologie fiable, élégante, et un service de grande qualité que je recommande vivement."
    },
    {
        name:"salif",
        photoUrl: "https://media.istockphoto.com/id/1663930654/photo/stressed-tired-man-in-pain-having-strong-terrible-headache-attack-after-computer-laptop-work.jpg?s=1024x1024&w=is&k=20&c=diuFhwzKaAWeUXuF8po-R9JYCULs3QivJKIMnkcG22M=",
        Text: "J'utilise les produits Samsung depuis plusieurs années, et je suis très satisfait de leur qualité et de leur performance. Mon smartphone Samsung est fiable et performant, avec une interface utilisateur intuitive et de nombreuses fonctionnalités utiles. J'apprécie particulièrement la qualité de l'écran, qui est nette et vibrante, ainsi que la durée de vie de la batterie, qui est excellente. De plus, Samsung propose une large gamme de produits, des télévisions aux appareils électroménagers, tous conçus avec la même attention aux détails et à l'innovation. En résumé, Samsung offre des produits technologiques de haute qualité et durables que je recommande vivement."
    },
    {
        name:"peri mouss",
        photoUrl: "https://media.istockphoto.com/id/1038784934/photo/man-in-tension-working-in-office-pain-in-head.jpg?s=612x612&w=is&k=20&c=OtETLEwqzWgKzimFAzCJt2g9IBV3az8zY_Pxiq4Cnpg=",
        Text: "J'utilise les produits infinix depuis plusieurs années, et je suis très satisfait de leur qualité et de leur performance. Mon smartphone infinix est fiable et performant, avec une interface utilisateur intuitive et de nombreuses fonctionnalités utiles. J'apprécie particulièrement la qualité de l'écran, qui est nette et vibrante, ainsi que la durée de vie de la batterie, qui est excellente. De plus, infinix propose une large gamme de produits, des télévisions aux appareils électroménagers, tous conçus avec la même attention aux détails et à l'innovation. En résumé, infinix offre des produits technologiques de haute qualité et durables que je recommande vivement."
    },
];
const  imgEl = document.querySelector("img");
const textEl = document.querySelector(".texte");
const nameEl = document.querySelector(".nom");

let idx = 0;

updatetestimonial();

function updatetestimonial() {
    const {name, photoUrl, Text} = 
    testimonial[idx];
    imgEl.src = photoUrl;
    textEl.innerText = Text;
    nameEl.innerText = name;
    idx++;
    if(idx === testimonial.length) {
        idx = 0;
    }
    setTimeout(()=>{
        updatetestimonial()
    }, 10000)
}