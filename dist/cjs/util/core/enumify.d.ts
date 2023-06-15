export function enumKeyOrNull(input: any): any;
export function enumEntryOrNull(Enum: any, key: any): any;
export default Enumify;
/**
 * This is a copy of the `enumify` package: https://github.com/rauschma/enumify
 * We are porting it to avoid webpack issues caused by mixing module types
 */
declare class Enumify {
    static closeEnum(): void;
    /** Use case: parsing enum values */
    static enumValueOf(str: any): any;
    static [Symbol.iterator](): IterableIterator<any>;
    toString(): string;
}
//# sourceMappingURL=enumify.d.ts.map