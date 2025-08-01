//homework1

/* Вітаю) При виконанні домашки використовував такий підхід: спочатку думав сам, фіксував результат, потім перевіряв. 
Там, де помилився - я позначив error, свій невірний результат, потім вірний */

/*
1) 'number' + 3 + 3 => отримаємо number33, бо 'number' тут стрінга, а + 3 + 3 означає конкатенацію

перевірка
console.log('number' + 3 +3);
console.log(typeof('number' + 3 +3));

PS C:\Users\User\Desktop\Lesson1\Lesson1\js> node test_.js
number33
string

2) null + 3 => отримаємо 3, бо у даному випадку null - це не стрінга, а значить це 0. І +3 в цьому випадку вже арифметична операція

перевірка
console.log(null + 3);
console.log(typeof(null + 3));

PS C:\Users\User\Desktop\Lesson1\Lesson1\js> node test_.js
3
number

3) 5 && "qwerty" => error, подумав, що поверне 5, бо це true. 
Вірний результат qwerty, бо це також true і повертається останнє true, коли всі true.
Якщо перше false, то поверне його

перевірка
let x = 5 && "qwerty";
console.log(x);

PS C:\Users\User\Desktop\Lesson1\Lesson1\js> node test_.js
qwerty

або якщо перевірка на false, то можна так 
let x = null && "qwerty";
console.log(x);

PS C:\Users\User\Desktop\Lesson1\Lesson1\js> node test_.js
null

4) +'40' + +'2' + "hillel" => отримуємо 42hillel. 
Тут +'40' стає number (бо є плюсик перед стрінгою), +'2' аналогічно стає number, 
значить +'40' + +'2' це 42. А 42 (number) + "hillel" (string) стає стрінгою через конкатенацію

перевірка
let x = +'40' + +'2' + "hillel";
console.log(x);
console.log(typeof(x));

PS C:\Users\User\Desktop\Lesson1\Lesson1\js> node test_.js
42hillel
string

5) '10' - 5 === 6; => отримуємо false.
Тут '10' - 5 дасть нам 5, бо коли від стрінги віднімаємо намбер, то система пробує зробили з обох операндів намбери. 
Ну і 5 не дорівнює строго 6, тобто false

перевірка
let x = '10' - 5;
let y = 6;
console.log(x);
console.log(typeof(x));
console.log(typeof(y));
console.log(x === y);

PS C:\Users\User\Desktop\Lesson1\Lesson1\js> node test_.js
5
number
number
false

6) true + false => буде 1, бо 1 + 0 дорівнює 1 (в даному випадку це арифметика, а не конкатенація)

перевірка
console.log(true + false);
PS C:\Users\User\Desktop\Lesson1\Lesson1\js> node test_.js
1

7) '4px' - 3 => Отримаємо NaN, бо в даному кейсі це арифметична операція і не можна від стрінги відняти намбер.

перевірка
console.log('4px' - 3);
PS C:\Users\User\Desktop\Lesson1\Lesson1\js> node test_.js
NaN

8) '4' - 3 => тут на відміну від попередньго кейсу маємо один. Операція арифметична і "4" може бути перетворено в намбер 4, а 4-3=1

перевірка
console.log('4' - 3);
console.log(typeof('4' - 3));

PS C:\Users\User\Desktop\Lesson1\Lesson1\js> node test_.js
1
number

9) '6' + 3 ** 0; = > error, невірно згадав, що таке возведення в 0 ступінь ), думав, що результат 60. Спочатку 3 ** 0 = 0, потім конкатенація "6" + 0 =>60

Вірний результат 61, строка (логіка така сама, але 3 ** 0 = 1)

перевірка
console.log('6' + 3 ** 0);
console.log(typeof('6' + 3 ** 0));

PS C:\Users\User\Desktop\Lesson1\Lesson1\js> node test_.js
61
string

10) 12 / '6' => Буде 2, бо ариф. операція і "6" перетворюється в намбер, а 12/6=2

перевірка
let x = 12 / '6';
console.log(x);
console.log(typeof(x));

PS C:\Users\User\Desktop\Lesson1\Lesson1\js> node test_.js
2
number

11) '10' + (5 === 6); => Тут результат стрінга 10false, бо "10" це стрінга, 5 ===6 дає false, а потім + це конкатенація

перевірка
let x = '10' + (5 === 6);
console.log(x);
console.log(typeof(x));

PS C:\Users\User\Desktop\Lesson1\Lesson1\js> node test_.js
10false
string

12) null == '' => поверне false. Тут не помилився, але, чесно кажучи, спочатку не згадав чому, поліз дивитися, це було на занятті і також погуглив
null і undefined — єдиний випадок, коли нестроге порівняння повертає true для різних типів. Для всіх інших — ні.

перевірка
console.log(null == '');
console.log(typeof(null == ''));
console.log(null == undefined);

PS C:\Users\User\Desktop\Lesson1\Lesson1\js> node test_.js
false
boolean
true


13) 3 ** (9 / 3); => 27 (тут доволі просто, йдемо арифметикою зправа наліво, 9 ділити на 3 це 3, а потім 3 в ступені 3)

перевірка
console.log(3 ** (9 / 3));
PS C:\Users\User\Desktop\Lesson1\Lesson1\js> node test_.js
27

14) !!'false' == !!'true' => error, спочатку думав, що поверне false (думав подвійне НЕ поверне false у false, а true в true)
Вірна відповідь true, бо виявляється, що 
'false' -> true бо 'false' це не порожній рядок і значить true
!'false' (або ж !true) -> false
ще раз !false -> true
тобто зліва true

зправа !'true' -> false
ще раз !false -> true

перевірка
console.log(!!'false' == !!'true');
PS C:\Users\User\Desktop\Lesson1\Lesson1\js> node test_.js
true

15) 0 || '0' && 1 => Маємо 1. 
Спочатку у нас перевірка правої частини, там маємо true та 1, обидва true, беремо останній.
Зліва 0, а це false
|| йде до першого true
а це 1

console.log(0 || '0' && 1);
PS C:\Users\User\Desktop\Lesson1\Lesson1\js> node test_.js
1


16) (+null == false) < 1; => поверне false
+null стане 0, що нестрого дорівнює false, бо false це 0 
значить справа ц нас true, а true не може < 1 тк це також одиниця

перевірка
console.log((+null == false) < 1);
console.log((+null == false) == 1);

PS C:\Users\User\Desktop\Lesson1\Lesson1\js> node test_.js
false
true


17) false && true || true => поверне true
ліва частина йде до першого false, значить і повертає його
false || true біжить до першого true - бере його справа і повертає

перевірка
console.log(false && true || true);
PS C:\Users\User\Desktop\Lesson1\Lesson1\js> node test_.js
true

18) false && (false || true); = > Маємо false
справа II біжить до першого true, справа маємо true
зліва false
false && true біжить до першого false

перевірка
console.log(false && (false || true));
PS C:\Users\User\Desktop\Lesson1\Lesson1\js> node test_.js
false

19) (+null == false) < 1 ** 5; => тут маємо false, бо 
true (0 ==false, 0==0) < 1 (1 в ступені 5 це 1) це false (1 < 1 дає false)

перевірка
console.log((+null == false) < 1 ** 5);
PS C:\Users\User\Desktop\Lesson1\Lesson1\js> node test_.js
false




*/