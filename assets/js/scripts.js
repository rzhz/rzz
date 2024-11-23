<script>
function toggleAbstract(button) {
    const abstractContent = button.nextElementSibling; // Find the next sibling (the abstract div)
    if (abstractContent.style.display === 'block') {
        abstractContent.style.display = 'none';
        button.textContent = 'Show Abstract'; // Update button text
    } else {
        abstractContent.style.display = 'block';
        button.textContent = 'Hide Abstract'; // Update button text
    }
}

document.querySelectorAll(".abstract-toggle").forEach(button => {
    button.addEventListener("click", () => {
        const content = button.nextElementSibling;
        content.style.display = content.style.display === "block" ? "none" : "block";
        button.textContent = content.style.display === "block" ? "Hide Abstract" : "Show Abstract";
    });
});

</script>
