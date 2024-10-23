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