

export type AuthorModel = {
    id: string;
    name: string;
    biography: string;
    numberOfBooksWritten: number;
    averageRating: number;
    photoURL: string;
};
  
  // This is the class for when a new author is created
  
export type CreateAuthorModel = {
    name: string;
    biography?: string;
    numberOfBooksWritten?: number;
    averageRating?: number;
    photoURL?: string;
};
  
  // This is the class for when an author is updated
  
export type UpdateAuthorModel = {
    name?: string;
    biography?: string;
    numberOfBooksWritten?: number;
    averageRating?: number;
    photoURL?: string;
};