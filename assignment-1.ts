{

    function formatString(input: string, toUpper?: boolean): string {
        if (toUpper || toUpper === undefined) {
            return input.toUpperCase();
        }
        return input.toLowerCase();
    }

    // const result = formatString("Hello", false)
    // console.log(result);



    function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
        return items.filter(item => item.rating >= 4);
    }

    const result2 = filterByRating([
        { title: "Book A", rating: 4.5 },
        { title: "Book B", rating: 3.2 },
        { title: "Book C", rating: 5.0 },
        { title: "Book D", rating: 4 }
    ])
    // console.log(result2);



    function concatenateArrays<T>(...arrays: T[][]): T[] {
        return arrays.reduce((acc, array) => acc.concat(array), [] as T[]);
    }
    const result3 = concatenateArrays([1, 2], [3, 4], [5], [6, 7, 8, 9]);
    // console.log(result3);



    class Vehicle {
        private make: string;
        year: number;

        constructor(make: string, year: number) {
            this.make = make;
            this.year = year
        }
        getInfo() {
            console.log(`make: ${this.make}, Year: ${this.year}`)
        }
    }

    class Car extends Vehicle {
        private model: string;

        constructor(make: string, year: number, model: string) {
            super(make, year);
            this.model = model;
        }

        getModel() {
            console.log(`Model: ${this.model}`)
        }
    }

    const myCar = new Car("Toyota", 2020, "Corolla")
    // myCar.getModel();



    function processValue(value: string | number): number {
        if (typeof value === "string") {
            return value.length;
        }
        return value * 2;
    }

    const result4 = processValue("500")
    // console.log(result4);





    interface Product {
        name: string;
        price: number;
    }

    function getMostExpensiveProduct(products: Product[]): Product | null {
        if (products.length === 0) {
            return null;
        }
        return products.reduce((prev, current) => current.price > prev.price ? current : prev);

    }

    const products = [
        { name: "Pen", price: 1000 },
        { name: "Notebook", price: 250 },
        { name: "Bag", price: 50 }
    ];
    const mostExpensiveProduct = getMostExpensiveProduct(products);
    // console.log(mostExpensiveProduct);



    enum Day {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    }

    function getDayType(day: Day): string {
        switch (day) {
            case Day.Saturday:
            case Day.Sunday:
                return "Weekend";
            default:
                return "Weekday";
        }
    }

    const dayType = getDayType(Day.Sunday);
    // console.log(dayType);





    async function squareAsync(n: number): Promise<number> {
        return new Promise((resolve, reject) => {
            if (n < 0) {
                reject(new Error("Negative number not allowed"));
            }
            setTimeout(() => {
                resolve(n * n);
            }, 1000);
        });
    }
    // const result5 = squareAsync(-8).then((result) => {
    //     console.log(result);
    // })


    //
}
