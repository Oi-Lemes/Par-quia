// Adiciona interatividade aos cards dos livros
document.addEventListener('DOMContentLoaded', function() {
    const bookCards = document.querySelectorAll('.book-card');
    const ctaButton = document.querySelector('.cta-button');

    // Adiciona efeito de hover nos cards
    bookCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });

        // Adiciona funcionalidade de clique
        card.addEventListener('click', function() {
            const bookName = this.querySelector('h3').textContent;
            showBookInfo(bookName);
        });
    });

    // Funcionalidade do botão CTA
    ctaButton.addEventListener('click', function() {
        // Simula redirecionamento para página de compra
        showPurchaseModal();
    });

    // Adiciona efeito de scroll suave
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.hero');
        const speed = scrolled * 0.5;
        parallax.style.transform = `translateY(${speed}px)`;
    });
});

function showBookInfo(bookName) {
    const bookDescriptions = {
        'ROMANOS': 'Estudo profundo sobre a justiça de Deus e a salvação pela fé.',
        'GÁLATAS': 'A liberdade cristã e o verdadeiro evangelho de Cristo.',
        'CORÍNTIOS': 'Orientações práticas para a vida cristã em comunidade.',
        'ALEGRIA': 'As cartas que trazem alegria e esperança ao coração.',
        'EFÉSIOS': 'A riqueza da graça divina e nossa identidade em Cristo.',
        'TITO': 'Liderança cristã e organização da igreja.',
        'FILEMON': 'Perdão, reconciliação e amor fraternal.'
    };

    const description = bookDescriptions[bookName] || 'Estudo detalhado desta carta paulina.';
    
    alert(`📖 ${bookName}\n\n${description}\n\nEste estudo está incluído no pacote completo por apenas R$ 10,00!`);
}

function showPurchaseModal() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>🎉 Adquirir Estudo Completo</h2>
            <p>Você está prestes a adquirir o estudo completo das Cartas de Paulo!</p>
            <div class="modal-price">R$ 10,00</div>
            <p>Inclui todas as cartas com explicações versículo por versículo.</p>
            <button class="modal-btn">Finalizar Compra</button>
        </div>
    `;

    // Adiciona estilos do modal
    const modalStyles = `
        .modal {
            display: flex;
            position: fixed;
            z-index: 1000;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.5);
            align-items: center;
            justify-content: center;
        }
        .modal-content {
            background: linear-gradient(135deg, #2c5530 0%, #1a3d1f 100%);
            color: white;
            padding: 2rem;
            border-radius: 20px;
            text-align: center;
            max-width: 400px;
            position: relative;
            box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }
        .close {
            position: absolute;
            right: 1rem;
            top: 1rem;
            font-size: 2rem;
            cursor: pointer;
            opacity: 0.7;
        }
        .close:hover {
            opacity: 1;
        }
        .modal-price {
            font-size: 2rem;
            font-weight: bold;
            color: #f4d03f;
            margin: 1rem 0;
        }
        .modal-btn {
            background: #f4d03f;
            color: #2c5530;
            border: none;
            padding: 1rem 2rem;
            border-radius: 50px;
            font-weight: 600;
            cursor: pointer;
            margin-top: 1rem;
            transition: all 0.3s ease;
        }
        .modal-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(0,0,0,0.2);
        }
    `;

    const styleSheet = document.createElement('style');
    styleSheet.textContent = modalStyles;
    document.head.appendChild(styleSheet);

    document.body.appendChild(modal);

    // Fecha o modal
    modal.querySelector('.close').onclick = function() {
        document.body.removeChild(modal);
        document.head.removeChild(styleSheet);
    };

    modal.onclick = function(event) {
        if (event.target === modal) {
            document.body.removeChild(modal);
            document.head.removeChild(styleSheet);
        }
    };

    // Simula finalização da compra
    modal.querySelector('.modal-btn').onclick = function() {
        alert('🎉 Obrigado pela sua compra! Você receberá o material em seu email em breve.');
        document.body.removeChild(modal);
        document.head.removeChild(styleSheet);
    };
}