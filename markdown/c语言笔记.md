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
 1. 十六进制值由0x或0X前缀
 2. 八进制值由0前缀
以十进制显示数字，使用%d；以八进制显示数字，使用%o；以十六进制显示数字，使用%x；要显示各进制数的前缀0、0x、0X，必须分别使用%#o、%#x、%#X。
```
#include <stdio.h>
/* 以十进制、八进制、十六进制数100 */
int main(void){
    int x = 100;

    printf("dec = %d; octal = %o; hex = %x\n", x, x, x);
    printf("dec = %d; octal = %#o; hex = %#x\n", x, x, x);
    return 0;
}
```
#### 3.3.2 其他整数型
1. short int 类型（或者简写为 short ）占用的存储空间可能比 int 类型少，常用于较小数值的场合节省空间。与 int 类似， short 是有符号类型。
2. long int 或 long 占用的存储空间可能比int多，适用于较大数值的场合。与 int 类似，long 是有符号类型。
3. long long int 或 long long （C99标准加入）占用的存储空间可能比 long 多，适用于更大数值的场合。该类型至少占64位。与 int 类似，long long 是有符号类型。
4. unsigned int 或 unsigned 只用于非负值的场合，这种类型与有符号类型表示的范围不同，用于表示正负号的位现在用于表示另一个二进制位，所以无符号整形可以表示更大的数。
5. 在 C90 标准中，添加了 unsigned long int 或 unsigned long 或 unsigned short int 或 unsigned short 类型。C99 标准又添加了 unsigned long long int 或 unsigned long long  。
6. 在任何有符号类型前面添加关键字 signed ，可强调使用有符号类型的意图。例如 short 、 short int 、 signed short 、 signed short int 都表示同一种类型。
C语言只规定了 short 占用的存储空间不能多于 int ， long 占用的存储空间不能少于 int 。
#### 3.3.3 int 类型选择
1. 首先，考虑 unsigned 类型。这种类型的数常用于计数，因为计数不用负数。而且 unsigned 类型可以表示更大的正数。
2. 超出 int 类型的取值范围，且在 long 类型的取值范围内时，使用 long 类型。对于哪些 long 占用的空间比 int 大的系统，使用 long 类型会减慢预算速度。如非必要，请不要使用 long 类型。如果在 long 类型和 int 类型占用空间相同的机器编写代码，当确实需要32位的整数时，应使用 long 类型而不是 int 类型，以便把程序移植到16位机后仍然可以正常工作。
3. 在 int 设置为32位的系统中要使用16位的值，应使用 short 类型以节省存储空间。使用 short 类型另一个原因是，计算机中某些组件使用的硬件寄存器是16位。
##### 3.3.3.1 long 常量和 long long 常量
1. 超出 int 类型能表示的范围，编译器会将其视为 long int 类型
2. 数字超出 long 可表示的最大值，编译器则将其视为 unsigned long 类型。如果还不够大，编译器则将其视为 long long 或 unsigned long long 类型（前提是编译器能识别这些类型）
3. 八进制和十六进制常量被视为 int 类型。如果值太大，编译器会一次尝试使用 unsigned int（ %u 表示其值） 、 long 、 unsigned long 、 long long 、 unsigned long long 类型
4. 要把一个较小的常量作为 long 类型对待，可以在值得末尾加上 l（小写L）或 L 后缀，使用 L 更好。
5. 在 int 位16位、 long 为32位的系统中，会把7作为16位储存，把7L作为32储存。l或L后缀也可用于八进制和十六进制整数。
```
/*整数溢出*/
#include <stdio.h>
int main(void)
{
    int i = 2147483647;
    unsigned int j = 4294967295;
    printf("%d %d %d\n", i, i + 1, i + 2);
    printf("%u %u %u\n", j, j + 1, j + 2);
    return 0;
}
```
6. 超过最大值时，unsigned int 类型的变量从0开始，int 类型的变量则从 -2147483648 开始。
7. 溢出行为是未定义的行为，C标准并未定义有符号类型的溢出规则。
##### 3.3.3.2 打印short、 long、 long long 和 unsigned 类型
1. 打印 unsigned int 类型的值，使用 %u 转换说明，打印 long 类型的值，使用 %ld 转换说明。如果系统中 int 和 long 的大小相同，使用 %d 就行。这样的程序被移植到到其他系统（int 和 long 类型的大小不同）中会无法正常工作。在 x 和 o 前面可以使用 l 前缀， %lx 表示以十六进制格式打印 long 类型整数， %lo 表示以八进制格式打印 long 类型整数。虽然C允许使用大写或小写的常量后缀，但是在转换说明中只能使用小写。
2. 对于 short 类型，可以使用 h 前缀。 %hd 表示以十进制显示 short 类型的整数， %ho 表示以八进制显示 short 类型的整数。h 和 l 前缀都可以和 u 一起使用，用于表示无符号类型。 %lu 表示打印 unsigned long 类型的值。
```
// 更多printf()的特性
#include <stdio.h>
int main(void)
{
    unsigned int un = 3000000000; // int 为32位和short为16位系统
    short end = 200;
    long big = 65537;
    long long verybig = 12345678908642;

    printf("un = %u and not %d\n", un, un);
    printf("end = %hd and %d\n", end, end);
    printf("big = %ld and not %hd\n", big, big);
    printf("verybig = %lld and not %ld\n", verybig, verybig);

    return 0;
}
```