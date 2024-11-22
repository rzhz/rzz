<script>
        function toggleAbstract(button) {
            const abstractContent = button.nextElementSibling;
            if (abstractContent.style.display === 'block' || abstractContent.style.display === '') {
                abstractContent.style.display = 'none';
            } else {
                abstractContent.style.display = 'block';
            }
        }
    </script>
