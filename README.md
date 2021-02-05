# Frontend de la plateforme web CoPA Musique

Version 0.2

Créé avec React JS

## Pages

- Accueil (/)
- À propos (/about)
  - Politiques de confidentialité (/politiques-confidentialite)
  - Conditions Générales d'utilisation (/conditions-utilisation)
- Nouvelles (/nouvelles)
- Tarifs (/tarifs)
- Comment ça marche (/comment-ca-marche)
- Nous Joindre (/contact)

## Composantes
La structure des composantes est basée sur l'architecture [Atomic Design](https://www.usabilis.com/atomic-design/).

```
├───atoms
│   ├───Button
│   ├───HamburgerBtn
│   ├───Heading
│   ├───Tableau
│   └───Text
├───molecules
│   ├───Accordeon
│   │   └───Panel
│   ├───PaginatedContent
│   ├───PaginationBar
│   └───SideDrawer
└───organismes
    ├───CategoriesGrid
    │   └───CategoryCell
    ├───ContactForm
    ├───ContactInfo
    ├───Contract
    ├───Footer
    │   ├───Copyright
    │   ├───SiteMap
    │   └───Social
    ├───GrilleTarifs
    │   └───TarifCard
    ├───Header
    │   └───Nav
    ├───Hero
    ├───HowWork
    ├───PostsGrid
    │   └───PostCard
    └───TableauComparatif
```
