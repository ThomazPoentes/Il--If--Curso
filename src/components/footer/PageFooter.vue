<template>
  <footer class="page-footer">
   <section id="footer"> 
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <h3>Coluna 1</h3>
          <!-- Conteúdo da primeira coluna -->
        </div>
        <div class="col-md-4">
          <h3>Coluna 2</h3>
          <!-- Conteúdo da segunda coluna -->
        </div>
        <div class="col-md-4">
          <h3>Coluna 3</h3>
          <!-- Conteúdo da terceira coluna -->
        </div>
      </div>
    </div>
  </section>
  </footer>
</template>

<script >
import 'bootstrap/dist/css/bootstrap.min.css';
import '../footer/css/PageFooter.css'


export default {
    name: 'PageFooter',
    props: ['links'],
    data() {
      return {
        copyrightYear: new Date().getFullYear()
      }
    },
    methods: {
      // Métodos adicionais aqui
    }
  }
</script>

<link rel="stylesheet" href="./css/PageFooter.css">
