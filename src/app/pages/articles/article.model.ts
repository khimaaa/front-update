export interface Article {
    id?: number; // Optionnel pour les nouveaux articles
    title: string;
    content: string;
    createdAt: Date;
    categorie: string;
    abonnee: any; // Remplacez `any` par le type réel si défini
  }
  