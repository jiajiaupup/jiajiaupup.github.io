---
title: javascript总结
date: 2021-10-20
tags:
 - 随笔
 - javascript
categories: 
 - javascript
---
# JavaScript

## 1. 什么是Javascipt

JavaScript负责页面中的的行为。

它是一门运行在浏览器端的脚本语言。

### 1.1 JS的编写的位置

1.可以编写到标签的指定属性中

```js
<button onclick="alert('hello');">我是按钮</button>  
<a href="javascript:alert('aaa');">超链接</a>
```

2.可以编写到script标签中

```js
<script type="text/javascript">  
//编写js代码  
</script>
```

3.可以将代码编写到外部的js文件中，然后通过标签将其引入

script标签一旦用于引入外部文件了，就不能在编写代码了，即使编写了浏览器也会忽略 ,如果需要则可以在创建一个新的script标签用于编写内部代码

```js
<script type="text/javascript" src="文件路径"></script>
```



### 1.2 输出语句

```js
alert("要输出的内容");
```

该语句会在浏览器窗口中弹出一个警告框

```js
document.write("要输出的内容");
```

该内容将会被写到body标签中，并在页面中显示

```js
console.log("要输出的内容");
```

该内容会被写到开发者工具的控制台中

### 1.3 基本的语法

js函数声明不需要；分号，但是赋值语句要加；分号

```js
function functionName(arg0,arg1,arg2){  
//函数声明  
}  
var functionName=function(arg0,arg1,arg2){  
//函数表达式  
};(注意分号)
```

注释

单行注释

```js
//注释内容
```

多行注释

```js
/*  
注释内容  
*/
```

JS严格区分大小写

JS中每条语句以分号(;)结尾如果不写分号，浏览器会自动添加，但是会消耗一些系统资源， 而且有些时候，浏览器会加错分号，所以在开发中分号必须写

JS中会自动忽略多个空格和换行，所以我们可以利用空格和换行对代码进行格式化。

### 1.4 字面量和变量

#### 1.4.1字面量

字面量实际上就是一些固定的值，比如 1 2 3 4 true false null NaN “hello”
**字面量都是不可以改变的。**

由于字面量不是很方便使用，所以在JS中很少直接使用字面量

#### 1.4.2变量

变量可以用来保存字面量，并且可以保存任意的字面量

一般都是通过变量来使用字面量，而不直接使用字面量，而且也可以通过变量来对字面量进行一个描述

声明变量

使用var关键字来声明一个变量

```
var a;
```

为变量赋值

```
a = 1;
```

声明和赋值同时进行

```
var a = 456;
```

#### 1.4.3标识符

在JS中所有的可以自主命名的内容，都可以认为是一个标识符，
是标识符就应该遵守标识符的规范。

比如：变量名、函数名、属性名

规范：
1.标识符中可以含有字母、数字、_、$
2.标识符不能以数字开头
3.标识符不能是JS中的关键字和保留字
4.标识符一般采用驼峰命名法
xxxYyyZzz

## 2. 数据类型

### 2.1 基本数据类型与引用数据类型

#### 2.1.1 基本数据类型：6种

Boolean 布尔值

Number 数值

String 字符串

undefined 未定义

null 空值

（Bigint：`ES2020` 新增加，是比 `Number` 类型的整数范围更大。）

Symbol：`ES6` 引入的一种新的原始值，表示独一无二的值，主要为了解决属性名冲突问题。

#### 2.1.2 引用数据类型：1种

Object对象(包括普通Object、Function、Array、Date、RegExp、Math)

#### 2.1.3 typeof运算符

用来检查一个变量的数据类型
语法：typeof 变量
它会返回一个用于描述类型的字符串作为结果**

##### （1）`typeof`的作用？

用于区分数据类型，可以返回7种数据类型：`number、string、boolean、undefined、object、function` ，以及 `ES6` 新增的 `symbol`

##### （2）`typeof` 能正确区分数据类型吗？

不能。对于原始类型，除 `null` 都可以正确判断；对于引用类型，除 `function` 外，都会返回 `"object"`。

##### （3）`typeof` 注意事项

- typeof返回值为 `string` 格式，注意类似这种考题: `typeof(typeof(undefined)) -> "string"`
- typeof未定义的变量不会报错，返回"undefined"
- typeof(null)->"object":遗留已久的bug
- typeof无法区别数组与普通对象：typeof（[]）->"object"
- typeof(NaN) -> "number"

#####      (4)  习题

```js
console.log(typeof(b)); // b未定义 ，返回undefined
console.log(typeof(undefined));  //undefined
console.log(typeof(NaN));   //number NaN 为number类型
console.log(typeof(null));   //object
var a = '123abc'; 
console.log(typeof(+a));  //number // +a 类型转换为NaN
console.log(typeof(!!a));   //boolean
console.log(typeof(a + ""));   //string
console.log(typeof(typeof(null)));  //string // typeof(null) -> "object"; typeof("object") -> "string"
console.log(typeof(typeof({})));  //string
```

#### 2.1.4  string 字符串

JS中的字符串需要使用引号引起来双引号或单引号都行
在字符串中使用\作为转义字符

```js
\'  ==> '  
\"  ==> "  
\n  ==> 换行  
\t  ==> 制表符  
\\  ==> \
```

#### 2.1.5 Number 数值

**JS中所有的整数和浮点数都是Number类型**

最大能表示的值：Number.MAX_VALUE= 1.7976931348623157e+308

特殊的数字：能赋值给变量
Infinity 正无穷 a = Infinity ,能赋值
-Infinity 负无穷
其他进制的数字的表示：
0b 开头表示二进制，但是不是所有的浏览器都支持
0 开头表示八进制
0x 开头表示十六进制

NaN 非法数字（Not A Number）

