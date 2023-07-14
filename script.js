const navDribbble = document.getElementById('nav-dribbble');
const navGithub = document.getElementById('nav-github');
const navTwitter = document.getElementById('nav-twitter');
const fSlash = document.querySelectorAll('.f-slash');

window.addEventListener('resize', toggleElement);

function toggleElement() {
    if (window.innerWidth <= 696) {
        navDribbble.innerHTML = `<span class="icon">
                                    <i class="fa-brands fa-dribbble"></i>
                                </span>`;
        navGithub.innerHTML = `<span class="icon">
                                <i class="fa-brands fa-github"></i>
                            </span>`;
        navTwitter.innerHTML = `<span class="icon">
                            <i class="fa-brands fa-twitter"></i>
                        </span>`;
    }else{
        navDribbble.innerHTML = 'Dribble';
        navGithub.innerHTML = 'Github';
        navTwitter.innerHTML = 'Twitter'
    }
}
