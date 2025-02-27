import os

# Chemin absolu vers le dossier
folder = "/home/anarchsun/devs/anarcrypt_tokens/putsch-token/3.57"

# Vérifiez que le dossier existe
if not os.path.exists(folder):
    print(f"Erreur : Le dossier '{folder}' est introuvable !")
else:
    # Parcourir les fichiers dans le dossier
    for filename in os.listdir(folder):
        # Nouveau nom avec remplacement
        new_name = filename.replace("Ç", "C").replace(" ", "_")

        # Si le nom reste le même, on l'ignore
        if filename == new_name:
            print(f"Pas de modification nécessaire pour : {filename}")
            continue

        # Sinon, on renomme le fichier
        os.rename(
            os.path.join(folder, filename),
            os.path.join(folder, new_name)
        )
        print(f"Renommé : {filename} --> {new_name}")
