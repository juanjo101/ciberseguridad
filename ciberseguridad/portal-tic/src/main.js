import './style.css'
import { marked } from 'marked';

let currentDoc = '/Dashboard.md';

const documentView = document.getElementById('document-view');
const menuLinks = document.querySelectorAll('#menu a');
const btnWord = document.getElementById('btn-word');
const btnPdf = document.getElementById('btn-print');

async function loadDocument(docPath) {
  documentView.innerHTML = '<div class="loading">Cargando documento...</div>';
  try {
    const response = await fetch(docPath);
    if (!response.ok) throw new Error('Error al cargar');
    const text = await response.text();
    documentView.innerHTML = marked.parse(text);
    currentDoc = docPath;
    
    const actionsDiv = document.querySelector('.actions');
    if (docPath === '/Dashboard.md') {
      actionsDiv.style.display = 'none';
    } else {
      actionsDiv.style.display = 'flex';
    }
  } catch (error) {
    documentView.innerHTML = '<div class="error">No se pudo cargar el documento.</div>';
  }
}

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
