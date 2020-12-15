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

var a = +prompt('3 задание. Введите число а:'),
    b = +prompt('3 задание. Введите число b:');

if (a == b) {
    document.write('Числа равны');
} else {
    document.write('Меньшее из чисел ' + min(a, b) + '\n' + 'Большее из чисел ' + max(a, b));
}


//Напишите две функции: первая ф-ция должна возвращать массив с числовыми значениями, диапазон которых должен вводиться пользователем с клавиатуры; вторая – выводить полученный массив.

document.write('\n\n --- 4 задание --- \n');

function f4_1(a, b) {
    var arr = [];

    for (var i = a; i <= b; i++) {
        arr.push(i);
    }

    return arr;
}

a = +prompt('4 задание. Введите число начала массива:');
b = +prompt('4 задание. Введите число конца массива:');

function f4_2() {
    document.write(f4_1(a, b));
}

f4_2();


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

function f6(arr) {

    for (var i = 0; i < arr.length; i++) {
        if (iseven(arr[i]) == false) {
            arr.splice(i, 1);
        }
    }
    
    return arr;
}

document.write(f6([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]));


//Напишите ф-цию, которая рисует следующую пирамидку (исп. вложенные циклы). Кол-во рядов должно вводиться параметром. Если пользователь ввел доп. параметр, непредусмотренный ф-цией по умолчанию - один любой символ, кроме пробела, то пирамида должна быть нарисована этим символом. Кол-во рядов должно вводиться параметром. Если пользователь ввел доп. параметр, непредусмотренный ф-цией по умолчанию - один любой символ, кроме пробела, то пирамида должна быть нарисована этим символом,

document.write('\n\n --- 7 задание --- \n');

function f7(a) {
    if (arguments.length == 1 || arguments[1] == '' || arguments[1] == ' ') {
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


//Напишите ф-цию, которая рисует равнобедренный треугольник из звездочек. Кол-во рядов должно вводиться с клавиатуры. Доп., напишите такую же ф-цию, но которая выведет перевернутый треугольник.

document.write('\n\n --- 8 задание --- \n');

function f8(a) {
    for (var i = 0; i < a; i++) {
        for (var j = 0; j < a * 2 - 1; j++) {
            if (j >= a - i - 1 && j <= a + i - 1) {
                document.write('*');
            } else {
                document.write('&nbsp;&nbsp;');
            }
        }
        document.write('\n');
    }
}

function f8_2(a) {
    for (var i = a - 1; i >= 0; i--) {
        for (var j = 0; j < a * 2 - 1; j++) {
            if (j >= a - i - 1 && j <= a + i - 1) {
                document.write('*');
            } else {
                document.write('&nbsp;&nbsp;');
            }
        }
        document.write('\n');
    }
}

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
            arr[0] = 0;
            arr[1] = 1;
        } else {
            arr[i] = arr[i - 1] + arr[i - 2];
        }
        
        if (arr[i] >= 987) break;
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


//Напишите ф-цию, запрашивающую имя, фамилия, отчество и номер группы студента и выводящую введённые данные. Размер рамки должен определятся автоматически по самой длинной строке. Рамку вывести в консоль.

console.log('\n --- 12 задание --- \n');

function f12(name, groupnamber) {
    
    var str1 = 'Домашняя работа: Функции',
        str2 = 'Выполнил: студент гр. ' + groupnamber,
        str3 = '' + name,
        l = 0,
        s = '****';

    if (str1.length > str2.length && str1.length > str3.length) {
        for (var i = 0; i < str1.length; i++) {
            s += '*';
        }
        l = str1.length;
    } else if (str2.length > str1.length && str2.length > str3.length) {
        for (var i = 0; i < str2.length; i++) {
            s += '*';
        }
        l = str2.length;
    } else {
        for (var i = 0; i < str3.length; i++) {
            s += '*';
        }
        l = str3.length;
    }

    var j1 = l - str1.length,
        j2 = l - str2.length,
        j3 = l - str3.length;

    for (var i = 0; i < j1; i++) {
        str1 += ' ';
    }
    for (var i = 0; i < j2; i++) {
        str2 += ' ';
    }
    for (var i = 0; i < j3; i++) {
        str3 += ' ';
    }

    console.log(s);
    console.log('* ' + str1 + ' *');
    console.log('* ' + str2 + ' *');
    console.log('* ' + str3 + ' *');
    console.log(s);
}

var name = prompt('12 задание. Введите ФИО:'),
    groupnamber = prompt('12 задание. Введите номер группы:');

f12(name, groupnamber);


//Напишите ф-цию, которая должна проверить правильность ввода адреса эл. почты, неиспользуя регулярные выражения.
//a. весь адрес не должен содержать русские буквы и спецсимволы, кроме одной «собачки», знака подчеркивания, дефиса и точки, причем они не могут быть первыми и последними в адресе, и идти подряд, например: «..», «@.», «.@» или «@@», «_@», «@-», «--» и т.п.
//b. имя эл. почты (до знака @) должно быть длиной более 2 символов, причем имя может содержать только буквы, цифры, но не быть первыми и единственными в имени, и точку;
//c. после последней точки и после @, домен верхнего уровня (ru, by, com и т.п.) не может быть длиной менее 2 и более 11 символов.

document.write('\n\n --- 13 задание --- \n');

function f13(email) {

    email = prompt('13 задание. Введите электронную почту:');

    for (var i = 0; i < arr_ru.length; i++) {
        if (email.indexOf(arr_ru[i]) != -1) {
            alert('Ошибка, присутствуют русские буквы');
            return false;
        } 
    }

    for (var i = 0; i < arr_symb.length; i++) {
        if (email.indexOf(arr_symb[i]) != -1) {
            alert('Ошибка, присутствуют спецсимволы');
            return false;
        } 
    }

    var n = email.split('@');

    for (var i = 0; i < arr_symbol.length; i++) {
        if (email[0] == arr_symbol[i] || email[email.length - 1] == arr_symbol[i]) {
            alert('Ошибка, спецсимвол в начале или в конце строки');
            return false;
        } else if (email.indexOf(arr_symbol[i]) == email.lastIndexOf(arr_symbol[i]) - 1 || n[1].indexOf(arr_symbol[i]) == n[1].lastIndexOf(arr_symbol[i]) - 1 || n[0].indexOf(arr_symbol[i]) == n[0].lastIndexOf(arr_symbol[i]) - 1) {
            alert('Ошибка, спецсимволы идут подряд');
            return false;
        }
    }

    if (n[0].length < 2 || n[1].length < 2 || n[1].length > 11) {
        alert('Ошибка');
        return false;
    } 

    return email;
}

let arr_ru = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ь', 'ы', 'ъ', 'э', 'ю', 'я'],
    arr_symbol = ['@', '_', '-', '.'],
    arr_symb = ['!', '#', '$', '%', '&', '?', '+', '=', '~'];

var email = [];

document.write(f13(email));

