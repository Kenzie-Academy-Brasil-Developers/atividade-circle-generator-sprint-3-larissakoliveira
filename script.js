
const buttonGenerate = document.getElementById("buttonGenerate");
buttonGenerate.addEventListener("click", () => {
    const boxdivs = document.getElementById('boxStorage');
    let teste = (createCircle(randomColor()))
    boxdivs.appendChild(teste)
});

const createCircle = (color) => {
    const newCircle = document.createElement("div");
    newCircle.style.border = `solid 4px ${color}`;
  
    // ADICIONA A CLASSE QUE POSSUI OS ESTILOS PADRÃO DOS CÍRCULOS
    newCircle.classList.add('circle');
  
    return newCircle;
  };

  const randomColor = () => {
    const colors = ["#1F271B", "#003F91", "#6D326D", "#157A6E", "#916953"];

    return colors[Math.floor(Math.random() * 5)];
  };

  const buttonReset = document.getElementById("buttonReset");
buttonReset.addEventListener("click", () => {
    const boxStorage = document.getElementById("boxStorage");
    boxStorage.innerHTML = "";
});