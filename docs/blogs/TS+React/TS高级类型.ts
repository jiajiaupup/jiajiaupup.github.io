// .一、关于类型兼容性
// *1.对象类型 成员多的可以赋值给成员少的
type A = {
  a: number
}
type B = {
  a: number
  b: number
}
const b: B = {
  a: 1,
  b: 1
}
const a: A = b
// 下面这样不行
// const a: A = {
//   a: 1,
//   b: 1
// }

// *2.函数类型 参数少的可以赋值参数多的 返回值只要满足必须类型要求就可
type Fn1 = (a: number, b: number) => void
const f1: Fn1 = (a, b) => a + b
const f2: Fn1 = a => a
const f3: Fn1 = () => {}

// .二、泛型
// *1.基本认知
function f4<Type>(a: Type): void {}
f4(12) // function f4<number>(a: number): void
// 很怪
// function f5<Type>(a: Type): Type {
//   return a
// }
// f5(12) // function f4<12>(a: 12): void

// *2.收缩类型
// 指定更加具体的类型
function f6<Type>(a: Type[]): void {
  console.log(a.length)
}
f6([12])
// 添加泛型约束
type Len = {
  length: number
}
function f7<Type extends Len>(a: Type): void {
  console.log(a.length)
}
f7([12])

function f8<Type extends object, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key]
}
console.log(f8([12], 0))

// 复杂泛型
type Obj<Type> = {
  name?: Type
  allName: (v: Type) => Type[]
}
const obj1: Obj<number> = {
  allName(v) {
    return [v]
  }
}

// .三、泛型工具类型
// *1.Partial<Type>将 Type 的所有属性设为可选
type Prop1 = {
  name: string
  age: number
}
type Prop2 = Partial<Prop1>

// *2.Readonly<Type>将 Type 的所有属性都设为(只读)
type Prop3 = {
  name: string
  age: number
}
type Prop4 = Partial<Readonly<Prop3>>
const obj2: Prop4 = {
  name: '12'
}
// obj2.name = 3 报错

// *3.Pick<Type, Keys>从 Type 中选择一组属性来构造新类型
type Prop5 = {
  name: string
  age: number
  sex: boolean
}
type Prop6 = Partial<Pick<Prop5, 'name' | 'age'>>
const obj3: Prop6 = {
  name: '12'
  // sex: true
}

// *4.ReturnType<typeof function> 获取函数的返回值类型
const add = (a: number): number => a
type AddFnReturnType = ReturnType<typeof add>
