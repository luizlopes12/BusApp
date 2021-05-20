/*Função de mostrar/esconder senha*/
function showPass(){
    //olho mostrar
    const eye = document.querySelector('#eye');
    //olho esconder
    const eyeSlash = document.querySelector('#eye-slash');
    //campo da senha a ser modificado
    const fieldPass = document.querySelector('#inputPass');
   
    //mudar para o tipo texto se o mostrar estiver
   if(eye.style.display === 'none'){
       eye.style.display = 'block';
       eyeSlash.style.display = 'none';
       fieldPass.type = 'text'
   }
   //mudar para o tipo password
   else{
       eye.style.display = 'none';
       eyeSlash.style.display = 'block';
       fieldPass.type = 'password'
   }
   }
//função de abrir o menu na pagina de selecionar origem e destino
