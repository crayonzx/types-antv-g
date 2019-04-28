declare class Painter {
    type: 'canvas';
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    toDraw: boolean;
    constructor(dom: any);
    beforeDraw(): void;
    draw(model: any): void;
    drawSync(model: any): void;
    _drawGroup(group: any): void;
    _drawShape(shape: any): void;
    setContext(shape: any): void;
    restoreContext(): void;
    resetContext(shape: any): void;
}
export = Painter;
