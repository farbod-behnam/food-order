export class Address {
    name: string;
    street: string;
    postalCode: string;
    city: string;

    constructor(name: string, street: string, postalCode: string, city: string) {
        this.name = name;
        this.street = street;
        this.postalCode = postalCode;
        this.city = city;
    }
}