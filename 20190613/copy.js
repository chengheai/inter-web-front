// 简述深拷贝与浅拷贝的区别， 分别在什么场景使用

深拷贝会创建一个新的内存空间，拷贝的值是一样的，但是内存地址不一样。
浅拷贝只是拷贝指向原来对象的地址，使原对象的引用计数+1

// 简述 页面输入URL到加载完成过程中经历了哪些步骤
// 在这些过程中哪些步骤可以进行性能优化

一般会经历以下几个过程：

1、首先，在浏览器地址栏中输入url

2、浏览器先查看浏览器缓存-系统缓存-路由器缓存，如果缓存中有，会直接在屏幕中显示页面内容。若没有，则跳到第三步操作。

3、在发送http请求前，需要域名解析(DNS解析)，解析获取相应的IP地址。

4、浏览器向服务器发起tcp连接，与浏览器建立tcp三次握手。

5、握手成功后，浏览器向服务器发送http请求，请求数据包。

6、服务器处理收到的请求，将数据返回至浏览器

7、浏览器收到HTTP响应

8、读取页面内容，浏览器渲染，解析html源码

9、生成Dom树、解析css样式、js交互

10、客户端和服务器交互

11、ajax查询

 

其中，步骤2的具体过程是：

浏览器缓存：浏览器会记录DNS一段时间，因此，只是第一个地方解析DNS请求；
操作系统缓存：如果在浏览器缓存中不包含这个记录，则会使系统调用操作系统，获取操作系统的记录(保存最近的DNS查询缓存)；
路由器缓存：如果上述两个步骤均不能成功获取DNS记录，继续搜索路由器缓存；
ISP缓存：若上述均失败，继续向ISP搜索。


// 简述js继承的几种方法