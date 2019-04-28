declare const Shape1: typeof import('../core/shape') & {
    Arc: typeof import('./arc');
    Circle: typeof import('./circle');
    Dom: typeof import('./dom');
    Ellipse: typeof import('./ellipse');
    Fan: typeof import('./fan');
    Image: typeof import('./image');
    Line: typeof import('./line');
    Marker: typeof import('./marker');
    Path: typeof import('./path');
    Polygon: typeof import('./polygon');
    Polyline: typeof import('./polyline');
    Rect: typeof import('./rect');
    Text: typeof import('./text');
};
export = Shape1;
