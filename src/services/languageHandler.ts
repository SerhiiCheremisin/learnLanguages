
export const setLanguageToLocalStorage = (lang:string, type: "mother" | 'learn') => {
   if (type === "mother"){
    localStorage.setItem("motherLanguage", lang);
    return
   } 
   else {
    localStorage.setItem("learningLanguage", lang);
    return
   }
 
}
