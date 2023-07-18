const temIngresso = false;
const censura = 16;
const idade = 15;

if (temIngresso === true) {
  if (idade >= censura) {
    console.log("pode assistir o filme");
  } else {
    console.log("Idade menor que a censura");
  }
} else {
  console.log("não tem ingresso");
}
