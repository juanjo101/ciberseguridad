import './style.css'
import { marked } from 'marked';
import Chart from 'chart.js/auto';

let currentDoc = '/Dashboard_Global.md';
let radarChartInstance = null;

const documentView = document.getElementById('document-view');
const menuLinks = document.querySelectorAll('#menu a');
const btnWord = document.getElementById('btn-word');
const btnPdf = document.getElementById('btn-print');

async function loadDocument(docPath) {
  documentView.innerHTML = '<div class="loading">Cargando documento...</div>';
  try {
    const response = await fetch(`${docPath}?t=${new Date().getTime()}`, { cache: 'no-store' });
    if (!response.ok) throw new Error('Error al cargar');
    const text = await response.text();
    documentView.innerHTML = marked.parse(text);
    currentDoc = docPath;
    
    const actionsDiv = document.querySelector('.actions');
    if (docPath.includes('Dashboard')) {
      actionsDiv.style.display = 'none';
    } else {
      actionsDiv.style.display = 'flex';
    }
    
    // Render chart if it's the global dashboard
    if (docPath === '/Dashboard_Global.md') {
      setTimeout(() => {
        const ctx = document.getElementById('radarChart');
        if (ctx) {
          try {
            if (radarChartInstance) radarChartInstance.destroy();
            radarChartInstance = new Chart(ctx, {
              type: 'radar',
              data: {
                labels: ['Uso de las TIC', 'Gestión y Controles', 'Ciberseguridad', 'Gobierno Digital', 'e-Participación', 'Servicios en Línea', 'Innovación'],
                datasets: [{
                  label: 'Puntuación Alcanzada (Base 100)',
                  data: [52.8, 68.9, 49.0, 28.5, 41.9, 25.4, 10.0],
                  fill: true,
                  backgroundColor: 'rgba(59, 130, 246, 0.2)',
                  borderColor: 'rgb(59, 130, 246)',
                  pointBackgroundColor: 'rgb(59, 130, 246)',
                  pointBorderColor: '#fff',
                  pointHoverBackgroundColor: '#fff',
                  pointHoverBorderColor: 'rgb(59, 130, 246)'
                }]
              },
              options: {
                responsive: true,
                maintainAspectRatio: false,
                elements: { line: { borderWidth: 3 } },
                scales: { r: { angleLines: { display: true }, suggestedMin: 0, suggestedMax: 100 } }
              }
            });
          } catch (e) {
            console.error("Error drawing chart:", e);
          }
        }
        
        
      }, 150); // Increased timeout slightly to ensure DOM is ready
    }
    
  } catch (error) {
    documentView.innerHTML = '<div class="error">No se pudo cargar el documento.</div>';
  }
}

// Event delegation for KPI cards
documentView.addEventListener('click', (e) => {
  const card = e.target.closest('.kpi-card');
  if (card) {
    const targetDoc = card.dataset.target;
    if (targetDoc) {
      menuLinks.forEach(l => l.classList.remove('active'));
      const matchingLink = Array.from(menuLinks).find(l => l.dataset.doc === targetDoc);
      if (matchingLink) matchingLink.classList.add('active');
      loadDocument(targetDoc);
    }
  }
});

menuLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    menuLinks.forEach(l => l.classList.remove('active'));
    e.target.classList.add('active');
    loadDocument(e.target.dataset.doc);
  });
});

btnWord.addEventListener('click', () => {
    const docxUrl = currentDoc.replace('.md', '.docx');
    window.open(docxUrl, '_blank');
});

btnPdf.addEventListener('click', () => {
    const pdfUrl = currentDoc.replace('.md', '.pdf');
    window.open(pdfUrl, '_blank');
});

loadDocument(currentDoc);
