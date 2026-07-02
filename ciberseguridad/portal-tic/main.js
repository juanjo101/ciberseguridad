import { marked } from 'marked';
import { saveAs } from 'file-saver';

// Usamos importación condicional o exportación nativa para Word
// Para evitar problemas de bundle con html-docx-js en Vite, generamos el DOCX mediante HTML con metadatos de Word.

document.addEventListener('DOMContentLoaded', () => {
  const menuLinks = document.querySelectorAll('#menu a');
  const documentView = document.getElementById('document-view');
  let currentDocContent = '';

  const loadDocument = async (url, linkElement) => {
    try {
      documentView.innerHTML = '<div class="loading">Cargando documento...</div>';
      
      // Update Active State
      menuLinks.forEach(link => link.classList.remove('active'));
      if(linkElement) linkElement.classList.add('active');

      const response = await fetch(url);
      if (!response.ok) throw new Error('No se pudo cargar el documento.');
      
      const markdown = await response.text();
      currentDocContent = markdown;
      
      // Configurar marcado para tablas compatibles con Word (opcional)
      const htmlContent = marked.parse(markdown);
      
      documentView.innerHTML = htmlContent;
    } catch (error) {
      documentView.innerHTML = `<div style="color: red; padding: 2rem;">Error: ${error.message}</div>`;
    }
  };

  // Attach events
  menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const url = e.target.getAttribute('data-doc');
      loadDocument(url, e.target);
    });
  });

  // Load first document by default
  if(menuLinks.length > 0) {
    const firstLink = menuLinks[0];
    loadDocument(firstLink.getAttribute('data-doc'), firstLink);
  }

  // PDF Export
  document.getElementById('btn-print').addEventListener('click', () => {
    window.print();
  });

  // Word Export
  document.getElementById('btn-word').addEventListener('click', () => {
    if(!currentDocContent) return;

    // Convert markdown to HTML for Word
    const htmlContent = marked.parse(currentDocContent);
    
    // Add MS Word specific headers
    const header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' "+
          "xmlns:w='urn:schemas-microsoft-com:office:word' "+
          "xmlns='http://www.w3.org/TR/REC-html40'>"+
          "<head><meta charset='utf-8'><title>Documento TIC</title></head><body>";
    const footer = "</body></html>";
    const sourceHTML = header + htmlContent + footer;
    
    const source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
    const fileDownload = document.createElement("a");
    document.body.appendChild(fileDownload);
    fileDownload.href = source;
    fileDownload.download = 'Documento_Politica_TIC.doc';
    fileDownload.click();
    document.body.removeChild(fileDownload);
  });
});
