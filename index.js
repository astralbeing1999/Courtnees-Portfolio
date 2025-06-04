<script>
  function flipCard(container) {
    container.classList.toggle("flipped")
  &rbrace}

const frontImage = document.getElementById('bouncingImage');
const backImage = document.getElementById('backImage');
if (frontImage) frontImage.classList.add('bounce');
if (backImage) backImage.classList.add('bounce');
</script>