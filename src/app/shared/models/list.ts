import {Item} from './item';
import { ListHeader } from './list-header';

/**
 * Define an object of type List
 */
export class List{
    /**
     * List of all the items present on the shopping list
     */
    items: Item[];

    name: String;

    id: String;
}
