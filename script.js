document.addEventListener('DOMContentLoaded', () => {
    const loveButton = document.getElementById('loveButton');
    const messageArea = document.getElementById('messageArea');
    const loveContainer = document.getElementById('loveContainer');

    const loveMessages = [
        "Eres la casualidad más bonita que llegó a mi vida.",
        "Cada momento contigo es mágico. ✨",
        "Tú y yo, para siempre. ❤️",
        "Gracias por estar en mi vida.",
        "Eres lo mejor que me ha pasado. 😊",
        "Pienso en ti más de lo que imaginas.",
        "Contigo, cada día es una aventura.",
        "I Love You! 💖"
    ];

    let messageIndex = 0;
    let messagesShown = false; // Para evitar que se muestren múltiples veces si se clickea rápido

    loveButton.addEventListener('click', () => {
        if (messagesShown) { // Si ya se mostraron, reiniciamos para la próxima vez (opcional)
            messageArea.innerHTML = ''; // Limpiar mensajes anteriores
            messageIndex = 0;
            messagesShown = false;
        }
        
        // Activar la animación de agitado
        loveContainer.classList.add('shaking');

        // Quitar la animación después de que termine para que no se repita en cada mensaje
        setTimeout(() => {
            loveContainer.classList.remove('shaking');
        }, 800); // Duración de la animación 'shake'

        // Empezar a mostrar los mensajes
        if (messageIndex < loveMessages.length) {
            showNextMessage();
        }
    });

    function showNextMessage() {
        if (messageIndex < loveMessages.length) {
            const messageText = loveMessages[messageIndex];
            const messageBubble = document.createElement('p');
            messageBubble.classList.add('message-bubble');
            messageBubble.textContent = messageText;
            
            messageArea.appendChild(messageBubble);
            // Forzar reflujo para que la animación se aplique correctamente a cada nuevo elemento
            void messageBubble.offsetWidth; 
            messageBubble.style.opacity = 1; // La animación CSS se encargará del resto

            messageIndex++;

            if (messageIndex < loveMessages.length) {
                setTimeout(showNextMessage, 1500); // Tiempo entre mensajes (1.5 segundos)
            } else {
                messagesShown = true; // Todos los mensajes mostrados
                // Opcional: Cambiar texto del botón o algo más
                // loveButton.textContent = "¡Otra vez! 🥰";
            }
        }
    }
});