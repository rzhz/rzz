<script>
document.addEventListener('DOMContentLoaded', () => {
    function toggleAbstract(button) {
        const abstractContent = button.nextElementSibling;
        if (abstractContent.style.display === 'block' || abstractContent.style.display === '') {
            abstractContent.style.display = 'none';
        } else {
            abstractContent.style.display = 'block';
        }
    }

    // Attach the function to all buttons with the 'abstract-toggle' class
    const buttons = document.querySelectorAll('.abstract-toggle');
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            toggleAbstract(this);
        });
    });
});


document.querySelectorAll(".abstract-toggle").forEach(button => {
    button.addEventListener("click", () => {
        const content = button.nextElementSibling;
        content.style.display = content.style.display === "block" ? "none" : "block";
        button.textContent = content.style.display === "block" ? "Hide Abstract" : "Show Abstract";
    });
});
<script>
