const aba1 = document.querySelector('.nome-foto');
const sobreMim = document.querySelector('.sobre-mim');
const projetos = document.querySelector('.pj-box');

console.log(projetos);

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        console.log(entry.target)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            // observer.unobserve(entry.target); // anima somente uma vez
        }else{
            entry.target.classList.remove('show');
        }
    });
});

observer.observe(aba1);
observer.observe(sobreMim);
observer.observe(projetos);
console.log(aba1.classList);