import { defineStore } from "pinia";

export const useUserStore = defineStore("UserStore", {
  state: () => ({
    users:
      [
        {
          "nick": "ВП",
          "name": "Валентин Петров",
          "email": "vpetrov@industry.ru",
          "rights": OWNER
        },
        {
          "nick": "АИ",
          "name": "Алексей Иванов",
          "email": "aivanov@industry.ru",
          "rights": MANAGER
        },
        {
          "nick": "МС",
          "name": "Мария Смирнова",
          "email": "msmirnova@industry.ru",
          "rights": ARCHITECTOR
        },
        {
          "nick": "ПЛ",
          "name": "Петр Лебедев",
          "email": "plebedev@industry.ru",
          "rights": ARCHITECTOR
        },
        {
          "nick": "КС",
          "name": "Ксения Сидорова",
          "email": "ksidorova@industry.ru",
          "rights": DESIGNER
        },
        {
          "nick": "МВ",
          "name": "Максим Волков",
          "email": "mvolkov@industry.ru",
          "rights": DESIGNER
        },
        {
          "nick": "АГ",
          "name": "Анна Григорьева",
          "email": "agrigoreva@industry.ru",
          "rights": DESIGNER
        },
        {
          "nick": "СН",
          "name": "Сергей Николаев",
          "email": "snikolaev@industry.ru",
          "rights": DESIGNER
        },
        {
          "nick": "ЕС",
          "name": "Екатерина Соколова",
          "email": "esokolova@industry.ru",
          "rights": DESIGNER
        },
        {
          "nick": "ИК",
          "name": "Иван Козлов",
          "email": "ikozlov@industry.ru",
          "rights": DESIGNER
        },
        {
          "nick": "ОТ",
          "name": "Ольга Тихомирова",
          "email": "otikhomirova@industry.ru",
          "rights": DESIGNER
        },
        {
          "nick": "АМ",
          "name": "Александр Морозов",
          "email": "amorozov@industry.ru",
          "rights": DESIGNER
        },
        {
          "nick": "НП",
          "name": "Надежда Павлова",
          "email": "npavlova@industry.ru",
          "rights": DESIGNER
        },
        {
          "nick": "ПИ",
          "name": "Павел Иванов",
          "email": "pivanov@industry.ru",
          "rights": DESIGNER
        },
        {
          "nick": "МА",
          "name": "Маргарита Андреева",
          "email": "mandreeva@industry.ru",
          "rights": DESIGNER
        },
        {
          "nick": "СЛ",
          "name": "Сергей Лебедев",
          "email": "slebedev@industry.ru",
          "rights": DESIGNER
        },
        {
          "nick": "ТК",
          "name": "Татьяна Кузнецова",
          "email": "tkuznetsova@industry.ru",
          "rights": DESIGNER
        },
        {
          "nick": "МГ",
          "name": "Марина Григорьева",
          "email": "mgrigoreva@industry.ru",
          "rights": DESIGNER
        },
        {
          "nick": "СП",
          "name": "Сергей Попов",
          "email": "spopov@industry.ru",
          "rights": DESIGNER
        },
        {
          "nick": "ЕА",
          "name": "Екатерина Алексеева",
          "email": "ealekseeva@industry.ru",
          "rights": DESIGNER
        },
        {
          "nick": "АР",
          "name": "Александр Романов",
          "email": "aromanov@industry.ru",
          "rights": DESIGNER
        },
        {
          "nick": "АП",
          "name": "Андрей Петров",
          "email": "apetrov@industry.ru",
          "rights": DESIGNER
        },
        {
          "nick": "ИС",
          "name": "Ирина Сергеева",
          "email": "isergeeva@industry.ru",
          "rights": DESIGNER
        },
        {
          "nick": "ЛВ",
          "name": "Людмила Васильева",
          "email": "lvasilieva@industry.ru",
          "rights": DESIGNER
        },
        {
          "nick": "АГ",
          "name": "Александр Григорьев",
          "email": "agrigorev@industry.ru",
          "rights": DESIGNER
        },
        {
          "nick": "ОК",
          "name": "Ольга Ковалева",
          "email": "okovaleva@industry.ru",
          "rights": DESIGNER
        },
        {
          "nick": "ИТ",
          "name": "Иван Третьяков",
          "email": "itretiakov@industry.ru",
          "rights": DESIGNER
        },
        {
          "nick": "АС",
          "name": "Анастасия Соколова",
          "email": "asokolova@industry.ru",
          "rights": DESIGNER
        },
        {
          "nick": "ЕИ",
          "name": "Евгений Иванов",
          "email": "eivanov@industry.ru",
          "rights": DESIGNER
        },
        {
          "nick": "ИК",
          "name": "Ирина Кузнецова",
          "email": "ikuznetsova@industry.ru",
          "rights": DESIGNER
        },
        {
          "nick": "ЛА",
          "name": "Лариса Александрова",
          "email": "laleksandrova@industry.ru",
          "rights": DESIGNER
        },
        {
          "nick": "ДД",
          "name": "Денис Дмитриев",
          "email": "ddmitriev@industry.ru",
          "rights": DESIGNER
        },
        {
          "nick": "НИ",
          "name": "Наталья Иванова",
          "email": "nivanova@industry.ru",
          "rights": DESIGNER
        },
        {
          "nick": "СК",
          "name": "Светлана Ковалева",
          "email": "skovaleva@industry.ru",
          "rights": DESIGNER
        },
        {
          "nick": "МП",
          "name": "Михаил Попов",
          "email": "mpopov@industry.ru",
          "rights": DESIGNER
        },
        {
          "nick": "АС",
          "name": "Андрей Смирнов",
          "email": "asmirnov@industry.ru",
          "rights": DESIGNER
        }
      
    ],
    groups: [
      {name:'Администраторы',text:'Администраторы системы', nick:'АД'},
      {name:'Менеджеры',text:'Руководители, обладающие правами изменения рабочих областей', nick:'МН'},
      {name:'Архитекторы',text:'Архитекторы, обладающие правом изменения методологии', nick:'АХ'},
      {name:'Дизайнеры',text:'Дизайнеры', nick:'ДЗ'},
  
    ]    

  })
});

const OWNER = [
  { icon: 'mdi mdi-cloud-outline', name: 'Владелец облака' },
  { icon: 'mdi mdi-fountain-pen', name: 'Дизайнер' },
  { icon: 'mdi mdi-home-outline', name: 'Архитектор' },
  { icon: 'mdi mdi-cog-outline', name: 'Управление проектными областями' },
];

const MANAGER = [
  { icon: 'mdi mdi-fountain-pen', name: 'Дизайнер' },
  { icon: 'mdi mdi-home-outline', name: 'Архитектор' },
  { icon: 'mdi mdi-cog-outline', name: 'Управление проектными областями' },
];

const ARCHITECTOR = [
  { icon: 'mdi mdi-fountain-pen', name: 'Дизайнер' },
  { icon: 'mdi mdi-home-outline', name: 'Архитектор' },
];

const DESIGNER = [
  { icon: 'mdi mdi-fountain-pen', name: 'Дизайнер' },
];
