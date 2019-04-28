declare const Renderers: {
    canvas: typeof import('./canvas');
    svg: typeof import('./svg');
};
export = Renderers;
