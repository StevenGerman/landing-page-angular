export const productList: Product[] = [
    {id:1, name: 'Lavandina', price: 10, description: "Guarda que es fuerte"},
    {id:2, name: 'Detergente', price: 5, description: "Desangrasa una locura"},
    {id:3, name: 'Limpia Vidrios', price: 10, description: "Es para vidrios"},
    {id:4, name: 'Escoba', price: 50},
    {id:5, name: 'Jabon', price: 10, description: "Matic"}
]

export interface Product {
    id: number | string;
    name: string;
    price: number;
    description?: string;
}