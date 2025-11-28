# Système d'envoi d'email pour le formulaire de crédit hypothécaire

## Configuration

Le système utilise nodemailer avec ForwardMail pour envoyer les demandes de crédit hypothécaire.

### Variables d'environnement

Créez un fichier `.env.local` à la racine du projet avec les variables suivantes:

```env
FORWARD_EMAIL_USER=info@cervantesbienesraices.com
FORWARD_EMAIL_PASSWORD=votre_mot_de_passe_forwardmail
```

### Obtenir le mot de passe ForwardMail

1. Connectez-vous à [ForwardMail](https://forwardemail.net)
2. Allez dans les paramètres de votre domaine `cervantesbienesraices.com`
3. Dans la section SMTP, créez un mot de passe d'application
4. Copiez le mot de passe généré
5. Collez-le dans votre fichier `.env.local`

## Destinataires des emails

Lorsqu'un client remplit le formulaire de demande de crédit hypothécaire, un email est automatiquement envoyé à:

- **Destinataire principal:** mariana.sanchez@creditaria.com
- **En copie (CC):**
  - javiercerva62@gmail.com
  - julio.cervantesc@gmail.com
  - olivier.steineur@gmail.com

## Fichiers créés/modifiés

### 1. `/src/pages/api/send-mortgage-email.ts`
API endpoint qui gère l'envoi des emails via nodemailer et ForwardMail.

### 2. `/src/components/homes/home-eight-en/MortgageCreditEn.tsx`
Version anglaise du formulaire avec intégration de l'API.

### 3. `/src/components/homes/home-eight/MortgageCredit.tsx`
Version espagnole du formulaire avec intégration de l'API.

## Fonctionnalités

- ✅ Validation des champs du formulaire
- ✅ État de chargement pendant l'envoi
- ✅ Notifications toast (succès/erreur)
- ✅ Réinitialisation du formulaire après envoi réussi
- ✅ Email HTML formaté avec design professionnel
- ✅ Version texte alternative de l'email
- ✅ Contenu bilingue (Espagnol/Anglais)

## Tester l'envoi d'email

1. Assurez-vous que le fichier `.env.local` est configuré
2. Redémarrez le serveur de développement: `npm run dev`
3. Accédez à la page avec le formulaire de crédit hypothécaire
4. Remplissez le formulaire et soumettez
5. Vérifiez les boîtes de réception des destinataires

## Notes importantes

⚠️ **Le fichier `.env.local` ne doit JAMAIS être commité dans Git** - il est déjà dans `.gitignore`

⚠️ **Pour la production**, assurez-vous de configurer les variables d'environnement sur votre plateforme de déploiement (Railway, Vercel, etc.)