使用typeof检查一个Number类型的数据时，会返回”number”
（包括NaN 和 Infinity）

##### 面试题：如何判断一个数是否为NaN？

`NaN` 有个非常特殊的特性， `NaN` 与任何值都不相等，包括它自身

```js
NaN === NaN // false
NaN == NaN // false
```

全局函数 `isNaN` 方法：不推荐使用。`MDN` 对它的介绍是：`isNaN` 函数内包含一些非常有趣的规则。

> 但为了避免一些面试官出一些冷门题目，咱们来稍微了解一下 `isNaN` 的有趣机制：会先判断参数是不是 `Number` 类型，如果不是 `Number` 类型会尝试将这个参数转换为 `Number` 类型，之后再去判断是不是 `NaN` 。

```js
// 为什么对象会带来三种不同的结果
// 是不是很有趣
// 具体原因可以参考类型转换篇
console.log(isNaN([])) // false
console.log(isNaN([1])) // false
console.log(isNaN([1, 2])) // true 
console.log(isNaN(null)) // false
console.log(isNaN(undefined)) // true
```

`isNaN` 的结果很大程度上取决于 `Number()` 类型转换的结果，关于 `Number` 的转换结果，后面会专门有一部分来介绍。

- `Number.isNaN` (推荐使用)

与 `isNaN()` 相比，`Number.isNaN()` 不会自行将参数转换成数字，只有在参数是值为 `NaN` 的数字时，才会返回 `true`。

#### 2.1.6Boolean 布尔值

布尔值主要用来进行逻辑判断，布尔值只有两个
true 逻辑的真
false 逻辑的假
使用typeof检查一个布尔值时，会返回”boolean”

#### 2.1.7 Null 空值

空值专门用来表示为空的对象，Null类型的值只有一个
null
使用typeof检查一个Null类型的值时会返回”object”

#### 2.1.8 Undefined 未定义

**如果声明一个变量但是没有为变量赋值此时变量的值就是undefined**

该类型的值只有一个 undefined
使用typeof检查一个Undefined类型的值时，会返回”undefined”

#### 2.1.9引用数据类型

Object 对象

### 2.2  类型转换

类型转换就是指将其他的数据类型，转换为String Number 或 Boolean

#### 2.2.1 转换为String

##### 方式一（强制类型转换）：

**调用被转换数据的toString()方法**
例子：
var a = 123;
a = a.toString();
注意：**这个方法不适用于null和undefined**
由于这两个类型的数据中没有方法，所以调用toString()时会报错

##### 面试题：toString 和 valueOf 方法有什么区别？

1. 基础：这两个方法属于 `Object` 对象，是为了解决 `JavaScript` 值运算与显示的问题。为了更适合自身功能，很多 `JavaScript` 内置对象都重写了这两个方法。
2. `toString()`: 返回当前对象的字符串形式；`valueOf()` : 返回该对象的原始值
3. 各个类型下两个方法返回值情况对比

|     类型     |      valueOf      |        toString         |
| :----------: | :---------------: | :---------------------: |
| Array[1,2,3] | 数组本身[1, 2, 3] |          1,2,3          |
|    Object    |     对象本身      |     [object Object]     |
| Boolean类型  |     Boolean值     |     "true"或"false"     |
|   Function   |     函数本身      | function fnName(){code} |
|    Number    |       数值        |    数值的字符换表示     |
|     Date     |  毫米格式时间戳   |    GMT格式时间字符串    |

​	4、调用优先级

**隐式转换时会自动调用 `toString` 和 `valueOf` 方法**，两者优先级如下：

1. - 强制转化为字符串类型时，优先调用 `toString` 方法
   - 强制转换为数值类型时，优先调用 `valueOf` 方法
   - 使用运算符操作符情况下，`valueOf` 优先级高于 `toStirng`
   - 对象的类型转换见下一问。

##### 方式二（强制类型转换）：

**调用String()函数**
例子：

```js
var a = 123;  
a = String(a);
```

原理：**对于Number Boolean String都会调用他们的toString()方法来将其转换为字符串，对于null值，直接转换为字符串”null”。对于undefined直接转换为字符串”undefined”**

##### 方式三（隐式的类型转换）:

**为任意的数据类型 +””**
例子：

```js
var a = true;  
a = a + "";
```

原理：和String()函数一样

### 2.2.2 转换为Number

##### 方式一（强制类型转换）：

**调用Number()函数**
例子：

```js
var s = "123";  
s = Number(s);
```

转换的情况：

1. 字符串 > 数字
   如果字符串是一个合法的数字，则直接转换为对应的数字
   如果字符串是一个非法的数字，则转换为NaN
   如果是一个空串或纯空格的字符串，则转换为0
2. 布尔值 > 数字
   true转换为1
   false转换为0
3. 空值 > 数字
   null转换为0
4. 未定义 > 数字
   undefined 转换为NaN

##### 方式二（强制类型转换）：

调用parseInt()或parseFloat()
这两个函数专门用来将一个字符串转换为数字的

如果对非String使用parseInt()或parseFloat()，它会**先将其转换为String**然后在操作 parseInt()
可以将**一个字符串中的有效的整数位**提取出来，并转换为Number
例子：

```
var a = "123.456px";  
a = parseInt(a); //123
```

如果需要可以在parseInt()中指定一个第二个参数，来指定进制parseFloat()可以将一个**字符串中的有效的小数位**提取出来，并转换为Number
例子：

```
var a = "123.456px";  
a = parseFloat(a); //123.456
```

##### 方式三（隐式的类型转换）：

使用一元的+来进行隐式的类型转换
例子：

```
var a = "123";  
a = +a;
```

**原理：和Number()函数一样**

### 2.2.3转换为Boolean

##### 方式一（强制类型转换）：

