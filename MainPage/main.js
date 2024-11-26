const btnCourse = document.getElementById('btnCourse');
const btnAbout = document.getElementById('btnAbout');
const btnContact = document.getElementById('btnContact');
const btnEnroll = document.getElementById('Enroll');

btnCourse.addEventListener('click', ()=>{
    window.location = "course.html"
});
btnAbout.addEventListener('click', ()=>{
    window.location = "aboutUs.html"
});
btnContact.addEventListener('click', ()=>{
    window.location = "contactUs.html"
});
btnEnroll.addEventListener('click',()=>{
    window.location = "enrollment.html"
});