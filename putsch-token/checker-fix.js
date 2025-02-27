import os

# Chemin absolu ou relatif du dossier - à vérifier
folder = "./3.57"

# Vérifiez que le dossier existe
if not os.path.exists(folder):
print(f"Erreur : Le dossier '{folder}' est introuvable !")
else:
# Remplacement des caractères spéciaux dans les noms de fichiers
for filename in os.listdir(folder):
# Nouveau nom avec remplacement
new_name = filename.replace("Ç", "C").replace(" ", "_")

# Renommage du fichier
os.rename(
  os.path.join(folder, filename),
  os.path.join(folder, new_name)
)
print(f"Renommé : {filename} --> {new_name}")
