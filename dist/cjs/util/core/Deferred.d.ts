export default Deferred;
declare class Deferred {
    p: Promise<any>;
    resolver: (value: any) => void;
    rejector: (reason?: any) => void;
    state(): string;
    resolve(...args: any[]): this;
    reject(...args: any[]): this;
    promise(): Promise<any>;
    done(cb: any): this;
    then(...args: any[]): this;
    fail(...args: any[]): this;
    catch(...args: any[]): this;
    always(...args: any[]): this;
    finally(...args: any[]): this;
    #private;
}
//# sourceMappingURL=Deferred.d.ts.map