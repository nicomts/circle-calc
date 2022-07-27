import { Circle } from "./Circle";

test('gets area of the circle', () => {
    const circle = new Circle();
    circle.setRadius(5);
    const area = circle.getArea();
    expect(area).toBeCloseTo(78.54);
});