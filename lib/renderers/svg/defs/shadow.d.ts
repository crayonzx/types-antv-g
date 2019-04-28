declare class Shadow {
    constructor(cfg: any);
    match(type: any, cfg: any): boolean;
    update(name: any, value: any): this;
    _parseShadow(config: any, el: any): void;
}
export = Shadow;
