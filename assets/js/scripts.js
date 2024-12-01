<script>
        function toggleAbstract(button) {
            const abstractContent = button.nextElementSibling;
            if (abstractContent.style.display === 'block' || abstractContent.style.display === '') {
                abstractContent.style.display = 'none';
            } else {
                abstractContent.style.display = 'block';
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
