import os

folders = ['Beginning of Infinity', 'Equations', 'Mindfullness', 'Quantum Physics Simulations']

html_content = """
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Quanta Meditation</title>
  <style>
      .folder { font-weight: bold; }
      ul { padding-left: 20px; }
  </style>
</head>
<body>
  <h1>Quanta Meditation</h1>
"""

def add_files_from_dir(dir_path):
  content = "<ul>"
  for root, dirs, files in os.walk(dir_path):
      level = root.replace(dir_path, '').count(os.sep)
      indent = '    ' * (level + 1)
      subdir = os.path.basename(root)
      if level > 0:
          content += f"{indent}<li class='folder'>{subdir}/</li>\n{indent}<ul>\n"
      for file in sorted(files):
          if file != 'README.md':  # Exclude README.md files
              file_path = os.path.join(root, file).replace(dir_path, '').lstrip(os.sep).replace('\\', '/')
              content += f"{indent}<li><a href='{os.path.join(dir_path, file_path)}'>{file}</a></li>\n"
      if level > 0:
          content += f"{indent}</ul>\n"
  content += "</ul>"
  return content

for folder in folders:
  html_content += f"<h2>{folder}</h2>"
  try:
      html_content += add_files_from_dir(folder)
  except Exception as e:
      print(f"Error processing folder {folder}: {str(e)}")

html_content += "</body></html>"

try:
  with open('index.html', 'w', encoding='utf-8') as f:
      f.write(html_content)
  print("index.html has been generated successfully.")
except Exception as e:
  print(f"Error writing index.html: {str(e)}")
