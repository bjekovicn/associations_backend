export type AssociationDTO = {
  association_id: number;
  name: string;
  category: {
    category_id: number;
    name: string;
    photo: string | null;
  };
};
