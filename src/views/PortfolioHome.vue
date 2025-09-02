<template>
    <div class="home-container" id="projects">
        <img src="../assets/project.png" alt="Project Title" class="project-title" style="height:auto; height: auto;"/>
            <h1>My Clients</h1>
            <p>UX applications made for clients working with stakeholders</p>
        <div class="project-section">
            <div class="client-divs">
                <img src="../assets/blushco.png" alt="Blush Co Logo" class="client-img"/>
                <h2>Blush Co.</h2>
                <p>Example body text</p>
            </div>
            <div class="client-divs">
                <img src="../assets/pyms.png" alt="PYMS Logo" class="client-img"/>
                <h2>Promise Youth Ministies</h2>
                <p>Example body text</p>
            </div>
        </div>
        <br/>
        <br/>
        <br/>
        <h1>Personal Projects</h1>
            <p>Capstone</p>
            <div class="client-divs">
                <img src="../assets/ispacebanner.svg" alt="iSpace Logo" class="client-img"/>
                <h2>iSpace - Web Developer</h2>
                <p>An educational space app for kids using the Apple Vision Pro</p>
            </div>
        <br/>
        <br/>
        <br/>
        <h1>Work Experience</h1>
        <p>Software Engineer Co-op at Cox Communications</p>
      <div class="coop-section">
        <div class="client-divs">
            <img src="../assets/rotation1.png" alt="Cox Communications Rotation 1" class="client-img"/>
            <h2>First Rotation</h2>
            <p>Example body text</p>
        </div>
        <div class="client-divs">
            <img src="../assets/rotation2.png" alt="Cox Communications Rotation 2" class="client-img"/>
            <h2>Second Rotation</h2>
            <p>Example body text</p>
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
    .project-section {
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-content: center;
        align-items: center;
        gap: 5rem;
    }
    .coop-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;
    gap: 5rem;
    }
    /* .client-divs {
        gap: 1rem;
    } */
    .client-img {
        width: 100%;
    }
    .client-divs h2 {
        margin-bottom: 0.2rem;
    }
    .client-divs p {
        margin-top: 0.2rem;
    }
</style>
