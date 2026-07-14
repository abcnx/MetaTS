/** Generic key-value pair */
export interface KeyValue<K extends string | number | symbol, V> {
  key: K;
  value: V;
}

/** Deep partial type — makes all nested properties optional */
export type DeepPartial<T> = T extends object
  ? { [P in keyof T]?: DeepPartial<T[P]> }
  : T;

/** Non-nullable type guard helper */
export type NonNull<T> = T extends null | undefined ? never : T;

/** A function that takes no arguments and returns void */
export type VoidCallback = () => void;

/** A function that takes a single argument and returns void */
export type Consumer<T> = (value: T) => void;

/** A function that takes no arguments and returns a value */
export type Supplier<T> = () => T;

/** A function that takes a single argument and returns a value */
export type Function<T, R> = (value: T) => R;

/** A promise or a synchronous value */
export type Awaitable<T> = T | Promise<T>;

/** A constructor type */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Constructor<T = unknown> = new (...args: any[]) => T;
