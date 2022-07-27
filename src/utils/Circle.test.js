import { Circle } from "./Circle";

test('gets area of the circle', () => {
    const circle = new Circle();
    circle.setRadius(5);
    const area = circle.getArea();
    expect(area).toBeCloseTo(78.54);
});

test('gets diameter of the circle', () => {
    const circle = new Circle();
    circle.setRadius(7);
    const diameter = circle.getDiameter();
    expect(diameter).toEqual(14);
});

