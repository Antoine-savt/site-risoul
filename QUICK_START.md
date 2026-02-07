# 🚀 Guide de Démarrage Rapide - Panel Admin

## ⚡ Configuration Initiale (à faire une seule fois)

### Étape 1 : Configuration Supabase

1. **Ouvrez votre dashboard Supabase** : https://app.supabase.com/project/amkjdslwsionyeppuqef

2. **Créez un utilisateur admin** :
   - Allez dans **Authentication** > **Users**
   - Cliquez sur **Add user** > **Create new user**
   - Email : `votre-email@example.com`
   - Mot de passe : `votreMotDePasse123!`
   - ✅ Cliquez sur **Create user**

3. **Initialisez la base de données** :
   - Allez dans **SQL Editor**
   - Cliquez sur **New query**
   - Ouvrez le fichier `.github/supabase-setup.sql` de ce projet
   - Copiez tout le contenu
   - Collez dans l'éditeur SQL
   - ✅ Cliquez sur **RUN**

4. **Vérifiez que tout fonctionne** :
   - Allez dans **Table Editor** → Vérifiez que `gallery_images` existe
   - Allez dans **Storage** → Vérifiez que `gallery-images` existe

### Étape 2 : Configuration GitHub (pour le déploiement)

1. **Allez sur GitHub** : https://github.com/antoine-savt/site-risoul/settings/secrets/actions

2. **Ajoutez les secrets** :
   - Cliquez sur **New repository secret**
   - Name: `VITE_SUPABASE_URL`
   - Value: `https://amkjdslwsionyeppuqef.supabase.co`
   - ✅ Add secret
   
   - Cliquez à nouveau sur **New repository secret**
   - Name: `VITE_SUPABASE_ANON_KEY`
   - Value: `sb_publishable_s7dS4bWsANjNQEu0haXpWg_THzBuNkl`
   - ✅ Add secret

### Étape 3 : Déployer

```bash
git add .
git commit -m "Add admin panel with gallery management"
git push
```

Attendez 2-3 minutes que le workflow GitHub Actions se termine.

---

## 🎯 Utilisation du Panel Admin

### 🔑 Connexion

**Production :**
```
https://antoine-savt.github.io/site-risoul/admin/login
```

**Local (développement) :**
```
http://localhost:3000/site-risoul/admin/login
```

Utilisez les identifiants créés à l'étape 1.

### 📸 Gestion de la Galerie

Une fois connecté, vous êtes sur l'onglet **Gestion de la Galerie** :

1. **Ajouter une image** :
   - Cliquez sur le bouton **Ajouter une image**
   - Sélectionnez une image (JPG, PNG, max 5MB)
   - L'image est automatiquement uploadée et apparaît dans la galerie

2. **Supprimer une image** :
   - Survolez une image
   - Cliquez sur l'icône 🗑️ (poubelle)
   - Confirmez la suppression

3. **Ordre d'affichage** :
   - Les numéros (ex: #1, #2) indiquent l'ordre d'affichage
   - Les nouvelles images sont ajoutées à la fin

### 🚪 Déconnexion

Cliquez sur **Déconnexion** en haut à droite.

---

## 🛠️ Développement Local

```bash
# Installer les dépendances
npm install

# Lancer le serveur de dev
npm run dev

# Naviguer vers
# http://localhost:3000/site-risoul/admin/login
```

---

## ❓ Dépannage

### "Les variables d'environnement Supabase sont manquantes"

→ Vérifiez que votre fichier `.env` existe et contient :
```
VITE_SUPABASE_URL=https://amkjdslwsionyeppuqef.supabase.co
VITE_SUPABASE_ANON_KEY=sb_publishable_s7dS4bWsANjNQEu0haXpWg_THzBuNkl
```

### "Invalid login credentials"

→ Vérifiez que vous avez bien créé un utilisateur dans Supabase Authentication

### Les images ne s'affichent pas après upload

→ Vérifiez que le bucket `gallery-images` est bien **public** dans Supabase Storage

---

## 📚 Documentation Complète

Consultez `ADMIN_SETUP.md` pour plus de détails.