使用Boolean()函数
例子：

```js
var s = "false";  
s = Boolean(s); //true
```

转换的情况
字符串 > 布尔
除了空串其余全是true

数值 > 布尔
除了0和NaN其余的全是true

null、undefined > 布尔
都是false

对象 > 布尔
都是true

##### 方式二（隐式类型转换）：

**为任意的数据类型做两次非运算，即可将其转换为布尔值**
例子：

```js
var a = "hello";  
a = !!a; //true
```



## 3. 基础语法

### 3.1  运算符

运算符也称为操作符
通过运算符可以对一个或多个值进行运算或操作

#### 3.1.1 算数运算符

+ '+' 对两个值进行加法运算并返回结果
+ "-" 对两个值进行减法运算并返回结果
+  * 对两个值进行乘法运算并返回结果
+ / 对两个值进行除法运算并返回结果
+ % 对两个值进行取余运算并返回结果

**除了加法以外，对非Number类型的值进行运算时，都会先转换为Number然后在做运算。**
而做加法运算时，如果是两个字符串进行相加，则会做拼串操作，将两个字符连接为一个字符串。
任何值和字符串做加法，都会先转换为字符串，然后再拼串

##### 3.1.2 一元运算符

一元运算符只需要一个操作数

##### 3.1.2.1 一元的+

就是正号，不会对值产生任何影响，但是可以将一个非数字转换为数字
例子：

```js
var a = true;  
a = +a;
```

##### 3.1.2.2 一元的-

就是负号，可以对一个数字进行符号位取反
例子：

```js
var a = 10;  
a = a;
```

##### 3.1.2.3 自增

自增可以使变量在原值的基础上自增1
自增使用 ++
自增可以使用 前++（++a）后++(a++)
无论是++a 还是 a++都会立即使原变量自增1
不同的是++a和a++的值是不同的，
++a的值是变量的新值（自增后的值）
a++的值是变量的原值（自增前的值）

##### 3.1.2.4 自减

自减可以使变量在原值的基础上自减1
自减使用
自减可以使用 前（a）后(a)
无论是a 还是 a都会立即使原变量自减1
不同的是a和a的值是不同的，
a的值是变量的新值（自减后的值）
a的值是变量的原值（自减前的值）

#### 3.1.3 逻辑运算符

!
非运算可以对一个布尔值进行取反，true变false false边true
当对非布尔值使用!时，会先将其转换为布尔值然后再取反
我们可以利用!来将其他的数据类型转换为布尔值

&&
&&可以对符号两侧的值进行与运算
只有两端的值都为true时，才会返回true。只要有一个false就会返回false。
与是一个短路的与，如果第一个值是false，则不再检查第二个值
对于非布尔值，它会将其转换为布尔值然后做运算，并返回原值
规则：
1.如果第一个值为false，则返回第一个值
2.如果第一个值为true，则返回第二个值

||
||可以对符号两侧的值进行或运算
只有两端都是false时，才会返回false。只要有一个true，就会返回true。
或是一个短路的或，如果第一个值是true，则不再检查第二个值
对于非布尔值，它会将其转换为布尔值然后做运算，并返回原值
规则：
1.如果第一个值为true，则返回第一个值
2.如果第一个值为false，则返回第二个值

#### 3.1.4 赋值运算符

=
可以将符号右侧的值赋值给左侧变量
+=

```js
a += 5 相当于 a = a+5    
var str = "hello";  str += "world";
```

-=

```js
a -= 5  相当于 a = a-5
```

*=

```js
a *= 5 相当于 a = a*5
```

/=

```js
a /= 5 相当于 a = a/5
```

%=

```js
a %= 5 相当于 a = a%5
```

#### 3.1.5 关系运算符

关系运算符用来比较两个值之间的大小关系的
\>
\>=
<
<=
关系运算符的规则和数学中一致，用来比较两个值之间的关系，
如果关系成立则返回true，关系不成立则返回false。
如果比较的两个值是非数值，会将其转换为Number然后再比较。
如果比较的两个值都是字符串，此时会比较字符串的Unicode编码，而不会转换为Number。

#### 3.1.6 相等运算符

相等，判断左右两个值是否相等，如果相等返回true，如果不等返回false
相等会自动对两个值进行类型转换，如果**对不同的类型进行比较，会将其转换为相同的类型然后再比较**，转换后相等它也会返回true，null == undifined

!=
不等，判断左右两个值是否不等，如果不等则返回true，如果相等则返回false
不等也会做自动的类型转换。

**===**
**全等**，判断左右两个值是否全等，它和相等类似，只不过它不会进行自动的类型转换，
如果两个值的类型不同，则直接返回false

!==
**不全等**，和不等类似，但是它不会进行自动的类型转换，如果两个值的类型不同，它会直接返回true

特殊的值：
null和undefined
由于undefined衍生自null，所以**null == undefined** 会返回true。
但是 null === undefined 会返回false。
**NaN**
NaN不与任何值相等，报告它自身 NaN == NaN //false

判断一个值是否是NaN
使用isNaN()函数

#### 3.1.7 三元运算符：

?:
语法：条件表达式?语句1:语句2;
执行流程：
先对条件表达式求值判断，
如果判断结果为true，则执行语句1，并返回执行结果
如果判断结果为false，则执行语句2，并返回执行结果

优先级：
和数学中一样，JS中的运算符也是具有优先级的，
比如 先乘除 后加减 先与 后或
具体的优先级可以参考优先级的表格，在表格中越靠上的优先级越高，
优先级越高的越优先计算，优先级相同的，从左往右计算。
优先级不需要记忆，如果越到拿不准的，使用()来改变优先级。

### 3.2 流程控制语句

程序都是自上向下的顺序执行的，
通过流程控制语句可以改变程序执行的顺序，或者反复的执行某一段的程序。

