//Сделайте функцию, которая отнимает от первого числа второе и делит натретье. Числа передаются параметром.

document.write('--- 1 задание --- \n');

function f1(a, b, c) {
    document.write((a - b) / c);
}

f1(10, 2, 2);


//Сделайте функцию, которая возвращает куб числа и его квадрат. Число передается параметром.

document.write('\n\n --- 2 задание --- \n');

function f2(a) {
    return [Math.pow(a, 3), Math.pow(a, 2)];
}

var result = f2(5);

document.write(result);

/*
//Напишите функции min и max, которые возвращают меньшее и большее из чисел a и b.

document.write('\n\n --- 3 задание --- \n');

function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

var a = prompt('3 задание. Введите число а:'),
    b = prompt('3 задание. Введите число b:');

if (a == b) {
    document.write('Числа равны');
} else {
    document.write('Меньшее из чисел ' + min(a, b) + '\n' + 'Большее из чисел ' + max(a, b));
}


//Напишите две функции: первая ф-ция должна возвращать массив с числовыми значениями, диапазон которых должен вводиться пользователем с клавиатуры; вторая – выводить полученный массив.

document.write('\n\n --- 4 задание --- \n');

function f4_1(a, b) {
    var arr = [a, b];
    return arr;
}

function f4_2(arr) {
    arr = [];

    for (var i = a; i <= b; i++) {
        arr.push(i);
    }

    document.write(arr);
}

a = +prompt('4 задание. Введите число начала массива:');
b = +prompt('4 задание. Введите число конца массива:');

document.write('Диапазон массива ' + f4_1(a, b) + '\n Массив ');

f4_2(arr);

*/
//Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное — false.

document.write('\n\n --- 5 задание --- \n');

function iseven(a) {
    if (a % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

a = +prompt('5 задание. Введите число:');

document.write(iseven(a));


//Напишите ф-цию, в которую передается массив с целыми числами. Верните новый массив, где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи.

document.write('\n\n --- 6 задание --- \n');

function f6(length) {
    arr = [];

    for (var a = 1; a <= length; a++) {
        if (iseven(a)) {
            arr.push(a);
        }
    }
    
    return arr;
}

document.write(f6(a));


//Напишите ф-цию, которая рисует следующую пирамидку (исп. вложенные циклы). Кол-во рядов должно вводиться параметром. Если пользователь ввел доп. параметр, непредусмотренный ф-цией по умолчанию - один любой символ, кроме пробела, то пирамида должна быть нарисована этим символом.

document.write('\n\n --- 7 задание --- \n');

function f7(a) {
    if (arguments.length == 1 || arguments[1] == '') {
        for (var i = 1; i <= a; i++) {
            for (var j = 1; j <= i; j++) {
                document.write(i);
            }
        document.write('\n');
        }
    } else {
        for (var i = 1; i <= a; i++) {
                for (var j = 1; j <= i; j++) {
                    document.write(arguments[1]);
                }
            document.write('\n');
            }
    }
}

f7(9, '');


//Напишите ф-цию, которая рисует равнобедренный треугольник из звездочек.

document.write('\n\n --- 8 задание --- \n');

function f8(a) {
    for (var i = 0; i < a; i++) {
        for (var j = 0; j < a - i; j++) {
            document.write('&nbsp;');
        }
        for (var j = 0; j <= i ; j++) {
            document.write('*');
        }
    document.write('\n');
    }
}

function f8_2(a) {
    for (var i = 0; i < a; i++) {
        for (var j = 0; j < a + i; j++) {
            document.write('&nbsp;');
        }
        for (var j = i; j < a; j++) {
            document.write('*');
        }
        document.write('\n');
    }
}
var x = ' ',
    y = '*';

a = +prompt('8 задание. Введите высоту треугольника:');

f8(a);

document.write('\n');

f8_2(a);


//Напишите ф-цию, которая возвращает массив заполненный числами Фибоначи от 0 до 1000.

document.write('\n\n --- 9 задание --- \n');

function f9() {
    arr = [];

    for (var i = 0; ; i++) { 
        if (i == 0 || i == 1) {
            arr[i] = 1;
        } else {
            arr[i] = arr[i - 1] + arr[i - 2];
        }
        
        if (arr[i] > 1000) break;
    }

    return arr;
} 
    
document.write(f9()); 


//Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее). Исп. Рекурсию.

document.write('\n\n --- 10 задание --- \n');

function f10(x) {
    var sum = 0;

    while (x > 0) {
        sum += x % 10;
        x = Math.floor(x / 10);
    }

    document.write('Cумма цифр ' + sum + '\n');

    x = sum;

    if (sum > 9) f10(x); 
}

var x = +prompt('10 задание. Введите число:');

f10(x);


//Дан массив с числами (передается параметром). Выведите последовательно его элементы, используя рекурсию и не используя цикл.

document.write('\n --- 11 задание --- \n');

function f11(array) {
    document.write(array[i] + ' ');
    i++;

    if (i < array.length) f11(array);
}

var i = 0,
    array = []; 

f11([2, 4, -8, 11, 23, 42, -3]); 


//Напишите ф-цию, запрашивающую имя, фамилия, отчество и номер группы студента и выводящую введённые данные

console.log('\n --- 12 задание --- \n');

/*function f12(name, groupnamber) {
    var str1 = 'Домашняя работа: Функции',
        str2 = 'Выполнил: студент гр. ' + groupnamber,
        str3 = name;

    if (str1.length > str2.length && str1.length > str3.length) {
        for (var i = 0; i < str1.length; i++) {
        console.log('*');
    }
    } else if (str2.length > str1.length && str2.length > str3.length) {
        for (var i = 0; i < str2.length; i++) {
            console.log('*');
        }
    } else {
        for (var i = 0; i < str3.length; i++) {
            console.log('*');
        }
    }
    
    console.log(str1.push('*'));
    console.log(str2.push('*'));
    console.log(str3.push('*'));
}

var name = prompt('12 задание. Введите ФИО:'),
    groupnamber = prompt('12 задание. Введите номер группы:');

f12(name, groupnamber);*/
