const colourName = document.getElementById('colour-name');
const changeBtn = document.getElementById('changebtn');
const colours_1 = ["Red","Green","Blue","Yellow","Cyan","Magenta","White","Gray","Orange","Pink","Purple","Brown","Lime","Maroon","Navy","Olive","Teal","Silver","Gold"];
const simpleColours =  () =>{
    colourResult = colours_1[colourPicker()];
    colourName.textContent = colourResult;
    document.body.style.backgroundColor = colourResult;
}
const colourPicker = () =>
    {
        const result = Math.floor(Math.random()*colours_1.length)
        return result;
    }
changeBtn.addEventListener("click",simpleColours);