#### 3.2.1条件分支语句

条件判断语句也称为if语句
语法一：

```js
if(条件表达式){  
	语句...  
}
```



```js
执行流程：  
if语句执行时，会先对条件表达式进行求值判断，  
如果值为true，则执行if后的语句  
如果值为false，则不执行
```



语法二：

```js
if(条件表达式){  
	语句...  
}else{  
	语句...  
}
```



```
执行流程：  
if...else语句执行时，会对条件表达式进行求值判断，  
	如果值为true，则执行if后的语句  
	如果值为false，则执行else后的语句
```

语法三：

```js
if(条件表达式){  
	语句...  
}else if(条件表达式){  
	语句...  
}else if(条件表达式){  
	语句...  
}else if(条件表达式){  
	语句...  
}else{  
	语句...  
}
```



```js
执行流程  
 if...else if...else语句执行时，会自上至下依次对条件表达式进行求值判断，  
	如果判断结果为true，则执行当前if后的语句，执行完成后语句结束。  
	如果判断结果为false，则继续向下判断，直到找到为true的为止。  
	如果所有的条件表达式都是false，则执行else后的语句
```

1.条件分支语句
switch语句
语法:

```js
switch(条件表达式){  
	case 表达式:  
		语句...  
		break;  
	case 表达式:  
		语句...  
		break;  
	case 表达式:  
		语句...  
		break;  
	default:  
		语句...  
		break;  
}
```

执行流程：
switch…case…语句在执行时，会依次将case后的表达式的值和switch后的表达式的值进行全等比较，
如果比较结果为false，则继续向下比较。如果比较结果为true，则从当前case处开始向下执行代码。
如果所有的case判断结果都为false，则从default处开始执行代码。

#### 3.2.2 循环语句

通过循环语句可以反复执行某些语句多次
while循环
语法：

```js
while(条件表达式){  
    语句...  
}
```

复制

执行流程：
while语句在执行时，会先对条件表达式进行求值判断，
如果判断结果为false，则终止循环
如果判断结果为true，则执行循环体
循环体执行完毕，继续对条件表达式进行求值判断，依此类推

do…while循环
语法:

```js
do{  
语句...  
}while(条件表达式)
```



执行流程
do…while在执行时，会先执行do后的循环体，然后在对条件表达式进行判断，
如果判断判断结果为false，则终止循环。
如果判断结果为true，则继续执行循环体，依此类推

和while的区别：
while：先判断后执行
do…while: 先执行后判断
do…while可以确保循环体至少执行一次。

for循环
语法：

```
for(①初始化表达式 ; ②条件表达式 ; ④更新表达式){  
    ③语句...  
}
```



执行流程：
首先执行①初始化表达式，初始化一个变量，
然后对②条件表达式进行求值判断，如果为false则终止循环
如果判断结果为true，则执行③循环体
循环体执行完毕，执行④更新表达式，对变量进行更新。
更新表达式执行完毕重复②

死循环

```js
while(true){  

}  

for(;;){  

}
```

## 4. 对象（Object）

对象是JS中的引用数据类型
**对象是一种复合数据类型，在对象中可以保存多个不同数据类型的属性**
使用typeof检查一个对象时，会返回object

### 4.1 对象的分类

1. 宿主对象（Host Objects）：由JavaScript宿主环境提供的对象，它们的行为完全由宿主环境来决定。目前来讲主要指由浏览器提供的对象,比如 BOM DOM。
2. 内置对象（Build-in Objects）：由JavaScript语言提供的对象。
   - 由ES标准中定义的对象，在任何的ES的实现中都可以使用
     \- 比如：Math String Number Boolean Function Object….

3. 自定义对象 :- 由开发人员自己创建的对象

**创建对象**

方式一：

```js
var obj = new Object();
```

方式二：

```js
var obj = {};
```



**向对象中添加属性**
语法：
对象.属性名 = 属性值;
**对象[“属性名”] = 属性值;** //这种方式能够使用特殊的属性名

**对象的属性名没有任何要求，不需要遵守标识符的规范，但是在开发中，尽量按照标识符的要求去写。**
属性值也可以任意的数据类型。

读取对象中的属性
语法：
对象.属性名
对象[“属性名”] //“属性名”可以使字符串常量，也可以是字符串变量
如果读取一个对象中没有的属性，它不会报错，而是返回一个undefined

**删除对象中的属性**
语法：

```js
delete 对象.属性名  
delete 对象["属性名"]
```

### 4.2 遍历

#### 4.2.1 **使用in检查对象中是否含有指定属性**

语法：”属性名” in 对象
如果在对象中含有该属性，则返回true
如果没有则返回false

```js
循环遍历对象自身的和继承的可枚举属性(不含Symbol属性).  
var obj = {'0':'a','1':'b','2':'c'};  
  
for(var i in obj) {  
     console.log(i,":",obj[i]);  
}
```

#### 4.2.2 **使用对象字面量，在创建对象时直接向对象中添加属性**

语法：

```js
var obj = {  
    属性名:属性值,  
    属性名:属性值,  
    属性名:属性值,  
    属性名:属性值  
}
```

基本数据类型和引用数据类型
基本数据类型
String Number Boolean Null Undefined
引用数据类型
Object
**基本数据类型的数据，变量是直接保存的它的值。**
变量与变量之间是互相独立的，修改一个变量不会影响其他的变量。
**引用数据类型的数据，变量是保存的对象的引用（内存地址）。**
如果多个变量指向的是同一个对象，此时修改一个变量的属性，会影响其他的变量。
比较两个变量时，对于基本数据类型，比较的就是值，
对于引用数据类型比较的是地址，地址相同才相同

## 5. 函数（Function）

### 5.1 什么是函数

