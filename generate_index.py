import os

def generate_html():
  folders = ['Beginning of Infinity', 'Mindfullness', 'Quantum Physics Simulations']
  html_content = """
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Quantum Physics & Meditation</title>
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://main--quantamindfullness-simulation.netlify.app/">
  <meta property="og:title" content="Quantum Physics & Meditation">
  <meta property="og:description" content="Explore the fascinating world of quantum physics and its connection to meditation through interactive animations and simulations.">
  <meta property="og:image" content="https://main--quantamindfullness-simulation.netlify.app/images/preview.png">
  
  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="https://main--quantamindfullness-simulation.netlify.app/">
  <meta property="twitter:title" content="Quantum Physics & Meditation">
  <meta property="twitter:description" content="Explore the fascinating world of quantum physics and its connection to meditation through interactive animations and simulations.">
  <meta property="twitter:image" content="https://main--quantamindfullness-simulation.netlify.app/images/preview.png">
  
  <!-- Facebook App ID -->
  <meta property="fb:app_id" content="633325697116539">
</head>
<body>
  <h1>Welcome to Quantum Physics & Meditation</h1>
  """

  for folder in folders:
      html_content += f"<h2>{folder}</h2><ul>"
      for file in os.listdir(folder):
          if file.endswith('.html'):
              html_content += f'<li><a href="{folder}/{file}">{file[:-5]}</a></li>'
      html_content += "</ul>"

  html_content += "</body></html>"
  
  with open('index.html', 'w') as f:
      f.write(html_content)

if __name__ == "__main__":
  generate_html()
