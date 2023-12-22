
export const apiDataFetcher = async (url:string) => {
   try {
    const request = await fetch(`http://localhost:3300/${url}`);
    const respond = await request.json();
    return respond
   } catch (error) {
    console.log(error)
   }
}