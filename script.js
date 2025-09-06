
// Smooth scroll for sidebar links
document.querySelectorAll('.nav a').forEach(a=>{
  a.addEventListener('click', e=>{
    if(a.hash){
      e.preventDefault();
      document.querySelector(a.hash).scrollIntoView({behavior:'smooth', block:'start'});
      history.pushState(null, '', a.hash);
    }
  });
});
