// Type: TypeScript
/**
 * @version 1.0.0
 * @history : 2024-09-06 14:24
 */

/**
 * TypeScriptでプロパティの値の末尾が"99"だった場合はfalseを返す
 */

// 以下素材
// public static HOGE_1:string="1099"
// public static HOGE_2:string="1199"
// public static FOGE_1:string="2099"
// public static FOGE_2:string="2199"

class Example {
  public static HOGE_1: string = "1099";
  public static HOGE_2: string = "1199";
  public static FOGE_1: string = "2099";
  public static FOGE_2: string = "2199";

  // 末尾が "99" であるかをチェックする関数
  public static isEndingWith99(value: string): boolean {
    return value.endsWith("99");
  }

  // すべてのプロパティをチェックする関数
  public static checkProperties(): boolean {
    const properties = [
      Example.HOGE_1,
      Example.HOGE_2,
      Example.FOGE_1,
      Example.FOGE_2,
    ];

    for (const prop of properties) {
      if (Example.isEndingWith99(prop)) {
        return false; // 末尾が "99" である場合は false を返す
      }
    }

    return true; // すべてのプロパティが "99" で終わっていない場合は true を返す
  }
}

// 使用例
console.log(Example.checkProperties()); // 結果: false
