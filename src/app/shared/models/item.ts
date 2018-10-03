/**
 * Define an object of type Item
 */
export class Item{
    id: String;
    name: string;
    picture: string;
    qty: number;
    // Should be an enum like ('to buy', 'bought', 'unavailable')
    status: string;

}
