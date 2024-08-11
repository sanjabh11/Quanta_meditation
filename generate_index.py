   import os

   folders = ['Beginning of Infinity', 'Mindfullness', 'Quantum Physics Simulations']

   html_content = """
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Quanta Meditation</title>
   </head>
   <body>
       <h1>Quanta Meditation</h1>
   """

   for folder in folders:
       html_content += f"<h2>{folder}</h2><ul>"
       for root, dirs, files in os.walk(folder):
           for file in files:
               if file.endswith('.html'):
                   file_path = os.path.join(root, file).replace('\\', '/')
                   html_content += f'<li><a href="{file_path}">{file}</a></li>'
       html_content += "</ul>"

   html_content += "</body></html>"

   with open('index.html', 'w') as f:
       f.write(html_content)

   print("index.html has been generated successfully.")
