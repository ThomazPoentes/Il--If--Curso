<template>
  <section id="cardCentral">
    <div class="grid-container">
      <div class="grid-item left-side">
        <img class="imagem-login" src="./login/img/leaoElefante-SF.png">
      </div>
      <div class="grid-item right-side">
        <h3 class="h3-login">Bem-vindo ao Ilê Ifá!</h3>
        <form @submit.prevent="handleFormSubmit" class="form-container">
          <input 
            v-model="username"
            type="text"
            placeholder="Nome de usuário"
            required
            class="input-login"
            :class="{ 'active': isActive }"
          >
          <input 
            v-model="password"
            type="password"
            placeholder="Senha"
            required
            class="input-login"
            :class="{ 'active': isActive }"
          >
          <button type="submit">Entrar</button>
        </form>
        <p class="account-link">
          <span class="green">Não tem conta?</span>
          <router-link to="/create-account" class="brown">Criar conta</router-link>
        </p>
      </div>
    </div>
  </section>
  <Footer />
</template>


<script src="./login/UserLogin.js"></script>
<link rel="stylesheet" href="./UserLogin.css">
