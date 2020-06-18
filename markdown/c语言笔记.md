# c语言笔记
## 第一章 初始C语言
### 1.1 C语言的起源
  1972年，贝尔实验室 丹尼斯·里奇（Dennis Ritch）和肯·汤普逊（Ken Thompson） 开发UNIX操作系统时设计了C语言。里奇设计的C语言是在B语言（汤普逊发明）的基础上进行设计。
  #### 1.2 选择C语言的理由
  ##### 1.2.1 设计特性
  ##### 1.2.2 高效性
  ##### 1.2.3 可移植性
  ##### 1.2.4 强大而灵活
  ##### 1.2.5 面向程序员
  ##### 1.2.6 缺点
  C语言使用指针
  #### 1.3 C语言的应用范围
  UNIX操作系统、计算机游戏、嵌入式系统、机器人工厂、电影、PC应用、计算机语言、卢卡斯公司
  #### 1.4 使用C语言的七个步骤
  1、定义程序的目标
  2、设计程序
  3、编写代码
  4、编译
  5、运行程序
  6、测试和调试程序
  7、维护和修改程序

  C源代码示例
```
    #include <stdio.h>
    int main(void){
        int dogs;
        
        printf("How many dogs do you have?/n");
        scanf("%d", &dogs);
        printf("So you have %d dog(s)!/n", dogs);

        return 0;
    }
```
    
## 第二章 C语言概述
### 2.1 简单的C程序示例
```
/* 一个简单的C程序 */
#include <stdio.h>  // 包含另一个文件
int main(void) {
    int num;  /* 定义一个名为num的变量 */ // 声明
    num = 1; /* 为num赋一个值 */  // 赋值表达式语句

    printf("I am a simple "); /* 使用printf()函数 */  // 调用一个函数
    printf("computer.\n");
    printf("My favorite number is %d because it is first.\n", num);

    return 1;
}  
```
### 2.2 C程序解释
```
#include  预处理器指令
int main(void)  main()总是第1个被调用的函数
function a()   语句    函数是C程序的构造块
```
#### C语言（包含：关键字、标识符、运算符、数据）中的6种语句
1. 标点语句
2. 复合语句
3. 表达式语句
4. 选择语句
5. 迭代语句
6. 跳转语句

### 2.3 命名  可以使用小写字母、大写字母、数字和下划线(_)命名  名称第1个字符必须是字符或下划线，不能是数字




