'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const txtCPF = document.getElementById('CPF'); // PESQUISA NO HTML EL. ID USERNAME
  const txtSENHA = document.getElementById('SENHA'); // PROCURA POR UM ELEMENTO ID PASS
  const btnbutton = document.querySelector('#button'); // QUALQUER SELETOR CSS

  btnSignin.addEventListener('click', (evt) => {  //escutador do botao evt = o que quer q aconteça ; click = o que vai aparecer
    evt.preventDefault(); 

    if (txtCPF.value === 'teste' && txtCPF.value === '123456') {
      window.location.href = './index.html';
    } else {
      alert('Usuário ou senha inválidos');
    }
  });
});
