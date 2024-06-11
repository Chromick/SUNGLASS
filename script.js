
/* Alerta de email ao clicar */
document.getElementById("adquirirButton").addEventListener("click", function(event) {
    event.preventDefault(); // Previne o comportamento padrão do link
    var email = prompt("Por favor, insira seu e-mail:");
    if (email) {
        alert("O E-mail: " + email + " logo será contatado sobre o Produto");
    } else {
        alert("Você não forneceu um e-mail.");
    }
});

/*Contage Regressiva*/

document.getElementById("launchButton").addEventListener("click", function() {
    // Ocultar o botão de lançamento
    this.style.display = "none";
    
    // Mostrar a área de contagem regressiva
    var countdownElement = document.getElementById("countdown");
    countdownElement.style.display = "block";
    
    // Configurar a duração da contagem regressiva (5 minutos)
    var duration = 5 * 60;
    var timerElement = document.getElementById("timer");

    // Função para atualizar o timer
    function updateTimer() {
        var minutes = Math.floor(duration / 60);
        var seconds = duration % 60;
        timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        duration--;

        if (duration < 0) {
            clearInterval(timerInterval);
            alert("Lançamento do SUNglass!");
        }
    }

    // Atualizar o timer imediatamente e então a cada segundo
    updateTimer();
    var timerInterval = setInterval(updateTimer, 1000);
});

