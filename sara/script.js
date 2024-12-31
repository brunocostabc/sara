document.addEventListener('DOMContentLoaded', function () {
    // Navegar para a próxima página
    const nextButton = document.getElementById('nextButton');
    if (nextButton) {
        nextButton.addEventListener('click', function () {
            window.location.href = 'pag2.html';
        });
    }

    // Navegar para a terceira página
    const signButton = document.getElementById('signButton');
    if (signButton) {
        signButton.addEventListener('click', function () {
            window.location.href = 'pag3.html';
        });
    }

    // Fechar a página
    document.addEventListener('DOMContentLoaded', function () {
        const exitButton = document.getElementById('exit');
        if (exitButton) {
            exitButton.addEventListener('click', function () {
                if (window.close) {
                    window.close();
                } else {
                    alert('Por razões de segurança, o navegador não permite fechar esta janela.');
                    window.location.href = 'pag1.html'; // Opcional: redirecionar para a primeira página
                }
            });
        }
    });
    
});