**函数也是一个对象，也具有普通对象的功能（能有属性）**
函数中可以封装一些代码，在需要的时候可以去调用函数来执行这些代码
使用typeof检查一个函数时会返回function

创建函数
函数声明

```js
function 函数名([形参1,形参2,...形参N]){  
语句...  
}
```



函数表达式

```js
var 函数名 = function([形参1,形参2,...形参N]){  
语句...  
};
```



调用函数
语法：函数对象([实参1,实参2…实参N]);
fun() sum() alert() Number() parseInt()
当我们调用函数时，函数中封装的代码会按照编写的顺序执行

### 5.2 **立即执行函数**

函数定义完，立即被调用，这种函数叫做立即执行函数
立即执行函数往往只会执行一次

```js
(function(a,b){  
    console.log("a = "+a);  
    console.log("b = "+b);  
})(123,456);
```



遍历对象

```js
for(var v in obj){  
    document.write("property：name ="+v+"value="+obj[v]+"<br/>" );  
}
```



### 5.3 形参和实参

形参：形式参数
定义函数时，可以在()中定义一个或多个形参，形参之间使用,隔开
定义形参就相当于在函数内声明了对应的变量但是并不赋值，
形参会在调用时才赋值。

实参：实际参数
调用函数时，可以在()传递实参，传递的实参会赋值给对应的形参,
调用函数时JS解析器不会检查实参的类型和个数，可以传递任意数据类型的值。
**如果实参的数量大于形参，多余实参将不会赋值，**
**如果实参的数量小于形参，则没有对应实参的形参将会赋值undefined**

**返回值，就是函数执行的结果。**
使用return 来设置函数的返回值。
语法：return 值;
该值就会成为函数的返回值，可以通过一个变量来接收返回值
return后边的代码都不会执行，一旦执行到return语句时，函数将会立刻退出。
return后可以跟任意类型的值，可以是基本数据类型，也可以是一个对象。
**如果return后不跟值，或者是不写return则函数默认返回undefined。**

### 5.4 **break、continue和return**

break
退出循环
continue
跳过当次循环
return
退出函数

**参数，函数的实参也可以是任意的数据类型。**

### 5.5 **方法（method）**

可以将一个函数设置为一个对象的属性，
当一个对象的属性是一个函数时，
我们称这个函数是该对象的方法。
对象.方法名();
函数名()

### 5.6 函数的属性和方法

#### 5.6.1 call()和apply()

call()
apply()
**这两个方法都是函数对象的方法需要通过函数对象来调用**
通过两个方法可以直接调用函数，并且**可以通过第一个实参来指定函数中this**
不同的是call是直接传递函数的实参而apply需要将实参封装到一个数组中传递

#### 5.6.2 **arguments**

arguments和this类似，都是函数中的隐含的参数
arguments是一个类数组元素，它用来封装函数执行过程中的实参
所以即使不定义形参，也可以通过arguments来使用实参
**arguments中有一个属性callee表示当前执行的函数对象**

#### 5.6.3 this（调用函数的那个对象）

this是函数的上下文对象，根据函数的调用方式不同会执向不同的对象
1.以函数的形式调用时，this是window
2.以方法的形式调用时，this是调用方法的对象
3.以构造函数的形式调用时，this是新建的那个对象
4.使用call和apply调用时，this是指定的那个对象
5.在全局作用域中this代表window

### 5.7  作用域

作用域简单来说就是一个变量的作用范围。
在JS中作用域分成两种：

#### 5.7.1.全局作用域

直接在script标签中编写的代码都运行在全局作用域中
**全局作用域在打开页面时创建，在页面关闭时销毁。**
全局作用域中有一个全局对象window，window对象由浏览器提供，
可以在页面中直接使用，它代表的是整个的浏览器的窗口。
**在全局作用域中创建的变量都会作为window对象的属性保存**
在全局作用域中创建的函数都会作为window对象的方法保存
在全局作用域中创建的变量和函数可以在页面的任意位置访问。
在函数作用域中也可以访问到全局作用域的变量。
尽量不要在全局中创建变量

#### 5.7.2 函数作用域

函数作用域是函数执行时创建的作用域，每次调用函数都会创建一个新的函数作用域。
函数作用域在函数执行时创建，在函数执行结束时销毁。
在函数作用域中创建的变量，不能在全局中访问。
当在函数作用域中使用一个变量时，它会先在自身作用域中寻找，
如果找到了则直接使用，如果没有找到则到上一级作用域中寻找，
如果找到了则使用，找不到则继续向上找，一直会

#### 5.7.3 **变量的声明提前**

在全局作用域中，使用**var关键字声明的变量会在所有的代码执行之前被声明，但是不会赋值。**
所以我们可以在变量声明前使用变量。但是不使用var关键字声明的变量不会被声明提前。
在函数作用域中，也具有该特性，使用var关键字声明的变量会在函数所有的代码执行前被声明，
如果没有使用var关键字声明变量，则变量会变成全局变量

#### 5.7.4 **函数的声明提前**

在全局作用域中，使用**函数声明创建的函数（function fun(){}）,会在所有的代码执行之前被创建**，
也就是我们可以在函数声明前去调用函数，但是使用函数表达式(var fun = function(){})创建的函数没有该特性
在函数作用域中，使用函数声明创建的函数，会在所有的函数中的代码执行之前就被创建好了。

### 5.8  this（上下文对象）

我们每次调用函数时，解析器都会将一个上下文对象作为隐含的参数传递进函数。
使用this来引用上下文对象，根据函数的调用形式不同，this的值也不同。

指向当前对象

this的不同的情况：
1.以函数的形式调用时，this是window
2.以方法的形式调用时，this就是调用方法的对象
3.以构造函数的形式调用时，this就是新创建的对象

