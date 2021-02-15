# test-task
Для того, щоб запустити проект на локальній машині необхідно: 
1) В корневій папці та папці "client" проекту виконати команду - "npm i" ; 
2) Повернутись до корневого каталогу та виконати скрип - "npm run dev" (він запустить клієнт та сервер)
При першому запуску програми скрипт перевіряє наявність файлу бази(SQLite) в середині проекту при його відсутності створює файл - "user.db".
В середині файлу user.db створюєтся 2 таблиці та заповнюються данними з 2-х json файлів в середині проекту.
По дефолту в файлі app.js у фцнкції "appStart" викликаєтся 2 функції(f - додавання користувачів до бази ,s - додавання статистики до бази)
зі значеннями (201,1000) - це кількість записів які необхідно дістати з json файлів, якщо параметри відсутні виконує додаванні всіх записів з файлів.
Після старту скрипта небхідно зачекати (може зайняти деякий час) доки в консолі сервер сповістить про додання файлів командами : 
1) "all users add" ; 
2) "All statistic added and server started at port " + назва порту ;
До цього моменту сервер не може обробляти запити з клієнта тому на сторінках "User statistic" та "User statistic/:id" будуть відображатись лоадери.
Після додання всіх записів у базу сервер сповістить про заершення logo-м - "All statistic added and server started at port" , необхідно буде тільки оновити сторінку в браузері.
По дефолту графіки відображають статистику за тиждень - але значення можна змінити , (в скрипті передбачена формула для побудови графіків).
В цілому це все що необхідно знати про цей проект , сподіваюсь він буде корисним тому - хто його переглядає )).