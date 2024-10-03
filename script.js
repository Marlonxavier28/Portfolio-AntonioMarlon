document.getElementById('contato-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Mensagem enviada! Obrigado por entrar em contato.');
    this.reset();
});
