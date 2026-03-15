/**
 * instanceをオーバーライドするプロキシを作る
 * クラスの継承ができない場合にインスタンスのメソッドやプロパティをオーバーライドする為の関数
 *
 * @param instance
 * @param overrides
 * @returns
 */
export default function overrideInstance<
  I extends Record<PropertyKey, any>,
  O extends Record<PropertyKey, (target: I, prop: any, receiver: any) => any>,
>(
  instance: I,
  overrides: O = {} as O,
): I & { [K in keyof O]: ReturnType<O[K]> } {
  return new Proxy(instance, {
    get: (target, property, receiver) => {
      if (property in overrides) {
        return overrides[property as keyof O](target, property, receiver);
      }
      return Reflect.get(target, property, receiver);
    },
  }) as any;
}
