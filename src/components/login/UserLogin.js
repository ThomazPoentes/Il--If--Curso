import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '@/components/footer/PageFooter.vue'; // Usando o alias
import '../login/UserLogin.css'

export default {
  name: 'UserLogin',
  components: {
    Footer
  },
    data() {
      return {
        email: '',
        password: '',
        passwordVisible: false,
        buttonClass: ''
      };
    },
    methods: {
      toggleActiveInput() {
        this.activeInput = this.$refs.username.$el.classList.contains('active') ? '' : 'active';
      },
      handleLogin() {
        console.log("Método handleLogin chamado"); // Verifique se isso aparece no console
        // Lógica de validação
        if (!this.email || !this.password) {
          alert('Por favor, preencha todos os campos.');
          return; // Retorna se os campos não estão preenchidos
        }
  
        // Simulação de autenticação
        if (this.email === 'test@example.com' && this.password === 'password') {
          alert(`Login bem-sucedido! Email: ${this.email}`);
        } else {
          alert('Email ou senha incorretos.');
        }
      },
      clearEmail() {
        this.email = '';
      },
      clearPassword() {
        this.password = '';
      },
      togglePasswordVisibility() {
        this.passwordVisible = !this.passwordVisible;
      }
    }
  };