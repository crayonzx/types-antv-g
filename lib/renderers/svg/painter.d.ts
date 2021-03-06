import Defs = require('./defs');
declare class Painter {
    type: 'svg';
    canvas: HTMLElement;
    context: Defs;
    toDraw: boolean;
    constructor(dom: any);
    draw(model: any): void;
    drawSync(model: any): void;
    _drawGroup(model: any, index: any): void;
    _drawChildren(parent: any): void;
    _drawShape(model: any, index: any): void;
    _updateShape(model: any): void;
    _setAttribute(model: any, name: any, value: any): void;
    _createDom(model: any, index: any): any;
    _assembleMarker(attrs: any): string;
    _assembleRect(attrs: any): string;
    _formatPath(value: any): any;
    _setTransform(model: any): void;
    _setImage(model: any, img: any): void;
    _updateFan(model: any): void;
    _updateText(model: any): void;
    _setFont(model: any): void;
    _setText(model: any, text: any): void;
    _setClip(model: any, value: any): void;
    _setColor(model: any, name: any, value: any): void;
    _setShadow(model: any): void;
}
export = Painter;
