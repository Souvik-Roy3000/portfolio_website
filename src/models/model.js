{/* <script>
const contactForm=document.querySelector(".contact-form");
let name=document.getElementById('name');
let email=document.getElementById('email');
let subject=document.getElementById('subject');
let message=document.getElementById('message');

contactForm.addEventListener('submit', (e)=>{
e.preventDefault();

let formdata={
name:name.value,
email:email.value,
subject:subject.value,
message:message.value
}
console.log(formdata);

let xhr=new XMLHttpRequest();
xhr.open('POST', '/');
xhr.setRequestHeader('content-type', 'application/json');
xhr.onload= function(){
console.log(xhr.responseText);
if(xhr.responseText=='success'){
    alert('Message Send Successfully!');
    name.value='';
    email.value='';
    subject.value='';
    message.value='';
}
else{
    alert('OOps!! Something Went Wrong');
}
}
xhr.send(JSON.stringify(formdata));
})
// </script> */}