### 5.9 构造函数

构造函数是专门用来创建对象的函数
**一个构造函数我们也可以称为一个类**
通过一个构造函数创建的对象，我们称该对象时这个构造函数的实例
通过同一个构造函数创建的对象，我们称为一类对象
构造函数就是一个普通的函数，只是他的调用方式不同，
如果直接调用，它就是一个普通函数
如果使用new来调用，则它就是一个构造函数

例子：

```js
function Person(name , age , gender){  
    this.name = name;  
    this.age = age;  
    this.gender = gender;  
    this.sayName = function(){  
        alert(this.name);  
    };  
}
```



构造函数的执行流程：
1.创建一个新的对象
2.将新的对象作为函数的上下文对象（this）
3.执行函数中的代码
4.将新建的对象返回

#### 5.9.1 instanceof

**instanceof 用来检查一个对象是否是一个类的实例**
语法：对象 instanceof 构造函数
如果该对象时构造函数的实例，则返回true，否则返回false
**Object是所有对象的祖先，所以任何对象和Object做instanceof都会返回true**

#### 5.9.2 枚举对象中的属性

##### 1. for…in

语法：

```js
for(var 属性名 in 对象){  
  
}
```

for…in语句的循环体会执行多次，对象中有几个属性就会执行几次，
每次讲一个属性名赋值给我们定义的变量，我们可以通过它来获取对象中的属性。

for in 遍历的是数组的索引

```js
// for in
var obj = {a:1, b:2, c:3}
    
for (let key in obj) {
  console.log(key)
}
// a b c
```

`for in`更适合遍历对象，当然也可以遍历数组，但是会存在一些问题，

比如：

`index`索引为字符串型数字，不能直接进行几何运算

```js
var arr = [1,2,3]
    
for (let index in arr) {
  let res = index + 1
  console.log(res)
}  // 01 11 21
```

##### 2. for...of

`for of`遍历的是数组元素值，而且`for of`遍历的只是数组内的元素，不包括原型属性和索引

```js
//for of
const array1 = ['a', 'b', 'c']
 
for (const val of array1) {
  console.log(val)
}
// a b c
```

##### 3.小结

`for in`遍历的是数组的索引（即键名），而`for of`遍历的是数组元素值

`for in`总是得到对象的`key`或数组、字符串的下标

`for of`总是得到对象的`value`或数组、字符串的值

### 5.10原型（prototype）

创建一个函数以后，**解析器都会默认在函数中添加一个数prototype**
prototype属性指向的是一个对象，这个对象我们称为原型对象。
当函数作为构造函数使用，**它所创建的对象中都会有一个隐含的属性执行该原型对象。**

```js
这个隐含的属性可以通过对象.__proto__来访问。
```

**原型对象就相当于一个公共的区域，凡是通过同一个构造函数创建的对象他们通常都可以访问到相同的原型对象。**
我们可以将对象中共有的属性和方法统一添加到原型对象中，
这样我们只需要添加一次，就可以使所有的对象都可以使用。
当我们去访问对象的一个属性或调用对象的一个方法时，它会先自身中寻找，
如果在自身中找到了，则直接使用。
如果没有找到，则去原型对象中寻找，如果找到了则使用，
**如果没有找到，则去原型的原型中寻找，**依此类推。直到找到Object的原型为止，Object的原型的原型为null，
如果依然没有找到则返回undefined
**hasOwnProperty()**
这个方法可以用来检查**对象自身中**是否含有某个属性
语法：对象.hasOwnProperty(“属性名”)

### 6. input 输入框的事件

从input框获取焦点，输入内容（值），失去焦点整个过程的事件一共有一下的几个：

` onfocus -> 键盘输入 -> onkeydown -> onkeypress -> onkeyup -> oninput -> 失去焦点 ->  onchange -> onblur` 

**==onchange 事件并不是每次输入框值改变的时候触发的，而是在失去焦点时候，并且在 onblur 之前触发；oninput则是改变时时触发==**

```js
<label for="testInput">用户名：</label>
<input type="text" name="username" id="testInput" value="张三" onfocus="handleFocus(event)" />
 
<script>
  //这种方式必须传参数event
  function handleFocus (event) {
    //onfocus事件 value=张三 keyCode=undefined
    console.log('onfocus事件', 'value=' + event.target.value, 'keyCode=' + event.keyCode);
  };
 
  var input = document.getElementById("testInput");
 
  //这种方式可以不写event
  input.onkeydown = function () {
    console.log('onkeydown事件', 'value=' + event.target.value, 'keyCode=' + event.keyCode);
  }
 
  input.onkeypress = function () {
    console.log('onkeypress事件', 'value=' + event.target.value, 'keyCode=' + event.keyCode);
  }
 
  //这里获取到value要加上摁下之后的了
  input.onkeyup = function (event) {
    console.log('onkeyup事件', 'value=' + event.target.value, 'keyCode=' + event.keyCode);
  }
 
  /*
  * 当用户向 <input> 中尝试输入时触发
  * 该事件在 <input> 或 <textarea> 元素的值发生改变时触发。
  * 该事件类似于 onchange 事件。不同之处在于 oninput 事件在元素值发生变化是立即触发， onchange 在元素失去焦点时触发。
  * 另外一点不同是 onchange 事件也可以作用于 <keygen> 和 <select> 元素。
  
  	什么是keygen？
  	作用：规定用于表单的密钥对生成器字段。
	说明：当提交表单时，私钥存储在本地，公钥发送到服务器。
  
  * oninput 事件是 IE 之外的大多数浏览器支持的事件，在 value 改变时触发，实时的，即每增加或删除一个字符就会触发，然而通过 js 改变 value 时，却不会触发。
  * oninput 事件失效情况：a). 当脚本中改变 value 时，不会触发；b).从浏览器的自动下拉提示中选取时，不会触发。
  * */
  input.oninput = function (event) {
    console.log('oninput事件', 'value=' + event.target.value, 'keyCode=' + event.keyCode);
  }
 
  //onchange 事件在内容改变（两次内容有可能还是相等的）且失去焦点时触发。
  input.onchange = function (event) {
    console.log('onchange事件...', 'value=' + event.target.value, 'keyCode=' + event.keyCode);
  };
 
  input.onblur = function (event) {
    console.log('onblur事件', 'value=' + event.target.value, 'keyCode=' + event.keyCode)
  }
 
</script>
```

