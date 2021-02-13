async function populateList() {
  try {
    //pegando os valores da api
    const response = await fetch("data.json");

    //convertendo os valores em json
    const data = await response.json();

    const tes = [];
    // criando os elementos em html
    createCard(data);
  } catch (error) {
    console.log(error);
  }
}

function createCard(data) {
  const list = document.querySelector(".list");
  const feedBack = document.querySelector(".list .subtitle");

  // se tiver projeto esconde a mensagem de feedback
  if (data.length > 0) {
    feedBack.style.display = "none";
  } else {
  }

  data.forEach((n) => {
    const box = `
    <a class="box-project" href="${n.url}" target="_blank">
        <h1 class="subtitle">${n.name}</h1>
        <img src="${n.image}" alt="Imagem do Projeto" srcset="">
    </a> 
  `;
    list.innerHTML += box;
  });
}

populateList();
