<template>
    <nav class="navbar">
        <div class="navbar-container">
            <img src="../assets/Monogram.svg" alt="monogram logo" class="navbar-logo"/>
            <img src="../assets/Logo.svg" alt=" Main Logo" class="navbar-logo" style="margin-left: 16rem"/>
            <ul class="navbar-menu">
                <li class="navbar-item"><a href="#home" class="navbar-link">Home</a></li>
                <li class="navbar-item"><a href="#about" class="navbar-link">About</a></li>
                <li class="navbar-item"><a href="#resume" class="navbar-link">Resume</a></li>
                <li class="navbar-item"><a href="#contact" class="navbar-link">Contact</a></li>
            </ul>
        </div>
    </nav>
</template>
<style lang="css">
.navbar {
    color: white;
    padding: 1rem;
}
.navbar-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.navbar-logo {
    height: 100px;
    font-weight: bold;
    color: white;
    text-decoration: none;

}
.navbar-menu {
    list-style: none;
    display: flex;
    gap: 2rem;    
}
.navbar-link {
    color: white;
    text-decoration: none;
    font-size: 1.2rem;
}
.navbar-link:hover {
    background: linear-gradient(135deg, #F3B1F2, #9EC6FD);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    
}
</style>