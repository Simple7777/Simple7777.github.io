axios.get('https://api.orgdestiny.me/xyz/903339096074747935')
  .then(function (response) {
    // Aqui vc trata os dados, os dados retornados estarão dentro do parâmetro response
    document.getElementById("avatar").src = 'https://cdn.discordapp.com/avatars/903339096074747935/' + response.data.user.avatar + '?size=1024'
  })
  .catch(function (error) {
    // Caso dê algum erro você pode tratar aqui
    console.log(error);
  })

  let typed = new Typed('.nome', {
    strings: ["Hi, I'm Simple, Welcome to my portfolio."],
    typeSpeed: 37,
    showCursor: false
  });