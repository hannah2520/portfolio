<template>
  <div class="about-container">
    <div class="about-section">
      <img src="../assets/me.svg" />
      <div class="title-section">
        <img src="../assets/about.png" alt="About Title" />
        <img src="../assets/hannahkwak.png" alt="Hannah Kwak Title" />
        <p class="about-text">
          Hi! I'm Hannah Kwak, a double dawg student at the University of Georgia
          pursuing an MA in Emerging Media. I graduated magna cum laude with a BS
          in Computer Science, minoring in Design and Media, and earned the New Media
          Certificate. I've gained hands-on experience through three rotations at Cox
          Communications, working with the Network Automation team as a Software Engineer Co-op.
          I'm passionate about creating user-centered solutions, exploring new technologies, and
          applying my skills to meaningful projects. I'm excited to continue growing and making
          an impact in the tech industry!
        </p>
        <a href="contact"><button class="submit-btn">Contact Me</button></a>
      </div>
    </div>
  </div>
</template>
<style lang="css">
.submit-btn {
  padding: 1rem;
  border: solid;
  background: transparent;
  color: white;
  font-size: 1.1rem;
  font-family: poppins, sans-serif;
  cursor: pointer;
  transition: background 0.2s, transform 0.1s;
  border-image: linear-gradient(135deg, #F3B1F2 10%, #9EC6FD 40%, #6CA8F7 90%) 1;
  margin-bottom: 0.2rem;
}
.submit-btn:hover {
  background:linear-gradient(135deg, #F3B1F2 10%, #9EC6FD 40%, #6CA8F7 90%);
  transform: translateY(-2px) scale(1.03);
}

.about-section {
  display: flex;
  flex-direction: row;
  margin-top: 5rem;
  gap: 5rem;
  justify-content: center;
}
.title-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}
.about-text {
  max-width: 600px;
  text-align: center;
  font-size: 1rem;
  line-height: 2rem;
}
</style>
