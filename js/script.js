/*Função de mostrar/esconder senha*/
function showPass(){
    const eye = document.querySelector('#eye');
    const eyeSlash = document.querySelector('#eye-slash');
    const fieldPass = document.querySelector('#field-password');
   
    //mudar para o tipo text 
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