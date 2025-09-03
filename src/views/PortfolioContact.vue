<template>
  <div class="contact-container">
    <div class="contact-section">
      <h1>Get in Touch!</h1>
      <div class="contact-info">
        <div class="contact-row">
          <img src="../assets/phone.svg" alt="Phone Icon" class="contact-icon" />
          <p class="contact-text">(678)-982-2306</p>
        </div>
        <div class="contact-row">
          <img src="../assets/mail.svg" alt="Email Icon" class="contact-icon" />
          <p class="contact-text">Hannah2520@gmail.com</p>
        </div>
      </div>
    </div>
    <div class="form-section">
      <form @submit.prevent="sendEmail">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" v-model="form.name" required />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" v-model="form.email" required />
        </div>
        <div class="form-group">
          <label for="message">Message:</label>
          <textarea id="message" name="message" v-model="form.message" required></textarea>
        </div>
        <div class="form-group">
          <button type="submit" class="submit-btn">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import emailjs from '@emailjs/browser'

const form = reactive({
  name: '',
  email: '',
  message: ''
})

function sendEmail() {
  const serviceID = 'service_h27o25m'
  const templateID = 'template_opb862d'
  const userID = 'pToN0EnpXASt9WsZ8'

  emailjs.send(serviceID, templateID, form, userID)
    .then(() => {
      alert('Message sent successfully!')
      // Reset form
      form.name = ''
      form.email = ''
      form.message = ''
    }, (error) => {
      alert('Failed to send message. Try again.')
      console.error(error)
    })
}
</script>


<style lang="css">

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
}

form label {
  font-size: 1rem;
  color: #9EC6FD;
  margin-bottom: 0.2rem;
}

form input,
form textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid white;
  border-radius: 0.5rem;
  background: transparent;
  color: white;
  font-size: 1rem;
  box-sizing: border-box;
  transition: border-color 0.2s;

}

form textarea {
  height: 10rem;
  resize: vertical;
  overflow-y: auto;
}

form input:focus,
form textarea:focus {
  outline: none;
  border-color: #9EC6FD;
}

.submit-btn {
  padding: 0.75rem;
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

.contact-row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
/* .contact-info {
  text-decoration: underline;
} */

h1 {
  background: linear-gradient(275deg, #9EC6FD, #F3B1F2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 3rem;
}

.contact-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 6rem;
  margin-top: 5rem;
}

.contact-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.form-section {
  flex: 1;
  display: flex;
}

form {
  width: 100%;
  max-width: 500px;
  border: 2px solid;
  border-radius: 2rem;
  font-family: poppins, sans-serif;
  background: transparent;
  border-image: linear-gradient(135deg, #F3B1F2 10%, #9EC6FD 40%, #6CA8F7 90%) 1;
  display: flex;
  flex-direction: column;
}

form input,
form textarea {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid white;
  font-family: poppins, sans-serif;
  border-radius: 0.5rem;
  background: transparent;
  color: white;
  font-size: 1rem;
  box-sizing: border-box;
}

form textarea {
  min-height: 3rem;
  resize: none;
  overflow-y: hidden;
}

form input:focus,
form textarea:focus {
  outline: none;
  border-color: #F3B1F2;
}
</style>
