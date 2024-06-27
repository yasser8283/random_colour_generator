const colourName = document.getElementById('colour-name');
const changeBtn = document.getElementById('changebtn');
const colours_2 = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
const hexaColours =  () =>{
    let hexColour = "#"
    for(let i=0;i<6;i++)
    {
    hexColour += colours_2[colourPicker()];
    }
    colourName.textContent = hexColour;
    document.body.style.backgroundColor = hexColour;
}
const colourPicker = () =>
    {
        const result = Math.floor(Math.random()*colours_2.length)
        return result;
    }
changeBtn.addEventListener("click",hexaColours);
