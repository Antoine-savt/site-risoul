# Configuration du Panel Admin - Chalet Risoul

## 🔧 Configuration Supabase

### 1. Créer un compte utilisateur admin

Dans votre dashboard Supabase :
1. Allez dans **Authentication** > **Users**
2. Cliquez sur **Add user** > **Create new user**
3. Entrez un email et un mot de passe
4. Cliquez sur **Create user**

### 2. Initialiser la base de données

1. Allez dans **SQL Editor** dans votre dashboard Supabase
2. Créez une nouvelle requête
3. Copiez et collez le contenu du fichier `.github/supabase-setup.sql`
4. Exécutez la requête (bouton RUN)

Cela va créer :
- ✅ La table `gallery_images` pour stocker les métadonnées des photos
- ✅ Le bucket de stockage `gallery-images` pour les fichiers
- ✅ Les politiques de sécurité (RLS) appropriées
- ✅ Les index pour optimiser les performances

### 3. Vérifier la configuration

Vérifiez que tout est bien configuré :

**Base de données :**
- Allez dans **Table Editor**
- Vérifiez que la table `gallery_images` existe

**Storage :**
- Allez dans **Storage**
- Vérifiez que le bucket `gallery-images` existe
- Vérifiez que le bucket est **public**

## 🚀 Utilisation du Panel Admin

### Accès au panel

**Local :**
```
http://localhost:3000/site-risoul/admin/login
```

**Production (GitHub Pages) :**
```
https://antoine-savt.github.io/site-risoul/admin/login
```

### Connexion

Utilisez les identifiants de l'utilisateur que vous avez créé dans Supabase :
- Email : `votre-email@example.com`
- Mot de passe : `votre-mot-de-passe`

### Gestion de la Galerie

Une fois connecté :
1. Vous arrivez sur l'onglet **Gestion de la Galerie**
2. Cliquez sur **Ajouter une image** pour uploader une nouvelle photo
3. Les photos apparaissent dans une grille
4. Survolez une photo et cliquez sur l'icône de poubelle pour la supprimer
5. Les numéros indiquent l'ordre d'affichage

### Restrictions

- Format accepté : Images uniquement (JPG, PNG, WebP, etc.)
- Taille maximale : 5 MB par image
- Les images sont stockées de manière sécurisée dans Supabase Storage

## 🔐 Sécurité

- Les routes admin sont protégées par authentification
- Seuls les utilisateurs connectés peuvent uploader/supprimer des images
- Les images sont publiquement accessibles (pour affichage sur le site)
- Row Level Security (RLS) activé sur toutes les tables

## 🌐 Déploiement sur GitHub Pages

Pour que le panel admin fonctionne sur GitHub Pages, vous devez :

1. Ajouter vos secrets Supabase dans GitHub :
   - Allez dans **Settings** > **Secrets and variables** > **Actions**
   - Ajoutez :
     - `VITE_SUPABASE_URL` : `https://amkjdslwsionyeppuqef.supabase.co`
     - `VITE_SUPABASE_ANON_KEY` : votre clé anon

2. Poussez vos changements :
```bash
git add .
git commit -m "Add admin panel with gallery management"
git push
```

3. Le workflow GitHub Actions va automatiquement déployer avec les bonnes variables d'environnement

## 📝 Notes importantes

- Les images existantes dans `Gallery.tsx` (URLs VRBO) sont toujours affichées
- Vous pouvez progressivement remplacer ces images par vos propres uploads
- Les images uploadées via le panel apparaîtront automatiquement dans la galerie publique
