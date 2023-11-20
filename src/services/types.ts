export type languagesType = "ENG" | "UA" | "SLO" | "";


export type languageArrayType = {
    languge: languagesType,
    img: string,
    titleInit: string,
    titleSecondary: string,
    titleFull: string
}

export type navigationMenuType = {
   category : string,
   photo: string,
   path: string,
   element: React.ReactNode
}

export interface ISecondNavigationMenu extends navigationMenuType  {
    parentCategory: string
}

export type categoriesTypes = {
    baseCategory : string,
    UA: string,
    ENG: string,
    SLO: string
}

export type dictionaryEntityType = {
    ENG : string,
    SLO: string,
    UA: string
}