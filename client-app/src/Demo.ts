let data = 42;
//let data: number | string;
//let data: any;

export interface ICar{
    color: string;
    model: string;
    topSpeed?: number
}

const car1 : ICar= {
    color: 'blue',
    model: 'BMW'
}

const car2 : ICar= {
    color: 'red',
    model: 'Mercedes',
    topSpeed: 100
}

/*
const multiply = (x: number, y: number) : void => {
    return (x*y).toString();
}
*/

const multiply = (x: number, y: number) : string => {
    return (x*y).toString();
}

export const cars = [car1, car2];