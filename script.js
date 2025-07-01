
const roles = [
    "FRONTEND DEVELOPER",
    "UI/UX DESIGNER",
    "WEB DEVELOPER"
];

const speed = 100;
const textElement = document.querySelector(".role-text");

let roleIndex = 0;
let characterIndex = 0;

function typeRole() {
    if(characterIndex < roles[roleIndex].length) {
        textElement.innerHTML += roles[roleIndex].charAt(characterIndex);
        characterIndex++;
        setTimeout(typeRole, speed);
    } else {
        setTimeout(eraseRole, speed * 10);
    }
}

function eraseRole() {
    if(textElement.innerHTML.length > 0) {
        textElement.innerHTML = textElement.innerHTML.slice(0, -1);
        characterIndex--;
        setTimeout(eraseRole, speed);
    } else {
        roleIndex = (roleIndex + 1) % roles.length;
        characterIndex = 0;
        setTimeout(typeRole, speed + 1000);
    }
}

window.onload = typeRole;

document.addEventListener('DOMContentLoaded', function() {
  const projectUrls = {
    'project1': 'https://yourportfolio.com',
    'project2': 'https://dharaneshkumar.github.io/ChatBot/', 
    'project3': 'https://hemanth-1508.github.io/RESUME-BUILDER/'
  };

  document.querySelectorAll('[class^="project"]').forEach(project => {
    project.addEventListener('click', function() {
      const projectClass = this.className.split(' ')[0];
      if (projectUrls[projectClass]) {
        window.open(projectUrls[projectClass], '_blank');
      }
    });
  });
});

document.querySelector('.contact-form').addEventListener('submit', async function(e) {
    const button = e.target.querySelector('button');
    button.disabled = true;
    button.textContent = 'Sending...';
    
    try {
        const response = await fetch(e.target.action, {
            method: 'POST',
            body: new FormData(e.target),
            headers: { 'Accept': 'application/json' }
        });
        alert('Message sent successfully!');
        e.target.reset();
    } catch {
        alert('Failed to send, please try again later');
    } finally {
        button.disabled = false;
        button.textContent = 'Hire Me';
    }
});
