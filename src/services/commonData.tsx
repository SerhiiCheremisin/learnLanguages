import { languageArrayType, categoriesTypes } from "./types";


export const languagesArray: languageArrayType[] = [
    {
    languge: "SLO",
    img: "/flags/slo-flag.jpg",
    titleInit: "Govorim slovensko",
    titleSecondary: "želim se učiti",
    titleFull: "Slovenščina"
    },
    {
    languge: "ENG",
    img: "/flags/uk-flag.jpg",
    titleInit: "I speak english",
    titleSecondary: "I want to learn",
    titleFull: "English"
    },
    {
    languge: "UA",
    img: "/flags/ua-flag.jpg",
    titleInit: "Я розмовляю українською",
    titleSecondary: "Я хочу вивчити",
    titleFull: "Українська"
    },
]


export const categories : categoriesTypes[] = [
    { 
      baseCategory : "home",
      UA: "дім",
      ENG: "home",
      SLO: "Hiša"
    },
    { 
      baseCategory : "city",
      UA: "місто",
      ENG: "city",
      SLO: "mesto"
    },
    { 
      baseCategory : "education",
      UA: "освіта",
      ENG: "education",
      SLO: "izobraževanje"
     },
     { 
      baseCategory : "nature",
      UA: "природа",
      ENG: "nature",
      SLO: "narave"
     },
     { 
      baseCategory : "kitchen",
      UA: "кухня",
      ENG: "kitchen",
      SLO: "kuhinja"
     },
     { 
      baseCategory : "bedroom",
      UA: "спальня",
      ENG: "bedroom",
      SLO: "spalnica"
     },
     { 
      baseCategory : "livingroom",
      UA: "Вітальня",
      ENG: "livingroom",
      SLO: "dnevna soba"
     },
    ]
