// Espera o DOM carregar completamente para evitar erros de execução
document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. MECANISMO DE ALTERAÇÃO DE TEMA (MODO ESCURO) ---
    const toggleThemeBtn = document.getElementById("toggle-theme");
    
    // Verifica se o usuário já tem uma preferência gravada
    toggleThemeBtn.addEventListener("click", () => {
        const currentTheme = document.documentElement.getAttribute("data-theme");
        if (currentTheme === "dark") {
            document.documentElement.removeAttribute("data-theme");
        } else {
            document.documentElement.setAttribute("data-theme", "dark");
        }
    });

    // --- 2. CONTADOR INTERATIVO (MANIPULAÇÃO DO DOM) ---
    let treeCount = 0; // Variável para armazenar e processar informações
    const btnImpact = document.getElementById("btn-impact");
    const treeCounterDisplay = document.getElementById("tree-counter");

    // Evento de clique para atualizar o contador na tela em tempo real
    btnImpact.addEventListener("click", () => {
        treeCount += 15; // Cada clique simula 15 novas árvores plantadas
        treeCounterDisplay.textContent = treeCount;
    });

    // --- 3. PROCESSAMENTO DE FORMULÁRIO E BOAS-VINDAS ---
    const newsletterForm = document.getElementById("newsletter-form");
    const formFeedback = document.getElementById("form-feedback");

    newsletterForm.addEventListener("submit", (event) => {
        // Impede o recarregamento padrão da página
        event.preventDefault(); 
        
        // Captura o valor inserido pelo usuário
        const inputName = document.getElementById("username").value;
        
        // Manipula o DOM para exibir a mensagem personalizada de sucesso
        formFeedback.innerHTML = `Olá, <strong>${inputName}</strong>! Obrigado por apoiar o futuro sustentável do nosso Agro. Verifique seu e-mail!`;
        formFeedback.classList.remove("hidden");
        
        // Limpa os campos do formulário após o envio bem-sucedido
        newsletterForm.reset();
    });
});
