import {Item} from './item';

/**
 * Define an object of type List
 */
export class List{
    /**
     * List of all the items present on the shopping list
     */
    items: Item[];
    /**
     * The shopping list name to display
     */
    name: String;
    /**
     * The shopping list id
     */
    id: String;    
}