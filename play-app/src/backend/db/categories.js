import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Game",
   
  },
  {
    _id: uuid(),
    categoryName: "Console",
   
  },
  {
    _id: uuid(),
    categoryName: "Accessories",
    
  },
  {
    _id: uuid(),
    categoryName: "Vr"
  }
];
