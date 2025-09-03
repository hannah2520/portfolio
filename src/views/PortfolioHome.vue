<template>
  <div class="home-container" id="projects">
    <img src="../assets/project.png" alt="Project Title" class="project-title" style="height:auto; height: auto;" />
    <h1>My Clients</h1>
    <p>UX applications made for clients</p>
    <div class="project-section">
      <div class="client-divs">
        <a href="https://medium.com/@hannah2520/blush-co-client-project-1f0a0ba81861" target="_blank" rel="noopener noreferrer" class="link">
          <img src="../assets/blushco.png" alt="Blush Co Logo" class="client-img" />
          <h2>Blush Co.</h2>
          <p class="project-text">Refreshed brand identity and e-commerce site for
             a small business with cute finds in Atlanta's local markets.</p>
        </a>
      </div>
      <div class="client-divs">
        <a href="www.pyms.info" target="_blank" rel="noopener noreferrer" class="link">
          <img src="../assets/pyms.png" alt="PYMS Logo" class="client-img" />
          <h2>Promise Youth Ministies</h2>
          <p>A website created to connect with members,
             share updates, resources, and events for community engagement.</p>
        </a>
      </div>
    </div>
    <br />
    <br />
    <br />
    <h1>Personal Projects</h1>
    <p>Capstone</p>
    <div class="client-divs">
      <a href="https://projects.nmi.cool/2024/nmc/ispace/" target="_blank" rel="noopener noreferrer" class="link">
        <img src="../assets/ispacebanner.svg" alt="iSpace Logo" class="client-img" />
        <h2>iSpace - Web Developer</h2>
        <p>An educational space app for kids using the Apple Vision Pro</p>
      </a>
    </div>
    <br />
    <br />
    <br />
    <h1>Work Experience</h1>
    <p>Software Engineer Co-op at Cox Communications</p>
    <div class="coop-section">
      <div class="client-divs">
        <a href="../coxrotation1.pdf" target="_blank" rel="noopener noreferrer" class="link">
          <img src="../assets/rotation1.png" alt="Cox Communications Rotation 1" class="client-img" />
          <h2>First Rotation </h2>
          <p>Streamlined network data entries and enhanced self-service network alerts for engineer efficiency.</p>
        </a>
      </div>
      <div class="client-divs">
        <a href="../coxrotation2.pdf" target="_blank" rel="noopener noreferrer" class="link">
          <img src="../assets/rotation2.png" alt="Cox Communications Rotation 2" class="client-img" />
          <h2>Second Rotation</h2>
          <p>Developed full-stack feature flag tools and dynamic device watchlists to improve network monitoring.</p>
        </a>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style lang="css">
.home-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* gap: 1rem; */
}

h1 {
  background: linear-gradient(135deg, #F3B1F2, #9EC6FD);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

}

.project-title {
  margin: 7rem;

}

.project-section, .coop-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: start;
  gap: 5rem;
}

.client-divs {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.client-img {
  display: block;;
  margin-bottom: 1rem;
  max-height: 600px;
}
.client-divs h2,
.client-divs p {
  width: fit-content;
  max-width: 100%;
  margin: 0;
}
.client-divs p {
  font-size: x-small;
}

.link {
  text-decoration: none;
  color: white;
}

.link:hover img {
  /* background:linear-gradient(135deg, #F3B1F2 10%, #9EC6FD 40%, #6CA8F7 90%); */
  transform: translateY(-2px) scale(1.03);
}

.link:hover h2,
.link:hover p {
  background: linear-gradient(135deg, #F3B1F2, #9EC6FD);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: background 0.2s;
}
</style>
