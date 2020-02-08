describe('pizza.js', () => {
    describe('Pizza', () => {

        beforeEach(() => {
            pizza = new Pizza(['bacon', 'pepperoni', 'olives', 'corn'], 'small');
            toppings = {
                bacon: 0.8,
                pepperoni: 0.75,
                sausage: 0.5,
                ham: 0.5,
                pineapple: 0.5,
                olives: 0.3,
                corn: 0.25,
                mushrooms: 0.25
            };
        });
        it('should be able to call pizzaPrice',() => {
            spyOn(pizza, 'pizzaPrice').and.returnValue(2.1);
            expect(pizza.pizzaPrice).toEqual(2.1);
        });

        it('can be instantiated', () => {
            expect(pizza).toBeTruthy();
            expect(pizza.constructor.name).toContain('Pizza');
        });

        it('should return error if no size is added', () => {
            pizza.size = null;
            expect(() => pizza.pizzaPrice).toThrow();
            expect(() => pizza.pizzaPrice).toThrowError(Error);
            expect(() => pizza.pizzaPrice).toThrowError(Error, `Size can't find`);
        });

        it('should return error with name of wrong topping if it is not in the list of toppings', () => {
            pizza.toppings.push('test');
            expect(() => pizza.toppingsPrice).toThrow();
            expect(() => pizza.toppingsPrice).toThrowError(Error);
            expect(() => pizza.toppingsPrice).toThrowError(Error, `Topping test can't find`);
        });

        it('should return error if toppings is not specified at all', () => {
            toppings = null;
            expect(() => pizza.toppingsPrice).toThrow();
            expect(() => pizza.toppingsPrice).toThrowError(Error);
            expect(() => pizza.toppingsPrice).toThrowError(Error, `Toppings can't find`);
        });

        it('should return correct topping price', () => {
            expect(pizza.toppingsPrice).toBe(2.1);
            pizza.toppings = ['sausage', 'ham',];
            expect(pizza.toppingsPrice).toBe(1);
        });

        it('should return number as topping price', () => {
            expect(pizza.toppingsPrice).toBeNumber();
        });

        it('should return correct pizza price', () => {
            expect(pizza.pizzaPrice).toBe(2.1);

            pizza.size = 'medium';
            expect(Number((pizza.pizzaPrice).toFixed(2))).toBe(3.15);

            pizza.size = 'large';
            expect(pizza.pizzaPrice).toBe(4.2);
        });

        it('should return number as pizza price', () => {
            expect(pizza.toppingsPrice).toBeNumber();
        });

        it('should call toppingsPrice', () => {
            const spy = spyOnProperty(pizza, 'toppingsPrice');
            pizza.pizzaPrice;
            expect(spy).toHaveBeenCalled();
        });

    });
});