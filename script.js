/* Este 'DOMContentLoaded' espera o HTML da página carregar completamente
  antes de tentar executar qualquer código JavaScript.
  Isso evita erros de "elemento não encontrado".
*/
document.addEventListener('DOMContentLoaded', function() {

    // Encontrar o formulário pelo ID que demos a ele no HTML
    const form = document.getElementById('contact-form');

    // Adicionar um "escutador de eventos" ao formulário.

    form.addEventListener('submit', function(evento) {
        
        // Função que impede o comportamento padrão do formulário de recarregar a página.
        evento.preventDefault();

        // Pegar os elementos de input pelos seus IDs
        const nome = document.getElementById('nome');
        const email = document.getElementById('email');
        const mensagem = document.getElementById('mensagem');

        //  Pegar os Valores de dentro dos campos
        // '.trim()' remove espaços em branco do início e do fim
        const nomeValue = nome.value.trim();
        const emailValue = email.value.trim();
        const mensagemValue = mensagem.value.trim();

        // Iniciar a Validação
        if (nomeValue === '' || emailValue === '' || mensagemValue === '') {
            // Se qualquer campo estiver vazio...
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        if (!validarEmail(emailValue)) {
            // Se o e-mail não passar na função 'validarEmail', exibe a mensagem de erro
            alert('Por favor, insira um formato de e-mail válido (ex: usuario@dominio.com).');
            return;
        }

        // SIMULAÇÃO DE ENVIO (Se passou em todas as validações)
        
        // Exibe a mensagem de sucesso exigida
        alert('Mensagem enviada com sucesso!');

        // Limpa os campos do formulário
        form.reset(); 
    
    });
});

/* Função auxiliar para validar o formato do e-mail.
  Ela usa uma expressão regular simples para verificar
  se o texto parece com um e-mail (se tem @ e ".").
*/
function validarEmail(email) {
    const regex = /^\S+@\S+\.\S+$/;
    return regex.test(email);
}