2、说说这些事件

　　onfocus

　　　　并没有什么特别的，就是当焦点转移到（点击，tab切换） input 框上边的时候触发；

　　onkeydown

　　　　键盘按下的时候触发，但是此时按下的值并没有被输入到 input ，所以，此时的 value 没有值，或者说它的值 只能是之前的旧值

　　　　  另外，此时可以阻止按键的默认事件；

　　 onkeypress

　　　　按键在按下之后，并且是按键松开之前触发的；

　　　　  和 keydown 一样不能获取新的到 value；此时，也可以阻止按键的默认事件；

　　　　  但是这个事件对一下按键的支持不好，一些非输入性质的按键（如；delete, backspare）不支持；（除enter）；

　　oninput

　　　　这个事件很贼，它的触发时机，从上面就可以看到，onpress 之后 onkeyup 之前；

　　　　  此时，已经可以拿到 value，不能拿到keycode，不可以阻止默认事件了 ；

　　　　  关键是这货明明是每次输入框的值变化时候出发的，抢了onchange 的饭碗；

　　　　  另外，这东西是新的，IE9以下不支持，需要使用 onpropertychange；

　　　　  还有这货，仅仅在input， textarea 支持；

　　onkeyup

　　　　  按键在松开之后触发的；

　　　　 能获取新的到 value，keycode；此时，不可以阻止按键的默认事件；

　　onchange

　　　　  你敢说这是你认识的onchange吗？反正我是不敢；在失去焦点之后触发的，明明是 onchange 为什么是在失去焦点后触发的，还偏偏比 onblur 快；

　　　　 能获取新的到 value，不能拿到 keycode；此时，不可以阻止按键的默认事件；

　　`onblur`

　　　　  失去焦点时候触发，但是还是比 onchange 慢了；

　　　　 能获取新的到 value，不能拿到 keycode

### 7. JS字符串方法（28种）

