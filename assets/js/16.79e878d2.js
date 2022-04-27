(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{609:function(t,s,a){"use strict";a.r(s);var n=a(9),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"_1、什么是eventloop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、什么是eventloop"}},[t._v("#")]),t._v(" 1、什么是EventLoop？")]),t._v(" "),a("ul",[a("li",[t._v("EvnetLoop是js的运行机制，也就是"),a("code",[t._v("事件循环")]),t._v("，我个人的理解就是"),a("code",[t._v("为了使单线程的js在执行的时候不发生阻塞")]),t._v("。")]),t._v(" "),a("li",[t._v("EventLoop有两种："),a("code",[t._v("浏览器的EventLoop")]),t._v("和"),a("code",[t._v("nodeJs的EventLoop")]),t._v("，这篇文章主要记录"),a("code",[t._v("浏览器的EventLoop")]),t._v("的学习。")])]),t._v(" "),a("h2",{attrs:{id:"_2、学习eventloop前需要知道的一些知识"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、学习eventloop前需要知道的一些知识"}},[t._v("#")]),t._v(" 2、学习EventLoop前需要知道的一些知识")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("同步任务")]),t._v("：在主线程上排队执行的任务。只有前一个任务执行完毕，才能执行后一个任务。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("异步任务")]),t._v("：不进入主线程、而进入任务队列的任务。只有引擎认为某个异步任务可以执行了(比如 Ajax 操作从服务器得到了结果)，该任务(采用回调函数的形式)才会进入主线程执行。排在异步任务后面的代码，不用等待异步任务结束会马上运行，也就是说，异步任务不具有“堵塞”效应。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("调用栈/执行栈（Stack）")]),t._v("：执行栈会将当前的执行上下文(通俗一点可以理解成当前的函数调用)压入到执行栈当中，执行完成后就会把它弹出去。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("任务队列(Queue)")]),t._v("：任务队列通俗的讲就是存放异步任务的队列，js的任务队列有两种，"),a("code",[t._v("宏任务队列（MacroTask queue）")]),t._v("跟"),a("code",[t._v("微任务队列（MicroTask queue）")])]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("宏任务(MacroTask)")]),t._v("："),a("code",[t._v("script")]),t._v("全部代码、"),a("code",[t._v("setTimeout")]),t._v("、"),a("code",[t._v("setInterval")]),t._v("、"),a("code",[t._v("UI渲染")]),t._v("...")])]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("微任务（MicroTask）")]),t._v("："),a("code",[t._v("Promise")]),t._v("、"),a("code",[t._v("Process.nextTick")]),t._v("、"),a("code",[t._v("Object.observe(废弃)")]),t._v("、"),a("code",[t._v("MutationObserver")]),t._v("...")])])])]),t._v(" "),a("h2",{attrs:{id:"_3、eventloop-事件循环-执行过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、eventloop-事件循环-执行过程"}},[t._v("#")]),t._v(" 3、EventLoop（事件循环）执行过程")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9da2fa26db4a42828718f2a345ab257d~tplv-k3u1fbpfcp-watermark.image?",alt:"image.png"}})]),t._v(" "),a("ul",[a("li",[t._v("具体过程可以理解为：")])]),t._v(" "),a("blockquote",[a("ul",[a("li",[t._v("1、主线程执行全局同步代码，该过程可能产生一系列异步任务，这些异步任务分别进入对应的任务队列（"),a("code",[t._v("宏任务队列（MacroTask queue）")]),t._v("跟"),a("code",[t._v("微任务队列（MicroTask queue）")]),t._v("）")]),t._v(" "),a("li",[t._v("2、同步代码执行完毕，"),a("code",[t._v("调用栈（Stack）")]),t._v("清空")]),t._v(" "),a("li",[t._v("3、检查是否存在"),a("code",[t._v("微任务(MicroTask)")]),t._v("，如果存在则按顺序执行，直至清空"),a("code",[t._v("微任务队列(MicroTask Queue)")]),t._v("，如果在执行过程中产生了新的"),a("code",[t._v("微任务（MicroTask）")]),t._v("，则把该任务放入队列的队尾，在当前周期执行")]),t._v(" "),a("li",[t._v("4、"),a("code",[t._v("微任务（MicroTask）")]),t._v("执行完毕，"),a("code",[t._v("微任务队列（MicroTask queue）")]),t._v("为空，"),a("code",[t._v("调用栈（Stack）")]),t._v("清空")]),t._v(" "),a("li",[t._v("5、取出"),a("code",[t._v("宏任务队列（MacroTask queue）")]),t._v("中位于队首的任务，放入"),a("code",[t._v("调用栈（Stack）")]),t._v("中执行")]),t._v(" "),a("li",[t._v("6、当前"),a("code",[t._v("宏任务(MacroTask)")]),t._v("执行完毕，"),a("code",[t._v("调用栈（Stack）")]),t._v("清空")]),t._v(" "),a("li",[t._v("重复3-6步骤...直至"),a("code",[t._v("宏任务队列（MacroTask queue）")]),t._v("中的任务全部执行完毕")])])]),t._v(" "),a("h2",{attrs:{id:"_4、概念性的东西都说完了-做几个题目校验一下学习成果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、概念性的东西都说完了-做几个题目校验一下学习成果"}},[t._v("#")]),t._v(" 4、概念性的东西都说完了，做几个题目校验一下学习成果")]),t._v(" "),a("h3",{attrs:{id:"第一题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第一题"}},[t._v("#")]),t._v(" 第一题")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'javaScript start'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'setTimeout1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'promise1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'promise2'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'promise3'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'promise4'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'setTimeout2'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'javaScript end'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("这里的结果是什么呢？不妨结合上面简述的知识看一下")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("javaScript start\npromise1\njavaScript end\npromise2\nsetTimeout1\npromise3\nsetTimeout2\npromise4\n")])])]),a("p",[t._v("相信这样简单的题目，对于正在看文章的你来说是轻而易举的")]),t._v(" "),a("p",[t._v("我们来分析一下具体的流程：")]),t._v(" "),a("ul",[a("li",[t._v("1.执行全局同步代码")]),t._v(" "),a("li",[a("ul",[a("li",[t._v("顺序执行输出")])])]),t._v(" "),a("li",[a("ul",[a("li",[t._v("javaScript start")])])]),t._v(" "),a("li",[a("ul",[a("li",[t._v("promise1")])])]),t._v(" "),a("li",[a("ul",[a("li",[t._v("javaScript end")])])]),t._v(" "),a("li",[a("ul",[a("li",[t._v("把promise的回调函数放入微任务队列，等待执行")])])]),t._v(" "),a("li",[a("ul",[a("li",[t._v("把setTimeout放入宏任务队列，等待执行")])])]),t._v(" "),a("li",[t._v("2.存在微任务队列，执行微任务")]),t._v(" "),a("li",[a("ul",[a("li",[t._v("顺序执行微任务输出")])])]),t._v(" "),a("li",[a("ul",[a("li",[t._v("promise2")])])]),t._v(" "),a("li",[t._v("3.把宏任务队列的第一个宏任务（即第一个定时器）放入调用栈执行")]),t._v(" "),a("li",[a("ul",[a("li",[t._v("输出")])])]),t._v(" "),a("li",[a("ul",[a("li",[t._v("setTimeout1")])])]),t._v(" "),a("li",[a("ul",[a("li",[t._v("因为当前宏任务没有产生微任务，所以把下一个宏任务（第二个定时器）放入调用栈执行")])])]),t._v(" "),a("li",[t._v("4.第二个宏任务执行")]),t._v(" "),a("li",[a("ul",[a("li",[t._v("顺序执行输出")])])]),t._v(" "),a("li",[a("ul",[a("li",[t._v("promise3")])])]),t._v(" "),a("li",[a("ul",[a("li",[t._v("setTimeout2")])])]),t._v(" "),a("li",[a("ul",[a("li",[t._v("把promise的回调放入微任务队列，等待执行")])])]),t._v(" "),a("li",[a("ul",[a("li",[t._v("执行微任务")])])]),t._v(" "),a("li",[a("ul",[a("li",[t._v("输出")])])]),t._v(" "),a("li",[a("ul",[a("li",[t._v("promise4")])])])]),t._v(" "),a("h3",{attrs:{id:"第二题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第二题"}},[t._v("#")]),t._v(" 第二题")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'javaScript start'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fn1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'setTimeout1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fn2'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'setTimeout2'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'promise1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'promise2'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'javaScript end'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("这里结果又会是什么呢？")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("javaScript start\npromise1\njavaScript end\nfn1\nfn2\npromise2\nsetTimeout2\nsetTimeout1\n")])])]),a("p",[t._v("相信大家都答对了，这里的关键在前面已经提过：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("在执行微任务队列中任务的时候，如果又产生了微任务，那么会继续添加到队列的末尾，也会在这个周期执行，直到微任务队列为空。")]),t._v("\n还有一个关键点是"),a("code",[t._v("async/await")]),t._v("：\\")]),t._v(" "),a("li",[a("code",[t._v("async/await")]),t._v(" 在底层转换成了 "),a("code",[t._v("promise")]),t._v(" 和 "),a("code",[t._v("then")]),t._v(" 回调函数，是 "),a("code",[t._v("promise")]),t._v(" 的语法糖。\\")]),t._v(" "),a("li",[t._v("在使用 "),a("code",[t._v("await")]),t._v("的时候, 解释器都会先创建一个 "),a("code",[t._v("promise")]),t._v(" 对象，然后把剩下的 "),a("code",[t._v("async")]),t._v(" 函数中的操作放到 "),a("code",[t._v("then")]),t._v(" 回调函数中。")])]),t._v(" "),a("h2",{attrs:{id:"参考链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[t._v("#")]),t._v(" 参考链接")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://juejin.cn/post/6844903670291628046#heading-10",target:"_blank",rel:"noopener noreferrer"}},[t._v("带你彻底弄懂EventLoop"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://juejin.cn/post/7008844477314334734#heading-4",target:"_blank",rel:"noopener noreferrer"}},[t._v("# 看完一定懂的 Event Loop"),a("OutboundLink")],1)]),t._v(" "),a("blockquote",[a("p",[t._v("博客主要记录一些学习的文章，如有不足，望大家指出，谢谢。")])])])}),[],!1,null,null,null);s.default=e.exports}}]);