<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-section">
        <img src="../assets/Biglogo.svg" alt="monogram logo" class="footer-logo" />
        <div class="footer-contact">
          <p class="link">(678)-982-2306</p>
          <p class="link">Hannah2520@gmail.com</p>
        </div>
      </div>
      <div class="footer-section">
        <div class="footer-links">
          <h2><a href="https://www.linkedin.com/in/hanniekwak/" class="link">Linkedin</a></h2>
          <h2><a href="https://medium.com/@hannah2520" class="link">Medium</a></h2>
          <h2><a href="https://github.com/hannah2520" class="link">Github</a></h2>
        </div>
      </div>
    </div>
          <p class="footer-text">© 2025 Hannah Kwak.</p>
  </footer>
</template>

<style lang="css">
.footer {
  display: flex;
  justify-content: space-between;
  margin-top: 10%;
  flex-direction: column;
}
.footer-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2rem;
}
.footer-logo {
  max-height: 7rem;
  background: linear-gradient(135deg, #F3B1F2, #9EC6FD);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

}
.footer-links {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  gap: 10rem;
  font-size:larger;
}
.link {
  text-decoration: none;
  color: white;
}
.link:hover {
    background: linear-gradient(135deg, #F3B1F2, #9EC6FD);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.footer-contact {
  display: flex;
  flex-direction: column;
  margin-left: 5rem;
}

.footer-text {
  text-align: right;
  font-size: x-small;
  color: rgb(208, 208, 208)
}
</style>
