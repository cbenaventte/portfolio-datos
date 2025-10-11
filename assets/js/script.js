// ==========================================
// FUNCIONES GLOBALES - Se definen primero
// ==========================================

window.openDashboardModal = function(dashboardId) {
    console.log('🔍 Abriendo dashboard con ID:', dashboardId);
    const modal = document.getElementById('dashboardModal');
    const iframe = document.getElementById('dashboardFrame');
    
    console.log('Modal encontrado:', !!modal);
    console.log('Iframe encontrado:', !!iframe);
    
    if (!modal || !iframe) {
        console.error('❌ Modal o iframe no encontrado en el DOM');
        alert('Error: No se encontró el modal del dashboard. Recarga la página.');
        return;
    }
    
    // Construir URL del dashboard
    const url = `https://lookerstudio.google.com/embed/reporting/${dashboardId}/page/0`;
    console.log('📊 URL construida:', url);
    
    iframe.src = url;
    console.log('✅ URL asignada al iframe');
    
    // Mostrar modal removiendo la clase hidden
    modal.classList.remove('hidden');
    console.log('✅ Modal abierto - clase hidden removida');
    
    // Prevenir scroll del body
    document.body.style.overflow = 'hidden';
    console.log('✅ Scroll del body deshabilitado');
};

window.closeDashboardModal = function() {
    console.log('🔍 Cerrando dashboard');
    const modal = document.getElementById('dashboardModal');
    
    if (modal) {
        modal.classList.add('hidden');
        console.log('✅ Modal cerrado - clase hidden agregada');
    }
    
    // Restaurar scroll
    document.body.style.overflow = 'auto';
    console.log('✅ Scroll del body habilitado');
    
    // Limpiar iframe
    const iframe = document.getElementById('dashboardFrame');
    if (iframe) {
        iframe.src = '';
        console.log('✅ Iframe limpiado');
    }
};

window.toggleDetails = function(id) {
    const element = document.getElementById(id);
    if (element) {
        element.classList.toggle('hidden');
    }
};

console.log('📌 Script cargado - Funciones globales disponibles');

// ==========================================
// EVENT LISTENER DEL BOTÓN DASHBOARD
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    const viewDashboardBtn = document.getElementById('viewDashboardBtn');
    if (viewDashboardBtn) {
        viewDashboardBtn.addEventListener('click', () => {
            console.log('🔍 Botón Ver Dashboard clickeado');
            window.openDashboardModal('25e7eab8-b522-472b-bbc0-316e41196388');
        });
        console.log('✅ Event listener del botón agregado');
    } else {
        console.warn('⚠️ Botón viewDashboardBtn no encontrado');
    }
});

// ==========================================
// DARK MODE TOGGLE
// ==========================================

const toggleButton = document.getElementById('theme-toggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.body.classList.add('dark-mode');
        updateThemeButton(true);
    }
}

function updateThemeButton(isDarkMode) {
    toggleButton.innerHTML = isDarkMode
        ? '<i class="fas fa-sun"></i>'
        : '<i class="fas fa-moon"></i>';
}

toggleButton.addEventListener('click', () => {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    updateThemeButton(isDarkMode);
});

// ==========================================
// EVENT LISTENERS PARA MODAL
// ==========================================

// Cerrar modal con ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        console.log('🔍 ESC presionado');
        window.closeDashboardModal();
    }
});

// Cerrar modal al clickear fuera
document.addEventListener('DOMContentLoaded', () => {
    console.log('✅ DOMContentLoaded disparado');
    const modal = document.getElementById('dashboardModal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target.id === 'dashboardModal') {
                console.log('🔍 Click fuera del modal detectado');
                window.closeDashboardModal();
            }
        });
        console.log('✅ Event listener de click agregado al modal');
    }
});

// ==========================================
// SMOOTH SCROLL
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ==========================================
// INICIALIZACIÓN
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    console.log('✨ Portafolio cargado exitosamente');
    console.log('📊 Dashboard modal integrado');
    console.log('✅ Funciones globales disponibles');
});