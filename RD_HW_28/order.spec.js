describe('order.js', () => {
    describe('Order', () => {
        beforeEach(() => {
            pizza = new Pizza(['bacon', 'pepperoni', 'olives', 'corn'], 'small');
            order = new Order();
        });

        it('should initialize pizzas', () => {
            expect(order.pizzas).toBeTruthy();
        });

        it('pizzas should be an array', () => {
            expect(order.pizzas).toBeArray();
        });

        it('should call addPizza and call it defined amount of times', () => {
            spyOn(order, 'addPizza');
            order.addPizza(pizza);
            order.addPizza(pizza);
            expect(order.addPizza).toHaveBeenCalled();
            expect(order.addPizza).toHaveBeenCalledTimes(2);
        });

        it('should add pizza to order', () => {
            order.addPizza(pizza);
            expect(order.pizzas.length).toEqual(1);
            expect(order.pizzas[0]).toEqual(pizza);
        });

        it('should call removePizza and call it defined amount of times', () => {
            spyOn(order, 'removePizza');
            order.removePizza(pizza);
            order.removePizza(pizza);
            expect(order.removePizza).toHaveBeenCalled();
            expect(order.removePizza).toHaveBeenCalledTimes(2);
        });

        it('should delete pizza from order', () => {
            order.addPizza(pizza);
            expect(order.pizzas.length).toEqual(1);
            order.addPizza(pizza);
            order.removePizza(pizza);
            expect(order.pizzas.length).toEqual(1);
        });

        it('should throw Error if totalPrice price is 0 ', () => {
            order.pizzas = [{pizzaPrice: 0}];
            expect(() => order.totalPrice).toThrow();
            expect(() => order.totalPrice).toThrowError(Error);
            expect(() => order.totalPrice).toThrowError(Error, `Pizza can't cost 0 USD`);
        });

        it('should throw Error if pizza have no price', () => {
            order.pizzas = [{}];
            expect(() => order.totalPrice).toThrow();
            expect(() => order.totalPrice).toThrowError(Error);
            expect(() => order.totalPrice).toThrowError(Error, `Pizza must have a price`);
        });

        it('should calculate pizzas price correctly', () => {
            order.pizzas = [{pizzaPrice: 5},{pizzaPrice: 10}];
            expect(order.totalPrice).toEqual(15);

            order.pizzas.push({pizzaPrice: 5});
            expect(order.totalPrice).toEqual(20);
        });


    });
});