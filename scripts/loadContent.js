document.addEventListener('DOMContentLoaded', () => {
    // Load publications
    fetch('data/publications.json')
        .then(response => response.json())
        .then(data => {
            // Working Papers
            const workingPapersContainer = document.getElementById('working-papers');
            data.workingPapers.forEach(paper => {
                let conferences = paper.conferences
                    ? `<div class="presentation-section">
                        <h4>Presentations:</h4>
                        <ul>${paper.conferences.map(conf => `<li>${conf}</li>`).join('')}</ul>
                       </div>`
                    : '';
                workingPapersContainer.innerHTML += `
                    <div class="publication">
                        <div class="title-container">
                            <h3 class="paper-title">
                                <a href="${paper.link}" target="_blank" class="paper-link">${paper.title}</a>
                            </h3>
                            <p class="publication-status"><em>${paper.status}</em></p>
                        </div>
                        <p class="publication-authors">${paper.authors}</p>
                        ${conferences}
                        <button class="abstract-toggle">Show Abstract</button>
                        <div class="abstract-content" style="display: none;">
                            ${paper.abstract}
                        </div>
                    </div>
                `;
            });

            // Work in Progress
            const workInProgressContainer = document.getElementById('work-in-progress');
            data.workInProgress.forEach(work => {
                workInProgressContainer.innerHTML += `
                    <div class="publication">
                        <div class="title-container">
                            <h3 class="paper-title">${work.title}</h3>
                        </div>
                        <p class="publication-authors">${work.authors}</p>
                        <button class="abstract-toggle">Show Abstract</button>
                        <div class="abstract-content" style="display: none;">
                            ${work.abstract}
                        </div>
                    </div>
                `;
            });

            // Add toggle functionality for abstracts
            document.querySelectorAll('.abstract-toggle').forEach(button => {
                button.addEventListener('click', function () {
                    const abstractContent = this.nextElementSibling;
                    if (abstractContent.style.display === 'block') {
                        abstractContent.style.display = 'none';
                        this.textContent = 'Show Abstract';
                    } else {
                        abstractContent.style.display = 'block';
                        this.textContent = 'Hide Abstract';
                    }
                });
            });
        });

    // Load teaching
    fetch('data/teaching.json')
        .then(response => response.json())
        .then(data => {
            const teachingContainer = document.getElementById('teaching');
            data.teaching.forEach(course => {
                teachingContainer.innerHTML += `<li>${course.course} - ${course.semester}</li>`;
            });
        });

    // Load contact information
    fetch('data/contact.json')
        .then(response => response.json())
        .then(data => {
            const contactContainer = document.getElementById('contact');
            contactContainer.innerHTML = `
                <p>Email: ${data.contact.email}</p>
                <p>Office: ${data.contact.office}</p>
                <p>Address: ${data.contact.address}</p>
                <div class="social-links">
                    <a href="${data.contact.socialLinks.GitHub}">GitHub</a>
                    <a href="${data.contact.socialLinks['Google Scholar']}">Google Scholar</a>
                    <a href="${data.contact.socialLinks.LinkedIn}">LinkedIn</a>
                </div>
            `;
        });
});
