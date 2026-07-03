import pandas as pd
import os
import re

excel_file = '../Metodo de Verificacion_de_Evaluacion_iTICge_2025 v12.xlsx'
xl = pd.ExcelFile(excel_file)

# Mapping sheets to their respective Markdown dashboard files
sheet_to_file = {
    'Infraestructuras': 'Pilar_Uso_TIC.md',
    'Software y Herramienta': 'Pilar_Uso_TIC.md',
    'Gestion y Controles TIC': 'Pilar_Gestion_Controles.md',
    'Capital Humano TIC': 'Pilar_Gobierno_Digital.md',
    'Presencia Web': 'Pilar_Gobierno_Digital.md',
    'Arquitectura Digital': 'Pilar_Gobierno_Digital.md',
    'Mejores Practicas': 'Pilar_Gobierno_Digital.md',
    'e-participacion': 'Pilar_eParticipacion.md',
    'Datos Abiertos': 'Pilar_eParticipacion.md',
    'Redes Sociales': 'Pilar_eParticipacion.md',
    'Omnicanalidad': 'Pilar_Servicios_Linea.md',
    'Funcionalidad de e-servicios': 'Pilar_Servicios_Linea.md',
    'Participacion Ciudadana': 'Pilar_Servicios_Linea.md',
    'Innovacion Digital ': 'Pilar_Innovacion.md',
    'Estrategia de innovacion': 'Pilar_Innovacion.md',
    'Implementacion Nuevas Tec': 'Pilar_Innovacion.md'
}

pilar_points = {
    'Pilar_Uso_TIC.md': 10.0,
    'Pilar_Gestion_Controles.md': 2.8,
    'Pilar_Gobierno_Digital.md': 20.0,
    'Pilar_eParticipacion.md': 20.0,
    'Pilar_Servicios_Linea.md': 30.0,
    'Pilar_Innovacion.md': 20.0
}

# Count sheets per file to divide points equally among sub-indicators
sheets_per_file = {}
for sheet, file in sheet_to_file.items():
    sheets_per_file[file] = sheets_per_file.get(file, 0) + 1

file_contents = {}

for sheet_name in xl.sheet_names:
    if sheet_name == 'Ciberseguridad':
        continue # handled separately
        
    if sheet_name in sheet_to_file:
        file_name = sheet_to_file[sheet_name]
        df = xl.parse(sheet_name)
        
        if file_name not in file_contents:
            file_contents[file_name] = f"# 📊 Dashboard: {file_name.replace('Pilar_', '').replace('.md', '').replace('_', ' ')}\n\n<div style='background:#f8fafc; padding:15px; border-radius:8px; border-left:4px solid #10b981; margin-bottom:20px;'><strong>Estado:</strong> Recopilación de Evidencias Iniciada</div>\n\n"
        
        anchor_id = re.sub(r'[^a-zA-Z0-9]+', '-', sheet_name.lower()).strip('-')
        file_contents[file_name] += f"<h2 id='{anchor_id}'>{sheet_name}</h2>\n\n"
        
        # Find correct column names dynamically
        pregunta_col = next((c for c in df.columns if 'PREGUNTA' in str(c).upper()), None)
        evidencia_col = next((c for c in df.columns if 'EVIDENCIA' in str(c).upper()), None)
        
        if not pregunta_col:
            continue
            
        # Pre-calculate points for this specific sheet
        valid_questions = 0
        for index, row in df.iterrows():
            pregunta = str(row[pregunta_col])
            if not pd.isna(row[pregunta_col]) and pregunta != 'nan':
                valid_questions += 1
                
        # Sub-indicator points = Pilar Points / Number of sub-indicators
        sub_indicator_points = pilar_points.get(file_name, 0) / sheets_per_file.get(file_name, 1)
        # Evidence points = Sub-indicator points / Number of questions
        points_per_evidence = sub_indicator_points / valid_questions if valid_questions > 0 else 0
            
        for index, row in df.iterrows():
            pregunta = str(row[pregunta_col])
            evidencia = str(row[evidencia_col]) if evidencia_col else ""
            
            if pd.isna(row[pregunta_col]) or pregunta == 'nan':
                continue
                
            # Formatting as a card/alert for the dashboard
            file_contents[file_name] += f"""<div style="background: #fff; padding: 15px; border: 1px solid #e2e8f0; border-radius: 8px; margin-bottom: 15px;">
  <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 15px;">
    <h4 style="margin: 0 0 10px 0; color: #334155;">{pregunta.strip()}</h4>
    <span style="background: #eff6ff; color: #1d4ed8; font-size: 0.8em; font-weight: 600; padding: 4px 8px; border-radius: 12px; white-space: nowrap; border: 1px solid #bfdbfe;">Valor: {points_per_evidence:.2f} pts</span>
  </div>
"""
            if evidencia and evidencia != 'nan':
                # Parse bullet points if any
                evidencias_list = evidencia.split('\n')
                file_contents[file_name] += "  <div style='color: #64748b; font-size: 0.9em;'><strong>Evidencias Sugeridas (OGTIC):</strong><ul style='margin-top: 5px; margin-bottom: 0; padding-left: 20px;'>"
                for ev in evidencias_list:
                    if ev.strip():
                        file_contents[file_name] += f"<li>{ev.strip().lstrip('- ')}</li>"
                file_contents[file_name] += "</ul></div>\n"
                
            file_contents[file_name] += f"""
  <div style="margin-top: 15px; border-top: 1px solid #e2e8f0; padding-top: 10px;">
    <label style="display: flex; align-items: center; gap: 8px; color: #475569; font-size: 0.9em; cursor: pointer;">
      <input type="checkbox" style="width: 16px; height: 16px;"> Marcar evidencia como completada y subida a SISTICGE
    </label>
  </div>
</div>

"""

os.makedirs("public", exist_ok=True)
for file_name, content in file_contents.items():
    with open(f"public/{file_name}", "w", encoding="utf-8") as f:
        f.write(content)

print("Dashboards MD generados exitosamente en public/ !")
