
// recuperation des pieces depuis le fichier JSON 
async function  AccommodationList (){
    const response = await fetch ("logement.json");
    const accommodation = await response.son ()
    

}


export default AccommodationList;