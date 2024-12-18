document.addEventListener('DOMContentLoaded', () => {
    // Load JSON data
    fetch('data/publications.json')
        .then(response => response.json())
        .then(data => {
            // Populate working papers
            const workingPapersContainer = document.getElementById('working-papers');
            data.workingPapers.forEach(paper => {
                workingPapersContainer.innerHTML += `
                    <div class="publication">
                        <div class="title-container">
                            <h3 class="paper-title">
                                <a href="${paper.link}" target="_blank" class="paper-link">${paper.title}</a>
                            </h3>
                            <p class="publication-status"><em>${paper.status}</em></p>
                        </div>
                        <p class="publication-authors">${paper.authors}</p>
                        <button class="abstract-toggle">Show Abstract</button>
                        <div class="abstract-content" style="display: none;">
                            ${paper.abstract}
                        </div>
                    </div>
                `;
            });

            // Populate works in progress
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
        })
        .catch(error => console.error('Error loading publications:', error));
});
