
export const setLanguageToLocalStorage = (lang:string, type: "mother" | 'learn') => {
   if (type === "mother"){
    localStorage.setItem("motherLanguage", lang);
    return
   }
    localStorage.setItem("learningLanguage", lang);
    return
}
