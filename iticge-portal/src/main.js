import './style.css'
import { marked } from 'marked';
import Chart from 'chart.js/auto';

let currentDoc = '/Dashboard_Global.html';
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
    
    if (docPath.endsWith('.html')) {
      documentView.innerHTML = text;
    } else {
      documentView.innerHTML = marked.parse(text);
    }
    currentDoc = docPath;
    
    const actionsDiv = document.querySelector('.actions');
    if (docPath.includes('Dashboard')) {
      actionsDiv.style.display = 'none';
    } else {
      actionsDiv.style.display = 'flex';
    }
    
    // Render chart if it's the global dashboard
    if (docPath === '/Dashboard_Global.html') {
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
                responsive: false,
                maintainAspectRatio: true,
                elements: { line: { borderWidth: 3 } },
                scales: { r: { angleLines: { display: true }, suggestedMin: 0, suggestedMax: 100 } }
              }
            });
          } catch (e) {
            console.error("Error drawing chart:", e);
          }
        }
        
        // Fallback explicit click listeners for the cards to guarantee they work
        document.querySelectorAll('.kpi-card').forEach(card => {
          card.style.cursor = 'pointer';
          card.onclick = function(e) {
            e.preventDefault();
            e.stopPropagation();
            const targetDoc = this.getAttribute('data-target');
            if (targetDoc) {
              menuLinks.forEach(l => l.classList.remove('active'));
              const matchingLink = Array.from(menuLinks).find(l => l.dataset.doc === targetDoc);
              if (matchingLink) matchingLink.classList.add('active');
              loadDocument(targetDoc);
            }
          };
        });
        
      }, 150); // Increased timeout slightly to ensure DOM is ready
    }
    
  } catch (error) {
    documentView.innerHTML = '<div class="error">No se pudo cargar el documento.</div>';
  }
}

// Global Event delegation for KPI cards (fallback)
documentView.addEventListener('click', (e) => {
  const card = e.target.closest('.kpi-card');
  if (card && !card.onclick) {
    const targetDoc = card.dataset.target;
    if (targetDoc) {
      menuLinks.forEach(l => l.classList.remove('active'));
      const matchingLink = Array.from(menuLinks).find(l => l.dataset.doc === targetDoc);
      if (matchingLink) matchingLink.classList.add('active');
      loadDocument(targetDoc);
    }
  }
});

function scrollToAnchor(anchorId) {
  setTimeout(() => {
    const el = document.getElementById(anchorId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, 150);
}

menuLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    
    const parentLi = link.parentElement;
    if (parentLi.classList.contains('has-submenu') && !link.closest('.submenu')) {
      parentLi.classList.toggle('expanded');
    }
    
    menuLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
    
    if (link.closest('.submenu')) {
      link.closest('.has-submenu').querySelector('a').classList.add('active');
    }
    
    const docPath = link.dataset.doc;
    const anchor = link.dataset.anchor;
    
    if (currentDoc !== docPath) {
      loadDocument(docPath).then(() => {
        if (anchor) scrollToAnchor(anchor);
      });
    } else {
      if (anchor) scrollToAnchor(anchor);
    }
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
