let json = '{"id":2}';/*?*/



try {
    let user = JSON.parse(json);/*?*/
    console.log(user);
    // console.log('Normal');
    // console.log(a);
    // console.log('Результат')
    if (!user.id) {
        throw new Error("В етих дынных нет имени");
    }
} catch (e) {
    console.log(e.name);
    console.log(e.message);
    console.log(e.stack);

    console.log(`мы получили ошыбку: ${e.name}`);
} finally {
    console.log('Я выполнюсь Всегда');
}

console.log('А я буду работать дальше');