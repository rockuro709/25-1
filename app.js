/*const readline = require('readline');

const readline = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


readline.question('Ваша фамилия: ', data1 =>
{
        readline.question('Ваше имя: ', data2 =>
        {
            readline.question('Ваше отчество: ', data3 =>
            {
                readline.question('Ваша дата рождения: ', data4 =>
                {
                    readline.question('Полных лет: ', data5 =>
                    {
                        readline.question('Текущий статус занятости (учитесь/работаете/тунеядец): ', data6 =>
                        {
                            console.log(`ФИО: ${data1} ${data2} ${data3}`);
                            console.log(`Дата рождения: ${data4}`);
                            console.log(`Полных лет: ${data5}`);
                            console.log(`Статус занятости: ${data6}`);
                            readline.close();
                        });
                    });
                });
            });
        });
});*/


/*const readline = require('readline');

const readline = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Начало работы");

readline.question("Введите число: ", (data) => {
    if (data > 0) {
        console.log("Число положительное");
    } else if (data < 0) {
        console.log("Число отрицательное");
    } else  {
        console.log("Число равно нулю");
    }

    console.log("Конец работы");
    readline.close();
});*/


/*const readline = require('readline');

const readline = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Введите свой вес на Земле в кг: ", (data) => {
   console.log(`Ваш вес на Луне: ${data/6}`);
   readline.close();
});*/

/*const readline = require('readline');

const readline = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


readline.question('Рублей потрачено на еду в этом месяце: ', data1 =>
{
        readline.question('Рублей потрачено на коммунальные расходы в этом месяце: ', data2 =>
        {
            readline.question('Рублей потрачено на досуг: ', data3 =>
            {
                {                  
                    console.log(`Всего потрачено рублей в этом месяце: `, Number(data1) + Number(data2) + Number(data3));
                    readline.close();                   
                };
            });
        });
});
*/


/*const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Введите число: ', data1 => 
{
    data1 = parseInt(data1);
    let sum = 0;
    while(data1>0)
    {
        sum = sum + data1;
        data1--;
    }
    console.log(sum);
    readline.close();
});*/

/*const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Введите первое число: ', data1 => 
{
    readline.question('Введите второе число: ', data2 => 
    {
          let data3;
          if (data1 < data2)
          {
            for(data3 = data1; data3 <= data2; data3++){
                console.log(data3);
            }
          }
          else
          {
            for(data3 = data2; data3 <= data1; data3++){
                console.log(data3);
            }
          }
          readline.close();
    });

});*/



/*const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Вы проснулись на космическом корабле, ничего не понимаете, ваши действия?");

readline.question("Введите 1 чтобы связаться с Землёй, 2 чтобы осмотреть корабль: ", (Waking) => {
    if (Waking == 1) {
        readline.question("Земля не отвечает, в эфире помехи и чья-то ругань... Введите 1 чтобы подать сигнал SOS, 2 чтобы нажать большую красную кнопку на пульте: ", (FirstRootAction) => {
            if (FirstRootAction == 1) {
                console.log("После долгого ожидания ваш сигнал был услышан, и за вами послали команду спасения.");
                readline.close();
            }
            else {
                console.log("После нажатия кнопки на Землю была сброшена кварковая бомба, вы случайно уничтожили родную планету."); 
                readline.close();             
            }
        });
    }
    else {
        console.log("Все каюты на корабле пусты, вы один, и не умеете управлять кораблём.");
        readline.question("Введите 1 чтобы попробовать включить автопилот, 2 чтобы подать сигнал SOS: ", (SecondRootAction) => {
            if (SecondRootAction == 1) {
                console.log("После включения автопилота, вы стартовали в неизвестном направлении, и вскоре умерли от голода, не обнаружив на борту ничего съестного."); 
                readline.close();
            }
            else {
                console.log("После долгого ожидания ваш сигнал был услышан, и за вами послали команду спасения.");
                readline.close();
            }
        });
    }
});*/



