"use strict";

// Data
const data = {
  destinations: [
    {
      name: "moon",
      images: {
        png: "./CSS/assets/destination/image-moon.png",
        webp: "./CSS/assets/destination/image-moon.webp",
      },
      description:
        "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      distance: "384,400 km",
      travel: "3 days",
    },
    {
      name: "mars",
      images: {
        png: "./CSS/assets/destination/image-mars.png",
        webp: "./CSS/assets/destination/image-mars.webp",
      },
      description:
        "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      distance: "225 mil. km",
      travel: "9 months",
    },
    {
      name: "europa",
      images: {
        png: "./CSS/assets/destination/image-europa.png",
        webp: "./CSS/assets/destination/image-europa.webp",
      },
      description:
        "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      distance: "628 mil. km",
      travel: "3 years",
    },
    {
      name: "titan",
      images: {
        png: "./CSS/assets/destination/image-titan.png",
        webp: "./CSS/assets/destination/image-titan.webp",
      },
      description:
        "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      distance: "1.6 bil. km",
      travel: "7 years",
    },
  ],
  crew: [
    {
      name: "Douglas Hurley",
      images: {
        png: "./CSS/assets/crew/image-douglas-hurley.png",
        webp: "./CSS/assets/crew/image-douglas-hurley.webp",
      },
      role: "Commander",
      bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    },
    {
      name: "Mark Shuttleworth",
      images: {
        png: "./CSS/assets/crew/image-mark-shuttleworth.png",
        webp: "./CSS/assets/crew/image-mark-shuttleworth.webp",
      },
      role: "Mission Specialist",
      bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    },
    {
      name: "Victor Glover",
      images: {
        png: "./CSS/assets/crew/image-victor-glover.png",
        webp: "./CSS/assets/crew/image-victor-glover.webp",
      },
      role: "Pilot",
      bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    },
    {
      name: "Anousheh Ansari",
      images: {
        png: "./CSS/assets/crew/image-anousheh-ansari.png",
        webp: "./CSS/assets/crew/image-anousheh-ansari.webp",
      },
      role: "Flight Engineer",
      bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    },
  ],
  technology: [
    {
      name: "Launch vehicle",
      images: {
        portrait: "./CSS/assets/technology/image-launch-vehicle-portrait.jpg",
        landscape: "./CSS/assets/technology/image-launch-vehicle-landscape.jpg",
      },
      description:
        "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    },
    {
      name: "Spaceport",
      images: {
        portrait: "./CSS/assets/technology/image-spaceport-portrait.jpg",
        landscape: "./CSS/assets/technology/image-spaceport-landscape.jpg",
      },
      description:
        "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    },
    {
      name: "Space capsule",
      images: {
        portrait: "./CSS/assets/technology/image-space-capsule-portrait.jpg",
        landscape: "./CSS/assets/technology/image-space-capsule-landscape.jpg",
      },
      description:
        "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    },
  ],
};

// App Functionality
let anim = document.querySelectorAll(".anim");

// Loader
const loader = document.querySelector(".loader");
window.onload = function () {
  setTimeout(() => {
    loader.classList.add("d-none");
  }, 3000);
};

// Sidebar
function openNav() {
  document.querySelector(".sidebar").style.width = "70%";
}
function closeNav() {
  document.querySelector(".sidebar").style.width = "0";
}

//Explore Button Navigate Function
function navigate() {
  window.location.href = "destination.html";
}

// ToggleClass Object
const toggleClass = {
  remove: (elem, className) => {
    if (elem.length > 1) {
      elem.forEach((e) =>
        e.classList.contains(className) ? e.classList.remove(className) : null
      );
    } else {
      elem.classList.remove(className);
    }
  },
  add: (elem, className) => {
    if (elem.length > 1) {
      elem.forEach((e) =>
        e.classList.contains(className) ? null : e.classList.add(className)
      );
    } else {
      elem.classList.add(className);
    }
  },
};

// See Planets On Description Page
if (document.getElementById("destination")) {
  const pList = document.querySelector(".planet-list").querySelectorAll("li");
  const planetName = document.querySelector(".planet-div h1");
  const planetImg = document.querySelector(".planet-img ");
  const planetDescription = document.querySelector(".planet-div p");
  const planetDistance = document
    .querySelector(".planet-desc-1")
    .querySelectorAll("li")[1]
    .querySelector("h1");
  const planetTravelTime = document
    .querySelector(".planet-desc-2")
    .querySelectorAll("li")[1]
    .querySelector("h1");

  pList.forEach((elem) => {
    elem.addEventListener("click", (e) => {
      const planetData = data.destinations;
      let planet = e.target;

      toggleClass.remove(pList, "active-pl");
      toggleClass.remove(anim, "show");
      toggleClass.add(planet, "active-pl");

      planetData.map((item) => {
        if (item.name === planet.innerText.toLowerCase()) {
          toggleClass.add(anim, "show");
          return (
            planetImg.setAttribute("src", item.images.webp),
            (planetName.innerText = item.name),
            (planetDescription.innerText = item.description),
            (planetTravelTime.innerText = item.travel),
            (planetDistance.innerText = item.distance)
          );
        }
      });
    });
  });
}

// See Crew Members On Crew Page
if (document.getElementById("crew")) {
  const cList = document
    .querySelector(".crew-member-change")
    .querySelectorAll("button");
  const memberImg = document.querySelector(".crew-member");
  const memberRole = document.querySelector(".crew-desc h2");
  const memberName = document.querySelector(".crew-desc h1");
  const memberDescription = document.querySelector(".crew-desc p");

  cList.forEach((elem, index) => {
    elem.addEventListener("click", (e) => {
      const memberData = data.crew;
      let button = e.target;

      toggleClass.remove(cList, "active-member");
      setTimeout(() => toggleClass.remove(anim, "show"), 500);
      toggleClass.add(button, "active-member");

      memberData.map((item, i) => {
        if (i === index) {
          toggleClass.add(anim, "show");
          return (
            memberImg.setAttribute("src", item.images.webp),
            (memberRole.innerText = item.role),
            (memberName.innerText = item.name),
            (memberDescription.innerText = item.bio)
          );
        }
      });
    });
  });
}

// See Technology On Technology Page
if (document.getElementById("technology")) {
  const tList = document
    .querySelector(".tech-buttons-div")
    .querySelectorAll("button");
  const techImage = document.querySelector(".rocket-img");
  const techName = document.querySelector(".tech-div h1");
  const techDescription = document.querySelector(".tech-div p");
  const techData = data.technology;

  if (window.innerWidth < 991) {
    techImage.setAttribute("src", data.technology[0].images.landscape);
  } else {
    techImage.setAttribute("src", data.technology[0].images.portrait);
  }

  tList.forEach((elem) => {
    elem.addEventListener("click", (e) => {
      let button = e.target;

      toggleClass.remove(tList, "active-tech");
      toggleClass.remove(anim, "show");
      toggleClass.add(button, "active-tech");

      techData.map((item, i) => {
        let index = i + 1;

        if (index === parseInt(button.innerText)) {
          toggleClass.add(anim, "show");
          return (
            window.innerWidth < 991
              ? techImage.setAttribute("src", item.images.landscape)
              : techImage.setAttribute("src", item.images.portrait),
            (techName.innerText = item.name),
            (techDescription.innerText = item.description)
          );
        }
      });
    });
  });
}