链接：[JavaScript 28个常用字符串方法及使用技巧 - 掘金 (juejin.cn)](https://juejin.cn/post/7010928535053271077#heading-30)



![JS字符串方法.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d56c8218f0154011855b78607c7bd3e8~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp?)

#### 1.（length）获取字符串长度

​	JavaScript中的字符串有一个==length属性，该属性可以用来获取字符串的长度：==

```js
const str = 'hello';
str.length  //5
```

####2.（charAt() | charCodeAt()）获取字符串指定位置的值

charAt( )和charAt( )方法都可以通过索引来获取指定位置的值：

- charAt() 方法获取到的是指定位置的字符；
- charCodeAt()方法获取的是指定位置字符的Unicode值。

**（1）charAt()**

​	==charAt() 方法可以返回指定位置的字符==。其语法如下：

```js
string.charAt(index) 
//index表示字符在字符串中的索引值
const str = 'hello';
str.charAt(1)  // 索引值为1的是：'e',返回结果是字符串的 'e'
```

我们知道，字符串也可也通过索引值来直接获取对应字符串，那它和charAt（）有什么区别呢？下面是例子：

```js
const str = 'hello';
str.charAt(1)  // 输出结果：'e' 
str[1]         // 输出结果：'e' 
str.charAt(5)  // 输出结果：'' 
str[5]         // 输出结果：undefined
```

​	可以看到，当index的取值不在str的长度范围内时，str[index]会返回undefined，而charAt(index)会返回空字符串；除此之外，str[index]不兼容ie6-ie8，charAt(index)可以兼容。

**（2）charCodeAt( )**

`charCodeAt()`：==该方法会返回指定索引位置字符的 Unicode 值，返回值是 0 - 65535 之间的整数，表示给定索引处的 UTF-16 代码单元，如果指定位置没有字符，将返回 **NaN**：==

```javascript
let str = "abcdefg";
console.log(str.charCodeAt(1)); // "b" --> 98
复制代码
```

通过这个方法，可以获取字符串中指定Unicode编码值范围的字符。比如，数字0～9的Unicode编码范围是: 48～57，可以通过这个方法来筛选字符串中的数字，当然如果你更熟悉正则表达式，会更方便。

#### 3.检查字符串是否包含特定序列

这5个方法都可以用来检索一个字符串中是否包含特定的序列。其中前两个方法得到的指定元素的索引值，并且只会返回第一次匹配到的值的位置。后三个方法返回的是布尔值，表示是否匹配到指定的值。

**注意：这5个方法都对大小写敏感！**

#### **（1）indexOf()**

`indexOf()`：==查找某个字符，【**有则返回第一次匹配到的位置**】，否则返回-1，其语法如下：==

```javascript
string.indexOf(searchValue,fromIndex)

//该方法有两个参数：
searchValue：必需，规定需检索的字符串值；
fromIndex：可选的整数参数，规定在字符串中"开始检索的位置"。它的合法取值是 0 到 string.length - 1。如省略该，则从字符串的首字符开始检索。
eg:
let str = 'abcdefgabc'
console.log(str.indexOf('a'));  // 0
console.log(str.indexOf("z"));  // -1 没有找到该字符串
console.log(str.indexOf('c',4))  //9
```

#### （2）lastIndexOf( )

`lastIndexOf()`：==查找某个字符，有则返回 【**最后一次匹配到的位置** 】，否则返回-1==

```js
let str = "abcabc";
console.log(str.lastIndexOf("a"));  // 输出结果：3
console.log(str.lastIndexOf("z"));  // 输出结果：-1
```

该方法和indexOf()类似，只是查找的顺序不一样，indexOf()是正序查找，lastIndexOf()是逆序查找。

#### （3）includes（）

​	`includes()`：==该方法用于判断字符串  【**是否包含指定的子字符串**】  。如果找到匹配的字符串则返回 true，否则返回 false。该方法的语法如下：==

```js
string.includes(searchvalue, start)

//该方法有两个参数：
searchvalue：必需，要查找的字符串；
start：可选，设置从'那个位置开始查找'，默认为 0。

eg:
let str = 'Hello world!';
str.includes('o')  // 输出结果：true
str.includes('z')  // 输出结果：false
str.includes('e', 2)  // 输出结果：false
```

####（4）startsWith()

`startsWith()`：==该方法用于检测字符串【**是否以指定的子字符串开始**】。如果是以指定的子字符串开头返回 true，否则 false。其语法和上面的includes()方法一样。==

```js
let str = 'Hello world!';

str.startsWith('Hello') // 输出结果：true
str.startsWith('Helle') // 输出结果：false
str.startsWith('wo', 6) // 输出结果：true
```

####（5）endsWith()

`endsWith()`：==该方法用来判断当前字符串**【是否是以指定的子字符串结尾**】。如果传入的子字符串在搜索字符串的末尾则返回 true，否则将返回 false。其语法如下：==

```javascript
string.endsWith(searchvalue, length)
该方法有两个参数：

- searchvalue：必需，要搜索的子字符串；
- length： 设置字符串的长度，默认值为原始字符串长度 string.length。
```

```javascript
let str = 'Hello world!';

str.endsWith('!')       // 输出结果：true
str.endsWith('llo')     // 输出结果：false
str.endsWith('llo', 4)  // 输出结果:false
str.endsWith('llo', 5)  // 输出结果：true
'可以看到，当第二个参数设置为5时，就会从字符串的前5个字符(不包含第五5个)中进行检索，所以会返回true。'
```

#### 4. (concat)连接多个字符串

`concat( )`==方法**【用于连接两个或多个字符串】**。该方法不会改变原有字符串，回返回连接两个或多个字符串的新字符串。其语法如下：==

```js
string.concat(string1, string2, ..., stringX)
```

其中参数 string1, string2, ..., stringX 是必须的，他们将被连接为一个字符串的一个或多个字符串对象

```js
let str = "abc";
console.log(str.concat("efg"));          //输出结果："abcefg"
console.log(str.concat("efg","hijk")); //输出结果："abcefghijk"
```

​	虽然concat()方法是专门用来拼接字符串的，但是在开发中使用最多的还是加操作符+，因为其更加简单。

####5. （split）字符串分割成数组

split() 方法用于把一个字符串分割成字符串数组。该方法不会改变原始字符串。其语法如下：

```js
string.split(separator,limit)
```

该方法有两个参数：

separator：必需。字符串或正则表达式，从该参数指定的地方分割string

limit：可选。该参数可指定返回的数组的最大长度。如果设置了该参数，返回的子串不会多于这个参数指定的数组。如果没有设置该参数，整个字符串都会被分割，不考虑它的长度。

```js
let str = "abcdef";
str.split("c");    // 输出结果：["ab", "def"]
str.split("", 4)   // 输出结果：['a', 'b', 'c', 'd'] 
```





### 8. **高阶函数**

定义：`高阶函数`英文叫 `Higher-order function`。高阶函数是对其他函数进行操作的函数，操作可以是将它们作为参数，或者返回它们。简单总结为高阶函数是`一个接收函数作为参数`或者将`函数作为返回输出`的函数。

####8.1 Array.prototype.map

`map()`(映射)方法最后生成一个新数组，不改变原始数组的值。其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。

```js
[].map(function(currentValue, index, array) {
    // ...
});
```

传递给 `map` 的回调函数（`callback`）接受三个参数，分别是`currentValue`——正在遍历的元素、`index`（可选）——元素索引、array（可选）——原数组本身，除了 `callback` 之外还可以接受 this 值（可选），用于执行 `callback` 函数时使用的this 值。

==**不使用高阶函数**==

```js
//没用map方法写的 求1-4的和
const arr1 = [0,1,2,3,4];
const arr2 = [];
for(let i = 0 ; i < arr1.length ; i++ ){
    arr2.push(arr[i]*2)
}

console.log( arr2 ); //[0,2,4,6,8]
console.log( arr ); //[0,1,2,3,4]
```

==**使用高阶函数**==

```js
const arr1 = [0,1,2,3,4];
const arr2 = arr1.map(item => item*2);

consolo.log(arr2) //[0,2,4,6,8]
consolo.log(arr1) //[0,1,2,3,4,6,]
```











**==用map 没有initialValue值的时候==**

```js
const arr = [0,1,2,3,4];
let sum = arr.reduce((accumulator, currentValue, currentIndex, array) => {
  return accumulator + currentValue;
},0); //initalValue为0的时候 里面的回调函数会执行5次，如果没有initialValue的时候，回调函数只用执行4次，因为把第一个参数作为初始值进行运算

console.log( sum );
// 10
console.log( arr );
// [0, 1, 2, 3, 4]
```

####8.2 Array.prototype.filter

`filter`(过滤，筛选) 方法创建一个新数组,原始数组不发生改变。



```js
const arr1 = [1,2,1,2,3,5,4,5,3,4,4,4,4]
const arr2 = []
for(var i=0;i>)
```













