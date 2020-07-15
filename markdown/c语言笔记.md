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
### 2.4 声明变量的4个理由
 1. 把所有的变量放在一处， 方便读者查找和理解程序的用途。
 2. 声明变量会促使你在编写程序之前做一些计划。
 3. 声明变量有助于发现隐藏在程序中的小错误。
 4. 如果事先未声明变量，C程序将无法通过编译。
### 2.5 转义序列   
| 组合    | 意思 |
| :-------: | :--:  |
| \n      | 换行 |
| \a      | 警报 |
| \b      | 退格 |
| \f      | 换页 |
| \r      | 回车 |
| \t      | 水平制表 |
| \v      | 垂直制表 |
| \\      | 反斜杠 |
| \"      | 双引号 |
| \'      | 单引号 |
| \?      | 问号　|
| \0oo    | 八进制 |
| \xhh    | 十六进制 |

### 2.6 占位符
%d 

### 2.7 关键字
|    ISO    | C | 关键字 | |
| :---: | :---: | :---: | :---: | 
| auto | extern | short | while |
| break | float | signed | _Alignas |
| case | for | sizeof | _Alignof |
| char | goto | static | _Atomic |
| const | if | struct | _Bool |
| continue | inline | switch | _Complex |
| default | int | typedef | _Generic |
| do | long | union | _Imaginary |
| double | register | unsigned | _Noreturn |
| else | restrict | void | _Static_assert |
| enum | return | volatile | _Thread_local |

## 第三章 数据和C
### 3.1 示例程序
```
/* platinum.c -- your weight in latinum */
# include <stdio.h>
int main(void){
    float weight; // 你的体重
    float value; /* 相等重量的白金价值 */

    printf("Are you worth your weight in platinum?\n");
    printf("Let's check it out.\n");
    printf("Please enter your weight in pounds: ");

    /* 获取用户的输入 */
    scanf("%f", &weight); // %f 处理浮点值 %.2f 中的.2 用于精确控制输出
    /* 假设白金的价格是每盎司$1700 */
    /* 14.5833 用于把英镑常衡盎司转换为金衡盎司 */
    value = 1700.0 * weight * 14.5833;
    printf("Your weight in platinum is worth $%.2f.\n", value);
    printf("You are easily worth that! If platinum prices drop,\n");
    printf("eat more to maintain your value.\n");

    return 0;
}
```

### 3.2 数据：数据类型关键字
| 最初K&R给出的关键字 | C90标准添加的关键字 | C99标准添加的关键字 |
| :---: | :---: | :---: |
| int | signed | _Bool |
| long | void | _Complex |
| short |  | _Imaginary |
| unsigned |  |  |
| char |  |  |
| float |  |  |
| double |  |  |

int 关键字表示基本的整数型，可以为正整数、负数或零取值范围-32768~32767，long、short、unsigned、signed关键字用于提供基本整数类型的变式。char关键字用于指定字母和其他字符（如，#、￥、%和*），也可以表示较小的整数。float、double和long double表示带小数点的数。_Bool类型表示布尔值（true和false），_Complex和_Imaginary分别表示复数和虚数。计算机储存方式可分为整数型和浮点数类型。

#### 3.2.1 位、字节和字
位、字节和字是描述计算机数据单元或存储单元的术语。这里主要指存储单元。
最小的存储单元是位（bit），可以存储0或1（或者说，位用于设置“开”或“关”）。虽然1位储存的信息有限，但是计算机中位的数量十分庞大，位是计算机内存的基本构建块。
字节（byte）是常用的计算机存储单元，对于几乎所有的机器，1字节均为8位。
字（word）是设计计算机时给定的自然存储单位。对于8位的微型计算机，1个字长只有8位。选择计算机有16位、32位和64位，计算机的字长越大，其数据转义越快，允许的内存访问也更多。
### 3.3 整数和浮点数
1. 整数没有小数部分，浮点数有小数部分
2. 浮点数可以表示的范围比整数大
3. 对于一些算术运算，浮点数损失的精度更多
#### 3.3.1 八进制、十六进制