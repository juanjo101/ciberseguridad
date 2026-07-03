import pandas as pd

excel_file = '../Metodo de Verificacion_de_Evaluacion_iTICge_2025 v12.xlsx'
xl = pd.ExcelFile(excel_file)
df = xl.parse('Ciberseguridad')

pregunta_col = next((c for c in df.columns if 'PREGUNTA' in str(c).upper()), None)
evidencia_col = next((c for c in df.columns if 'EVIDENCIA' in str(c).upper()), None)

append_content = '\n<br>\n\n### 📝 Cuestionario Oficial de Evaluación (iTICge 2025)\n\n'

for index, row in df.iterrows():
    pregunta = str(row[pregunta_col])
    evidencia = str(row[evidencia_col]) if evidencia_col else ''
    
    if pd.isna(row[pregunta_col]) or pregunta == 'nan':
        continue
        
    append_content += f"""<div style="background: #fff; padding: 15px; border: 1px solid #e2e8f0; border-radius: 8px; margin-bottom: 15px;">
  <h4 style="margin: 0 0 10px 0; color: #334155;">{pregunta.strip()}</h4>
"""
    if evidencia and evidencia != 'nan':
        evidencias_list = evidencia.split('\n')
        append_content += "  <div style='color: #64748b; font-size: 0.9em;'><strong>Evidencias Sugeridas (OGTIC):</strong><ul style='margin-top: 5px; margin-bottom: 0; padding-left: 20px;'>"
        for ev in evidencias_list:
            if ev.strip():
                append_content += f"<li>{ev.strip().lstrip('- ')}</li>"
        append_content += "</ul></div>\n"
        
    append_content += """
  <div style="margin-top: 15px; border-top: 1px solid #e2e8f0; padding-top: 10px;">
    <label style="display: flex; align-items: center; gap: 8px; color: #475569; font-size: 0.9em; cursor: pointer;">
      <input type="checkbox" style="width: 16px; height: 16px;"> Marcar evidencia como completada y subida a SISTICGE
    </label>
  </div>
</div>

"""

with open('public/Dashboard.md', 'a', encoding='utf-8') as f:
    f.write(append_content)

print('Cuestionario appended to Dashboard.md')
