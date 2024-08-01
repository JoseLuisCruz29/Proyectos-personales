function pendiente(coord1: {x: number , y: number}, coord2: {x: number ,y:number}): number {
    const x1 = coord1.x;
    const y1 = coord1.y;
    const x2 = coord2.x;
    const y2 = coord2.y;    

    const m = (y2 - y1) / (x1 - x2);

    return m;
}
const coord1 = { x: 2, y: 6};
const coord2 = { x: 5, y: 1};
const m = pendiente(coord1,coord2);
console.log(`La pendiente es: ${m}`)