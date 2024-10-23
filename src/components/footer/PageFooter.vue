<template>
  <footer class="page-footer">
    <div class="container">
      <div class="row">
        <div class="col l6 s12">
          <h5 class="white-text">Sobre Nós</h5>
          <p class="grey-text text-lighten-4">Sua descrição sobre a empresa aqui.</p>
        </div>
        <div class="col l4 offset-l2 s12">
          <h5 class="white-text">Links Úteis</h5>
          <ul>
            <li><a href="#!">Link 1</a></li>
            <li><a href="#!">Link 2</a></li>
            <li><a href="#!">Link 3</a></li>
            <li><a href="#!">Link 4</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="container">
        <span>&copy; 2023 Copyright Text</span>
        <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
      </div>
    </div>
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
