declare class Arrow {
    constructor(attrs: any, type: any);
    match(): boolean;
    _setDefaultPath(type: any, el: any): void;
    _setMarker(r: any, el: any): void;
    update(fill: any): void;
}
export = Arrow;
