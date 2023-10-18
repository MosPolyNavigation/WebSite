const infoData = [
  {
    id: 1,
    campus: "\u0410\u0412",
    corpus: "5",
    floor: "1",
    number: "5100",
    type: "",
    desc: ""
  },
  {
    id: 2,
    campus: "\u0410\u0412",
    corpus: "5",
    floor: "1",
    number: "5101",
    type: "\u041F\u0440\u0435\u043F\u043E\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0430\u044F",
    desc: ""
  },
  {
    id: 3,
    campus: "\u0410\u0412",
    corpus: "5",
    floor: "1",
    number: "5101A",
    type: "",
    desc: ""
  },
  {
    id: 4,
    campus: "\u0410\u0412",
    corpus: "5",
    floor: "1",
    number: "5102",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u041A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"
  },
  {
    id: 5,
    campus: "\u0410\u0412",
    corpus: "5",
    floor: "1",
    number: "5103",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u041A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"
  },
  {
    id: 6,
    campus: "\u0410\u0412",
    corpus: "5",
    floor: "1",
    number: "5104",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0423\u0447\u0435\u0431\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"
  },
  {
    id: 7,
    campus: "\u0410\u0412",
    corpus: "5",
    floor: "1",
    number: "5105",
    type: "\u041F\u0440\u043E\u0435\u043A\u0442\u043D\u043E\u0435 \u0431\u044E\u0440\u043E",
    desc: ""
  },
  {
    id: 8,
    campus: "\u0410\u0412",
    corpus: "5",
    floor: "1",
    number: "5106",
    type: "\u041F\u0440\u043E\u0435\u043A\u0442\u043D\u043E\u0435 \u0431\u044E\u0440\u043E",
    desc: ""
  },
  {
    id: 9,
    campus: "\u0410\u0412",
    corpus: "5",
    floor: "1",
    number: "5107",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 10,
    campus: "\u0410\u0412",
    corpus: "5",
    floor: "1",
    number: "5108",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u041A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"
  },
  {
    id: 11,
    campus: "\u0410\u0412",
    corpus: "5",
    floor: "1",
    number: "5109",
    type: "",
    desc: ""
  },
  {
    id: 12,
    campus: "\u0410\u0412",
    corpus: "5",
    floor: "2",
    number: "5201",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u041B\u0435\u043A\u0446\u0438\u043E\u043D\u043D\u0430\u044F"
  },
  {
    id: 13,
    campus: "\u0410\u0412",
    corpus: "5",
    floor: "2",
    number: "5202",
    type: "\u0410\u043A\u0432\u0430\u0440\u0438\u0430\u043B\u044C\u043D\u0430\u044F",
    desc: ""
  },
  {
    id: 14,
    campus: "\u0410\u0412",
    corpus: "5",
    floor: "2",
    number: "5203",
    type: "\u041C\u043E\u043B\u0435\u043A\u0443\u043B\u044F\u0440\u043D\u043E-\u043A\u043B\u0435\u0442\u043E\u0447\u043D\u044B\u0439 \u0431\u043B\u043E\u043A",
    desc: ""
  },
  {
    id: 15,
    campus: "\u0410\u0412",
    corpus: "5",
    floor: "2",
    number: "5204",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F \u043C\u043E\u043B\u0435\u043A\u0443\u043B\u044F\u0440\u043D\u043E\u0439 \u0431\u0438\u043E\u043B\u043E\u0433\u0438\u0438 \u0438 \u043A\u043B\u0435\u0442\u043E\u0447\u043D\u044B\u0445 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0439"
  },
  {
    id: 16,
    campus: "\u0410\u0412",
    corpus: "5",
    floor: "2",
    number: "5205",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F \u043C\u043E\u043B\u0435\u043A\u0443\u043B\u044F\u0440\u043D\u043E\u0439 \u0431\u0438\u043E\u043B\u043E\u0433\u0438\u0438"
  },
  {
    id: 17,
    campus: "\u0410\u0412",
    corpus: "5",
    floor: "2",
    number: "5206",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F \u043F\u0440\u0435\u043F\u0430\u0440\u0430\u0442\u0438\u0432\u043D\u044B\u0445 \u043C\u0435\u0442\u043E\u0434\u043E\u0432"
  },
  {
    id: 18,
    campus: "\u0410\u0412",
    corpus: "5",
    floor: "2",
    number: "5206\u0410",
    type: "",
    desc: ""
  },
  {
    id: 19,
    campus: "\u0410\u0412",
    corpus: "5",
    floor: "2",
    number: "5206\u0411",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F, \u0438\u043D\u0441\u0435\u043A\u0442\u0430\u0440\u0438\u0439",
    desc: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F \u0431\u0438\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u043C\u0435\u0442\u043E\u0434\u043E\u0432 \u0431\u043E\u0440\u044C\u0431\u044B \u0441 \u0432\u0440\u0435\u0434\u0438\u0442\u0435\u043B\u044F\u043C\u0438 \u0441\u0435\u043B\u044C\u0441\u043A\u043E\u0445\u043E\u0437\u044F\u0439\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0445 \u0440\u0430\u0441\u0442\u0435\u043D\u0438\u0439, \u0438\u043D\u0441\u0435\u043A\u0442\u0430\u0440\u0438\u0439"
  },
  {
    id: 20,
    campus: "\u0410\u0412",
    corpus: "5",
    floor: "2",
    number: "5207",
    type: "",
    desc: ""
  },
  {
    id: 21,
    campus: "\u0410\u0412",
    corpus: "5",
    floor: "2",
    number: "5207\u0410",
    type: "\u041C\u043E\u043B\u0435\u043A\u0443\u043B\u044F\u0440\u043D\u043E-\u043A\u043B\u0435\u0442\u043E\u0447\u043D\u044B\u0439 \u0431\u043B\u043E\u043A",
    desc: "\u0425\u0440\u0430\u043D\u0438\u043B\u0438\u0449\u0435 \u0440\u0430\u0441\u0445\u043E\u0434\u043D\u044B\u0445 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432"
  },
  {
    id: 22,
    campus: "\u0410\u0412",
    corpus: "5",
    floor: "2",
    number: "5208",
    type: "\u0426\u0435\u043D\u0442\u0440\u0438\u0444\u0443\u0436\u043D\u0430\u044F",
    desc: ""
  },
  {
    id: 23,
    campus: "\u0410\u0412",
    corpus: "5",
    floor: "2",
    number: "5209",
    type: "\u0424\u043E\u0440\u0435\u0437\u043D\u0430\u044F",
    desc: ""
  },
  {
    id: 24,
    campus: "\u0410\u0412",
    corpus: "5",
    floor: "2",
    number: "5210",
    type: "",
    desc: ""
  },
  {
    id: 25,
    campus: "\u0410\u0412",
    corpus: "5",
    floor: "2",
    number: "5211",
    type: "\u041A\u0440\u0438\u043E\u0431\u0430\u043D\u043A",
    desc: ""
  },
  {
    id: 26,
    campus: "\u0410\u0412",
    corpus: "5",
    floor: "2",
    number: "5212",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u0438 \u043A\u043E\u043B\u043B\u043E\u0438\u0434\u043D\u043E\u0439 \u0445\u0438\u043C\u0438\u0438"
  },
  {
    id: 27,
    campus: "\u0410\u0412",
    corpus: "5",
    floor: "2",
    number: "5213",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F \u043E\u0440\u0433\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u0445\u0438\u043C\u0438\u0438"
  },
  {
    id: 28,
    campus: "\u0410\u0412",
    corpus: "5",
    floor: "3",
    number: "5301",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F \u043E\u0431\u0449\u0435\u0439 \u0445\u0438\u043C\u0438\u0438"
  },
  {
    id: 29,
    campus: "\u0410\u0412",
    corpus: "5",
    floor: "3",
    number: "5302",
    type: "",
    desc: ""
  },
  {
    id: 30,
    campus: "\u0410\u0412",
    corpus: "5",
    floor: "3",
    number: "5303",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F \u043E\u0431\u0449\u0435\u0439 \u0445\u0438\u043C\u0438\u0438"
  },
  {
    id: 31,
    campus: "\u0410\u0412",
    corpus: "5",
    floor: "3",
    number: "5304",
    type: "\u0410\u0441\u043F\u0438\u0440\u0430\u043D\u0442\u0441\u043A\u0430\u044F",
    desc: ""
  },
  {
    id: 32,
    campus: "\u0410\u0412",
    corpus: "5",
    floor: "3",
    number: "5305",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F \u0430\u043D\u0430\u043B\u0438\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u0445\u0438\u043C\u0438\u0438"
  },
  {
    id: 33,
    campus: "\u0410\u0412",
    corpus: "5",
    floor: "3",
    number: "5306",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F \u043E\u0431\u0449\u0435\u0439 \u0445\u0438\u043C\u0438\u0438"
  },
  {
    id: 34,
    campus: "\u0410\u0412",
    corpus: "5",
    floor: "3",
    number: "5307",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F \u043E\u0440\u0433\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u0445\u0438\u043C\u0438\u0438"
  },
  {
    id: 35,
    campus: "\u0410\u0412",
    corpus: "5",
    floor: "3",
    number: "5308",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u041B\u0435\u043A\u0446\u0438\u043E\u043D\u043D\u0430\u044F"
  },
  {
    id: 36,
    campus: "\u0410\u0412",
    corpus: "5",
    floor: "3",
    number: "5309",
    type: "\u041F\u0440\u0435\u043F\u043E\u0434\u0430\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0430\u044F",
    desc: ""
  },
  {
    id: 37,
    campus: "\u0410\u0412",
    corpus: "5",
    floor: "4",
    number: "5401",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F \u043F\u0440\u043E\u043A\u0430\u0440\u0438\u043E\u0442\u043E\u0432"
  },
  {
    id: 38,
    campus: "\u0410\u0412",
    corpus: "5",
    floor: "4",
    number: "",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F \u0430\u0433\u0440\u043E\u0431\u0438\u043E\u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438"
  },
  {
    id: 39,
    campus: "\u0410\u0412",
    corpus: "5",
    floor: "4",
    number: "5402",
    type: "",
    desc: ""
  },
  {
    id: 40,
    campus: "\u0410\u0412",
    corpus: "5",
    floor: "4",
    number: "5403",
    type: "\u041C\u0430\u0441\u0442\u0435\u0440\u0441\u043A\u0430\u044F",
    desc: ""
  },
  {
    id: 41,
    campus: "\u0410\u0412",
    corpus: "5",
    floor: "4",
    number: "5404\u0410",
    type: "\u041C\u0438\u043A\u0440\u043E\u0431\u0438\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0431\u043B\u043E\u043A",
    desc: "\u041B\u0435\u043A\u0446\u0438\u043E\u043D\u043D\u0430\u044F \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F"
  },
  {
    id: 42,
    campus: "\u0410\u0412",
    corpus: "5",
    floor: "4",
    number: "5404\u0411",
    type: "\u041C\u0438\u043A\u0440\u043E\u0431\u0438\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0431\u043B\u043E\u043A",
    desc: "\u041F\u0440\u0435\u043F\u0430\u0440\u0430\u0442\u043E\u0440\u0441\u043A\u0430\u044F, \u0443\u0447\u0435\u0431\u043D\u0430\u044F \u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F"
  },
  {
    id: 43,
    campus: "\u0410\u0412",
    corpus: "5",
    floor: "4",
    number: "5405",
    type: "\u041C\u0438\u043A\u0440\u043E\u0431\u0438\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0431\u043B\u043E\u043A",
    desc: "\u041F\u0440\u0435\u043F\u0430\u0440\u0430\u0442\u043E\u0440\u0441\u043A\u0430\u044F, \u0443\u0447\u0435\u0431\u043D\u0430\u044F \u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F"
  },
  {
    id: 44,
    campus: "\u0410\u0412",
    corpus: "5",
    floor: "4",
    number: "5406\u0410",
    type: "\u0422\u0435\u0445\u043D\u043E\u043F\u0430\u0440\u043A",
    desc: ""
  },
  {
    id: 45,
    campus: "\u0410\u0412",
    corpus: "5",
    floor: "4",
    number: "5406\u0411",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F \u0411\u0410\u0421"
  },
  {
    id: 46,
    campus: "\u0410\u0412",
    corpus: "5",
    floor: "4",
    number: "5407",
    type: "\u041F\u0440\u0435\u043F\u043E\u0434\u0430\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0430\u044F",
    desc: ""
  },
  {
    id: 47,
    campus: "\u0410\u0412",
    corpus: "5",
    floor: "5",
    number: "5501",
    type: "",
    desc: ""
  },
  {
    id: 48,
    campus: "\u0410\u0412",
    corpus: "5",
    floor: "5",
    number: "",
    type: "",
    desc: ""
  },
  {
    id: 49,
    campus: "\u0410\u0412",
    corpus: "5",
    floor: "5",
    number: "5503",
    type: "",
    desc: ""
  },
  {
    id: 50,
    campus: "\u0410\u0412",
    corpus: "5",
    floor: "5",
    number: "5503\u0410",
    type: "",
    desc: ""
  },
  {
    id: 51,
    campus: "\u0410\u0412",
    corpus: "5",
    floor: "5",
    number: "5504",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u041B\u0435\u043A\u0446\u0438\u043E\u043D\u043D\u0430\u044F"
  },
  {
    id: 52,
    campus: "\u0410\u0412",
    corpus: "5",
    floor: "5",
    number: "5505",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u041B\u0435\u043A\u0446\u0438\u043E\u043D\u043D\u0430\u044F"
  },
  {
    id: 53,
    campus: "\u0410\u0412",
    corpus: "5",
    floor: "5",
    number: "",
    type: "",
    desc: ""
  },
  {
    id: 54,
    campus: "\u0410\u0412",
    corpus: "5",
    floor: "5",
    number: "5507",
    type: "",
    desc: ""
  },
  {
    id: 55,
    campus: "\u0410\u0412",
    corpus: "5",
    floor: "5",
    number: "5507\u0410",
    type: "",
    desc: ""
  },
  {
    id: 56,
    campus: "\u0410\u0412",
    corpus: "5",
    floor: "5",
    number: "",
    type: "",
    desc: ""
  },
  {
    id: 57,
    campus: "\u0410\u0412",
    corpus: "5",
    floor: "5",
    number: "",
    type: "",
    desc: ""
  },
  {
    id: 58,
    campus: "\u0410\u0412",
    corpus: "5",
    floor: "5",
    number: "5510",
    type: "",
    desc: ""
  },
  {
    id: 59,
    campus: "\u0410\u0412",
    corpus: "5",
    floor: "5",
    number: "5511",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u041B\u0435\u043A\u0446\u0438\u043E\u043D\u043D\u0430\u044F"
  },
  {
    id: 60,
    campus: "\u0410\u0412",
    corpus: "5",
    floor: "5",
    number: "5512",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F \u043F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u044B\u0445 \u043F\u0440\u043E\u0434\u0443\u0446\u0435\u043D\u0442\u043E\u0432 \u0438 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0439"
  },
  {
    id: 61,
    campus: "\u0410\u0412",
    corpus: "5",
    floor: "5",
    number: "",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F \u043F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u044B\u0445 \u043F\u0440\u043E\u0434\u0443\u0446\u0435\u043D\u0442\u043E\u0432 \u0438 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0439"
  },
  {
    id: 62,
    campus: "\u0410\u0412",
    corpus: "5",
    floor: "5",
    number: "5514",
    type: "\u0410\u0440\u0445\u0438\u0432",
    desc: ""
  },
  {
    id: 63,
    campus: "\u0410\u0412",
    corpus: "5",
    floor: "5",
    number: "5515",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u041A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"
  },
  {
    id: 64,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "1",
    number: "2101",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0421\u0435\u043A\u0446\u0438\u044F \u0441\u0432\u0430\u0440\u043A\u0430"
  },
  {
    id: 65,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "1",
    number: "2102",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: "\u041E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432 \u0434\u0430\u0432\u043B\u0435\u043D\u0438\u0435\u043C"
  },
  {
    id: 66,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "1",
    number: "2103",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0422\u0435\u0445\u043D\u0438\u043A\u0430 \u043D\u0438\u0437\u043A\u0438\u0445 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440"
  },
  {
    id: 67,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "1",
    number: "2104",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 68,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "1",
    number: "2105",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F \u043F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u044B\u0445 \u0440\u043E\u0431\u043E\u0442\u043E\u0432 \u0438 \u0441\u0440\u0435\u0434\u0441\u0442 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u0438"
  },
  {
    id: 69,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "1",
    number: "2106",
    type: "",
    desc: ""
  },
  {
    id: 70,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "1",
    number: "2107",
    type: "",
    desc: ""
  },
  {
    id: 71,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "1",
    number: "2108",
    type: "",
    desc: ""
  },
  {
    id: 72,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "1",
    number: "2109",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0427\u041F\u0423"
  },
  {
    id: 73,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "1",
    number: "2110",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0421\u0435\u043A\u0446\u0438\u044F \u043B\u0438\u0442\u044C\u044F"
  },
  {
    id: 74,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "1",
    number: "2111",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 75,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "2",
    number: "2201",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 76,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "2",
    number: "2202",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 77,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "2",
    number: "2203",
    type: "",
    desc: ""
  },
  {
    id: 78,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "2",
    number: "2204",
    type: "",
    desc: ""
  },
  {
    id: 79,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "2",
    number: "2205",
    type: "",
    desc: ""
  },
  {
    id: 80,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "2",
    number: "2206",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 81,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "2",
    number: "2206\u0410",
    type: "",
    desc: ""
  },
  {
    id: 82,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "2",
    number: "2207",
    type: "\u041F\u0440\u0435\u043F\u043E\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0430\u044F",
    desc: "\u041A\u0430\u0444\u0435\u0434\u0440\u0430 \u0442\u0435\u0445\u043D\u0438\u043A\u0438 \u043D\u0438\u0437\u043A\u0438\u0445 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440"
  },
  {
    id: 83,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "2",
    number: "2208",
    type: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u043E\u0440\u0441\u043A\u0430\u044F",
    desc: "\u041A\u0430\u0444\u0435\u0434\u0440\u0430 \u0442\u0435\u0445\u043D\u0438\u043A\u0438 \u043D\u0438\u0437\u043A\u0438\u0445 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440"
  },
  {
    id: 84,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "2",
    number: "2209",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u041A\u0430\u0444\u0435\u0434\u0440\u0430 \u0442\u0435\u0445\u043D\u0438\u043A\u0438 \u043D\u0438\u0437\u043A\u0438\u0445 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440"
  },
  {
    id: 85,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "2",
    number: "2210",
    type: "\u0418\u0437\u0434\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E",
    desc: "\u0418\u0437\u0434\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E-\u043F\u043E\u043B\u0438\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0446\u0435\u043D\u0442\u0440"
  },
  {
    id: 86,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "2",
    number: "2211",
    type: "",
    desc: ""
  },
  {
    id: 87,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "2",
    number: "2212",
    type: "",
    desc: ""
  },
  {
    id: 88,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "2",
    number: "2213",
    type: "",
    desc: ""
  },
  {
    id: 89,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "2",
    number: "2214",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u041A\u0430\u0444\u0435\u0434\u0440\u0430 \u0442\u0435\u0445\u043D\u0438\u043A\u0438 \u043D\u0438\u0437\u043A\u0438\u0445 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440"
  },
  {
    id: 90,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "2",
    number: "2215",
    type: "\u0418\u0437\u0434\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E",
    desc: "\u0418\u0437\u0434\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E-\u043F\u043E\u043B\u0438\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0446\u0435\u043D\u0442\u0440"
  },
  {
    id: 91,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "2",
    number: "2216",
    type: "",
    desc: ""
  },
  {
    id: 92,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "2",
    number: "2217",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 93,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "2",
    number: "2218",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0424\u0430\u043A\u0443\u043B\u044C\u0442\u0435\u0442 \u0443\u0440\u0431\u0430\u043D\u0438\u0441\u0442\u0438\u043A\u0438"
  },
  {
    id: 94,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "2",
    number: "2219",
    type: "",
    desc: "\u0424\u0430\u043A\u0443\u043B\u044C\u0442\u0435\u0442 \u0443\u0440\u0431\u0430\u043D\u0438\u0441\u0442\u0438\u043A\u0438"
  },
  {
    id: 95,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "2",
    number: "2220",
    type: "",
    desc: "\u0424\u0430\u043A\u0443\u043B\u044C\u0442\u0435\u0442 \u0443\u0440\u0431\u0430\u043D\u0438\u0441\u0442\u0438\u043A\u0438"
  },
  {
    id: 96,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "2",
    number: "2221",
    type: "",
    desc: "\u0424\u0430\u043A\u0443\u043B\u044C\u0442\u0435\u0442 \u0443\u0440\u0431\u0430\u043D\u0438\u0441\u0442\u0438\u043A\u0438"
  },
  {
    id: 97,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "2",
    number: "2222",
    type: "\u041A\u0430\u0444\u0435\u0434\u0440\u0430",
    desc: "\u0424\u0430\u043A\u0443\u043B\u044C\u0442\u0435\u0442 \u0443\u0440\u0431\u0430\u043D\u0438\u0441\u0442\u0438\u043A\u0438"
  },
  {
    id: 98,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "2",
    number: "2223",
    type: "\u041A\u0430\u0444\u0435\u0434\u0440\u0430",
    desc: "\u0424\u0430\u043A\u0443\u043B\u044C\u0442\u0435\u0442 \u0443\u0440\u0431\u0430\u043D\u0438\u0441\u0442\u0438\u043A\u0438"
  },
  {
    id: 99,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "2",
    number: "2224",
    type: "",
    desc: "\u0424\u0430\u043A\u0443\u043B\u044C\u0442\u0435\u0442 \u0443\u0440\u0431\u0430\u043D\u0438\u0441\u0442\u0438\u043A\u0438"
  },
  {
    id: 100,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "2",
    number: "2225",
    type: "",
    desc: ""
  },
  {
    id: 101,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "2",
    number: "2226",
    type: "",
    desc: "\u0424\u0430\u043A\u0443\u043B\u044C\u0442\u0435\u0442 \u0443\u0440\u0431\u0430\u043D\u0438\u0441\u0442\u0438\u043A\u0438"
  },
  {
    id: 102,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "3",
    number: "2301",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: "\u041C\u0430\u0440\u043A\u0448\u0435\u0439\u0434\u0435\u0440\u0441\u043A\u043E\u0435 \u0434\u0435\u043B\u043E"
  },
  {
    id: 103,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "3",
    number: "2302",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u041B\u0435\u043A\u0446\u0438\u043E\u043D\u043D\u0430\u044F"
  },
  {
    id: 104,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "3",
    number: "2303",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u041B\u0435\u043A\u0446\u0438\u043E\u043D\u043D\u0430\u044F"
  },
  {
    id: 105,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "3",
    number: "2304",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u041B\u0435\u043A\u0446\u0438\u043E\u043D\u043D\u0430\u044F"
  },
  {
    id: 106,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "3",
    number: "2305",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u041B\u0435\u043A\u0446\u0438\u043E\u043D\u043D\u0430\u044F"
  },
  {
    id: 107,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "3",
    number: "2306",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u041B\u0435\u043A\u0446\u0438\u043E\u043D\u043D\u0430\u044F"
  },
  {
    id: 108,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "3",
    number: "2307",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u041B\u0435\u043A\u0446\u0438\u043E\u043D\u043D\u0430\u044F"
  },
  {
    id: 109,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "3",
    number: "2308",
    type: "",
    desc: ""
  },
  {
    id: 110,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "3",
    number: "2309",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 111,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "3",
    number: "2310",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 112,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "3",
    number: "2311",
    type: "\u041A\u0430\u0431\u0438\u043D\u0435\u0442",
    desc: "\u0426\u0435\u043D\u0442\u0440 \u043F\u043E \u0440\u0430\u0431\u043E\u0442\u0435 \u0441\u043E \u0441\u0442\u0443\u0434\u0435\u043D\u0442\u0430\u043C\u0438"
  },
  {
    id: 113,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "3",
    number: "2312",
    type: "\u041A\u0430\u0431\u0438\u043D\u0435\u0442",
    desc: "\u0426\u0435\u043D\u0442\u0440 \u043F\u043E \u0440\u0430\u0431\u043E\u0442\u0435 \u0441\u043E \u0441\u0442\u0443\u0434\u0435\u043D\u0442\u0430\u043C\u0438"
  },
  {
    id: 114,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "3",
    number: "2313",
    type: "\u041A\u0430\u0431\u0438\u043D\u0435\u0442",
    desc: "\u0426\u0435\u043D\u0442\u0440 \u043F\u043E \u0440\u0430\u0431\u043E\u0442\u0435 \u0441\u043E \u0441\u0442\u0443\u0434\u0435\u043D\u0442\u0430\u043C\u0438"
  },
  {
    id: 115,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "3",
    number: "2314",
    type: "\u041A\u0430\u0431\u0438\u043D\u0435\u0442",
    desc: ""
  },
  {
    id: 116,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "3",
    number: "2315",
    type: "\u041A\u0430\u0431\u0438\u043D\u0435\u0442",
    desc: "\u041C\u043D\u043E\u0433\u043E\u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u0446\u0435\u043D\u0442\u0440"
  },
  {
    id: 117,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "3",
    number: "2316",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F \u043D\u0435\u0440\u0430\u0437\u0440\u0443\u0448\u0430\u044E\u0449\u0435\u0433\u043E \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044F"
  },
  {
    id: 118,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "3",
    number: "2317",
    type: "",
    desc: ""
  },
  {
    id: 119,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "3",
    number: "2318",
    type: "",
    desc: ""
  },
  {
    id: 120,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "4",
    number: "2401",
    type: "",
    desc: "\u041A\u0430\u0444\u0435\u0434\u0440\u0430 \u043F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u043E\u0439 \u0442\u0435\u043F\u043B\u043E\u044D\u043D\u0435\u0440\u0433\u0435\u0442\u0438\u043A\u0438 "
  },
  {
    id: 121,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "4",
    number: "2402",
    type: "",
    desc: ""
  },
  {
    id: 122,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "4",
    number: "2403",
    type: "",
    desc: ""
  },
  {
    id: 123,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "4",
    number: "2404",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 124,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "4",
    number: "2405",
    type: "",
    desc: ""
  },
  {
    id: 125,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "4",
    number: "2406",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: "\u041A\u0430\u0444\u0435\u0434\u0440\u0430 \u043F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u043E\u0439 \u0442\u0435\u043F\u043B\u043E\u044D\u043D\u0435\u0440\u0433\u0435\u0442\u0438\u043A\u0438 "
  },
  {
    id: 126,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "4",
    number: "2407",
    type: "\u041F\u0440\u0435\u043F\u043E\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0430\u044F",
    desc: "\u041A\u0430\u0444\u0435\u0434\u0440\u0430 \u043F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u043E\u0439 \u0442\u0435\u043F\u043B\u043E\u044D\u043D\u0435\u0440\u0433\u0435\u0442\u0438\u043A\u0438 "
  },
  {
    id: 127,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "4",
    number: "2407\u0410",
    type: "\u041F\u0440\u0435\u043F\u043E\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0430\u044F",
    desc: "\u041A\u0430\u0444\u0435\u0434\u0440\u0430 \u043F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u043E\u0439 \u0442\u0435\u043F\u043B\u043E\u044D\u043D\u0435\u0440\u0433\u0435\u0442\u0438\u043A\u0438 "
  },
  {
    id: 128,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "4",
    number: "2408",
    type: "\u041F\u0440\u0435\u043F\u043E\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0430\u044F",
    desc: "\u041A\u0430\u0444\u0435\u0434\u0440\u0430 \u0410\u0421\u0421\u0418"
  },
  {
    id: 129,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "4",
    number: "2409",
    type: "\u041A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441",
    desc: "\u041A\u0430\u0444\u0435\u0434\u0440\u0430 \u0410\u0421\u0421\u0418"
  },
  {
    id: 130,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "4",
    number: "2410",
    type: "",
    desc: ""
  },
  {
    id: 131,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "4",
    number: "2411",
    type: "",
    desc: ""
  },
  {
    id: 132,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "4",
    number: "2412",
    type: "\u041F\u0440\u0435\u043F\u043E\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0430\u044F",
    desc: "\u041A\u0430\u0444\u0435\u0434\u0440\u0430 \u043E\u0441\u043D\u043E\u0432\u044B \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F"
  },
  {
    id: 133,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "4",
    number: "2413",
    type: "\u041F\u0440\u0435\u043F\u043E\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0430\u044F",
    desc: "\u041A\u0430\u0444\u0435\u0434\u0440\u0430 \u0410\u0421\u0421\u0418"
  },
  {
    id: 134,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "4",
    number: "2414",
    type: "",
    desc: ""
  },
  {
    id: 135,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "4",
    number: "2415",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: "\u041A\u0430\u0444\u0435\u0434\u0440\u0430 \u043F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u043E\u0439 \u0442\u0435\u043F\u043B\u043E\u044D\u043D\u0435\u0440\u0433\u0435\u0442\u0438\u043A\u0438 "
  },
  {
    id: 136,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "5",
    number: "2501",
    type: "",
    desc: ""
  },
  {
    id: 137,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "5",
    number: "2502",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 138,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "5",
    number: "2503",
    type: "",
    desc: ""
  },
  {
    id: 139,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "5",
    number: "2504",
    type: "\u041F\u0440\u0435\u043F\u043E\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0430\u044F",
    desc: "\u041A\u0430\u0444\u0435\u0434\u0440\u0430 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438 \u0441\u0432\u0430\u0440\u043E\u0447\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430"
  },
  {
    id: 140,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "5",
    number: "2505",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u041A\u0430\u0444\u0435\u0434\u0440\u0430 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438 \u0441\u0432\u0430\u0440\u043E\u0447\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430"
  },
  {
    id: 141,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "5",
    number: "2506",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u041A\u0430\u0444\u0435\u0434\u0440\u0430 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438 \u0441\u0432\u0430\u0440\u043E\u0447\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430"
  },
  {
    id: 142,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "5",
    number: "2507",
    type: "\u041A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441",
    desc: "\u041A\u0430\u0444\u0435\u0434\u0440\u0430 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438 \u0441\u0432\u0430\u0440\u043E\u0447\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430"
  },
  {
    id: 143,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "5",
    number: "2507\u0410",
    type: "\u041A\u0430\u0444\u0435\u0434\u0440\u0430",
    desc: "\u041A\u0430\u0444\u0435\u0434\u0440\u0430 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438 \u0441\u0432\u0430\u0440\u043E\u0447\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430"
  },
  {
    id: 144,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "5",
    number: "2508",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u041A\u0430\u0444\u0435\u0434\u0440\u0430 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438 \u0441\u0432\u0430\u0440\u043E\u0447\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430"
  },
  {
    id: 145,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "5",
    number: "2509",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u041A\u0430\u0444\u0435\u0434\u0440\u0430 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438 \u0441\u0432\u0430\u0440\u043E\u0447\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430"
  },
  {
    id: 146,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "5",
    number: "2510",
    type: "",
    desc: ""
  },
  {
    id: 147,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "5",
    number: "2511",
    type: "\u041F\u0440\u0435\u043F\u043E\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0430\u044F",
    desc: "\u041A\u0430\u0444\u0435\u0434\u0440\u0430 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438 \u0441\u0432\u0430\u0440\u043E\u0447\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430"
  },
  {
    id: 148,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "5",
    number: "2512",
    type: "\u041F\u0440\u0435\u043F\u043E\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0430\u044F",
    desc: "\u041A\u0430\u0444\u0435\u0434\u0440\u0430 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438 \u0441\u0432\u0430\u0440\u043E\u0447\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430"
  },
  {
    id: 149,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "5",
    number: "2513",
    type: "\u041F\u0440\u0435\u043F\u043E\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0430\u044F",
    desc: "\u041A\u0430\u0444\u0435\u0434\u0440\u0430 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438 \u0441\u0432\u0430\u0440\u043E\u0447\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430"
  },
  {
    id: 150,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "5",
    number: "2514",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 151,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "5",
    number: "2515",
    type: "",
    desc: ""
  },
  {
    id: 152,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "6",
    number: "2601",
    type: "",
    desc: ""
  },
  {
    id: 153,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "6",
    number: "2602",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: "\u041D\u0430\u0434\u0451\u0436\u043D\u043E\u0441\u0442\u044C \u0438 \u0434\u0438\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0430 \u0410\u0421"
  },
  {
    id: 154,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "6",
    number: "2603",
    type: "",
    desc: ""
  },
  {
    id: 155,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "6",
    number: "2604",
    type: "\u041F\u0440\u0435\u043F\u043E\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0430\u044F",
    desc: "\u041A\u0430\u0444\u0435\u0434\u0440\u0430 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u043A\u0438 \u0438 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0432 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0441\u0438\u0441\u0442\u0435\u043C\u0430\u0445"
  },
  {
    id: 156,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "6",
    number: "2605",
    type: "",
    desc: "\u041A\u0430\u0444\u0435\u0434\u0440\u0430 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u043A\u0438 \u0438 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0432 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0441\u0438\u0441\u0442\u0435\u043C\u0430\u0445"
  },
  {
    id: 157,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "6",
    number: "2606",
    type: "",
    desc: "\u041A\u0430\u0444\u0435\u0434\u0440\u0430 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u043A\u0438 \u0438 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0432 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0441\u0438\u0441\u0442\u0435\u043C\u0430\u0445"
  },
  {
    id: 158,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "6",
    number: "2607",
    type: "",
    desc: ""
  },
  {
    id: 159,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "6",
    number: "2608",
    type: "",
    desc: ""
  },
  {
    id: 160,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "6",
    number: "2609",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: "\u041A\u0430\u0444\u0435\u0434\u0440\u0430 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u043A\u0438 \u0438 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0432 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0441\u0438\u0441\u0442\u0435\u043C\u0430\u0445"
  },
  {
    id: 161,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "6",
    number: "2610",
    type: "",
    desc: ""
  },
  {
    id: 162,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "6",
    number: "2611",
    type: "\u041F\u0440\u0435\u043F\u043E\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0430\u044F",
    desc: "\u041A\u0430\u0444\u0435\u0434\u0440\u0430 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u043A\u0438 \u0438 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0432 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0441\u0438\u0441\u0442\u0435\u043C\u0430\u0445"
  },
  {
    id: 163,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "6",
    number: "2612",
    type: "\u041F\u0440\u0435\u043F\u043E\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0430\u044F",
    desc: "\u041A\u0430\u0444\u0435\u0434\u0440\u0430 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u043A\u0438 \u0438 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0432 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0441\u0438\u0441\u0442\u0435\u043C\u0430\u0445"
  },
  {
    id: 164,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "6",
    number: "2613",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: "\u041C\u0438\u043A\u0440\u043E\u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0440\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430 "
  },
  {
    id: 165,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "6",
    number: "2614",
    type: "\u041F\u0440\u0435\u043F\u043E\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0430\u044F",
    desc: "\u041A\u0430\u0444\u0435\u0434\u0440\u0430 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u043A\u0438 \u0438 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0432 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0441\u0438\u0441\u0442\u0435\u043C\u0430\u0445"
  },
  {
    id: 166,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "6",
    number: "2615",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0422\u0435\u043E\u0440\u0438\u044F \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F"
  },
  {
    id: 167,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "6",
    number: "2616",
    type: "\u0411\u044E\u0440\u043E",
    desc: "\u0421\u0442\u0443\u0434\u0435\u043D\u0447\u0435\u0441\u043A\u043E\u0435 \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u043E\u0440\u0441\u043A\u043E\u0435 \u0431\u044E\u0440\u043E"
  },
  {
    id: 168,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "6",
    number: "2617",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: "\u041A\u0430\u0444\u0435\u0434\u0440\u0430 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u043A\u0438 \u0438 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0432 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0441\u0438\u0441\u0442\u0435\u043C\u0430\u0445"
  },
  {
    id: 169,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "6",
    number: "2618",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u0442\u0435\u0445\u043D\u0438\u043A\u0430 \u0438 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u0438\u043A\u0430"
  },
  {
    id: 170,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "6",
    number: "2619",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0418\u0437\u043C\u0435\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430"
  },
  {
    id: 171,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "7",
    number: "2701",
    type: "\u041A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441",
    desc: ""
  },
  {
    id: 172,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "7",
    number: "2702",
    type: "",
    desc: ""
  },
  {
    id: 173,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "7",
    number: "2703",
    type: "\u0427\u0438\u0442\u0430\u043B\u044C\u043D\u044B\u0439 \u0437\u0430\u043B",
    desc: ""
  },
  {
    id: 174,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "7",
    number: "2704",
    type: "",
    desc: ""
  },
  {
    id: 175,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "7",
    number: "2705",
    type: "",
    desc: ""
  },
  {
    id: 176,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "7",
    number: "2706",
    type: "\u0411\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0430",
    desc: ""
  },
  {
    id: 177,
    campus: "\u0410\u0412",
    corpus: "2",
    floor: "8",
    number: "",
    type: "\u041A\u0430\u0444\u0435\u0434\u0440\u0430 \u0444\u0438\u0437\u043A\u0443\u043B\u044C\u0442\u0443\u0440\u044B",
    desc: ""
  },
  {
    id: 178,
    campus: "\u0410\u0412",
    corpus: "3",
    floor: "1",
    number: "3101",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0423\u0447\u0435\u0431\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"
  },
  {
    id: 179,
    campus: "\u0410\u0412",
    corpus: "3",
    floor: "1",
    number: "3102",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0423\u0447\u0435\u0431\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"
  },
  {
    id: 180,
    campus: "\u0410\u0412",
    corpus: "3",
    floor: "1",
    number: "3103",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0423\u0447\u0435\u0431\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"
  },
  {
    id: 181,
    campus: "\u0410\u0412",
    corpus: "3",
    floor: "1",
    number: "3104",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0423\u0447\u0435\u0431\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"
  },
  {
    id: 182,
    campus: "\u0410\u0412",
    corpus: "3",
    floor: "1",
    number: "3105",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0423\u0447\u0435\u0431\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"
  },
  {
    id: 183,
    campus: "\u0410\u0412",
    corpus: "3",
    floor: "1",
    number: "3106",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0423\u0447\u0435\u0431\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"
  },
  {
    id: 184,
    campus: "\u0410\u0412",
    corpus: "3",
    floor: "1",
    number: "3107",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0423\u0447\u0435\u0431\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"
  },
  {
    id: 185,
    campus: "\u0410\u0412",
    corpus: "3",
    floor: "1",
    number: "3108",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0423\u0447\u0435\u0431\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"
  },
  {
    id: 186,
    campus: "\u0410\u0412",
    corpus: "3",
    floor: "2",
    number: "3201",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0423\u0447\u0435\u0431\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"
  },
  {
    id: 187,
    campus: "\u0410\u0412",
    corpus: "3",
    floor: "2",
    number: "3202",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0423\u0447\u0435\u0431\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"
  },
  {
    id: 188,
    campus: "\u0410\u0412",
    corpus: "3",
    floor: "2",
    number: "3203",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0423\u0447\u0435\u0431\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"
  },
  {
    id: 189,
    campus: "\u0410\u0412",
    corpus: "3",
    floor: "2",
    number: "3204",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0423\u0447\u0435\u0431\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"
  },
  {
    id: 190,
    campus: "\u0410\u0412",
    corpus: "3",
    floor: "2",
    number: "3205",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0423\u0447\u0435\u0431\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"
  },
  {
    id: 191,
    campus: "\u0410\u0412",
    corpus: "3",
    floor: "2",
    number: "3206",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0423\u0447\u0435\u0431\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"
  },
  {
    id: 192,
    campus: "\u0410\u0412",
    corpus: "3",
    floor: "2",
    number: "3207",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0423\u0447\u0435\u0431\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"
  },
  {
    id: 193,
    campus: "\u0410\u0412",
    corpus: "3",
    floor: "2",
    number: "3209",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0423\u0447\u0435\u0431\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"
  },
  {
    id: 194,
    campus: "\u0410\u0412",
    corpus: "3",
    floor: "2",
    number: "3210",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0423\u0447\u0435\u0431\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"
  },
  {
    id: 195,
    campus: "\u0410\u0412",
    corpus: "3",
    floor: "2",
    number: "3211",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0423\u0447\u0435\u0431\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"
  },
  {
    id: 196,
    campus: "\u0410\u0412",
    corpus: "3",
    floor: "2",
    number: "3212",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0423\u0447\u0435\u0431\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"
  },
  {
    id: 197,
    campus: "\u0410\u0412",
    corpus: "3",
    floor: "2",
    number: "3213\u0410",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0423\u0447\u0435\u0431\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"
  },
  {
    id: 198,
    campus: "\u0410\u0412",
    corpus: "3",
    floor: "2",
    number: "3214",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0423\u0447\u0435\u0431\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"
  },
  {
    id: 199,
    campus: "\u0410\u0412",
    corpus: "3",
    floor: "3",
    number: "3301",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0423\u0447\u0435\u0431\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"
  },
  {
    id: 200,
    campus: "\u0410\u0412",
    corpus: "3",
    floor: "3",
    number: "3302",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0423\u0447\u0435\u0431\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"
  },
  {
    id: 201,
    campus: "\u0410\u0412",
    corpus: "3",
    floor: "3",
    number: "3303",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0423\u0447\u0435\u0431\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"
  },
  {
    id: 202,
    campus: "\u0410\u0412",
    corpus: "3",
    floor: "3",
    number: "3304",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0423\u0447\u0435\u0431\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"
  },
  {
    id: 203,
    campus: "\u0410\u0412",
    corpus: "3",
    floor: "3",
    number: "3305",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0423\u0447\u0435\u0431\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"
  },
  {
    id: 204,
    campus: "\u0410\u0412",
    corpus: "3",
    floor: "3",
    number: "3306",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0423\u0447\u0435\u0431\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"
  },
  {
    id: 205,
    campus: "\u0410\u0412",
    corpus: "3",
    floor: "3",
    number: "3307",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0423\u0447\u0435\u0431\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"
  },
  {
    id: 206,
    campus: "\u0410\u0412",
    corpus: "3",
    floor: "3",
    number: "3308",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0423\u0447\u0435\u0431\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"
  },
  {
    id: 207,
    campus: "\u0410\u0412",
    corpus: "3",
    floor: "4",
    number: "3401",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0423\u0447\u0435\u0431\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"
  },
  {
    id: 208,
    campus: "\u0410\u0412",
    corpus: "3",
    floor: "4",
    number: "3402",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0423\u0447\u0435\u0431\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"
  },
  {
    id: 209,
    campus: "\u0410\u0412",
    corpus: "3",
    floor: "4",
    number: "3404",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0423\u0447\u0435\u0431\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"
  },
  {
    id: 210,
    campus: "\u0410\u0412",
    corpus: "3",
    floor: "4",
    number: "3405",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0423\u0447\u0435\u0431\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"
  },
  {
    id: 211,
    campus: "\u0410\u0412",
    corpus: "3",
    floor: "4",
    number: "3406",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0423\u0447\u0435\u0431\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"
  },
  {
    id: 212,
    campus: "\u0410\u0412",
    corpus: "3",
    floor: "4",
    number: "3407",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0423\u0447\u0435\u0431\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"
  },
  {
    id: 213,
    campus: "\u0410\u0412",
    corpus: "3",
    floor: "4",
    number: "3408",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0423\u0447\u0435\u0431\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"
  },
  {
    id: 214,
    campus: "\u0410\u0412",
    corpus: "3",
    floor: "4",
    number: "3409",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0423\u0447\u0435\u0431\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"
  },
  {
    id: 215,
    campus: "\u0410\u0412",
    corpus: "3",
    floor: "4",
    number: "3410",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0423\u0447\u0435\u0431\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"
  },
  {
    id: 216,
    campus: "\u0410\u0412",
    corpus: "3",
    floor: "4",
    number: "3412",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0423\u0447\u0435\u0431\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"
  },
  {
    id: 217,
    campus: "\u0410\u0412",
    corpus: "3",
    floor: "4",
    number: "3414",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0423\u0447\u0435\u0431\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"
  },
  {
    id: 218,
    campus: "\u0410\u0412",
    corpus: "3",
    floor: "4",
    number: "3415",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0423\u0447\u0435\u0431\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"
  },
  {
    id: 219,
    campus: "\u0410\u0412",
    corpus: "3",
    floor: "5",
    number: "3501",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0423\u0447\u0435\u0431\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"
  },
  {
    id: 220,
    campus: "\u0410\u0412",
    corpus: "3",
    floor: "5",
    number: "3502",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0423\u0447\u0435\u0431\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"
  },
  {
    id: 221,
    campus: "\u0410\u0412",
    corpus: "3",
    floor: "5",
    number: "3503",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0423\u0447\u0435\u0431\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"
  },
  {
    id: 222,
    campus: "\u0410\u0412",
    corpus: "3",
    floor: "5",
    number: "3505",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0423\u0447\u0435\u0431\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"
  },
  {
    id: 223,
    campus: "\u0410\u0412",
    corpus: "3",
    floor: "5",
    number: "3506",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0423\u0447\u0435\u0431\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"
  },
  {
    id: 224,
    campus: "\u0410\u0412",
    corpus: "3",
    floor: "5",
    number: "3507",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0423\u0447\u0435\u0431\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"
  },
  {
    id: 225,
    campus: "\u0410\u0412",
    corpus: "3",
    floor: "5",
    number: "3508",
    type: "",
    desc: "\u0421\u043F\u0435\u0446\u043E\u0442\u0434\u0435\u043B"
  },
  {
    id: 226,
    campus: "\u0410\u0412",
    corpus: "3",
    floor: "5",
    number: "3510",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0423\u0447\u0435\u0431\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"
  },
  {
    id: 227,
    campus: "\u0410\u0412",
    corpus: "3",
    floor: "5",
    number: "3511",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0423\u0447\u0435\u0431\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"
  },
  {
    id: 228,
    campus: "\u0410\u0412",
    corpus: "3",
    floor: "5",
    number: "3512",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0423\u0447\u0435\u0431\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"
  },
  {
    id: 229,
    campus: "\u0410\u0412",
    corpus: "3",
    floor: "5",
    number: "3513",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0423\u0447\u0435\u0431\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"
  },
  {
    id: 230,
    campus: "\u0410\u0412",
    corpus: "3",
    floor: "5",
    number: "3514",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0423\u0447\u0435\u0431\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"
  },
  {
    id: 231,
    campus: "\u0410\u0412",
    corpus: "3",
    floor: "5",
    number: "",
    type: "\u0428\u0442\u0430\u0431 \u0413\u041E\u0421\u0427",
    desc: "\u0428\u0442\u0430\u0431 \u0413\u041E\u0421\u0427"
  },
  {
    id: 232,
    campus: "\u0410\u0412",
    corpus: "3",
    floor: "5",
    number: "3515",
    type: "",
    desc: "\u0412\u043E\u0435\u043D\u043D\u043E-\u0443\u0447\u0435\u0442\u043D\u044B\u0439 \u0441\u0442\u043E\u043B"
  },
  {
    id: 233,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "0",
    number: "4001",
    type: "",
    desc: "\u042D\u043B. \u0448\u0438\u0442\u043E\u0432\u0430\u044F"
  },
  {
    id: 234,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "0",
    number: "4002",
    type: "\u0413\u0430\u0440\u0434\u0435\u0440\u043E\u0431",
    desc: "\u0413\u0430\u0440\u0434\u0435\u0440\u043E\u0431"
  },
  {
    id: 235,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "0",
    number: "4004",
    type: "",
    desc: "\u041A\u0430\u043C\u0435\u0440\u0430 \u043F\u0440\u0438\u0442\u043E\u0447\u043D\u043E\u0439 \u0432\u0435\u043D\u0442\u0438\u043B\u044F\u0446\u0438\u0438"
  },
  {
    id: 236,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "0",
    number: "4005",
    type: "",
    desc: "\u041A\u0430\u043C\u0435\u0440\u0430 \u043F\u0440\u0438\u0442\u043E\u0447\u043D\u043E\u0439 \u0432\u0435\u043D\u0442\u0438\u043B\u044F\u0446\u0438\u0438"
  },
  {
    id: 237,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "0",
    number: "4006",
    type: "",
    desc: "\u042D\u043B. \u0448\u0438\u0442\u043E\u0432\u0430\u044F"
  },
  {
    id: 238,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "0",
    number: "4007",
    type: "",
    desc: ""
  },
  {
    id: 239,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "0",
    number: "4008",
    type: "",
    desc: ""
  },
  {
    id: 240,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "0",
    number: "4009",
    type: "",
    desc: ""
  },
  {
    id: 241,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "0",
    number: "4010",
    type: "",
    desc: ""
  },
  {
    id: 242,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "1",
    number: "4101",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0423\u0447\u0435\u0431\u043D\u0430\u044F \u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F \u043A\u0430\u0444\u0435\u0434\u0440\u044B \u0410\u041E\u0438\u0410\u0422\u041F"
  },
  {
    id: 243,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "1",
    number: "4101\u0410",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 244,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "1",
    number: "4102",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0423\u0447\u0435\u0431\u043D\u0430\u044F \u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F \u043A\u0430\u0444\u0435\u0434\u0440\u044B \u0410\u041E\u0438\u0410\u0422\u041F"
  },
  {
    id: 245,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "1",
    number: "4102\u0410",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 246,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "1",
    number: "4103",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 247,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "1",
    number: "4103\u0410",
    type: "",
    desc: ""
  },
  {
    id: 248,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "1",
    number: "4104",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 249,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "1",
    number: "4104\u0410",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: "\u041A\u0430\u0444. '\u0422\u0435\u0440\u043C\u043E\u0434\u0438\u043D\u0430\u043C\u0438\u043A\u0430,\u0438,\u043D\u0435\u0440\u0430\u0432\u043D\u043E\u0432\u0435\u0441\u043D\u044B\u0435 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u044B,\u043F\u0435\u0440\u0435\u043D\u043E\u0441\u0430'"
  },
  {
    id: 250,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "1",
    number: "4105",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0423\u0447\u0435\u0431\u043D\u0430\u044F \u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F \u043A\u0430\u0444\u0435\u0434\u0440\u044B \u0410\u041E\u0438\u0410\u0422\u041F"
  },
  {
    id: 251,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "1",
    number: "4105\u0410",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 252,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "1",
    number: "4106",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 253,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "1",
    number: "4106\u0410",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 254,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "1",
    number: "4107",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 255,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "1",
    number: "4107\u0410",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 256,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "1",
    number: "4108",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 257,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "1",
    number: "4108\u0410",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: "\u041A\u0430\u0444. '\u0422\u0435\u0440\u043C\u043E\u0434\u0438\u043D\u0430\u043C\u0438\u043A\u0430,\u0438,\u043D\u0435\u0440\u0430\u0432\u043D\u043E\u0432\u0435\u0441\u043D\u044B\u0435 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u044B,\u043F\u0435\u0440\u0435\u043D\u043E\u0441\u0430'"
  },
  {
    id: 258,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "1",
    number: "4109",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 259,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "1",
    number: "4109\u0410",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0426\u0435\u043D\u0442\u0440 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0438 \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u044F (\u0446\u0442\u043F\u043E)"
  },
  {
    id: 260,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "1",
    number: "4110",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 261,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "1",
    number: "4111\u0410",
    type: "\u0423\u0431\u043E\u0440\u043D\u0430\u044F",
    desc: "\u041C\u0443\u0436\u0441\u043A\u0430\u044F"
  },
  {
    id: 262,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "1",
    number: "4112\u0410",
    type: "\u0423\u0431\u043E\u0440\u043D\u0430\u044F",
    desc: "\u0416\u0435\u043D\u0441\u043A\u0430\u044F"
  },
  {
    id: 263,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "1",
    number: "4113\u0410",
    type: "\u0423\u0431\u043E\u0440\u043D\u0430\u044F",
    desc: "\u041C\u0443\u0436\u0441\u043A\u0430\u044F"
  },
  {
    id: 264,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "1",
    number: "4114\u0410",
    type: "\u0423\u0431\u043E\u0440\u043D\u0430\u044F",
    desc: "\u0416\u0435\u043D\u0441\u043A\u0430\u044F"
  },
  {
    id: 265,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "2",
    number: "4201",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 266,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "2",
    number: "4201\u0410",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 267,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "2",
    number: "4202",
    type: "\u0410\u0440\u0445\u0438\u0432",
    desc: "\u0418\u043D\u0441\u0442\u0438\u0442\u0443\u0442 \u0434\u0438\u0441\u0442\u0430\u043D\u0446\u0438\u043E\u043D\u043D\u043E\u0433\u043E \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u044F"
  },
  {
    id: 268,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "2",
    number: "4202\u0410-\u041B",
    type: "",
    desc: "\u0410\u043C\u0444\u0438\u0442\u0435\u0430\u0442\u0440"
  },
  {
    id: 269,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "2",
    number: "4202\u0410-\u041F",
    type: "",
    desc: "\u0410\u043C\u0444\u0438\u0442\u0435\u0430\u0442\u0440"
  },
  {
    id: 270,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "2",
    number: "4203",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 271,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "2",
    number: "4203\u0410",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: '\u041A\u0430\u0444\u0435\u0434\u0440\u0430 "\u0422\u0435\u0440\u043C\u043E\u0434\u0438\u043D\u0430\u043C\u0438\u043A\u0430 \u0438 \u043D\u0435\u0440\u0430\u0432\u043D\u043E\u0432\u0435\u0441\u043D\u044B\u0435 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u044B \u043F\u0435\u0440\u0435\u043D\u043E\u0441\u0430"'
  },
  {
    id: 272,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "2",
    number: "4204",
    type: "\u041F\u0440\u0435\u043F\u043E\u0434\u0430\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0430\u044F",
    desc: ""
  },
  {
    id: 273,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "2",
    number: "4204\u0410",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 274,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "2",
    number: "4205",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: '\u041A\u0430\u0444\u0435\u0434\u0440\u0430 "\u042D\u043A\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u044C \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0441\u0438\u0441\u0442\u0435\u043C"'
  },
  {
    id: 275,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "2",
    number: "4205-2",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: '\u041A\u0430\u0444\u0435\u0434\u0440\u0430 "\u042D\u043A\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u044C \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0441\u0438\u0441\u0442\u0435\u043C"'
  },
  {
    id: 276,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "2",
    number: "4205\u0410",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0426\u0435\u043D\u0442\u0440 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0438 \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u044F (\u0426\u0422\u041F\u041E)"
  },
  {
    id: 277,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "2",
    number: "4206",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: '\u041A\u0430\u0444\u0435\u0434\u0440\u0430 "\u042D\u043A\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u044C \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0441\u0438\u0441\u0442\u0435\u043C"'
  },
  {
    id: 278,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "2",
    number: "4206\u0410",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 279,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "2",
    number: "4207",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: '\u041A\u0430\u0444\u0435\u0434\u0440\u0430 "\u042D\u043A\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u044C \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0441\u0438\u0441\u0442\u0435\u043C"'
  },
  {
    id: 280,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "2",
    number: "4207\u0410",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: '\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F "\u041F\u043E\u043B\u0435\u0437\u043D\u044B\u0435 \u0438\u0441\u043A\u043E\u043F\u0430\u0435\u043C\u044B\u0435"'
  },
  {
    id: 281,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "2",
    number: "4208\u0410",
    type: "\u041C\u0443\u0437\u0435\u0439",
    desc: '\u041C\u0438\u043D\u0435\u0440\u0430\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043C\u0443\u0437\u0435\u0439, \u041A\u0430\u0444\u0435\u0434\u0440\u0430 "\u0422\u0435\u0445\u043D\u0438\u043A\u0430 \u0438 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u044F \u0433\u043E\u0440\u043D\u043E\u0433\u043E \u0438 \u043D\u0435\u0444\u0442\u0435\u0433\u0430\u0437\u043E\u0432\u043E\u0433\u043E \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430"'
  },
  {
    id: 282,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "2",
    number: "4209",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 283,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "2",
    number: "4209\u0410",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 284,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "2",
    number: "4210",
    type: "\u041F\u0440\u0435\u043F\u043E\u0434\u0430\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0430\u044F",
    desc: '\u041A\u0430\u0444\u0435\u0434\u0440\u0430 "\u042D\u043A\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u044C \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0441\u0438\u0441\u0442\u0435\u043C"'
  },
  {
    id: 285,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "2",
    number: "4210\u0410",
    type: "",
    desc: '\u041A\u0430\u0444\u0435\u0434\u0440\u0430 "\u042D\u043A\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u044C \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0441\u0438\u0441\u0442\u0435\u043C"'
  },
  {
    id: 286,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "2",
    number: "4210\u0410-2",
    type: "",
    desc: ""
  },
  {
    id: 287,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "2",
    number: "4211",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 288,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "2",
    number: "4211\u0410-1",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F \u0438\u043C\u0435\u043D\u0438 \u041B\u0435\u043E\u043D\u0438\u0434\u0430 \u0410\u0440\u043A\u0430\u0434\u044C\u0435\u0432\u0438\u0447\u0430 \u041A\u043E\u0441\u0442\u0430\u043D\u0434\u043E\u0432\u0430"
  },
  {
    id: 289,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "2",
    number: "4211\u0410-2",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 290,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "2",
    number: "4212",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 291,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "2",
    number: "4212\u0410",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: '\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F "\u041C\u0438\u043D\u0435\u0440\u0430\u043B\u043E\u0433\u0438\u044F, \u043F\u0435\u0442\u0440\u043E\u0433\u0440\u0430\u0444\u0438\u044F \u0438 \u043F\u043E\u043B\u0435\u0437\u043D\u044B\u0435 \u0438\u0441\u043A\u043E\u043F\u0430\u0435\u043C\u044B\u0435"'
  },
  {
    id: 292,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "2",
    number: "4213",
    type: "",
    desc: "\u041F\u0435\u0440\u0435\u0445\u043E\u0434"
  },
  {
    id: 293,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "2",
    number: "4213\u0410",
    type: "",
    desc: "\u0412\u044B\u0445\u043E\u0434 \u043D\u0430 \u043B\u0435\u0441\u0442\u043D\u0438\u0446\u0443"
  },
  {
    id: 294,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "2",
    number: "4214\u0410",
    type: "",
    desc: "\u0412\u044B\u0445\u043E\u0434 \u043D\u0430 \u043B\u0435\u0441\u0442\u043D\u0438\u0446\u0443"
  },
  {
    id: 295,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "3",
    number: "4301",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 296,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "3",
    number: "4302",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 297,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "3",
    number: "4303",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 298,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "3",
    number: "4304",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 299,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "3",
    number: "4305",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 300,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "3",
    number: "4306",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 301,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "3",
    number: "4307",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 302,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "3",
    number: "4308",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 303,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "3",
    number: "4309",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 304,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "3",
    number: "4310",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 305,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "3",
    number: "4311",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 306,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "3",
    number: "4312",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 307,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "3",
    number: "4313",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 308,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "3",
    number: "4314",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 309,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "4",
    number: "4401",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 310,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "4",
    number: "4402",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 311,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "4",
    number: "4403",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 312,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "4",
    number: "4404",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 313,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "4",
    number: "4405",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 314,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "4",
    number: "4406",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 315,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "4",
    number: "4407",
    type: "\u041C\u0443\u043B\u044C\u0442\u0438\u043C\u0435\u0434\u0438\u0439\u043D\u0430\u044F \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 316,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "4",
    number: "4408",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 317,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "4",
    number: "4409",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 318,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "4",
    number: "4410",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 319,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "4",
    number: "4411",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 320,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "4",
    number: "4412",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 321,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "4",
    number: "4413",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 322,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "5",
    number: "4501",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0423\u0447\u0435\u0431\u043D\u043E-\u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0430\u044F \u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F / \u041A\u0430\u0444. '\u041F\u0440\u043E\u0446\u0435\u0441\u0441\u044B \u0438 \u0430\u043F\u043F\u0430\u0440\u0430\u0442\u044B \u0445\u0438\u043C\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438'"
  },
  {
    id: 323,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "5",
    number: "4502",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u043D\u0442\u0441\u043A\u0430\u044F",
    desc: "\u041B\u0430\u0431\u043E\u0440\u0430\u043D\u0442\u0441\u043A\u0430\u044F / \u041A\u0430\u0444. '\u041F\u0440\u043E\u0446\u0435\u0441\u0441\u044B \u0438 \u0430\u043F\u043F\u0430\u0440\u0430\u0442\u044B \u0445\u0438\u043C\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438'"
  },
  {
    id: 324,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "5",
    number: "4503",
    type: "\u041F\u0440\u0435\u043F\u043E\u0434\u0430\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0430\u044F",
    desc: "\u041A\u0430\u0444. '\u041F\u0440\u043E\u0446\u0435\u0441\u0441\u044B \u0438 \u0430\u043F\u043F\u0430\u0440\u0430\u0442\u044B \u0445\u0438\u043C\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438'"
  },
  {
    id: 325,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "5",
    number: "4503\u0410",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 326,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "5",
    number: "4504",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 327,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "5",
    number: "4505",
    type: "\u041C\u0443\u043B\u044C\u0442\u0438\u043C\u0435\u0434\u0438\u0439\u043D\u0430\u044F \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u043A\u0430\u0444. '\u041F\u0440\u043E\u0446\u0435\u0441\u0441\u044B \u0438 \u0430\u043F\u043F\u0430\u0440\u0430\u0442\u044B \u0445\u0438\u043C\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438'"
  },
  {
    id: 328,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "5",
    number: "4506",
    type: "\u041F\u0440\u0435\u043F\u043E\u0434\u0430\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0430\u044F",
    desc: "\u041A\u0430\u0444. '\u041F\u0440\u043E\u0446\u0435\u0441\u0441\u044B \u0438 \u0430\u043F\u043F\u0430\u0440\u0430\u0442\u044B \u0445\u0438\u043C\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438'"
  },
  {
    id: 329,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "5",
    number: "4507",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 330,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "5",
    number: "4508",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 331,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "5",
    number: "4509",
    type: "\u041C\u0443\u043B\u044C\u0442\u0438\u043C\u0435\u0434\u0438\u0439\u043D\u0430\u044F \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u041B\u0435\u043A\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u043C\u0443\u043B\u044C\u0442\u0438\u043C\u0435\u0434\u0438\u0439\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441 / \u041A\u0430\u0444. '\u041F\u0440\u043E\u0446\u0435\u0441\u0441\u044B \u0438 \u0430\u043F\u043F\u0430\u0440\u0430\u0442\u044B \u0445\u0438\u043C\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438'"
  },
  {
    id: 332,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "5",
    number: "4510",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 333,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "5",
    number: "4511",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 334,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "5",
    number: "4512",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 335,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "6",
    number: "4601",
    type: "\u041F\u0440\u0435\u043F\u043E\u0434\u0430\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0430\u044F",
    desc: "\u041A\u0430\u0444. '\u041F\u0440\u0438\u043A\u043B\u0430\u0434\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0442\u0438\u043A\u0430'"
  },
  {
    id: 336,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "6",
    number: "4602",
    type: "\u041F\u0440\u0435\u043F\u043E\u0434\u0430\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0430\u044F",
    desc: "\u0417\u0430\u0432\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u043A\u0430\u0444\u0435\u0434\u0440\u043E\u0439 \u041A\u043E\u043B\u0442\u0443\u043D\u043E\u0432 \u0418\u0433\u043E\u0440\u044C \u0418\u043B\u044C\u0438\u0447 / \u041A\u0430\u0444. '\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0435 \u0441\u0438\u0441\u0442\u0435\u043C\u044B \u0438 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438'"
  },
  {
    id: 337,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "6",
    number: "4603",
    type: "\u041A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441",
    desc: "\u041A\u0430\u0444. '\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0435 \u0441\u0438\u0441\u0442\u0435\u043C\u044B \u0438 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438'"
  },
  {
    id: 338,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "6",
    number: "4604",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 339,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "6",
    number: "4605",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 340,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "6",
    number: "4606",
    type: "\u041C\u0443\u043B\u044C\u0442\u0438\u043C\u0435\u0434\u0438\u0439\u043D\u0430\u044F \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 341,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "6",
    number: "4607",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F \u0434\u0435\u043B\u043E\u0432\u044B\u0445 \u0438\u0433\u0440"
  },
  {
    id: 342,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "6",
    number: "4608",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 343,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "6",
    number: "4609",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u041A\u0430\u0444. '\u0418\u0437\u0434\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0435 \u0434\u0435\u043B\u043E \u0438 \u043A\u043D\u0438\u0433\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u0435'"
  },
  {
    id: 344,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "6",
    number: "4610",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 345,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "6",
    number: "4611",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 346,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "6",
    number: "4612",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 347,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "7",
    number: "4701",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 348,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "7",
    number: "4702",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 349,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "7",
    number: "4703",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 350,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "7",
    number: "4704",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 351,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "7",
    number: "4705",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 352,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "7",
    number: "4707",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 353,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "7",
    number: "4708",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 354,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "7",
    number: "4709",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 355,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "7",
    number: "4710",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 356,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "7",
    number: "4711",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 357,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "7",
    number: "4712",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 358,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "8",
    number: "4801",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: "\u041A\u0430\u0444. '\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u0430\u044F \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u044C'"
  },
  {
    id: 359,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "8",
    number: "4802",
    type: "\u041F\u0440\u0435\u043F\u043E\u0434\u0430\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0430\u044F",
    desc: "\u041A\u0430\u0444. '\u041F\u0440\u0438\u043A\u043B\u0430\u0434\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0442\u0438\u043A\u0430'"
  },
  {
    id: 360,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "8",
    number: "4803",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: "\u041A\u0430\u0444. '\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0442\u0438\u043A\u0430 \u0438 \u0432\u044B\u0447\u0438\u0441\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430'"
  },
  {
    id: 361,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "8",
    number: "4804",
    type: "\u041F\u0440\u0435\u043F\u043E\u0434\u0430\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0430\u044F",
    desc: "\u0417\u0430\u0432\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u043A\u0430\u0444\u0435\u0434\u0440\u043E\u0439 \u0421\u0443\u0432\u043E\u0440\u043E\u0432 \u0421\u0442\u0430\u043D\u0438\u0441\u043B\u0430\u0432 \u0412\u0430\u0434\u0438\u043C\u043E\u0432\u0438\u0447 / \u041A\u0430\u0444. '\u041F\u0440\u0438\u043A\u043B\u0430\u0434\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0442\u0438\u043A\u0430'"
  },
  {
    id: 362,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "8",
    number: "4805",
    type: "\u041C\u0443\u043B\u044C\u0442\u0438\u043C\u0435\u0434\u0438\u0439\u043D\u0430\u044F \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 363,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "8",
    number: "4806",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: "\u041A\u0430\u0444. '\u041F\u0440\u0438\u043A\u043B\u0430\u0434\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0442\u0438\u043A\u0430'"
  },
  {
    id: 364,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "8",
    number: "4807",
    type: "",
    desc: "\u0412\u044B\u0447\u0438\u0441\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0446\u0435\u043D\u0442\u0440"
  },
  {
    id: 365,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "8",
    number: "4808",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 366,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "8",
    number: "4809",
    type: "\u041C\u0443\u043B\u044C\u0442\u0438\u043C\u0435\u0434\u0438\u0439\u043D\u0430\u044F \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 367,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "8",
    number: "4810",
    type: "\u041C\u0443\u043B\u044C\u0442\u0438\u043C\u0435\u0434\u0438\u0439\u043D\u0430\u044F \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 368,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "8",
    number: "4811",
    type: "\u041C\u0443\u043B\u044C\u0442\u0438\u043C\u0435\u0434\u0438\u0439\u043D\u0430\u044F \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 369,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "8",
    number: "4812",
    type: "\u041F\u0440\u0435\u043F\u043E\u0434\u0430\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0430\u044F",
    desc: "\u0417\u0430\u0432\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u043A\u0430\u0444\u0435\u0434\u0440\u043E\u0439 \u0424\u0451\u0434\u043E\u0440\u043E\u0432 \u041D\u0438\u043A\u043E\u043B\u0430\u0439 \u0412\u043B\u0430\u0434\u0438\u043C\u0438\u0440\u043E\u0432\u0438\u0447 / \u041A\u0430\u0444. '\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u0430\u044F \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u044C'"
  },
  {
    id: 370,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "8",
    number: "4813",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 371,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "8",
    number: "4814",
    type: "\u041F\u0440\u0435\u043F\u043E\u0434\u0430\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0430\u044F",
    desc: "\u041A\u0430\u0444. '\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u0430\u044F \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u044C'"
  },
  {
    id: 372,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "9",
    number: "4901",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 373,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "9",
    number: "4902",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 374,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "9",
    number: "4903",
    type: "",
    desc: "\u0414\u0438\u0441\u043A\u0443\u0441\u0441\u0438\u043E\u043D\u043D\u044B\u0439 \u043A\u043B\u0443\u0431"
  },
  {
    id: 375,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "9",
    number: "4904",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 376,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "9",
    number: "4905",
    type: "\u0411\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0430",
    desc: ""
  },
  {
    id: 377,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "9",
    number: "4906",
    type: "\u0427\u0438\u0442\u0430\u043B\u044C\u043D\u044B\u0439 \u0437\u0430\u043B",
    desc: "\u0427\u0438\u0442\u0430\u043B\u044C\u043D\u044B\u0439 \u0437\u0430\u043B \u0434\u043B\u044F \u043F\u0440\u0435\u043F\u043E\u0434\u0430\u0432\u0430\u0442\u0435\u043B\u0435\u0439 (\u043F\u043D.-\u043F\u0442. 11.00-18.00)"
  },
  {
    id: 378,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "9",
    number: "4907",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 379,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "9",
    number: "4907\u0410",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 380,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "9",
    number: "4908",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 381,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "9",
    number: "4909",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 382,
    campus: "\u0410\u0412",
    corpus: "4",
    floor: "9",
    number: "4910",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 383,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "4",
    number: "411",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: "\u041A\u0430\u0444\u0435\u0434\u0440\u0430 '\u0425\u0438\u043C\u0411\u0438\u043E\u0442\u0435\u0445'"
  },
  {
    id: 384,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "4",
    number: "412",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 385,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "4",
    number: "413",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 386,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "4",
    number: "414",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 387,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "4",
    number: "415",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 388,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "4",
    number: "416",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u041A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"
  },
  {
    id: 389,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "4",
    number: "417",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u041A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"
  },
  {
    id: 390,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "4",
    number: "418",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 391,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "4",
    number: "419",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 392,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "4",
    number: "420",
    type: "\u041A\u0430\u0444\u0435\u0434\u0440\u0430",
    desc: "\u041C\u0435\u043D\u0435\u0434\u0436\u043C\u0435\u043D\u0442 \u0430\u0440\u0445\u0438\u0432"
  },
  {
    id: 393,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "4",
    number: "421",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 394,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "4",
    number: "421\u0410",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 395,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "4",
    number: "421\u0411",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 396,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "4",
    number: "422",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 397,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "4",
    number: "423",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 398,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "4",
    number: "424",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 399,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "4",
    number: "425",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 400,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "4",
    number: "425\u0410",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 401,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "4",
    number: "426",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 402,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "4",
    number: "429",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 403,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "4",
    number: "430",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 404,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "4",
    number: "431",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: "\u041D\u0430\u0443\u0447\u043D\u043E-\u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0430\u044F \u0438 \u044D\u043A\u0441\u043F\u0435\u0440\u0438\u043C\u0435\u043D\u0442\u0430\u043B\u044C\u043D\u0430\u044F \u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F \u044D\u043A\u043E\u043B\u043E\u0433\u0438\u0438 \u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u043E\u0433\u043E \u0440\u0435\u0433\u0438\u043E\u043D\u0430"
  },
  {
    id: 405,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "4",
    number: "432",
    type: "\u041F\u0440\u0435\u043F\u043E\u0434\u0430\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0430\u044F",
    desc: "\u041A\u0430\u0444\u0435\u0434\u0440\u0430 '\u0425\u0438\u043C\u0411\u0438\u043E\u0442\u0435\u0445'"
  },
  {
    id: 406,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "4",
    number: "433",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: "\u041A\u0430\u0444\u0435\u0434\u0440\u0430 '\u0425\u0438\u043C\u0411\u0438\u043E\u0442\u0435\u0445'"
  },
  {
    id: 407,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "4",
    number: "433\u0410",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 408,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "5",
    number: "501",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 409,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "5",
    number: "502",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 410,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "5",
    number: "503",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 411,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "5",
    number: "503\u0410-\u0411",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 412,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "5",
    number: "504",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 413,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "5",
    number: "505",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 414,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "5",
    number: "506",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 415,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "5",
    number: "507",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 416,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "5",
    number: "508",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 417,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "5",
    number: "509",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 418,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "5",
    number: "510",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 419,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "5",
    number: "511",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 420,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "5",
    number: "512",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 421,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "5",
    number: "513",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 422,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "5",
    number: "514",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 423,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "5",
    number: "515",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 424,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "5",
    number: "516",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 425,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "5",
    number: "517",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u041A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"
  },
  {
    id: 426,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "5",
    number: "518",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u041A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"
  },
  {
    id: 427,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "5",
    number: "523",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 428,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "5",
    number: "523\u0410",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 429,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "5",
    number: "524",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 430,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "5",
    number: "524\u0410",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 431,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "5",
    number: "525",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 432,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "5",
    number: "526",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 433,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "5",
    number: "527",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 434,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "5",
    number: "528",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 435,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "5",
    number: "529",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 436,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "5",
    number: "532",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 437,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "5",
    number: "533",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u041A\u043E\u0432\u043E\u0440\u043A\u0438\u043D\u0433"
  },
  {
    id: 438,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "5",
    number: "534",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 439,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "5",
    number: "535",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 440,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "5",
    number: "536",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 441,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "5",
    number: "537",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 442,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "5",
    number: "537\u0412",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 443,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "5",
    number: "537\u0421",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 444,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "5",
    number: "538",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 445,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "5",
    number: "539",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 446,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "5",
    number: "",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0421\u043F\u043E\u0440\u0442\u0437\u0430\u043B \u041A\u043E\u043F\u043E\u044D\u0439\u0440\u0430"
  },
  {
    id: 447,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "1",
    number: "101",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 448,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "1",
    number: "",
    type: "\u0421\u043F\u043E\u0440\u0442\u0437\u0430\u043B",
    desc: "\u0421\u043F\u043E\u0440\u0442\u0437\u0430\u043B \u0431\u043E\u043A\u0441\u0430"
  },
  {
    id: 449,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "1",
    number: "103",
    type: "\u0421\u043F\u043E\u0440\u0442\u0437\u0430\u043B \u21164",
    desc: "\u0421\u043F\u043E\u0440\u0442\u0437\u0430\u043B \u0442\u044F\u0436\u0435\u043B\u043E\u0439 \u0430\u0442\u043B\u0435\u0442\u0438\u043A\u0438"
  },
  {
    id: 450,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "1",
    number: "104",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 451,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "1",
    number: "105",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 452,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "1",
    number: "105\u0410",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 453,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "1",
    number: "106",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 454,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "1",
    number: "106\u0410",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 455,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "1",
    number: "108",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 456,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "1",
    number: "110",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 457,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "1",
    number: "114",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 458,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "1",
    number: "115",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 459,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "1",
    number: "125",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 460,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "1",
    number: "126",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 461,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "1",
    number: "128",
    type: "\u041F\u0440\u0435\u043F\u043E\u0434\u0430\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0430\u044F",
    desc: ""
  },
  {
    id: 462,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "1",
    number: "129",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 463,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "1",
    number: "133",
    type: "\u0421\u043F\u043E\u0440\u0442\u0437\u0430\u043B \u21165",
    desc: ""
  },
  {
    id: 464,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "1",
    number: "136",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 465,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "1",
    number: "137",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 466,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "1",
    number: "",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F \u0441\u043E\u043F\u0440\u043E\u0442\u0438\u0432\u043B\u0435\u043D\u0438\u044F \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432 "
  },
  {
    id: 467,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "2",
    number: "203",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 468,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "2",
    number: "204",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 469,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "2",
    number: "205",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 470,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "2",
    number: "206",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 471,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "2",
    number: "207",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 472,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "2",
    number: "208",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 473,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "2",
    number: "209",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 474,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "2",
    number: "210",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 475,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "2",
    number: "211",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 476,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "2",
    number: "212",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 477,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "2",
    number: "213",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 478,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "2",
    number: "213\u0410",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 479,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "2",
    number: "214",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0427\u0438\u0442\u0430\u043B\u044C\u043D\u044B\u0439 \u0437\u0430\u043B"
  },
  {
    id: 480,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "2",
    number: "217",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 481,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "2",
    number: "218",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 482,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "2",
    number: "220",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 483,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "2",
    number: "221",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 484,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "2",
    number: "222",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 485,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "2",
    number: "224",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 486,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "2",
    number: "225",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 487,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "2",
    number: "227",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 488,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "2",
    number: "228",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 489,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "2",
    number: "229",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 490,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "2",
    number: "230",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 491,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "2",
    number: "231",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 492,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "2",
    number: "232",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 493,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "2",
    number: "232\u0410",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 494,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "2",
    number: "233",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "'\u041A\u0430\u0444\u0435\u0434\u0440\u0430 \u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F, \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u043E\u043C'"
  },
  {
    id: 495,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "2",
    number: "234",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 496,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "2",
    number: "235",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 497,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "2",
    number: "236",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 498,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "2",
    number: "237",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 499,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "2",
    number: "238",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 500,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "2",
    number: "",
    type: "\u0414\u043E\u0431\u0440\u043E\u0446\u0435\u043D\u0442\u0440",
    desc: "\u041A\u043E\u0432\u043E\u0440\u043A\u0438\u043D\u0433 \u0414\u043E\u0431\u0440\u043E\u0446\u0435\u043D\u0442\u0440"
  },
  {
    id: 501,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "3",
    number: "301",
    type: "\u0421\u0430\u043D\u0438\u0442\u0430\u0440\u043D\u0430\u044F \u043A\u043E\u043C\u043D\u0430\u0442\u0430",
    desc: ""
  },
  {
    id: 502,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "3",
    number: "302",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 503,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "3",
    number: "303",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 504,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "3",
    number: "304",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u041E\u043F\u0435\u0447\u0430\u0442\u0430\u043D\u043E"
  },
  {
    id: 505,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "3",
    number: "305",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u041E\u043F\u0435\u0447\u0430\u0442\u0430\u043D\u043E"
  },
  {
    id: 506,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "3",
    number: "307",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 507,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "3",
    number: "308",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 508,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "3",
    number: "308\u0410",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 509,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "3",
    number: "309",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 510,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "3",
    number: "310",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 511,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "3",
    number: "311",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 512,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "3",
    number: "312",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 513,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "3",
    number: "313",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u041A\u0430\u0444\u0435\u0434\u0440\u0430 '\u0418\u043D\u043E\u0441\u0442\u0440\u0430\u043D\u043D\u044B\u0435, \u044F\u0437\u044B\u043A\u0438'"
  },
  {
    id: 514,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "3",
    number: "314",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0423\u0447\u0435\u0431\u043D\u0430\u044F \u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F '\u041C\u0435\u0445\u0430\u043D\u0438\u043A\u0430 \u0438 \u043C\u043E\u043B\u0435\u043A\u0443\u043B\u044F\u0440\u043D\u0430\u044F \u0444\u0438\u0437\u0438\u043A\u0430'. \u041A\u0430\u0444\u0435\u0434\u0440\u0430 '\u0424\u0438\u0437\u0438\u043A\u0430'"
  },
  {
    id: 515,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "3",
    number: "314\u0410",
    type: "\u041C\u0430\u0441\u0442\u0435\u0440\u0441\u043A\u0430\u044F",
    desc: "\u0423\u0447\u0435\u0431\u043D\u0430\u044F \u043C\u0430\u0441\u0442\u0435\u0440\u0441\u043A\u0430\u044F. \u041A\u0430\u0444\u0435\u0434\u0440\u0430 '\u0424\u0438\u0437\u0438\u043A\u0430'"
  },
  {
    id: 516,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "3",
    number: "315",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0423\u0447\u0435\u0431\u043D\u0430\u044F \u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F '\u041E\u043F\u0442\u0438\u043A\u0430'. \u041A\u0430\u0444\u0435\u0434\u0440\u0430 '\u0424\u0438\u0437\u0438\u043A\u0430'"
  },
  {
    id: 517,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "3",
    number: "316",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0423\u0447\u0435\u0431\u043D\u0430\u044F \u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F '\u0424\u0438\u0437\u0438\u043A\u0430 \u043F\u043E\u043B\u0443\u043F\u0440\u043E\u0432\u043E\u0434\u043D\u0438\u043A\u043E\u0432'. \u041A\u0430\u0444\u0435\u0434\u0440\u0430 '\u0424\u0438\u0437\u0438\u043A\u0430'"
  },
  {
    id: 518,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "3",
    number: "317",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0423\u0447\u0435\u0431\u043D\u0430\u044F \u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F '\u042D\u043B\u0435\u043A\u0442\u0440\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0438 \u043C\u0430\u0433\u043D\u0435\u0442\u0438\u0437\u043C'. \u041A\u0430\u0444\u0435\u0434\u0440\u0430 '\u0424\u0438\u0437\u0438\u043A\u0430'"
  },
  {
    id: 519,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "3",
    number: "318",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 520,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "3",
    number: "319",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F. \u041A\u0430\u0444\u0435\u0434\u0440\u0430 '\u041C\u0435\u043D\u0435\u0434\u0436\u043C\u0435\u043D\u0442'"
  },
  {
    id: 521,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "3",
    number: "320",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u041F\u0440\u0435\u043F\u043E\u0434\u0430\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0430\u044F. \u041A\u0430\u0444\u0435\u0434\u0440\u0430 '\u042D\u043A\u043E\u043D\u043E\u043C\u0438\u043A\u0430 \u0438 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F'"
  },
  {
    id: 522,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "3",
    number: "321",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0423\u0447\u0435\u0431\u043D\u0430\u044F \u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F '\u041C\u0435\u0445\u0430\u043D\u0438\u043A\u0430 \u0438 \u043C\u043E\u043B\u0435\u043A\u0443\u043B\u044F\u0440\u043D\u0430\u044F \u0444\u0438\u0437\u0438\u043A\u0430'. \u041A\u0430\u0444\u0435\u0434\u0440\u0430 '\u0424\u0438\u0437\u0438\u043A\u0430'"
  },
  {
    id: 523,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "3",
    number: "321\u0410",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0423\u0447\u0435\u0431\u043D\u043E-\u043C\u0435\u0442\u043E\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442. \u041A\u0430\u0444\u0435\u0434\u0440\u0430 '\u0424\u0438\u0437\u0438\u043A\u0430'"
  },
  {
    id: 524,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "3",
    number: "321\u0411",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: "\u041D\u0430\u0443\u0447\u043D\u043E-\u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0430\u044F \u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F. \u041A\u0430\u0444\u0435\u0434\u0440\u0430 '\u0424\u0438\u0437\u0438\u043A\u0430'"
  },
  {
    id: 525,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "3",
    number: "321\u0412",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u043D\u0430\u044F \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F. \u041A\u0430\u0444\u0435\u0434\u0440\u0430 '\u0424\u0438\u0437\u0438\u043A\u0430'"
  },
  {
    id: 526,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "3",
    number: "322",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 527,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "3",
    number: "323",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 528,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "3",
    number: "324",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u041F\u0440\u0435\u043F\u043E\u0434\u0430\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0430\u044F. \u041A\u0430\u0444\u0435\u0434\u0440\u0430 '\u0424\u0438\u0437\u0438\u043A\u0430'"
  },
  {
    id: 529,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "3",
    number: "325",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 530,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "3",
    number: "327",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 531,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "3",
    number: "328",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u043D\u0430\u044F \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F. \u041A\u0430\u0444\u0435\u0434\u0440\u0430 \u2018\u0424\u0438\u0437\u0438\u043A\u0430\u2019"
  },
  {
    id: 532,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "3",
    number: "329",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 533,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "3",
    number: "330",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u041E\u0442\u0434\u0435\u043B \u0438\u0442\u043E\u0433\u043E\u0432\u043E\u0439 \u0430\u0442\u0442\u0435\u0441\u0442\u0430\u0446\u0438\u0438 "
  },
  {
    id: 534,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "3",
    number: "331",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043C\u0430\u0433\u043D\u0435\u0442\u0438\u0437\u043C"
  },
  {
    id: 535,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "3",
    number: "332",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u041C\u0435\u0445\u0430\u043D\u0438\u043A\u0430 \u0438 \u043C\u043E\u043B\u0435\u043A\u0443\u043B\u044F\u0440\u043D\u0430\u044F \u0444\u0438\u0437\u0438\u043A\u0430 "
  },
  {
    id: 536,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "3",
    number: "333",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u041E\u043F\u0442\u0438\u043A\u0430"
  },
  {
    id: 537,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "3",
    number: "334",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0424\u0438\u0437\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442. \u041A\u0430\u0444\u0435\u0434\u0440\u0430 '\u0424\u0438\u0437\u0438\u043A\u0430'"
  },
  {
    id: 538,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "3",
    number: "335",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 539,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "3",
    number: "337",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 540,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "3",
    number: "338",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 541,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "3",
    number: "338\u0410",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 542,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "3",
    number: "339",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 543,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "3",
    number: "340",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 544,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "3",
    number: "341",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u041F\u0440\u043E\u0444\u0441\u043E\u044E\u0437\u043D\u043E\u0435 \u0431\u044E\u0440\u043E "
  },
  {
    id: 545,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "3",
    number: "342",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u041E\u043F\u0435\u0447\u0430\u0442\u0430\u043D\u043E "
  },
  {
    id: 546,
    campus: "\u041F\u041A",
    corpus: "",
    floor: "3",
    number: "343",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 547,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "1",
    number: "2101",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0414\u043B\u044F \u0441\u0430\u043C\u043E\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u044B, \u0434\u043B\u044F \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F \u043B\u0438\u0446 \u0441 \u041E\u0412\u0417"
  },
  {
    id: 548,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "1",
    number: "",
    type: "\u0433\u0430\u0440\u0434\u0435\u0440\u043E\u0431",
    desc: ""
  },
  {
    id: 549,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "1",
    number: "2108",
    type: "",
    desc: ""
  },
  {
    id: 550,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "1",
    number: "2109",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u041B\u0438\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u044F"
  },
  {
    id: 551,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "1",
    number: "2110",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u043B\u0438\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u044F"
  },
  {
    id: 552,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "1",
    number: "2110\u0430",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u043B\u0438\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u044F"
  },
  {
    id: 553,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "1",
    number: "2116",
    type: "\u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: "\u043A\u0430\u0444\u0435\u0434\u0440\u0430 \u043F\u043E\u043B\u0438\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u043C\u0430\u0448\u0438\u043D \u0438 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F"
  },
  {
    id: 554,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "2",
    number: "2201",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "-"
  },
  {
    id: 555,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "2",
    number: "2201\u043C",
    type: "\u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0446\u0438\u0444\u0440\u043E\u0432\u044B\u0435 \u043F\u0435\u0447\u0430\u0442\u043D\u044B\u0435 \u043C\u0430\u0448\u0438\u043D\u044B"
  },
  {
    id: 556,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "2",
    number: "2202\u0430",
    type: "\u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0438\u0441\u043F\u044B\u0442\u0430\u043D\u0438\u044F \u043F\u043E\u043B\u0438\u043C\u0435\u0440\u043D\u044B\u0445 \u043F\u043B\u0451\u043D\u043E\u043A \u0438 \u043D\u0442\u0446"
  },
  {
    id: 557,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "2",
    number: "2202\u0431",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "-"
  },
  {
    id: 558,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "2",
    number: "2203",
    type: "\u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: "\u043F\u0435\u0447\u0430\u0442\u043D\u044B\u0435, \u043F\u043E\u0441\u043B\u0435\u043F\u0435\u0447\u0430\u0442\u043D\u044B\u0435 \u0438 \u043E\u0442\u0434\u0435\u043B\u043E\u0447\u043D\u044B\u0435 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u044B"
  },
  {
    id: 559,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "2",
    number: "2204",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "-"
  },
  {
    id: 560,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "2",
    number: "2205",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "-"
  },
  {
    id: 561,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "2",
    number: "2206",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "-"
  },
  {
    id: 562,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "2",
    number: "2207",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "-"
  },
  {
    id: 563,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "2",
    number: "2208",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u043A\u043B\u0430\u0441\u0441 \u0433\u0440\u0430\u0436\u0434\u0430\u043D\u0441\u043A\u043E\u0439 \u043E\u0431\u043E\u0440\u043E\u043D\u044B \u0438 \u0437\u0430\u0449\u0438\u0442\u044B \u043E\u0442 \u0447\u0440\u0435\u0437\u0432\u044B\u0447\u0430\u0439\u043D\u044B\u0445 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u0439"
  },
  {
    id: 564,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "2",
    number: "2210",
    type: "\u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: "\u043F\u0435\u0447\u0430\u0442\u043D\u044B\u0435 \u0438 \u043F\u043E\u0441\u043B\u0435\u043F\u0435\u0447\u0430\u0442\u043D\u044B\u0435 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u044B"
  },
  {
    id: 565,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "2",
    number: "2214",
    type: "-",
    desc: "-"
  },
  {
    id: 566,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "3",
    number: "2303",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "-"
  },
  {
    id: 567,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "3",
    number: "2304",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "-"
  },
  {
    id: 568,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "3",
    number: "2305",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "-"
  },
  {
    id: 569,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "3",
    number: "2306",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "-"
  },
  {
    id: 570,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "3",
    number: "2307",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "-"
  },
  {
    id: 571,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "3",
    number: "-",
    type: "\u043A\u0430\u0444\u0435",
    desc: "-"
  },
  {
    id: 572,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "4",
    number: "2402",
    type: "\u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u044F \u043F\u043E\u043B\u0438\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432"
  },
  {
    id: 573,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "4",
    number: "2403",
    type: "\u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u044F \u043F\u043E\u043B\u0438\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432"
  },
  {
    id: 574,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "4",
    number: "2404",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "-"
  },
  {
    id: 575,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "4",
    number: "2405",
    type: "-",
    desc: "-"
  },
  {
    id: 576,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "4",
    number: "2406",
    type: "-",
    desc: "-"
  },
  {
    id: 577,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "4",
    number: "2407",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "-"
  },
  {
    id: 578,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "4",
    number: "2408",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0430\u0441\u043F\u0438\u0440\u0430\u043D\u0442\u0443\u0440\u0430"
  },
  {
    id: 579,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "4",
    number: "2409",
    type: "\u043F\u0440\u0435\u043F\u043E\u0434\u0430\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0430\u044F",
    desc: "-"
  },
  {
    id: 580,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "4",
    number: "2410",
    type: "\u043F\u0440\u0435\u043F\u043E\u0434\u0430\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0430\u044F",
    desc: "-"
  },
  {
    id: 581,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "4",
    number: "2411",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "-"
  },
  {
    id: 582,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "4",
    number: "2412(\u0424\u041E-1)",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "-"
  },
  {
    id: 583,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "4",
    number: "2413(\u0424\u041E-2)",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "-"
  },
  {
    id: 584,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "5",
    number: "2501",
    type: "\u043A\u0430\u0431\u0438\u043D\u0435\u0442",
    desc: "\u043E\u0442\u0434\u0435\u043B \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0438"
  },
  {
    id: 585,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "5",
    number: "2502",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: '\u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441 \u043A\u0430\u0444\u0435\u0434\u0440\u044B "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0442\u0438\u043A\u0430 \u0438 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0435 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438"'
  },
  {
    id: 586,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "5",
    number: "2503",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "-"
  },
  {
    id: 587,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "5",
    number: "2504",
    type: "-",
    desc: "-"
  },
  {
    id: 588,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "5",
    number: "2505",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "-"
  },
  {
    id: 589,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "5",
    number: "2506",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "-"
  },
  {
    id: 590,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "5",
    number: "2507",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "-"
  },
  {
    id: 591,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "5",
    number: "-",
    type: "\u0421\u0435\u0440\u0432\u0435\u0440\u043D\u0430\u044F",
    desc: "\u043E\u0442\u0434\u0435\u043B \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u043D\u044B\u0445 \u0441\u0435\u0442\u0435\u0439"
  },
  {
    id: 592,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "5",
    number: "2552",
    type: "\u043A\u0430\u0431\u0438\u043D\u0435\u0442",
    desc: "\u0414\u0418\u0422"
  },
  {
    id: 593,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "5",
    number: "2553",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441 \u21161"
  },
  {
    id: 594,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "5",
    number: "2554",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441 \u21162"
  },
  {
    id: 595,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "5",
    number: "2555",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441 \u21163"
  },
  {
    id: 596,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "5",
    number: "2557",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: '\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0435 \u0441\u0438\u0441\u0442\u0435\u043C\u044B", \u043A\u0430\u0444\u0435\u0434\u0440\u0430 "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0442\u0438\u043A\u0430 \u0438 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0435 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438"'
  },
  {
    id: 597,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "5",
    number: "2558",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "-"
  },
  {
    id: 598,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "5",
    number: "2559",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "-"
  },
  {
    id: 599,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "6",
    number: "2605",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "-"
  },
  {
    id: 600,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "6",
    number: "2606",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "-"
  },
  {
    id: 601,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "6",
    number: "2608",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "-"
  },
  {
    id: 602,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "6",
    number: "2609",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "-"
  },
  {
    id: 603,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "6",
    number: "2610",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "-"
  },
  {
    id: 604,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "6",
    number: "2611",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: '\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F "\u0418\u043D\u0442\u0435\u043B\u043B\u0435\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0435 \u0441\u0438\u0441\u0442\u0435\u043C\u044B", \u043A\u0430\u0444\u0435\u0434\u0440\u0430 "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0442\u0438\u043A\u0430 \u0438 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0435 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438"'
  },
  {
    id: 605,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "6",
    number: "2662",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: '\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F "\u0418\u043D\u0442\u0435\u043B\u043B\u0435\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0435 \u0441\u0438\u0441\u0442\u0435\u043C\u044B", \u043A\u0430\u0444\u0435\u0434\u0440\u0430 "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0442\u0438\u043A\u0430 \u0438 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0435 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438"'
  },
  {
    id: 606,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "6",
    number: "2663",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "-"
  },
  {
    id: 607,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "6",
    number: "2664",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: '\u041A\u0430\u0444\u0435\u0434\u0440\u0430 "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0442\u0438\u043A\u0430 \u0438 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0435 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438"'
  },
  {
    id: 608,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "6",
    number: "2665",
    type: "-",
    desc: "-"
  },
  {
    id: 609,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "6",
    number: "2666",
    type: "\u043A\u0430\u0431\u0438\u043D\u0435\u0442",
    desc: "-"
  },
  {
    id: 610,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "6",
    number: "2667",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: '\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0435 \u0441\u0438\u0441\u0442\u0435\u043C\u044B", \u043A\u0430\u0444\u0435\u0434\u0440\u0430 "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0442\u0438\u043A\u0430 \u0438 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0435 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438"'
  },
  {
    id: 611,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "6",
    number: "2668",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "-"
  },
  {
    id: 612,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "6",
    number: "2669",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "-"
  },
  {
    id: 613,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "7",
    number: "2701",
    type: "\u043A\u0430\u0431\u0438\u043D\u0435\u0442",
    desc: "-"
  },
  {
    id: 614,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "7",
    number: "2702",
    type: "\u0447\u0438\u0442\u0430\u043B\u044C\u043D\u044B\u0439 \u0437\u0430\u043B",
    desc: "-"
  },
  {
    id: 615,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "7",
    number: "2711",
    type: "\u043A\u0430\u0431\u0438\u043D\u0435\u0442",
    desc: "-"
  },
  {
    id: 616,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "7",
    number: "2712",
    type: "\u043A\u0430\u0431\u0438\u043D\u0435\u0442",
    desc: "-"
  },
  {
    id: 617,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "7",
    number: "-",
    type: "\u043A\u0430\u0431\u0438\u043D\u0435\u0442",
    desc: "\u0441\u0442\u0443\u0434\u0438\u044F \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u0432\u0435\u0449\u0430\u043D\u0438\u044F"
  },
  {
    id: 618,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "7",
    number: "-",
    type: "\u043A\u0430\u0431\u0438\u043D\u0435\u0442",
    desc: "\u0430\u0431\u043E\u043D\u0435\u043C\u0435\u043D\u0442 \u0443\u0447\u0435\u0431\u043D\u043E\u0439 \u043B\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u044B"
  },
  {
    id: 619,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "7",
    number: "-",
    type: "\u043A\u0430\u0431\u0438\u043D\u0435\u0442",
    desc: "\u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440 \u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u0447\u043D\u043E-\u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u043E\u0433\u043E \u0446\u0435\u043D\u0442\u0440\u0430"
  },
  {
    id: 620,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "7",
    number: "-",
    type: "\u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0430",
    desc: "-"
  },
  {
    id: 621,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "8",
    number: "2802",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441 \u043A\u0430\u0444\u0435\u0434\u0440\u044B \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0442\u0438\u043A\u0438 \u0438 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0439"
  },
  {
    id: 622,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "8",
    number: "2802\u0430",
    type: "-",
    desc: "-"
  },
  {
    id: 623,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "8",
    number: "2803",
    type: "\u043F\u0440\u0435\u043F\u043E\u0434\u0430\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0430\u044F",
    desc: "\u043A\u0430\u0444\u0435\u0434\u0440\u0430 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0442\u0438\u043A\u0438 \u0438 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0439"
  },
  {
    id: 624,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "8",
    number: "2804",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "-"
  },
  {
    id: 625,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "8",
    number: "2806",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "-"
  },
  {
    id: 626,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "8",
    number: "2808",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "-"
  },
  {
    id: 627,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "8",
    number: "2810",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "-"
  },
  {
    id: 628,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "8",
    number: "2811",
    type: "\u043A\u0430\u0431\u0438\u043D\u0435\u0442",
    desc: "-"
  },
  {
    id: 629,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "8",
    number: "2812",
    type: "\u043A\u0430\u0431\u0438\u043D\u0435\u0442",
    desc: "-"
  },
  {
    id: 630,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "8",
    number: "2813",
    type: "\u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0442\u0440\u0430\u0444\u0430\u0440\u0435\u0442\u043D\u0430\u044F \u043F\u0435\u0447\u0430\u0442\u044C"
  },
  {
    id: 631,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "8",
    number: "2814",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u043A\u0430\u0444\u0435\u0434\u0440\u0430 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0442\u0438\u043A\u0438 \u0438 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0439"
  },
  {
    id: 632,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "8",
    number: "2814\u0430",
    type: "\u043F\u0440\u0435\u043F\u043E\u0434\u0430\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0430\u044F",
    desc: "-"
  },
  {
    id: 633,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "8",
    number: "2815\u0430",
    type: "\u043A\u0430\u0431\u0438\u043D\u0435\u0442",
    desc: "-"
  },
  {
    id: 634,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "8",
    number: "2815\u0431",
    type: "\u043A\u0430\u0431\u0438\u043D\u0435\u0442",
    desc: "-"
  },
  {
    id: 635,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "8",
    number: "2815\u0432",
    type: "\u043A\u0430\u0431\u0438\u043D\u0435\u0442",
    desc: "-"
  },
  {
    id: 636,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "8",
    number: "2815\u0433",
    type: "\u043B\u0430\u0431\u043E\u0440\u0430\u043D\u0442\u0441\u043A\u0430\u044F",
    desc: "-"
  },
  {
    id: 637,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "8",
    number: "2816",
    type: "\u043B\u0430\u0431\u043E\u0440\u0430\u043D\u0442\u0441\u043A\u0430\u044F",
    desc: "-"
  },
  {
    id: 638,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "8",
    number: "2816\u0431",
    type: "\u043B\u0430\u0431\u043E\u0440\u0430\u043D\u0442\u0441\u043A\u0430\u044F",
    desc: "-"
  },
  {
    id: 639,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "8",
    number: "2817\u0430",
    type: "-",
    desc: "-"
  },
  {
    id: 640,
    campus: "\u041F\u0420",
    corpus: "4",
    floor: "8",
    number: "2817\u0431",
    type: "-",
    desc: "-"
  },
  {
    id: 641,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "1",
    number: "\u0410-100",
    type: "\u0422\u043E\u0447\u043A\u0430 \u043A\u0438\u043F\u0435\u043D\u0438\u044F",
    desc: "\u0422\u043E\u0447\u043A\u0430 \u043A\u0438\u043F\u0435\u043D\u0438\u044F"
  },
  {
    id: 642,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "1",
    number: "\u0410-106",
    type: "-",
    desc: "\u041E\u0442\u0434\u0435\u043B \u043E\u0445\u0440\u0430\u043D\u044B \u0442\u0440\u0443\u0434\u0430"
  },
  {
    id: 643,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "1",
    number: "\u0410-107",
    type: "\u041C\u0435\u0434\u043F\u0443\u043D\u043A\u0442",
    desc: "\u041C\u0435\u0434\u043F\u0443\u043D\u043A\u0442"
  },
  {
    id: 644,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "1",
    number: "\u0410-108",
    type: "\u041A\u0430\u0444\u0435\u0434\u0440\u0430",
    desc: "\u041A\u0430\u0444\u0435\u0434\u0440\u0430 \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u0432\u043E\u0441\u043F\u0438\u0442\u0430\u043D\u0438\u044F, \u0441\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u044B\u0439 \u0437\u0430\u043B"
  },
  {
    id: 645,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "1",
    number: "\u0410-112\u0431",
    type: "\u041A\u0430\u0444\u0435\u0434\u0440\u0430",
    desc: "\u041A\u0430\u0444\u0435\u0434\u0440\u0430 \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u0432\u043E\u0441\u043F\u0438\u0442\u0430\u043D\u0438\u044F"
  },
  {
    id: 646,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "1",
    number: "\u0410-112\u0432",
    type: "\u041A\u0430\u0444\u0435\u0434\u0440\u0430",
    desc: "\u041A\u0430\u0444\u0435\u0434\u0440\u0430 \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u0432\u043E\u0441\u043F\u0438\u0442\u0430\u043D\u0438\u044F"
  },
  {
    id: 647,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "1",
    number: "\u0410-112\u0433",
    type: "\u041A\u0430\u0444\u0435\u0434\u0440\u0430",
    desc: "\u041A\u0430\u0444\u0435\u0434\u0440\u0430 \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u0432\u043E\u0441\u043F\u0438\u0442\u0430\u043D\u0438\u044F"
  },
  {
    id: 648,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "1",
    number: "\u0410-105",
    type: "-",
    desc: "\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u043D\u043E\u0439 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438"
  },
  {
    id: 649,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "1",
    number: "\u0410-104",
    type: "-",
    desc: "\u041F\u0440\u043E\u0440\u0435\u043A\u0442\u043E\u0440 \u043F\u043E \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438"
  },
  {
    id: 650,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "1",
    number: "\u0410-4",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0426\u041F\u0414, \u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u0438\u043A\u0438 \u0438 \u0440\u043E\u0431\u043E\u0442\u043E\u0442\u0435\u0445\u043D\u0438\u043A\u0438"
  },
  {
    id: 651,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "1",
    number: "\u0410-8",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0426\u041F\u0414, \u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u0438\u043A\u0438 \u0438 \u0440\u043E\u0431\u043E\u0442\u043E\u0442\u0435\u0445\u043D\u0438\u043A\u0438"
  },
  {
    id: 652,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "1",
    number: "\u0410-12",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0426\u041F\u0414, \u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u0438\u043A\u0438 \u0438 \u0440\u043E\u0431\u043E\u0442\u043E\u0442\u0435\u0445\u043D\u0438\u043A\u0438"
  },
  {
    id: 653,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "1",
    number: "\u0410-13",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0426\u041F\u0414, \u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u0438\u043A\u0438 \u0438 \u0440\u043E\u0431\u043E\u0442\u043E\u0442\u0435\u0445\u043D\u0438\u043A\u0438"
  },
  {
    id: 654,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "1",
    number: "\u0410-103",
    type: "-",
    desc: "\u041F\u0440\u043E\u0440\u0435\u043A\u0442\u043E\u0440 \u043F\u043E \u0446\u0438\u0444\u0440\u043E\u0432\u043E\u043C\u0443 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044E"
  },
  {
    id: 655,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "1",
    number: "\u0410-109",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u041E\u0442\u0434\u0435\u043B \u043C\u0443\u0437\u0435\u0439\u043D\u043E-\u0432\u044B\u0441\u0442\u0430\u0432\u043E\u0447\u043D\u043E\u0439 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438"
  },
  {
    id: 656,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "1",
    number: "\u0410-102",
    type: "-",
    desc: "\u0426\u041F\u0414"
  },
  {
    id: 657,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "1",
    number: "\u0410-101",
    type: "-",
    desc: "\u0426\u041F\u0414"
  },
  {
    id: 658,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "1",
    number: "\u0410-110",
    type: "-",
    desc: "\u041E\u0442\u0434\u0435\u043B \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044F \u0438 \u0434\u0435\u043B\u043E\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430"
  },
  {
    id: 659,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "1",
    number: "\u0410-111",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u042D\u043A\u0441\u043F\u0435\u0434\u0438\u0446\u0438\u044F"
  },
  {
    id: 660,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "1",
    number: "\u0410-112",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0418\u043D\u0436\u0435\u043D\u0435\u0440\u043D\u0430\u044F \u0448\u043A\u043E\u043B\u0430(\u0444\u0430\u043A\u0443\u043B\u044C\u0442\u0435\u0442)"
  },
  {
    id: 661,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "1",
    number: "\u0410-120",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0418\u043D\u0436\u0435\u043D\u0435\u0440\u043D\u0430\u044F \u0448\u043A\u043E\u043B\u0430(\u0444\u0430\u043A\u0443\u043B\u044C\u0442\u0435\u0442)"
  },
  {
    id: 662,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "1",
    number: "\u0410-119",
    type: "-",
    desc: "-"
  },
  {
    id: 663,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "1",
    number: "\u0410-113",
    type: "-",
    desc: "\u041E\u0442\u0434\u0435\u043B \u043A\u0430\u0434\u0440\u043E\u0432"
  },
  {
    id: 664,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "1",
    number: "\u0410-114",
    type: "-",
    desc: "\u041E\u0442\u0434\u0435\u043B \u043A\u0430\u0434\u0440\u043E\u0432"
  },
  {
    id: 665,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "1",
    number: "\u0410-118",
    type: "-",
    desc: "\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u0430"
  },
  {
    id: 666,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "1",
    number: "\u0410-117",
    type: "-",
    desc: "\u0426\u0435\u043D\u0442\u0440 \u043F\u043E \u0441\u0432\u044F\u0437\u044F\u043C \u0441 \u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u044C\u044E"
  },
  {
    id: 667,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "1",
    number: "\u0410-115",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0418\u043D\u0436\u0435\u043D\u0435\u0440\u043D\u0430\u044F \u0448\u043A\u043E\u043B\u0430(\u0444\u0430\u043A\u0443\u043B\u044C\u0442\u0435\u0442)"
  },
  {
    id: 668,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "1",
    number: "\u0410-116",
    type: "-",
    desc: "\u0426\u0435\u043D\u0442\u0440 \u043F\u043E \u0441\u0432\u044F\u0437\u044F\u043C \u0441 \u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u044C\u044E"
  },
  {
    id: 669,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "2",
    number: "\u0410-218",
    type: "-",
    desc: "\u0426\u0435\u043D\u0442\u0440 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F \u043A\u0430\u043C\u043F\u0443\u0441\u0430"
  },
  {
    id: 670,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "2",
    number: "\u0410-219",
    type: "-",
    desc: "\u0418\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F"
  },
  {
    id: 671,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "2",
    number: "\u0410-220",
    type: "-",
    desc: "\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u043C\u043E\u0434\u0435\u0440\u043D\u0438\u0437\u0430\u0446\u0438\u0438 \u0438 \u044D\u043A\u0441\u043F\u043B\u0443\u0430\u0442\u0430\u0446\u0438\u0438 \u043A\u0430\u043C\u043F\u0443\u0441\u0430"
  },
  {
    id: 672,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "2",
    number: "\u0410-221",
    type: "-",
    desc: "\u0414\u0438\u0440\u0435\u043A\u0442\u043E\u0440 \u043F\u043E \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044E \u043A\u0430\u043C\u043F\u0443\u0441\u0430"
  },
  {
    id: 673,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "2",
    number: "\u0410-216",
    type: "-",
    desc: "\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u043C\u043E\u0434\u0435\u0440\u043D\u0438\u0437\u0430\u0446\u0438\u0438 \u0438 \u044D\u043A\u0441\u043F\u043B\u0443\u0430\u0442\u0430\u0446\u0438\u0438 \u043A\u0430\u043C\u043F\u0443\u0441\u0430"
  },
  {
    id: 674,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "2",
    number: "\u0410-215",
    type: "-",
    desc: "-"
  },
  {
    id: 675,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "2",
    number: "\u0410-211",
    type: "-",
    desc: "\u041F\u0440\u043E\u0440\u0435\u043A\u0442\u043E\u0440 \u043F\u043E \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044E \u043A\u0430\u043C\u043F\u0443\u0441\u043E\u043C"
  },
  {
    id: 676,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "2",
    number: "\u0410-212",
    type: "-",
    desc: "\u0414\u0438\u0440\u0435\u043A\u0446\u0438\u044F \u043F\u043E \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044E \u043A\u0430\u043C\u043F\u0443\u0441\u0430"
  },
  {
    id: 677,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "2",
    number: "\u0410-214",
    type: "-",
    desc: "-"
  },
  {
    id: 678,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "2",
    number: "\u0410-210",
    type: "-",
    desc: "\u041F\u0440\u043E\u0440\u0435\u043A\u0442\u043E\u0440 \u043F\u043E \u0441\u043E\u0446. \u0438 \u0432\u043E\u0441\u043F\u0438\u0442\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u0435"
  },
  {
    id: 679,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "2",
    number: "\u0410-201",
    type: "-",
    desc: "\u0414\u0438\u0440\u0435\u043A\u0442\u043E\u0440 \u043F\u043E \u0441\u0432\u044F\u0437\u044F\u043C \u0441 \u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u044C\u044E"
  },
  {
    id: 680,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "2",
    number: "\u0410-202",
    type: "-",
    desc: "\u041F\u0440\u043E\u0440\u0435\u043A\u0442\u043E\u0440 \u043F\u043E \u043C\u0435\u0436\u0434\u0443\u043D\u0430\u0440\u043E\u0434\u043D\u043E\u0439 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438"
  },
  {
    id: 681,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "2",
    number: "\u0410-208",
    type: "-",
    desc: "\u041D\u0430\u0447\u0430\u043B\u044C\u043D\u0438\u043A \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0434\u0435\u043B\u0430\u043C\u0438"
  },
  {
    id: 682,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "2",
    number: "\u0410-207",
    type: "-",
    desc: "\u041F\u0440\u043E\u0440\u0435\u043A\u0442\u043E\u0440 \u043F\u043E \u043D\u0430\u0443\u0447\u043D\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u0435"
  },
  {
    id: 683,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "2",
    number: "\u0410-206",
    type: "-",
    desc: "\u041F\u0435\u0440\u0432\u044B\u0439 \u043F\u0440\u043E\u0440\u0435\u043A\u0442\u043E\u0440"
  },
  {
    id: 684,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "2",
    number: "\u0410-205",
    type: "\u0417\u0430\u043B",
    desc: "\u0417\u0430\u043B \u0437\u0430\u0441\u0435\u0434\u0430\u043D\u0438\u0439"
  },
  {
    id: 685,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "2",
    number: "\u0410-203",
    type: "-",
    desc: "\u0420\u0435\u043A\u0442\u043E\u0440"
  },
  {
    id: 686,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "2",
    number: "\u0410-204",
    type: "-",
    desc: "\u041F\u0440\u043E\u0440\u0435\u043A\u0442\u043E\u0440 \u043F\u043E \u0443\u0447\u0435\u0431\u043D\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u0435"
  },
  {
    id: 687,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "2",
    number: "\u0410-200",
    type: "\u0410\u043A\u0442\u043E\u0432\u044B\u0439 \u0437\u0430\u043B",
    desc: "-"
  },
  {
    id: 688,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "3",
    number: "\u0410-316",
    type: "\u041A\u0430\u0431\u0438\u043D\u0435\u0442",
    desc: "-"
  },
  {
    id: 689,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "3",
    number: "\u0410-315",
    type: "-",
    desc: "\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u043A\u0438 \u0438 \u0444\u0438\u043D\u0430\u043D\u0441\u043E\u0432, \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u043D\u043E\u0439 \u043E\u0442\u0434\u0435\u043B"
  },
  {
    id: 690,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "3",
    number: "\u0410-301",
    type: "-",
    desc: "-"
  },
  {
    id: 691,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "3",
    number: "\u0410-314",
    type: "-",
    desc: "\u0424\u0438\u043D\u0430\u043D\u0441\u043E\u0432\u044B\u0439 \u043E\u0442\u0434\u0435\u043B"
  },
  {
    id: 692,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "3",
    number: "\u0410-313",
    type: "-",
    desc: "\u0424\u0438\u043D\u0430\u043D\u0441\u043E\u0432\u044B\u0439 \u043E\u0442\u0434\u0435\u043B"
  },
  {
    id: 693,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "3",
    number: "\u0410-302",
    type: "-",
    desc: "\u041A\u043E\u043D\u0442\u0440\u0430\u043A\u0442\u043D\u0430\u044F \u0441\u043B\u0443\u0436\u0431\u0430"
  },
  {
    id: 694,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "3",
    number: "\u0410-312",
    type: "-",
    desc: "\u0424\u0438\u043D\u0430\u043D\u0441\u043E\u0432\u044B\u0439 \u043E\u0442\u0434\u0435\u043B"
  },
  {
    id: 695,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "3",
    number: "\u0410-311",
    type: "-",
    desc: "\u0420\u0430\u0441\u0447\u0451\u0442\u043D\u044B\u0439 \u043E\u0442\u0434\u0435\u043B"
  },
  {
    id: 696,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "3",
    number: "\u0410-303",
    type: "-",
    desc: "\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u043A\u0438 \u0438 \u0444\u0438\u043D\u0430\u043D\u0441\u043E\u0432, \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u043D\u043E\u0439 \u043E\u0442\u0434\u0435\u043B"
  },
  {
    id: 697,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "3",
    number: "\u0410-310",
    type: "-",
    desc: "\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0431\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440\u0441\u043A\u043E\u0433\u043E \u043E\u0442\u0447\u0451\u0442\u0430"
  },
  {
    id: 698,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "3",
    number: "\u0410-304",
    type: "-",
    desc: "-"
  },
  {
    id: 699,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "3",
    number: "\u0410-309",
    type: "-",
    desc: "\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0431\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440\u0441\u043A\u043E\u0433\u043E \u043E\u0442\u0447\u0451\u0442\u0430, \u043E\u0442\u0434\u0435\u043B \u0443\u0447\u0451\u0442\u0430 \u0434\u043E\u0445\u043E\u0434\u043E\u0432 \u0438 \u043D\u0430\u043B\u043E\u0433\u043E\u0432"
  },
  {
    id: 700,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "3",
    number: "\u0410-305",
    type: "-",
    desc: "\u041E\u0442\u0434\u0435\u043B \u043C\u043E\u043D\u0438\u0442\u043E\u0440\u0438\u043D\u0433\u0430 \u0438 \u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u043E\u0442\u0447\u0451\u0442\u043D\u043E\u0441\u0442\u0438"
  },
  {
    id: 701,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "3",
    number: "\u0410-308",
    type: "-",
    desc: "\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0431\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440\u0441\u043A\u043E\u0433\u043E \u043E\u0442\u0447\u0451\u0442\u0430, \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044C\u043D\u044B\u0439 \u043E\u0442\u0434\u0435\u043B"
  },
  {
    id: 702,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "3",
    number: "\u0410-306",
    type: "-",
    desc: "\u041E\u0442\u0434\u0435\u043B \u0441\u043D\u0430\u0431\u0436\u0435\u043D\u0438\u044F"
  },
  {
    id: 703,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "3",
    number: "\u0410-307",
    type: "-",
    desc: "\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0431\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440\u0441\u043A\u043E\u0433\u043E \u043E\u0442\u0447\u0451\u0442\u0430, \u0440\u0430\u0441\u0447\u0451\u0442\u043D\u044B\u0439 \u043E\u0442\u0434\u0435\u043B"
  },
  {
    id: 704,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "3",
    number: "\u0410-317",
    type: "\u041A\u0430\u0431\u0438\u043D\u0435\u0442",
    desc: "-"
  },
  {
    id: 705,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "3",
    number: "\u0410-326",
    type: "-",
    desc: "\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u043A\u0438 \u0438 \u0444\u0438\u043D\u0430\u043D\u0441\u043E\u0432"
  },
  {
    id: 706,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "3",
    number: "\u0410-324",
    type: "-",
    desc: "\u0414\u0438\u0440\u0435\u043A\u0442\u043E\u0440 \u043F\u043E \u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044E \u0438 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438 \u0431\u044E\u0434\u0436\u0435\u0442\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0430"
  },
  {
    id: 707,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "3",
    number: "\u0410-318",
    type: "-",
    desc: "\u041E\u0442\u0434\u0435\u043B \u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0438 \u0431\u044E\u0434\u0436\u0435\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F"
  },
  {
    id: 708,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "3",
    number: "\u0410-323",
    type: "-",
    desc: "\u041E\u0442\u0434\u0435\u043B \u0444\u0438\u043D\u0430\u043D\u0441\u043E\u0432\u043E\u0433\u043E \u0441\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0435\u043D\u0438\u044F \u0444\u0438\u043B\u0438\u0430\u043B\u043E\u0432"
  },
  {
    id: 709,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "3",
    number: "\u0410-322",
    type: "-",
    desc: "\u041E\u0442\u0434\u0435\u043B \u043F\u043E \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438 \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u0439"
  },
  {
    id: 710,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "3",
    number: "\u0410-321",
    type: "-",
    desc: "\u041A\u043E\u043D\u0442\u0440\u043E\u043B\u044C\u043D\u043E\u0435 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435"
  },
  {
    id: 711,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "3",
    number: "\u0410-319",
    type: "-",
    desc: "\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u043A\u0438 \u0438 \u0444\u0438\u043D\u0430\u043D\u0441\u043E\u0432, \u043E\u0442\u0434\u0435\u043B \u0442\u0440\u0443\u0434\u0430 \u0438 \u0437\u0430\u0440\u0430\u0431\u043E\u0442\u043D\u043E\u0439 \u043F\u043B\u0430\u0442\u044B"
  },
  {
    id: 712,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "3",
    number: "\u0410-320",
    type: "\u041E\u0444\u0438\u0441",
    desc: "\u041F\u0440\u043E\u0435\u043A\u0442\u043D\u044B\u0439 \u043E\u0444\u0438\u0441"
  },
  {
    id: 713,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "4",
    number: "\u0410-421",
    type: "-",
    desc: "\u0426\u0435\u043D\u0442\u0440 \u043E\u0446\u0435\u043D\u043A\u0438 \u0438 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0447\u0435\u0441\u043A\u0438\u0445 \u043A\u043E\u043C\u043F\u0435\u0442\u0435\u043D\u0446\u0438\u0439"
  },
  {
    id: 714,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "4",
    number: "\u0410-420",
    type: "-",
    desc: "\u041E\u0442\u0434\u0435\u043B \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438 \u0443\u0447\u0435\u0431\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0430"
  },
  {
    id: 715,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "4",
    number: "\u0410-422",
    type: "-",
    desc: "\u0426\u0435\u043D\u0442\u0440 \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0439 \u043F\u0435\u0440\u0435\u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0438 \u0438 \u043F\u043E\u0432\u044B\u0448\u0435\u043D\u0438\u044F \u043A\u0432\u0430\u043B\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0438"
  },
  {
    id: 716,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "4",
    number: "\u0410-419",
    type: "-",
    desc: "\u041E\u0442\u0434\u0435\u043B \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438 \u0443\u0447\u0435\u0431\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0430"
  },
  {
    id: 717,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "4",
    number: "\u0410-423",
    type: "-",
    desc: "\u041E\u0442\u0434\u0435\u043B \u0441\u043D\u0430\u0431\u0436\u0435\u043D\u0438\u044F"
  },
  {
    id: 718,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "4",
    number: "\u0410-424",
    type: "-",
    desc: "\u0421\u043E\u0432\u0435\u0442\u043D\u0438\u043A \u0440\u0435\u043A\u0442\u043E\u0440\u0430"
  },
  {
    id: 719,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "4",
    number: "\u0410-418",
    type: "-",
    desc: "\u041E\u0442\u0434\u0435\u043B \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0438"
  },
  {
    id: 720,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "4",
    number: "\u0410-425",
    type: "-",
    desc: "\u041E\u0442\u0434\u0435\u043B \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044F \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0430"
  },
  {
    id: 721,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "4",
    number: "\u0410-417",
    type: "\u041A\u0430\u0431\u0438\u043D\u0435\u0442",
    desc: "-"
  },
  {
    id: 722,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "4",
    number: "\u0410-416",
    type: "-",
    desc: "\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0439"
  },
  {
    id: 723,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "4",
    number: "\u0410-415",
    type: "-",
    desc: "\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u043F\u043E \u0432\u043E\u0441\u043F\u0438\u0442\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0439 \u0438 \u0441\u043E\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u0435"
  },
  {
    id: 724,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "4",
    number: "\u0410-414",
    type: "-",
    desc: "\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u043F\u043E \u0432\u043E\u0441\u043F\u0438\u0442\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0439 \u0438 \u0441\u043E\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u0435"
  },
  {
    id: 725,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "4",
    number: "\u0410-401",
    type: "-",
    desc: "\u041E\u0442\u0434\u0435\u043B \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u0430 \u0438 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u043E\u043D\u043D\u043E\u0439 \u043A\u0443\u043B\u044C\u0442\u0443\u0440\u044B"
  },
  {
    id: 726,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "4",
    number: "\u0410-413",
    type: "-",
    desc: "\u041E\u0442\u0434\u0435\u043B \u0430\u043A\u043A\u0440\u0435\u0434\u0438\u0442\u0430\u0446\u0438\u0438 \u0438 \u043B\u0438\u0446\u0435\u043D\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F"
  },
  {
    id: 727,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "4",
    number: "\u0410-402",
    type: "-",
    desc: "\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u043A\u0438 \u0438 \u0444\u0438\u043D\u0430\u043D\u0441\u043E\u0432, \u043E\u0442\u0434\u0435\u043B \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u0441\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0435\u043D\u0438\u044F \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432"
  },
  {
    id: 728,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "4",
    number: "\u0410-403",
    type: "-",
    desc: "\u0426\u0435\u043D\u0442\u0440 \u043F\u043E \u0440\u0430\u0431\u043E\u0442\u0435 \u0441\u043E \u0441\u0442\u0443\u0434\u0435\u043D\u0442\u0430\u043C\u0438"
  },
  {
    id: 729,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "4",
    number: "\u0410-412",
    type: "-",
    desc: "\u0414\u0438\u0440\u0435\u043A\u0442\u043E\u0440 \u043F\u043E \u0432\u0437\u0430\u0438\u043C\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044E \u0441\u043E \u0441\u0442\u0443\u0434\u0435\u043D\u0442\u0430\u043C\u0438 \u0438 \u0432\u044B\u043F\u0443\u0441\u043A\u043D\u0438\u043A\u0430\u043C\u0438"
  },
  {
    id: 730,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "4",
    number: "\u0410-404",
    type: "-",
    desc: "\u0426\u0435\u043D\u0442\u0440 \u043A\u0430\u0440\u044C\u0435\u0440\u044B \u0438 \u0442\u0440\u0443\u0434\u043E\u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430"
  },
  {
    id: 731,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "4",
    number: "\u0410-411",
    type: "\u041A\u0430\u0431\u0438\u043D\u0435\u0442",
    desc: "-"
  },
  {
    id: 732,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "4",
    number: "\u0410-405",
    type: "-",
    desc: "\u0414\u0435\u043F\u0430\u0440\u0442\u0430\u043C\u0435\u043D\u0442 \u043F\u043E \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0439 \u043F\u043E\u043B\u0438\u0442\u0438\u043A\u0435"
  },
  {
    id: 733,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "4",
    number: "\u0410-410",
    type: "-",
    desc: "\u041E\u0442\u0434\u0435\u043B \u0441\u043E\u0446. \u0437\u0430\u0449\u0438\u0442\u044B"
  },
  {
    id: 734,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "4",
    number: "\u0410-409",
    type: "-",
    desc: "\u041F\u043E\u043C\u043E\u0449\u043D\u0438\u043A \u0440\u0435\u043A\u0442\u043E\u0440\u0430"
  },
  {
    id: 735,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "4",
    number: "\u0410-408",
    type: "-",
    desc: "\u041F\u0435\u0440\u0432\u044B\u0439 \u043E\u0442\u0434\u0435\u043B"
  },
  {
    id: 736,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "4",
    number: "\u0410-406",
    type: "-",
    desc: "\u041E\u0442\u0434\u0435\u043B \u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0443\u0447\u0435\u0431\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0430"
  },
  {
    id: 737,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "4",
    number: "\u0410-407",
    type: "-",
    desc: "\u041F\u0435\u0440\u0432\u044B\u0439 \u043E\u0442\u0434\u0435\u043B"
  },
  {
    id: 738,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "1",
    number: "\u0410-3",
    type: "-",
    desc: "\u041E\u0442\u0434\u0435\u043B \u0433\u043B\u0430\u0432\u043D\u043E\u0433\u043E \u044D\u043D\u0435\u0440\u0433\u0435\u0442\u0438\u043A\u0430"
  },
  {
    id: 739,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "1",
    number: "\u0411-109",
    type: "",
    desc: "\u041A\u0430\u0444\u0435\u0434\u0440\u0430 \u0414\u0438\u0437\u0430\u0439\u043D"
  },
  {
    id: 740,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "1",
    number: "\u0411-101",
    type: "",
    desc: "\u041E\u0437\u0434\u043E\u0440\u043E\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u0433\u0438\u043C\u043D\u0430\u0441\u0442\u0438\u043A\u0430"
  },
  {
    id: 741,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "1",
    number: "\u0411-107",
    type: "",
    desc: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F"
  },
  {
    id: 742,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "1",
    number: "\u0411-102",
    type: "",
    desc: ""
  },
  {
    id: 743,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "1",
    number: "\u0411-103",
    type: "",
    desc: ""
  },
  {
    id: 744,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "1",
    number: "\u0411-104",
    type: "",
    desc: ""
  },
  {
    id: 745,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "1",
    number: "\u0411-105",
    type: "",
    desc: ""
  },
  {
    id: 746,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "1",
    number: "\u0411-105\u0410",
    type: "",
    desc: ""
  },
  {
    id: 747,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "2",
    number: "\u0411-208",
    type: "",
    desc: "\u042E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435"
  },
  {
    id: 748,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "2",
    number: "\u0411-201",
    type: "",
    desc: "\u0426\u0435\u043D\u0442\u0440 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0439"
  },
  {
    id: 749,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "2",
    number: "\u0411-201\u0410",
    type: "",
    desc: "\u0418\u0437\u0434\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u043E-\u043F\u043E\u043B\u0438\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0446\u0435\u043D\u0442\u0440"
  },
  {
    id: 750,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "3",
    number: "\u0411-306",
    type: "",
    desc: ""
  },
  {
    id: 751,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "3",
    number: "\u0411-305",
    type: "",
    desc: ""
  },
  {
    id: 752,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "3",
    number: "\u0411-304",
    type: "",
    desc: "\u0414\u0438\u0440\u0435\u043A\u0446\u0438\u044F \u043F\u043E \u0440\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F \u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u043E\u0433\u043E \u041F\u043E\u043B\u0438\u0442\u0435\u0445\u0430"
  },
  {
    id: 753,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "3",
    number: "\u0411-303",
    type: "",
    desc: "\u041A\u043E\u043D\u0444\u0435\u0440\u0435\u043D\u0446 \u0437\u0430\u043B"
  },
  {
    id: 754,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "3",
    number: "\u0411-301",
    type: "",
    desc: ""
  },
  {
    id: 755,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "3",
    number: "\u0411-302",
    type: "",
    desc: ""
  },
  {
    id: 756,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "4",
    number: "\u0411-407",
    type: "",
    desc: "\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u043D\u0430\u0443\u0447\u043D\u043E-\u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0445 \u0440\u0430\u0431\u043E\u0442"
  },
  {
    id: 757,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "4",
    number: "\u0411-406",
    type: "",
    desc: "\u041A\u0430\u0444\u0435\u0434\u0440\u0430 \u0414\u0438\u0437\u0430\u0439\u043D"
  },
  {
    id: 758,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "4",
    number: "\u0411-405",
    type: "",
    desc: "\u041A\u0430\u0444\u0435\u0434\u0440\u0430 \u0414\u0438\u0437\u0430\u0439\u043D"
  },
  {
    id: 759,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "4",
    number: "\u0411-404",
    type: "",
    desc: "\u041A\u0430\u0444\u0435\u0434\u0440\u0430 \u0414\u0438\u0437\u0430\u0439\u043D"
  },
  {
    id: 760,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "4",
    number: "\u0411-400",
    type: "",
    desc: "\u041E\u0442\u0434\u0435\u043B \u043C\u043E\u043B\u043E\u0434\u0435\u0436\u043D\u044B\u0445 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432"
  },
  {
    id: 761,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "4",
    number: "\u0411-401",
    type: "",
    desc: ""
  },
  {
    id: 762,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "4",
    number: "\u0411-402",
    type: "",
    desc: "\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u043D\u0430\u0443\u0447\u043D\u043E-\u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0445 \u0440\u0430\u0431\u043E\u0442"
  },
  {
    id: 763,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "4",
    number: "\u0411-403",
    type: "",
    desc: "\u0421\u0435\u043A\u0442\u043E\u0440 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u044F \u043A\u0443\u043B\u044C\u0442\u0443\u0440\u043E-\u043C\u0430\u0441\u0441\u043E\u0432\u044B\u0445 \u0440\u0430\u0431\u043E\u0442"
  },
  {
    id: 764,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "4",
    number: "\u0411-403\u0410",
    type: "",
    desc: ""
  },
  {
    id: 765,
    campus: "\u041C",
    corpus: "1",
    floor: "2",
    number: "-",
    type: "\u0433\u0430\u0440\u0434\u0435\u0440\u043E\u0431",
    desc: "-"
  },
  {
    id: 766,
    campus: "\u041C",
    corpus: "1",
    floor: "3",
    number: "3301",
    type: "\u0444\u043E\u0442\u043E\u0441\u0442\u0443\u0434\u0438\u044F",
    desc: "-"
  },
  {
    id: 767,
    campus: "\u041C",
    corpus: "1",
    floor: "3",
    number: "3302",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0443\u0447\u0435\u0431\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"
  },
  {
    id: 768,
    campus: "\u041C",
    corpus: "1",
    floor: "3",
    number: "3303",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0443\u0447\u0435\u0431\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"
  },
  {
    id: 769,
    campus: "\u041C",
    corpus: "1",
    floor: "3",
    number: "3304",
    type: "\u043A\u0430\u0431\u0438\u043D\u0435\u0442",
    desc: '\u043A\u0430\u0431\u0438\u043D\u0435\u0442 \u0434\u043B\u044F \u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u043F\u0440\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0440\u0430\u0431\u043E\u0442 \u0441\u0442\u0443\u0434\u0435\u043D\u0442\u043E\u0432 \u043A\u0430\u0444\u0435\u0434\u0440\u044B "\u0418\u043B\u043B\u044E\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u0438 \u044D\u0441\u0442\u0430\u043C\u043F"'
  },
  {
    id: 770,
    campus: "\u041C",
    corpus: "1",
    floor: "3",
    number: "3305",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0443\u0447\u0435\u0431\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"
  },
  {
    id: 771,
    campus: "\u041C",
    corpus: "1",
    floor: "3",
    number: "3306",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0443\u0447\u0435\u0431\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"
  },
  {
    id: 772,
    campus: "\u041C",
    corpus: "1",
    floor: "3",
    number: "3307\u0410",
    type: "\u043A\u0430\u0431\u0438\u043D\u0435\u0442",
    desc: "\u0438\u043D\u0441\u0442\u0438\u0442\u0443\u0442 \u0433\u0440\u0430\u0444\u0438\u043A\u0438 \u0438 \u0438\u0441\u043A\u0443\u0441\u0441\u0442\u0432\u0430 \u043A\u043D\u0438\u0433\u0438 \u0438\u043C\u0435\u043D\u0438 \u0412. \u0410. \u0424\u0430\u0432\u043E\u0440\u0441\u043A\u043E\u0433\u043E"
  },
  {
    id: 773,
    campus: "\u041C",
    corpus: "1",
    floor: "3",
    number: "3308",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0443\u0447\u0435\u0431\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"
  },
  {
    id: 774,
    campus: "\u041C",
    corpus: "1",
    floor: "3",
    number: "3310",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0443\u0447\u0435\u0431\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"
  },
  {
    id: 775,
    campus: "\u041C",
    corpus: "1",
    floor: "3",
    number: "3311",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0443\u0447\u0435\u0431\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"
  },
  {
    id: 776,
    campus: "\u041C",
    corpus: "1",
    floor: "3",
    number: "3312",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0443\u0447\u0435\u0431\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"
  },
  {
    id: 777,
    campus: "\u041C",
    corpus: "1",
    floor: "3",
    number: "3313",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0443\u0447\u0435\u0431\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"
  },
  {
    id: 778,
    campus: "\u041C",
    corpus: "1",
    floor: "3",
    number: "3314",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u043C\u0430\u0441\u0442\u0435\u0440\u0441\u043A\u0430\u044F \u0430\u043D\u0438\u043C\u0430\u0446\u0438\u0438"
  },
  {
    id: 779,
    campus: "\u041C",
    corpus: "1",
    floor: "3",
    number: "3315",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0425\u0422\u041E\u041F\u041F"
  },
  {
    id: 780,
    campus: "\u041C",
    corpus: "1",
    floor: "3",
    number: "3315\u0410",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0443\u0447\u0435\u0431\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"
  },
  {
    id: 781,
    campus: "\u041C",
    corpus: "1",
    floor: "3",
    number: "3316",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0443\u0447\u0435\u0431\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"
  },
  {
    id: 782,
    campus: "\u041C",
    corpus: "1",
    floor: "3",
    number: "3317",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0443\u0447\u0435\u0431\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"
  },
  {
    id: 783,
    campus: "\u041C",
    corpus: "1",
    floor: "3",
    number: "3317\u0410",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0443\u0447\u0435\u0431\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"
  },
  {
    id: 784,
    campus: "\u041C",
    corpus: "1",
    floor: "3",
    number: "3318",
    type: "\u043F\u0435\u0440\u043F\u043E\u0434\u0430\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0430\u044F",
    desc: "\u0437\u0430\u0432\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u043C\u0435\u0436\u0444\u0430\u043A\u0443\u043B\u044C\u0442\u0435\u0442\u0441\u043A\u0438\u043C \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u043C \u0441\u0435\u043A\u0442\u043E\u0440\u043E\u043C"
  },
  {
    id: 785,
    campus: "\u041C",
    corpus: "1",
    floor: "3",
    number: "3319",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0443\u0447\u0435\u0431\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"
  },
  {
    id: 786,
    campus: "\u041C",
    corpus: "1",
    floor: "3",
    number: "3320",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0443\u0447\u0435\u0431\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"
  },
  {
    id: 787,
    campus: "\u041C",
    corpus: "1",
    floor: "3",
    number: "3321",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0443\u0447\u0435\u0431\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"
  },
  {
    id: 788,
    campus: "\u041C",
    corpus: "1",
    floor: "3",
    number: "3322",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0443\u0447\u0435\u0431\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"
  },
  {
    id: 789,
    campus: "\u041C",
    corpus: "1",
    floor: "3",
    number: "3323",
    type: "\u0441\u0435\u0440\u0432\u0435\u0440\u043D\u0430\u044F",
    desc: "-"
  },
  {
    id: 790,
    campus: "\u041C",
    corpus: "1",
    floor: "3",
    number: "3325",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0443\u0447\u0435\u0431\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"
  },
  {
    id: 791,
    campus: "\u041C",
    corpus: "1",
    floor: "3",
    number: "3326",
    type: "\u0430\u0443\u0434\u0438\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"
  },
  {
    id: 792,
    campus: "\u041C",
    corpus: "1",
    floor: "3",
    number: "3326\u0410",
    type: "-",
    desc: "-"
  },
  {
    id: 793,
    campus: "\u041C",
    corpus: "1",
    floor: "3",
    number: "3327",
    type: "\u0430\u0443\u0434\u0438\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"
  },
  {
    id: 794,
    campus: "\u041C",
    corpus: "1",
    floor: "3",
    number: "3328",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0443\u0447\u0435\u0431\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"
  },
  {
    id: 795,
    campus: "\u041C",
    corpus: "1",
    floor: "4",
    number: "3402",
    type: "",
    desc: ""
  },
  {
    id: 796,
    campus: "\u041C",
    corpus: "1",
    floor: "4",
    number: "3403",
    type: "",
    desc: ""
  },
  {
    id: 797,
    campus: "\u041C",
    corpus: "1",
    floor: "4",
    number: "3404",
    type: "\u0441\u0430\u043D\u0438\u0442\u0430\u0440\u043D\u0430\u044F \u043A\u043E\u043C\u043D\u0430\u0442\u0430",
    desc: ""
  },
  {
    id: 798,
    campus: "\u041C",
    corpus: "1",
    floor: "4",
    number: "3405",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 799,
    campus: "\u041C",
    corpus: "1",
    floor: "4",
    number: "3406",
    type: "",
    desc: ""
  },
  {
    id: 800,
    campus: "\u041C",
    corpus: "1",
    floor: "4",
    number: "3407",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u043B\u0435\u043A\u0446\u0438\u043E\u043D\u043D\u0430\u044F"
  },
  {
    id: 801,
    campus: "\u041C",
    corpus: "1",
    floor: "4",
    number: "3409",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 802,
    campus: "\u041C",
    corpus: "1",
    floor: "4",
    number: "3410",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u043B\u0435\u043A\u0446\u0438\u043E\u043D\u043D\u0430\u044F"
  },
  {
    id: 803,
    campus: "\u041C",
    corpus: "1",
    floor: "4",
    number: "3411",
    type: "\u043A\u043E\u0432\u043E\u0440\u043A\u0438\u043D\u0433",
    desc: "\u043A\u043E\u0432\u043E\u0440\u043A\u0438\u043D\u0433"
  },
  {
    id: 804,
    campus: "\u041C",
    corpus: "1",
    floor: "4",
    number: "3413",
    type: "",
    desc: ""
  },
  {
    id: 805,
    campus: "\u041C",
    corpus: "1",
    floor: "4",
    number: "3414",
    type: "",
    desc: ""
  },
  {
    id: 806,
    campus: "\u041C",
    corpus: "1",
    floor: "4",
    number: "3415",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0443\u0447\u0435\u0431\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"
  },
  {
    id: 807,
    campus: "\u041C",
    corpus: "1",
    floor: "4",
    number: "3416",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0443\u0447\u0435\u0431\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"
  },
  {
    id: 808,
    campus: "\u041C",
    corpus: "1",
    floor: "4",
    number: "3417",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0443\u0447\u0435\u0431\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"
  },
  {
    id: 809,
    campus: "\u041C",
    corpus: "1",
    floor: "4",
    number: "3418",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0443\u0447\u0435\u0431\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"
  },
  {
    id: 810,
    campus: "\u041C",
    corpus: "1",
    floor: "4",
    number: "3419",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0443\u0447\u0435\u0431\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"
  },
  {
    id: 811,
    campus: "\u041C",
    corpus: "1",
    floor: "4",
    number: "3420",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0443\u0447\u0435\u0431\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"
  },
  {
    id: 812,
    campus: "\u041C",
    corpus: "1",
    floor: "4",
    number: "3422",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0443\u0447\u0435\u0431\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"
  },
  {
    id: 813,
    campus: "\u041C",
    corpus: "1",
    floor: "4",
    number: "3422\u0410",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0443\u0447\u0435\u0431\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"
  },
  {
    id: 814,
    campus: "\u041C",
    corpus: "1",
    floor: "4",
    number: "3423",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0443\u0447\u0435\u0431\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"
  },
  {
    id: 815,
    campus: "\u041C",
    corpus: "1",
    floor: "4",
    number: "3424",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0443\u0447\u0435\u0431\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"
  },
  {
    id: 816,
    campus: "\u041C",
    corpus: "1",
    floor: "4",
    number: "3425",
    type: "\u0441\u0435\u0440\u0432\u0435\u0440\u043D\u0430\u044F",
    desc: "-"
  },
  {
    id: 817,
    campus: "\u041C",
    corpus: "1",
    floor: "5",
    number: "3501",
    type: "\u043A\u0430\u0431\u0438\u043D\u0435\u0442",
    desc: '\u043A\u0430\u0444\u0435\u0434\u0440\u0430 "\u0420\u0438\u0441\u0443\u043D\u043E\u043A \u0438 \u0436\u0438\u0432\u043E\u043F\u0438\u0441\u044C"'
  },
  {
    id: 818,
    campus: "\u041C",
    corpus: "1",
    floor: "5",
    number: "3503",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 819,
    campus: "\u041C",
    corpus: "1",
    floor: "5",
    number: "3504",
    type: "",
    desc: ""
  },
  {
    id: 820,
    campus: "\u041C",
    corpus: "1",
    floor: "5",
    number: "3505",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 821,
    campus: "\u041C",
    corpus: "1",
    floor: "5",
    number: "3506",
    type: "\u043A\u0430\u0431\u0438\u043D\u0435\u0442",
    desc: "\u043E\u0442\u0434\u0435\u043B \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u043E\u0432 \u0440\u0435\u0434\u0430\u043A\u0446\u0438\u043E\u043D\u043D\u043E-\u0438\u0437\u0434\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0445 \u0438 \u043F\u043E\u043B\u0438\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u0439 \u0432\u044B\u0441\u0448\u0438\u0445 \u0438 \u0441\u0440\u0435\u0434\u043D\u0438\u0445 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0445 \u0443\u0447\u0435\u0431\u043D\u044B\u0445 \u0437\u0430\u0432\u0435\u0434\u0435\u043D\u0438\u0439"
  },
  {
    id: 822,
    campus: "\u041C",
    corpus: "1",
    floor: "5",
    number: "3507",
    type: "\u043A\u0430\u0431\u0438\u043D\u0435\u0442",
    desc: "\u043A\u0430\u0431\u0438\u043D\u0435\u0442 \u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u043D\u043E\u0433\u043E \u0446\u0435\u043D\u0442\u0440\u0430 \u0434\u043B\u044F \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0438 \u0441\u0442\u0443\u0434\u0435\u043D\u0447\u0435\u0441\u043A\u0438\u0445 \u0445\u0443\u0434\u043E\u0436\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0445 \u0440\u0430\u0431\u043E\u0442 \u043A \u0432\u044B\u0441\u0442\u0430\u0432\u043A\u0435"
  },
  {
    id: 823,
    campus: "\u041C",
    corpus: "1",
    floor: "5",
    number: "3508",
    type: "\u043A\u0430\u0431\u0438\u043D\u0435\u0442",
    desc: "\u044D\u043A\u0441\u043F\u043B\u0443\u0430\u0442\u0430\u0446\u0438\u043E\u043D\u043D\u043E-\u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043E\u0442\u0434\u0435\u043B"
  },
  {
    id: 824,
    campus: "\u041C",
    corpus: "1",
    floor: "5",
    number: "3509",
    type: "\u043A\u0430\u0431\u0438\u043D\u0435\u0442",
    desc: "\u043A\u0430\u0431\u0438\u043D\u0435\u0442 \u0440\u0443\u0441\u0441\u043A\u043E\u0433\u043E \u044F\u0437\u044B\u043A\u0430"
  },
  {
    id: 825,
    campus: "\u041C",
    corpus: "1",
    floor: "5",
    number: "3510",
    type: "\u043A\u0430\u0431\u0438\u043D\u0435\u0442",
    desc: '\u043F\u0440\u0435\u043F\u043E\u0434\u0430\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0430\u044F, \u043A\u0430\u0444\u0435\u0434\u0440\u0430 "\u0424\u0438\u043B\u043E\u0441\u043E\u0444\u0438\u0438 \u0438 \u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0445 \u043D\u0430\u0443\u043A"'
  },
  {
    id: 826,
    campus: "\u041C",
    corpus: "1",
    floor: "5",
    number: "3511",
    type: "",
    desc: ""
  },
  {
    id: 827,
    campus: "\u041C",
    corpus: "1",
    floor: "5",
    number: "3512",
    type: "",
    desc: ""
  },
  {
    id: 828,
    campus: "\u041C",
    corpus: "1",
    floor: "5",
    number: "3513",
    type: "",
    desc: ""
  },
  {
    id: 829,
    campus: "\u041C",
    corpus: "1",
    floor: "5",
    number: "3514\u0410",
    type: "",
    desc: ""
  },
  {
    id: 830,
    campus: "\u041C",
    corpus: "1",
    floor: "5",
    number: "3515",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 831,
    campus: "\u041C",
    corpus: "1",
    floor: "5",
    number: "3516",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 832,
    campus: "\u041C",
    corpus: "1",
    floor: "5",
    number: "3518",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 833,
    campus: "\u041C",
    corpus: "1",
    floor: "5",
    number: "3519",
    type: "\u043A\u0430\u0431\u0438\u043D\u0435\u0442",
    desc: '\u043A\u0430\u0431\u0438\u043D\u0435\u0442 \u0434\u043B\u044F \u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u0443\u0447\u0435\u0431\u043D\u043E-\u043C\u0435\u0442\u043E\u0434\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430 \u043A\u0430\u0444\u0435\u0434\u0440\u044B "\u0420\u0438\u0441\u0443\u043D\u043E\u043A \u0438 \u0416\u0438\u0432\u043E\u043F\u0438\u0441\u044C"'
  },
  {
    id: 834,
    campus: "\u041C",
    corpus: "1",
    floor: "5",
    number: "3520",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 835,
    campus: "\u041C",
    corpus: "1",
    floor: "5",
    number: "3520",
    type: "",
    desc: ""
  },
  {
    id: 836,
    campus: "\u041C",
    corpus: "1",
    floor: "5",
    number: "3521",
    type: "\u043A\u0430\u0431\u0438\u043D\u0435\u0442",
    desc: ""
  },
  {
    id: 837,
    campus: "\u041C",
    corpus: "1",
    floor: "5",
    number: "3582",
    type: "",
    desc: ""
  },
  {
    id: 838,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "1",
    number: "\u0412-101",
    type: "-",
    desc: "\u041E\u0442\u0434\u0435\u043B \u043F\u043E \u0440\u0430\u0431\u043E\u0442\u0435 \u0441 \u0438\u043D\u043E\u0441\u0442\u0440\u0430\u043D\u043D\u044B\u043C\u0438 \u043E\u0431\u0443\u0447\u0430\u044E\u0449\u0438\u043C\u0438\u0441\u044F"
  },
  {
    id: 839,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "1",
    number: "\u0412-102",
    type: "-",
    desc: "\u041E\u0442\u0434\u0435\u043B \u043F\u043E \u0440\u0430\u0431\u043E\u0442\u0435 \u0441 \u0438\u043D\u043E\u0441\u0442\u0440\u0430\u043D\u043D\u044B\u043C\u0438 \u043E\u0431\u0443\u0447\u0430\u044E\u0449\u0438\u043C\u0438\u0441\u044F"
  },
  {
    id: 840,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "1",
    number: "\u0412-104",
    type: "-",
    desc: "\u041F\u0440\u0438\u0451\u043C\u043D\u0430\u044F \u043A\u043E\u043C\u0438\u0441\u0441\u0438\u044F"
  },
  {
    id: 841,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "1",
    number: "\u0412-105",
    type: "-",
    desc: "\u041F\u0440\u0438\u0451\u043C\u043D\u0430\u044F \u043A\u043E\u043C\u0438\u0441\u0441\u0438\u044F"
  },
  {
    id: 842,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "1",
    number: "\u0412-107",
    type: "-",
    desc: "\u041C\u043D\u043E\u0433\u043E\u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u0446\u0435\u043D\u0442\u0440"
  },
  {
    id: 843,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "1",
    number: "\u0412-108",
    type: "-",
    desc: "\u0426\u0435\u043D\u0442\u0440 \u043F\u043E \u0440\u0430\u0431\u043E\u0442\u0435 \u0441\u043E \u0441\u0442\u0443\u0434\u0435\u043D\u0442\u0430\u043C\u0438"
  },
  {
    id: 844,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "2",
    number: "\u0412-203",
    type: "-",
    desc: "\u041F\u0440\u043E\u0444\u0441\u043E\u044E\u0437\u043D\u0430\u044F \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F \u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u043E\u0433\u043E \u041F\u043E\u043B\u0438\u0442\u0435\u0445\u0430"
  },
  {
    id: 845,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "2",
    number: "\u0412-210",
    type: "-",
    desc: '\u041A\u0430\u0444\u0435\u0434\u0440\u0430 "\u041D\u0430\u0437\u0435\u043C\u043D\u044B\u0435 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u044B\u0435 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430"'
  },
  {
    id: 846,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "2",
    number: "\u0412-204",
    type: "\u041A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441",
    desc: '\u041A\u0430\u0444\u0435\u0434\u0440\u0430 "\u041D\u0430\u0437\u0435\u043C\u043D\u044B\u0435 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u044B\u0435 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430"'
  },
  {
    id: 847,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "2",
    number: "\u0412-205",
    type: "\u0421\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: '\u041A\u0430\u0444\u0435\u0434\u0440\u0430 "\u041D\u0430\u0437\u0435\u043C\u043D\u044B\u0435 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u044B\u0435 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430"'
  },
  {
    id: 848,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "2",
    number: "\u0412-209",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 849,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "2",
    number: "\u0412-206",
    type: "\u041A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441",
    desc: '\u041A\u0430\u0444\u0435\u0434\u0440\u0430 "\u041D\u0430\u0437\u0435\u043C\u043D\u044B\u0435 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u044B\u0435 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430"'
  },
  {
    id: 850,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "2",
    number: "\u0412-207",
    type: "\u043A\u0430\u0431\u0438\u043D\u0435\u0442",
    desc: ""
  },
  {
    id: 851,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "2",
    number: "\u0412-208",
    type: "\u043A\u0430\u0431\u0438\u043D\u0435\u0442",
    desc: ""
  },
  {
    id: 852,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "2",
    number: "\u0412-202",
    type: "-",
    desc: "\u041F\u0440\u043E\u0444\u0441\u043E\u044E\u0437\u043D\u0430\u044F \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F \u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u043E\u0433\u043E \u041F\u043E\u043B\u0438\u0442\u0435\u0445\u0430"
  },
  {
    id: 853,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "3",
    number: "\u0412-301",
    type: "\u043A\u0430\u0431\u0438\u043D\u0435\u0442",
    desc: "\u041E\u0442\u0434\u0435\u043B \u0438\u0442\u043E\u0433\u043E\u0432\u043E\u0439 \u0430\u0442\u0442\u0435\u0441\u0442\u0430\u0446\u0438\u0438"
  },
  {
    id: 854,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "3",
    number: "\u0412-302",
    type: "\u043A\u0430\u0431\u0438\u043D\u0435\u0442",
    desc: "\u041E\u0442\u0434\u0435\u043B \u0438\u0442\u043E\u0433\u043E\u0432\u043E\u0439 \u0430\u0442\u0442\u0435\u0441\u0442\u0430\u0446\u0438\u0438"
  },
  {
    id: 855,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "3",
    number: "\u0412-303",
    type: "\u043A\u0430\u0431\u0438\u043D\u0435\u0442",
    desc: ""
  },
  {
    id: 856,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "3",
    number: "\u0412-304",
    type: "\u043A\u0430\u0431\u0438\u043D\u0435\u0442",
    desc: '\u041A\u0430\u0444\u0435\u0434\u0440\u0430 "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435 \u0438 \u043F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u0430\u044F \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u0438\u043A\u0430"'
  },
  {
    id: 857,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "3",
    number: "\u0412-305",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: '\u041A\u0430\u0444\u0435\u0434\u0440\u0430 "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435 \u0438 \u043F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u0430\u044F \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u0438\u043A\u0430"'
  },
  {
    id: 858,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "3",
    number: "\u0412-312",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: '\u041A\u0430\u0444\u0435\u0434\u0440\u0430 "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435 \u0438 \u043F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u0430\u044F \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u0438\u043A\u0430"'
  },
  {
    id: 859,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "3",
    number: "\u0412-306",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: '\u041A\u0430\u0444\u0435\u0434\u0440\u0430 "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435 \u0438 \u043F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u0430\u044F \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u0438\u043A\u0430"'
  },
  {
    id: 860,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "3",
    number: "\u0412-311",
    type: "\u043A\u0430\u0431\u0438\u043D\u0435\u0442",
    desc: ""
  },
  {
    id: 861,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "3",
    number: "\u0412-307",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: '\u041A\u0430\u0444\u0435\u0434\u0440\u0430 "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435 \u0438 \u043F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u0430\u044F \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u0438\u043A\u0430"'
  },
  {
    id: 862,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "3",
    number: "\u0412-308",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: '\u041A\u0430\u0444\u0435\u0434\u0440\u0430 "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435 \u0438 \u043F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u0430\u044F \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u0438\u043A\u0430"'
  },
  {
    id: 863,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "3",
    number: "\u0412-309",
    type: "\u043A\u0430\u0431\u0438\u043D\u0435\u0442",
    desc: '\u041A\u0430\u0444\u0435\u0434\u0440\u0430 "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435 \u0438 \u043F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u0430\u044F \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u0438\u043A\u0430"'
  },
  {
    id: 864,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "3",
    number: "\u0412-310",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: '\u041A\u0430\u0444\u0435\u0434\u0440\u0430 "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435 \u0438 \u043F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u0430\u044F \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u0438\u043A\u0430"'
  },
  {
    id: 865,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "4",
    number: "\u0412-401",
    type: "-",
    desc: ""
  },
  {
    id: 866,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "4",
    number: "\u0412-409",
    type: "\u043A\u0430\u0431\u0438\u043D\u0435\u0442",
    desc: ""
  },
  {
    id: 867,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "4",
    number: "\u0412-403",
    type: "\u043A\u0430\u0431\u0438\u043D\u0435\u0442",
    desc: ""
  },
  {
    id: 868,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "4",
    number: "\u0412-408",
    type: "-",
    desc: '\u041D\u0422\u0426 "\u041E\u043F\u0442\u043E\u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u0438\u043A\u0430"'
  },
  {
    id: 869,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "4",
    number: "\u0412-404",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: '\u041D\u0422\u0426 "\u041E\u043F\u0442\u043E\u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u0438\u043A\u0430"'
  },
  {
    id: 870,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "4",
    number: "\u0412-405",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: '\u041D\u0422\u0426 "\u041E\u043F\u0442\u043E\u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u0438\u043A\u0430"'
  },
  {
    id: 871,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "4",
    number: "\u0412-406",
    type: "\u043A\u0430\u0431\u0438\u043D\u0435\u0442",
    desc: ""
  },
  {
    id: 872,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "4",
    number: "\u0412-407",
    type: "\u043A\u0430\u0431\u0438\u043D\u0435\u0442",
    desc: ""
  },
  {
    id: 873,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "5",
    number: "\u0412-501",
    type: "\u043A\u0430\u0431\u0438\u043D\u0435\u0442",
    desc: ""
  },
  {
    id: 874,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "5",
    number: "\u0412-502",
    type: "\u043A\u0430\u0431\u0438\u043D\u0435\u0442",
    desc: ""
  },
  {
    id: 875,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "5",
    number: "\u0412-503",
    type: "-",
    desc: ""
  },
  {
    id: 876,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "5",
    number: "\u0412-504",
    type: "\u043A\u043E\u0432\u043E\u0440\u043A\u0438\u043D\u0433",
    desc: ""
  },
  {
    id: 877,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "5",
    number: "\u0412-505",
    type: "\u043A\u043E\u0432\u043E\u0440\u043A\u0438\u043D\u0433",
    desc: ""
  },
  {
    id: 878,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "5",
    number: "\u0412-510",
    type: "-",
    desc: ""
  },
  {
    id: 879,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "5",
    number: "\u0412-508",
    type: "\u043A\u043E\u0432\u043E\u0440\u043A\u0438\u043D\u0433",
    desc: "\u041F\u0440\u0435\u0434\u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0439 \u043A\u043B\u0430\u0441\u0441"
  },
  {
    id: 880,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "5",
    number: "\u0412-506",
    type: "\u043A\u043E\u0432\u043E\u0440\u043A\u0438\u043D\u0433",
    desc: ""
  },
  {
    id: 881,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "5",
    number: "\u0412-509",
    type: "\u043A\u0430\u0431\u0438\u043D\u0435\u0442",
    desc: ""
  },
  {
    id: 882,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "5",
    number: "\u0412-507",
    type: "\u043A\u0430\u0431\u0438\u043D\u0435\u0442",
    desc: ""
  },
  {
    id: 883,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "1",
    number: "1101",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "-"
  },
  {
    id: 884,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "1",
    number: "1102",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "-"
  },
  {
    id: 885,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "1",
    number: "1103",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "-"
  },
  {
    id: 886,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "1",
    number: "1104",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: '\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F \u042D\u0424\u0425\u041E, \u043A\u0430\u0444\u0435\u0434\u0440\u0430 "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438 \u0438 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435 \u043C\u0430\u0448\u0438\u043D\u043E\u0441\u0442\u0440\u043E\u0435\u043D\u0438\u044F"'
  },
  {
    id: 887,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "1",
    number: "1104\u0410",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: '\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F \u0441 \u0427\u041F\u0423 \u0438 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u044F, \u043A\u0430\u0444\u0435\u0434\u0440\u0430 "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438 \u0438 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435 \u043C\u0430\u0448\u0438\u043D\u043E\u0441\u0442\u0440\u043E\u0435\u043D\u0438\u044F"'
  },
  {
    id: 888,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "1",
    number: "1105",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: '\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F \u043F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u044B\u0445 \u0440\u043E\u0431\u043E\u0442\u043E\u0432 \u0438 \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u0438, \u043A\u0430\u0444\u0435\u0434\u0440\u0430 "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438 \u0438 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435 \u043C\u0430\u0448\u0438\u043D\u043E\u0441\u0442\u0440\u043E\u0435\u043D\u0438\u044F"'
  },
  {
    id: 889,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "1",
    number: "1107",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "-"
  },
  {
    id: 890,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "1",
    number: "1108/1",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "-"
  },
  {
    id: 891,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "2",
    number: "1201",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "-"
  },
  {
    id: 892,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "2",
    number: "1202",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "-"
  },
  {
    id: 893,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "2",
    number: "1203",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "-"
  },
  {
    id: 894,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "2",
    number: "1204",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "-"
  },
  {
    id: 895,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "2",
    number: "1205",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: '\u041A\u0430\u0444\u0435\u0434\u0440\u0430 "\u041C\u0435\u0442\u0430\u043B\u043B\u0443\u0440\u0433\u0438\u044F"'
  },
  {
    id: 896,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "2",
    number: "1206",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "-"
  },
  {
    id: 897,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "2",
    number: "1206\u0410",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "-"
  },
  {
    id: 898,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "2",
    number: "1207",
    type: "\u0426\u0435\u043D\u0442\u0440 \u0434\u043E\u0432\u0443\u0437\u043E\u0432\u0441\u043A\u043E\u0433\u043E \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u044F",
    desc: ""
  },
  {
    id: 899,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "2",
    number: "1208",
    type: "\u0426\u0435\u043D\u0442\u0440 \u0434\u043E\u0432\u0443\u0437\u043E\u0432\u0441\u043A\u043E\u0433\u043E \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u044F",
    desc: ""
  },
  {
    id: 900,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "2",
    number: "1209",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 901,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "2",
    number: "1210",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 902,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "2",
    number: "1211",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 903,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "2",
    number: "1212",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 904,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "2",
    number: "1213",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "-"
  },
  {
    id: 905,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "2",
    number: "1214",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "-"
  },
  {
    id: 906,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "2",
    number: "1215",
    type: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u043E\u0440\u0441\u043A\u0430\u044F",
    desc: '\u041A\u0430\u0444\u0435\u0434\u0440\u0430 "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0442\u0438\u043A\u0430 \u0438 \u0432\u044B\u0447\u0438\u0441\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430"'
  },
  {
    id: 907,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "2",
    number: "1216",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "-"
  },
  {
    id: 908,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "2",
    number: "1217",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "-"
  },
  {
    id: 909,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "2",
    number: "1218",
    type: "\u0423\u0447\u0435\u0431\u043D\u044B\u0439 \u0446\u0435\u043D\u0442\u0440",
    desc: '\u0420\u0435\u0441\u0443\u0440\u0441\u043D\u044B\u0439 \u0446\u0435\u043D\u0442\u0440 "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438 XXI \u0432\u0435\u043A\u0430", \u0443\u0447\u0435\u0431\u043D\u044B\u0439 \u0446\u0435\u043D\u0442\u0440 "Heidenhain"'
  },
  {
    id: 910,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "2",
    number: "1220",
    type: "\u0414\u0438\u0441\u043F\u0435\u0442\u0447\u0435\u0440\u0441\u043A\u0430\u044F \u043F\u043E \u043B\u0438\u0444\u0442\u0430\u043C",
    desc: ""
  },
  {
    id: 911,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "2",
    number: "-",
    type: "\u0421\u0442\u043E\u043B\u043E\u0432\u0430\u044F",
    desc: ""
  },
  {
    id: 912,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "3",
    number: "1301",
    type: "\u0423\u0447\u0435\u0431\u043D\u044B\u0439 \u0446\u0435\u043D\u0442\u0440",
    desc: '\u0426\u0435\u043D\u0442\u0440 \u043A\u043E\u043B\u043B\u0435\u043A\u0442\u0438\u0432\u043D\u043E\u0433\u043E \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F "\u041D\u0430\u0443\u043A\u043E\u0451\u043C\u043A\u0438\u0435 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438 \u0432 \u043C\u0430\u0448\u0438\u043D\u043E\u0441\u0442\u0440\u043E\u0435\u043D\u0438\u0438"'
  },
  {
    id: 913,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "3",
    number: "1302",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: '\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F \u0442\u0435\u0440\u043C\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438, \u0446\u0435\u043D\u0442\u0440 \u043A\u043E\u043B\u043B\u0435\u043A\u0442\u0438\u0432\u043D\u043E\u0433\u043E \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F "\u041D\u0430\u0443\u043A\u043E\u0451\u043C\u043A\u0438\u0435 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438 \u0432 \u043C\u0430\u0448\u0438\u043D\u043E\u0441\u0442\u0440\u043E\u0435\u043D\u0438\u0438"'
  },
  {
    id: 914,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "3",
    number: "1303",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: '\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u044F, \u0446\u0435\u043D\u0442\u0440 \u043A\u043E\u043B\u043B\u0435\u043A\u0442\u0438\u0432\u043D\u043E\u0433\u043E \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F "\u041D\u0430\u0443\u043A\u043E\u0451\u043C\u043A\u0438\u0435 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438 \u0432 \u043C\u0430\u0448\u0438\u043D\u043E\u0441\u0442\u0440\u043E\u0435\u043D\u0438\u0438"'
  },
  {
    id: 915,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "3",
    number: "1304",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: '\u041C\u0435\u0442\u0430\u043B\u043B\u043E\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F, \u043A\u0430\u0444\u0435\u0434\u0440\u0430 "\u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u0435"'
  },
  {
    id: 916,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "3",
    number: "1305",
    type: "\u0417\u0430\u0432\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u043A\u0430\u0444\u0435\u0434\u0440\u043E\u0439",
    desc: '\u041A\u0430\u0444\u0435\u0434\u0440\u0430 "\u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u0435"'
  },
  {
    id: 917,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "3",
    number: "1306",
    type: "\u0417\u0430\u0432\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u0435\u0439",
    desc: '\u041A\u0430\u0444\u0435\u0434\u0440\u0430 "\u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u0435"'
  },
  {
    id: 918,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "3",
    number: "1307",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: '\u0422\u0435\u0440\u043C\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F, \u043A\u0430\u0444\u0435\u0434\u0440\u0430 "\u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u0435"'
  },
  {
    id: 919,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "3",
    number: "1308",
    type: "\u041F\u0440\u0435\u043F\u043E\u0434\u0430\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0430\u044F",
    desc: '\u041A\u0430\u0444\u0435\u0434\u0440\u0430 "\u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u0435"'
  },
  {
    id: 920,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "3",
    number: "1309",
    type: "\u041F\u0440\u0435\u043F\u043E\u0434\u0430\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0430\u044F",
    desc: '\u041A\u0430\u0444\u0435\u0434\u0440\u0430 "\u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u0435"'
  },
  {
    id: 921,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "3",
    number: "1310",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 922,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "3",
    number: "1311",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 923,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "3",
    number: "1312",
    type: "\u041F\u0440\u0435\u043F\u043E\u0434\u0430\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0430\u044F",
    desc: '\u041A\u0430\u0444\u0435\u0434\u0440\u0430 "\u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u0435"'
  },
  {
    id: 924,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "3",
    number: "1312\u0410",
    type: "\u041F\u0440\u0435\u043F\u043E\u0434\u0430\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0430\u044F",
    desc: '\u041A\u0430\u0444\u0435\u0434\u0440\u0430 "\u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u0435"'
  },
  {
    id: 925,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "3",
    number: "1313",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: '\u041C\u0435\u0442\u0430\u043B\u043B\u043E\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F , \u043A\u0430\u0444\u0435\u0434\u0440\u0430 "\u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u0435"'
  },
  {
    id: 926,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "3",
    number: "1314",
    type: "\u041F\u0440\u0435\u043F\u043E\u0434\u0430\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0430\u044F",
    desc: '\u041A\u0430\u0444\u0435\u0434\u0440\u0430 "\u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u0435"'
  },
  {
    id: 927,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "3",
    number: "1315",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 928,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "3",
    number: "1316",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 929,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "4",
    number: "1401",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: '\u041A\u0430\u0444\u0435\u0434\u0440\u0430 "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u0442\u0435\u0445\u043D\u0438\u043A\u0430"'
  },
  {
    id: 930,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "4",
    number: "1402",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: '\u041A\u0430\u0444\u0435\u0434\u0440\u0430 "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u0442\u0435\u0445\u043D\u0438\u043A\u0430"'
  },
  {
    id: 931,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "4",
    number: "1403",
    type: "\u041F\u0440\u0435\u043F\u043E\u0434\u0430\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0430\u044F",
    desc: '\u041A\u0430\u0444\u0435\u0434\u0440\u0430 "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u0442\u0435\u0445\u043D\u0438\u043A\u0430"'
  },
  {
    id: 932,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "4",
    number: "1404",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: '\u041A\u0430\u0444\u0435\u0434\u0440\u0430 "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u0442\u0435\u0445\u043D\u0438\u043A\u0430"'
  },
  {
    id: 933,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "4",
    number: "1405",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: '\u041A\u0430\u0444\u0435\u0434\u0440\u0430 "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u0442\u0435\u0445\u043D\u0438\u043A\u0430"'
  },
  {
    id: 934,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "4",
    number: "1406",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 935,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "4",
    number: "1407",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 936,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "4",
    number: "1408",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 937,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "4",
    number: "1409",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 938,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "4",
    number: "1410",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u041B\u0435\u043A\u0446\u0438\u043E\u043D\u043D\u0430\u044F"
  },
  {
    id: 939,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "4",
    number: "1410\u0410",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 940,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "4",
    number: "1411",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 941,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "4",
    number: "1412",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: '\u041A\u0430\u0444\u0435\u0434\u0440\u0430 "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u0442\u0435\u0445\u043D\u0438\u043A\u0430"'
  },
  {
    id: 942,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "4",
    number: "1413",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: '\u041A\u0430\u0444\u0435\u0434\u0440\u0430 "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u0442\u0435\u0445\u043D\u0438\u043A\u0430"'
  },
  {
    id: 943,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "4",
    number: "1414",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: '\u041A\u0430\u0444\u0435\u0434\u0440\u0430 "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u0442\u0435\u0445\u043D\u0438\u043A\u0430"'
  },
  {
    id: 944,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "4",
    number: "1415",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: '\u041A\u0430\u0444\u0435\u0434\u0440\u0430 "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u0442\u0435\u0445\u043D\u0438\u043A\u0430"'
  },
  {
    id: 945,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "4",
    number: "1416",
    type: "\u041F\u0440\u0435\u043F\u043E\u0434\u0430\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0430\u044F",
    desc: '\u041A\u0430\u0444\u0435\u0434\u0440\u0430 "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u0442\u0435\u0445\u043D\u0438\u043A\u0430"'
  },
  {
    id: 946,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "4",
    number: "1417",
    type: "\u0417\u0430\u0432\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u043A\u0430\u0444\u0435\u0434\u0440\u043E\u0439",
    desc: '\u041A\u0430\u0444\u0435\u0434\u0440\u0430 "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u0442\u0435\u0445\u043D\u0438\u043A\u0430"'
  },
  {
    id: 947,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "5",
    number: "1501",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: '\u041A\u0430\u0444\u0435\u0434\u0440\u0430 "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u044F \u043C\u0430\u0448\u0438\u043D\u043E\u0441\u0442\u0440\u043E\u0435\u043D\u0438\u044F"'
  },
  {
    id: 948,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "5",
    number: "1502",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: '\u0423\u0447\u0435\u0431\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441 \u042D\u0424\u0425\u041E, \u043A\u0430\u0444\u0435\u0434\u0440\u0430 "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u044F \u043C\u0430\u0448\u0438\u043D\u043E\u0441\u0442\u0440\u043E\u0435\u043D\u0438\u044F"'
  },
  {
    id: 949,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "5",
    number: "1503",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: '\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043E\u0441\u043D\u0430\u0441\u0442\u043A\u0430\u0431 "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u044F \u043C\u0430\u0448\u0438\u043D\u043E\u0441\u0442\u0440\u043E\u0435\u043D\u0438\u044F"'
  },
  {
    id: 950,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "5",
    number: "1504",
    type: "\u041F\u0440\u0435\u043F\u043E\u0434\u0430\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0430\u044F",
    desc: '\u041A\u0430\u0444\u0435\u0434\u0440\u0430 "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u044F \u043C\u0430\u0448\u0438\u043D\u043E\u0441\u0442\u0440\u043E\u0435\u043D\u0438\u044F"'
  },
  {
    id: 951,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "5",
    number: "1505",
    type: "\u0417\u0430\u0432\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u043A\u0430\u0444\u0435\u0434\u0440\u043E\u0439",
    desc: '\u041A\u0430\u0444\u0435\u0434\u0440\u0430 "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u044F \u043C\u0430\u0448\u0438\u043D\u043E\u0441\u0442\u0440\u043E\u0435\u043D\u0438\u044F"'
  },
  {
    id: 952,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "5",
    number: "1506",
    type: "\u041F\u0440\u0435\u043F\u043E\u0434\u0430\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0430\u044F",
    desc: '\u041A\u0430\u0444\u0435\u0434\u0440\u0430 "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u044F \u043C\u0430\u0448\u0438\u043D\u043E\u0441\u0442\u0440\u043E\u0435\u043D\u0438\u044F"'
  },
  {
    id: 953,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "5",
    number: "1507",
    type: "\u041F\u0440\u0435\u043F\u043E\u0434\u0430\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0430\u044F",
    desc: '\u041A\u0430\u0444\u0435\u0434\u0440\u0430 "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u044F \u043C\u0430\u0448\u0438\u043D\u043E\u0441\u0442\u0440\u043E\u0435\u043D\u0438\u044F"'
  },
  {
    id: 954,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "5",
    number: "1508",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: '\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F "\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u0438 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0445 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0432", \u043A\u0430\u0444\u0435\u0434\u0440\u0430 "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u044F\u043C\u0430\u0448\u0438\u043D\u043E\u0441\u0442\u0440\u043E\u0435\u043D\u0438\u044F"'
  },
  {
    id: 955,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "5",
    number: "1509",
    type: "\u041F\u0440\u0435\u043F\u043E\u0434\u0430\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0430\u044F",
    desc: '\u041A\u0430\u0444\u0435\u0434\u0440\u0430 "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u044F\u043C\u0430\u0448\u0438\u043D\u043E\u0441\u0442\u0440\u043E\u0435\u043D\u0438\u044F"'
  },
  {
    id: 956,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "5",
    number: "1510",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: '\u041B\u0435\u043A\u0446\u0438\u043E\u043D\u043D\u0430\u044F, \u043A\u0430\u0444\u0435\u0434\u0440\u0430 "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u044F\u043C\u0430\u0448\u0438\u043D\u043E\u0441\u0442\u0440\u043E\u0435\u043D\u0438\u044F"'
  },
  {
    id: 957,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "5",
    number: "1511",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: '\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u043D\u043E\u0433\u043E \u043C\u043E\u0434\u0435\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u043B\u0438\u0442\u0435\u0439\u043D\u044B\u0445 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0432, \u043A\u0430\u0444\u0435\u0434\u0440\u0430 "\u041C\u0430\u0448\u0438\u043D\u044B \u0438\u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438 \u043B\u0438\u0442\u0435\u0439\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430"'
  },
  {
    id: 958,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "5",
    number: "1512",
    type: "\u0417\u0430\u0432\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u043A\u0430\u0444\u0435\u0434\u0440\u043E\u0439",
    desc: '\u041A\u0430\u0444\u0435\u0434\u0440\u0430 "\u041C\u0430\u0448\u0438\u043D\u044B \u0438\u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438 \u043B\u0438\u0442\u0435\u0439\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430"'
  },
  {
    id: 959,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "5",
    number: "1513",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 960,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "5",
    number: "1514",
    type: "\u041F\u0440\u0435\u043F\u043E\u0434\u0430\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0430\u044F",
    desc: '\u041A\u0430\u0444\u0435\u0434\u0440\u0430 "\u041C\u0430\u0448\u0438\u043D\u044B \u0438\u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438 \u043B\u0438\u0442\u0435\u0439\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430"'
  },
  {
    id: 961,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "5",
    number: "1515",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: '\u041A\u0430\u0444\u0435\u0434\u0440\u0430 "\u041C\u0430\u0448\u0438\u043D\u044B \u0438 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438 \u043B\u0438\u0442\u0435\u0439\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430"'
  },
  {
    id: 962,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "5",
    number: "1516",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: '\u041A\u043B\u0430\u0441\u0441 \u0445\u0443\u0434\u043E\u0436\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0445 \u0434\u0438\u0441\u0446\u0438\u043F\u043B\u0438\u043D, \u043A\u0430\u0444\u0435\u0434\u0440\u0430 "\u041C\u0430\u0448\u0438\u043D\u044B \u0438 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438 \u043B\u0438\u0442\u0435\u0439\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430"'
  },
  {
    id: 963,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "5",
    number: "1517",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: '\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F \u0421\u0410\u041F\u0420 \u0422\u041F, \u043A\u0430\u0444\u0435\u0434\u0440\u0430 "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u044F\u043C\u0430\u0448\u0438\u043D\u043E\u0441\u0442\u0440\u043E\u0435\u043D\u0438\u044F"'
  },
  {
    id: 964,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "6",
    number: "1601",
    type: "\u041E\u0442\u0434\u0435\u043B \u0438\u043D\u0442\u0435\u043B\u043B\u0435\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u043E\u0439 \u043F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u043E\u0439 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u0438",
    desc: ""
  },
  {
    id: 965,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "6",
    number: "1602-1603",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 966,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "6",
    number: "1604",
    type: "\u0414\u0438\u0440\u0435\u043A\u0442\u043E\u0440 \u0446\u0435\u043D\u0442\u0440\u0430",
    desc: "\u0426\u0435\u043D\u0442\u0440 \u043F\u043E \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u044E \u043D\u0430\u0443\u0447\u043D\u044B\u0445 \u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u0439"
  },
  {
    id: 967,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "6",
    number: "1605-1606",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 968,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "6",
    number: "1607",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 969,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "6",
    number: "1608-1609",
    type: "\u0414\u0435\u043A\u0430\u043D \u0444\u0430\u043A\u0443\u043B\u044C\u0442\u0435\u0442\u0430",
    desc: "\u0424\u0430\u043A\u0443\u043B\u044C\u0442\u0435\u0442 \u0443\u0440\u0430\u0431\u043D\u0438\u0441\u0442\u0438\u043A\u0438 \u0438 \u0433\u043E\u0440\u043E\u0434\u0441\u043A\u043E\u0433\u043E \u0445\u043E\u0437\u044F\u0439\u0441\u0442\u0432\u0430"
  },
  {
    id: 970,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "6",
    number: "1610-1611",
    type: "\u0414\u0435\u043A\u0430\u043D \u0444\u0430\u043A\u0443\u043B\u044C\u0442\u0435\u0442\u0430",
    desc: "\u0424\u0430\u043A\u0443\u043B\u044C\u0442\u0435\u0442 \u0445\u0438\u043C\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438 \u0438 \u0431\u0438\u043E\u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438"
  },
  {
    id: 971,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "6",
    number: "1612",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 972,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "6",
    number: "1613",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 973,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "6",
    number: "1617",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 974,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "6",
    number: "1618-1619",
    type: "\u0414\u0435\u043A\u0430\u043D \u0444\u0430\u043A\u0443\u043B\u044C\u0442\u0435\u0442\u0430",
    desc: "\u0424\u0430\u043A\u0443\u043B\u044C\u0442\u0435\u0442 \u043C\u0430\u0448\u0438\u043D\u043E\u0441\u0442\u0440\u043E\u0435\u043D\u0438\u044F"
  },
  {
    id: 975,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "6",
    number: "1620",
    type: "\u0417\u0430\u043C\u0435\u0441\u0442\u0438\u0442\u0435\u043B\u044C \u0434\u0435\u043A\u0430\u043D\u0430 \u043F\u043E \u0443\u0447\u0435\u0431\u043D\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u0435",
    desc: "\u0424\u0430\u043A\u0443\u043B\u044C\u0442\u0435\u0442 \u043C\u0430\u0448\u0438\u043D\u043E\u0441\u0442\u0440\u043E\u0435\u043D\u0438\u044F"
  },
  {
    id: 976,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "6",
    number: "1621",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 977,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "6",
    number: "1622",
    type: "\u041D\u0430\u0447\u0430\u043B\u044C\u043D\u0438\u043A \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F",
    desc: "\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u043F\u043E \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u0438\u0432\u043D\u043E-\u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u0445\u043E\u0437\u044F\u0439\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u0435 \u0438 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438"
  },
  {
    id: 978,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "6",
    number: "1623",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 979,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "6",
    number: "1624",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 980,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "7",
    number: "1701",
    type: "-",
    desc: "\u041F\u0440\u0438\u0451\u043C \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u043E\u0432 \u0438 \u043F\u043E\u0441\u0435\u0442\u0438\u0442\u0435\u043B\u0435\u0439 \u0441 14:00 \u0434\u043E 17:00"
  },
  {
    id: 981,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "7",
    number: "1702",
    type: "\u041F\u0440\u0435\u043F\u043E\u0434\u0430\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0430\u044F",
    desc: '\u041A\u0430\u0444\u0435\u0434\u0440\u0430 "\u0422\u0435\u0445\u043D\u0438\u043A\u0430 \u0438 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u044F \u043F\u043E\u043B\u0438\u043C\u0435\u0440\u043D\u044B\u0445 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432"'
  },
  {
    id: 982,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "7",
    number: "1703",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 983,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "7",
    number: "1704",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: '\u041A\u0430\u0444\u0435\u0434\u0440\u0430 "\u0422\u0435\u0445\u043D\u0438\u043A\u0430 \u0438 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u044F \u043F\u043E\u043B\u0438\u043C\u0435\u0440\u043D\u044B\u0445 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432"'
  },
  {
    id: 984,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "7",
    number: "1705",
    type: "\u0417\u0430\u043C\u0435\u0441\u0442\u0438\u0442\u0435\u043B\u044C \u0434\u0435\u043A\u0430\u043D\u0430",
    desc: "\u0424\u0430\u043A\u0443\u043B\u044C\u0442\u0435\u0442 \u0445\u0438\u043C\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438 \u0438 \u0431\u0438\u043E\u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438"
  },
  {
    id: 985,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "7",
    number: "1706",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: '\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0438\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u0439, \u043A\u0430\u0444\u0435\u0434\u0440\u0430 "\u0421\u041C\u0438\u0421"'
  },
  {
    id: 986,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "7",
    number: "1707",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F \u0430\u0434\u0434\u0438\u0442\u0438\u0432\u043D\u044B\u0445 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0439"
  },
  {
    id: 987,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "7",
    number: "1708",
    type: "\u0417\u0430\u0432\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u043A\u0430\u0444\u0435\u0434\u0440\u043E\u0439",
    desc: '\u041A\u0430\u0444\u0435\u0434\u0440\u0430 "\u0422\u0435\u0445\u043D\u0438\u043A\u0430 \u0438 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u044F \u043F\u043E\u043B\u0438\u043C\u0435\u0440\u043D\u044B\u0445 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432"'
  },
  {
    id: 988,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "7",
    number: "1709",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: '\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F \u044D\u043B\u0435\u043A\u0442\u0440\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0438\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u0439, \u043A\u0430\u0444\u0435\u0434\u0440\u0430 "\u0421\u041C\u0438\u0421"'
  },
  {
    id: 989,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "7",
    number: "1710",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 990,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "7",
    number: "1711",
    type: "\u0426\u0435\u043D\u0442\u0440 \u043C\u043E\u043D\u0438\u0442\u043E\u0440\u0438\u043D\u0433\u0430 \u043D\u0430\u0443\u0447\u043D\u043E\u0439 \u0438\u043D\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u044B",
    desc: ""
  },
  {
    id: 991,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "7",
    number: "1712",
    type: "\u0417\u0430\u043C\u0435\u0441\u0442\u0438\u0442\u0435\u043B\u044C \u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440\u0430",
    desc: "\u0426\u0435\u043D\u0442\u0440 \u043C\u043E\u043D\u0438\u0442\u043E\u0440\u0438\u043D\u0433\u0430 \u043D\u0430\u0443\u0447\u043D\u043E\u0439 \u0438\u043D\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u044B"
  },
  {
    id: 992,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "7",
    number: "1712\u0410",
    type: "\u0426\u0435\u043D\u0442\u0440 \u043C\u043E\u043D\u0438\u0442\u043E\u0440\u0438\u043D\u0433\u0430 \u043D\u0430\u0443\u0447\u043D\u043E\u0439 \u0438\u043D\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u044B",
    desc: ""
  },
  {
    id: 993,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "7",
    number: "1713",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: '\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F \u0432\u044B\u0441\u043E\u043A\u043E\u0442\u043E\u0447\u043D\u044B\u0445 \u0438\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u0439, \u043A\u0430\u0444\u0435\u0434\u0440\u0430 "\u0421\u041C\u0438\u0421"'
  },
  {
    id: 994,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "7",
    number: "1714",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 995,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "8",
    number: "1801",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 996,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "8",
    number: "1802",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 997,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "8",
    number: "1803",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 998,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "8",
    number: "1804",
    type: "\u0417\u0430\u043B \u0443\u0447\u0451\u043D\u043E\u0433\u043E \u0441\u043E\u0432\u0435\u0442\u0430",
    desc: ""
  },
  {
    id: 999,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "8",
    number: "1805",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 1e3,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "8",
    number: "1805\u0410",
    type: "-",
    desc: ""
  },
  {
    id: 1001,
    campus: "\u0410\u0412",
    corpus: "1",
    floor: "8",
    number: "1810",
    type: "-",
    desc: ""
  },
  {
    id: 1002,
    campus: "\u0410\u0412",
    corpus: "6",
    floor: "1",
    number: "-",
    type: "\u041A\u043E\u0432\u043E\u0440\u043A\u0438\u043D\u0433",
    desc: ""
  },
  {
    id: 1003,
    campus: "\u0410\u0412",
    corpus: "6",
    floor: "1",
    number: "4101\u0410",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "-"
  },
  {
    id: 1004,
    campus: "\u0410\u0412",
    corpus: "6",
    floor: "1",
    number: "4102\u0410",
    type: "-",
    desc: "-"
  },
  {
    id: 1005,
    campus: "\u0410\u0412",
    corpus: "6",
    floor: "1",
    number: "4103\u0410",
    type: "-",
    desc: "-"
  },
  {
    id: 1006,
    campus: "\u0410\u0412",
    corpus: "6",
    floor: "1",
    number: "4104\u0410",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: '\u041A\u0430\u0444\u0435\u0434\u0440\u0430 "\u0422\u0435\u0440\u043C\u043E\u0434\u0438\u043D\u0430\u043C\u0438\u043A\u0430 \u0438 \u043D\u0435\u0440\u0430\u0432\u043D\u043E\u0432\u0435\u0441\u043D\u044B\u0435 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u044B \u043F\u0435\u0440\u0435\u043D\u043E\u0441\u0430"'
  },
  {
    id: 1007,
    campus: "\u0410\u0412",
    corpus: "6",
    floor: "1",
    number: "4105\u0410",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "-"
  },
  {
    id: 1008,
    campus: "\u0410\u0412",
    corpus: "6",
    floor: "1",
    number: "4106\u0410",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "-"
  },
  {
    id: 1009,
    campus: "\u0410\u0412",
    corpus: "6",
    floor: "1",
    number: "4107\u0410",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "-"
  },
  {
    id: 1010,
    campus: "\u0410\u0412",
    corpus: "6",
    floor: "1",
    number: "4108\u0410",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: '\u041A\u0430\u0444\u0435\u0434\u0440\u0430 "\u0422\u0435\u0440\u043C\u043E\u0434\u0438\u043D\u0430\u043C\u0438\u043A\u0430 \u0438 \u043D\u0435\u0440\u0430\u0432\u043D\u043E\u0432\u0435\u0441\u043D\u044B\u0435 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u044B \u043F\u0435\u0440\u0435\u043D\u043E\u0441\u0430"'
  },
  {
    id: 1011,
    campus: "\u0410\u0412",
    corpus: "6",
    floor: "1",
    number: "4109\u0410",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0426\u0435\u043D\u0442\u0440 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0438 \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u044F (\u0426\u0422\u041F\u041E) \u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F \u0430\u0434\u0434\u0438\u0442\u0438\u0432\u043D\u044B\u0445 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0439 \u0438 Science-Art"
  },
  {
    id: 1012,
    campus: "\u0410\u0412",
    corpus: "6",
    floor: "1",
    number: "4111\u0410",
    type: "\u0422\u0443\u0430\u043B\u0435\u0442",
    desc: "\u041C\u0443\u0436\u0441\u043A\u043E\u0439"
  },
  {
    id: 1013,
    campus: "\u0410\u0412",
    corpus: "6",
    floor: "1",
    number: "4112\u0410",
    type: "\u0422\u0443\u0430\u043B\u0435\u0442",
    desc: "\u0416\u0435\u043D\u0441\u043A\u0438\u0439"
  },
  {
    id: 1014,
    campus: "\u0410\u0412",
    corpus: "6",
    floor: "1",
    number: "4113\u0410",
    type: "\u0422\u0443\u0430\u043B\u0435\u0442",
    desc: "\u041C\u0443\u0436\u0441\u043A\u043E\u0439"
  },
  {
    id: 1015,
    campus: "\u0410\u0412",
    corpus: "6",
    floor: "1",
    number: "4114\u0410",
    type: "\u0422\u0443\u0430\u043B\u0435\u0442",
    desc: "\u0416\u0435\u043D\u0441\u043A\u0438\u0439"
  },
  {
    id: 1016,
    campus: "\u0410\u0412",
    corpus: "6",
    floor: "2",
    number: "\u041F\u0435\u0440\u0435\u0445\u043E\u0434 \u0410-2",
    type: "\u041F\u0435\u0440\u0435\u0445\u043E\u0434",
    desc: "\u041F\u0435\u0440\u0435\u0445\u043E\u0434 \u043C\u0435\u0436\u0434\u0443 4 \u0438 6(\u043F\u0440\u0438\u0441\u0442\u0440\u043E\u0439\u043A\u043E\u0439 4) \u043A\u043E\u0440\u043F\u0443\u0441\u0430\u043C\u0438"
  },
  {
    id: 1017,
    campus: "\u0410\u0412",
    corpus: "6",
    floor: "2",
    number: "4201\u0410",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "(\u0426\u0435\u043D\u0442\u0440 \u0434\u043E\u0441\u0443\u0433\u043E\u0432\u043E\u0433\u043E \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u0438 \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0438 \u043A \u0415\u0413\u042D \u043F\u0435\u0440\u0435\u0435\u0445\u0430\u043B \u0432 1207!!!)"
  },
  {
    id: 1018,
    campus: "\u0410\u0412",
    corpus: "6",
    floor: "2",
    number: "4202\u0410-\u041B",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "-"
  },
  {
    id: 1019,
    campus: "\u0410\u0412",
    corpus: "6",
    floor: "2",
    number: "4202\u0410-\u041F",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "-"
  },
  {
    id: 1020,
    campus: "\u0410\u0412",
    corpus: "6",
    floor: "2",
    number: "4203\u0410",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "-"
  },
  {
    id: 1021,
    campus: "\u0410\u0412",
    corpus: "6",
    floor: "2",
    number: "4204\u0410",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "-"
  },
  {
    id: 1022,
    campus: "\u0410\u0412",
    corpus: "6",
    floor: "2",
    number: "4205\u0410",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0426\u0435\u043D\u0442\u0440 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0438 \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u044F (\u0426\u0422\u041F\u041E) \u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F \u0440\u043E\u0431\u043E\u0442\u043E\u0442\u0435\u0445\u043D\u0438\u043A\u0438 \u0438 Science-Art"
  },
  {
    id: 1023,
    campus: "\u0410\u0412",
    corpus: "6",
    floor: "2",
    number: "4206\u0410",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "-"
  },
  {
    id: 1024,
    campus: "\u0410\u0412",
    corpus: "6",
    floor: "2",
    number: "4207\u0410",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: '\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F "\u041F\u043E\u043B\u0435\u0437\u043D\u044B\u0435 \u0438\u0441\u043A\u043E\u043F\u0430\u0435\u043C\u044B\u0435"'
  },
  {
    id: 1025,
    campus: "\u0410\u0412",
    corpus: "6",
    floor: "2",
    number: "4208\u0410",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: '\u041C\u0438\u043D\u0435\u0440\u0430\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043C\u0443\u0437\u0435\u0439, \u043A\u0430\u0444\u0435\u0434\u0440\u0430 "\u0422\u0435\u0445\u043D\u0438\u043A\u0430 \u0438 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u044F \u0433\u043E\u0440\u043D\u043E\u0433\u043E \u0438 \u043D\u0435\u0444\u0442\u0435\u0433\u0430\u0437\u043E\u0432\u043E\u0433\u043E \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430"'
  },
  {
    id: 1026,
    campus: "\u0410\u0412",
    corpus: "6",
    floor: "2",
    number: "4209\u0410",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "-"
  },
  {
    id: 1027,
    campus: "\u0410\u0412",
    corpus: "6",
    floor: "2",
    number: "4210\u0410",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: '\u041A\u0430\u0444\u0435\u0434\u0440\u0430 "\u042D\u043A\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u044C \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0441\u0438\u0441\u0442\u0435\u043C"'
  },
  {
    id: 1028,
    campus: "\u0410\u0412",
    corpus: "6",
    floor: "2",
    number: "4211\u0410-1",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F \u0438\u043C\u0435\u043D\u0438 \u041B\u0435\u043E\u043D\u0438\u0434\u0430 \u0410\u0440\u043A\u0430\u0434\u044C\u0435\u0432\u0438\u0447\u0430 \u041A\u043E\u0441\u0442\u0430\u043D\u0434\u043E\u0432\u0430"
  },
  {
    id: 1029,
    campus: "\u0410\u0412",
    corpus: "6",
    floor: "2",
    number: "4211\u0410-2",
    type: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "-"
  },
  {
    id: 1030,
    campus: "\u0410\u0412",
    corpus: "6",
    floor: "2",
    number: "4212\u0410",
    type: "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: '\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F "\u041C\u0438\u043D\u0435\u0440\u0430\u043B\u043E\u0433\u0438\u044F, \u043F\u0435\u0442\u0440\u043E\u0433\u0440\u0430\u0444\u0438\u044F \u0438 \u043F\u043E\u043B\u0435\u0437\u043D\u044B\u0435 \u0438\u0441\u043A\u043E\u043F\u0430\u0435\u043C\u044B\u0435", \u043A\u0430\u0444\u0435\u0434\u0440\u0430 "\u0422\u0435\u0445\u043D\u0438\u043A\u0430 \u0438 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u044F \u0433\u043E\u0440\u043D\u043E\u0433\u043E \u0438 \u043D\u0435\u0444\u0442\u0435\u0433\u0430\u0437\u043E\u0432\u043E\u0433\u043E \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430"'
  },
  {
    id: 1031,
    campus: "\u0410\u0412",
    corpus: "6",
    floor: "2",
    number: "4213\u0410",
    type: "\u0412\u044B\u0445\u043E\u0434 \u043D\u0430 \u043B\u0435\u0441\u0442\u043D\u0438\u0446\u0443",
    desc: "-"
  },
  {
    id: 1032,
    campus: "\u0410\u0412",
    corpus: "6",
    floor: "2",
    number: "4214\u0410",
    type: "\u0412\u044B\u0445\u043E\u0434 \u043D\u0430 \u043B\u0435\u0441\u0442\u043D\u0438\u0446\u0443",
    desc: "-"
  },
  {
    id: 1033,
    campus: "",
    corpus: "6",
    floor: "3",
    number: "-",
    type: "\u0410\u0420\u0422 \u041F\u043E\u043B\u0438\u0442\u0435\u0445",
    desc: "\u0418\u0437-\u0437\u0430 \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u044F \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430 \u0432\u0445\u043E\u0434 \u043D\u0430 3 \u044D\u0442\u0430\u0436 \u0437\u0430\u043A\u0440\u044B\u0442"
  },
  {
    id: 1034,
    campus: "",
    corpus: "6",
    floor: "3",
    number: "4304\u0410",
    type: "\u0412\u044B\u0445\u043E\u0434 \u043D\u0430 \u043B\u0435\u0441\u0442\u043D\u0438\u0446\u0443",
    desc: ""
  },
  {
    id: 1035,
    campus: "\u041C",
    corpus: "",
    floor: "1",
    number: "-",
    type: "\u0417\u0430\u043B",
    desc: "\u0417\u0430\u043B \u0435\u0434\u0438\u043D\u043E\u0431\u043E\u0440\u0441\u0442\u0432"
  },
  {
    id: 1036,
    campus: "\u041C",
    corpus: "",
    floor: "1",
    number: "-",
    type: "\u041A\u0430\u0431\u0438\u043D\u0435\u0442",
    desc: "\u041A\u0430\u0431\u0438\u043D\u0435\u0442 \u043F\u0440\u0435\u043F\u043E\u0434\u0430\u0432\u0430\u0442\u0435\u043B\u0435\u0439"
  },
  {
    id: 1037,
    campus: "\u041C",
    corpus: "",
    floor: "1",
    number: "-",
    type: "-",
    desc: "\u0417\u0430\u0432.\u043A\u0430\u0444\u0435\u0434\u0440\u043E\u0439 \u0444\u0438\u0437. \u041F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0438"
  },
  {
    id: 1038,
    campus: "\u041C",
    corpus: "",
    floor: "1",
    number: "-",
    type: "-",
    desc: "\u0420\u0430\u0437\u0434\u0435\u0432\u0430\u043B\u043A\u0430 \u043F\u0440\u0435\u043F\u043E\u0434\u0430\u0432\u0430\u0442\u0435\u043B\u0435\u0439"
  },
  {
    id: 1039,
    campus: "\u041C",
    corpus: "",
    floor: "1",
    number: "-",
    type: "\u041A\u0430\u0431\u0438\u043D\u0435\u0442",
    desc: "\u041C\u0435\u0442\u043E\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442"
  },
  {
    id: 1040,
    campus: "\u041C",
    corpus: "",
    floor: "1",
    number: "-",
    type: "\u041A\u0430\u0431\u0438\u043D\u0435\u0442",
    desc: "\u041C\u0435\u0434\u0438\u0446\u0438\u043D\u0441\u043A\u0438\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442"
  },
  {
    id: 1041,
    campus: "\u041C",
    corpus: "",
    floor: "-1",
    number: "-",
    type: "\u0417\u0430\u043B",
    desc: "\u0417\u0430\u043B \u043D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u043E\u0433\u043E \u0442\u0435\u043D\u043D\u0438\u0441\u0430"
  },
  {
    id: 1042,
    campus: "\u041C",
    corpus: "",
    floor: "-1",
    number: "-",
    type: "\u0417\u0430\u043B",
    desc: "\u0422\u0440\u0435\u043D\u0430\u0436\u0435\u0440\u043D\u044B\u0439 \u0437\u0430\u043B"
  },
  {
    id: 1043,
    campus: "\u041C",
    corpus: "",
    floor: "2",
    number: "-",
    type: "\u0417\u0430\u043B",
    desc: "\u0411\u043E\u043B\u044C\u0448\u043E\u0439 \u0437\u0430\u043B"
  },
  {
    id: 1044,
    campus: "\u041C",
    corpus: "",
    floor: "2",
    number: "-",
    type: "-",
    desc: "\u041C\u0443\u0436\u0441\u043A\u0430\u044F \u0440\u0430\u0437\u0434\u0435\u0432\u0430\u043B\u043A\u0430"
  },
  {
    id: 1045,
    campus: "\u041C",
    corpus: "",
    floor: "2",
    number: "-",
    type: "-",
    desc: "\u0416\u0435\u043D\u0441\u043A\u0430\u044F \u0440\u0430\u0437\u0434\u0435\u0432\u0430\u043B\u043A\u0430"
  },
  {
    id: 1046,
    campus: "\u041C",
    corpus: "",
    floor: "3",
    number: "-",
    type: "\u0417\u0430\u043B",
    desc: "\u0417\u0430\u043B \u0444\u0435\u0445\u0442\u043E\u0432\u0430\u043D\u0438\u044F"
  },
  {
    id: 1047,
    campus: "\u041C",
    corpus: "",
    floor: "3",
    number: "-",
    type: "-",
    desc: "\u0428\u0430\u0445\u043C\u0430\u0442\u043D\u044B\u0439 \u043A\u043B\u0443\u0431"
  },
  {
    id: 1048,
    campus: "\u041C",
    corpus: "",
    floor: "3",
    number: "-",
    type: "-",
    desc: "\u0421\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u044B\u0439 \u043A\u043B\u0443\u0431"
  },
  {
    id: 1049,
    campus: "\u041C",
    corpus: "",
    floor: "3",
    number: "-",
    type: "\u0417\u0430\u043B",
    desc: "\u0417\u0430\u043B \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u0440\u0435\u0430\u0431\u0438\u043B\u0438\u0442\u0430\u0446\u0438\u0438"
  },
  {
    id: 1050,
    campus: "\u041F\u0420",
    corpus: "1",
    floor: "0",
    number: "1011",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 1051,
    campus: "\u041F\u0420",
    corpus: "1",
    floor: "0",
    number: "1012",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 1052,
    campus: "\u041F\u0420",
    corpus: "1",
    floor: "0",
    number: "1013",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 1053,
    campus: "\u041F\u0420",
    corpus: "1",
    floor: "0",
    number: "1014",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 1054,
    campus: "\u041F\u0420",
    corpus: "1",
    floor: "0",
    number: "1039",
    type: "\u0438\u0437\u0434\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E",
    desc: "\u0440\u0435\u0434\u0430\u043A\u0446\u0438\u043E\u043D\u043D\u043E-\u0438\u0437\u0434\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0439 \u043E\u0442\u0434\u0435\u043B"
  },
  {
    id: 1055,
    campus: "\u041F\u0420",
    corpus: "1",
    floor: "0",
    number: "1039\u0430",
    type: "\u0438\u0437\u0434\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E",
    desc: "\u0440\u0435\u0434\u0430\u043A\u0446\u0438\u043E\u043D\u043D\u043E-\u0438\u0437\u0434\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0439 \u043E\u0442\u0434\u0435\u043B"
  },
  {
    id: 1056,
    campus: "\u041F\u0420",
    corpus: "1",
    floor: "0",
    number: "1039\u0431",
    type: "\u0438\u0437\u0434\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E",
    desc: "\u0440\u0435\u0434\u0430\u043A\u0446\u0438\u043E\u043D\u043D\u043E-\u0438\u0437\u0434\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0439 \u043E\u0442\u0434\u0435\u043B"
  },
  {
    id: 1057,
    campus: "\u041F\u0420",
    corpus: "1",
    floor: "0",
    number: "1040",
    type: "\u0438\u0437\u0434\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E",
    desc: "\u0440\u0435\u0434\u0430\u043A\u0446\u0438\u043E\u043D\u043D\u043E-\u0438\u0437\u0434\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0439 \u043E\u0442\u0434\u0435\u043B"
  },
  {
    id: 1058,
    campus: "\u041F\u0420",
    corpus: "1",
    floor: "0",
    number: "1044",
    type: "\u0438\u0437\u0434\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E",
    desc: "\u0440\u0435\u0434\u0430\u043A\u0446\u0438\u043E\u043D\u043D\u043E-\u0438\u0437\u0434\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0439 \u043E\u0442\u0434\u0435\u043B"
  },
  {
    id: 1059,
    campus: "",
    corpus: "1",
    floor: "",
    number: "",
    type: "",
    desc: ""
  },
  {
    id: 1060,
    campus: "\u041F\u0420",
    corpus: "1",
    floor: "2",
    number: "1201",
    type: "\u043F\u0440\u0435\u0434\u043E\u043F\u043E\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0430\u044F",
    desc: "\u043A\u0430\u0444\u0435\u0434\u0440\u0430 \u0438\u043D\u043D\u043E\u0432\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432 \u043F\u0440\u0438\u043D\u0442\u043C\u0435\u0434\u0438\u0430\u0438\u043D\u0434\u0443\u0441\u0442\u0440\u0438\u0438"
  },
  {
    id: 1061,
    campus: "\u041F\u0420",
    corpus: "1",
    floor: "2",
    number: "1202",
    type: "\u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: "\u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043E\u043B\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u0438 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432"
  },
  {
    id: 1062,
    campus: "\u041F\u0420",
    corpus: "1",
    floor: "2",
    number: "1203",
    type: "\u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: "\u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u044F"
  },
  {
    id: 1063,
    campus: "\u041F\u0420",
    corpus: "1",
    floor: "2",
    number: "1204",
    type: "\u043F\u0440\u0435\u043F\u0430\u0440\u0430\u0442\u043E\u0440\u0441\u043A\u0430\u044F",
    desc: ""
  },
  {
    id: 1064,
    campus: "\u041F\u0420",
    corpus: "1",
    floor: "2",
    number: "1205",
    type: "",
    desc: "\u0437\u0430\u0432\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u043A\u0430\u0444\u0435\u0434\u0440\u043E\u0439 \u0438\u043D\u043D\u043E\u0432\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432 \u043F\u0440\u0438\u043D\u0442\u043C\u0435\u0434\u0438\u0430\u0438\u043D\u0434\u0443\u0441\u0442\u0440\u0438\u0438"
  },
  {
    id: 1065,
    campus: "\u041F\u0420",
    corpus: "1",
    floor: "2",
    number: "1206",
    type: "\u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: "\u041D\u0418\u0420"
  },
  {
    id: 1066,
    campus: "\u041F\u0420",
    corpus: "1",
    floor: "2",
    number: "1207",
    type: "\u0430\u043A\u0442\u043E\u0432\u044B\u0439 \u0437\u0430\u043B",
    desc: ""
  },
  {
    id: 1067,
    campus: "\u041F\u0420",
    corpus: "1",
    floor: "2",
    number: "1208",
    type: "\u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: "\u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043E\u043B\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u0438 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432"
  },
  {
    id: 1068,
    campus: "\u041F\u0420",
    corpus: "1",
    floor: "2",
    number: "1209",
    type: "\u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: "\u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043E\u043B\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u0438 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432"
  },
  {
    id: 1069,
    campus: "\u041F\u0420",
    corpus: "1",
    floor: "2",
    number: "1211",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 1070,
    campus: "\u041F\u0420",
    corpus: "1",
    floor: "2",
    number: "1212",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 1071,
    campus: "\u041F\u0420",
    corpus: "1",
    floor: "2",
    number: "1213",
    type: "",
    desc: "\u043E\u0442\u0434\u0435\u043B \u0438\u0442\u043E\u0433\u043E\u0432\u043E\u0439 \u0430\u0442\u0442\u0435\u0441\u0442\u0430\u0446\u0438\u0438"
  },
  {
    id: 1072,
    campus: "\u041F\u0420",
    corpus: "1",
    floor: "2",
    number: "1215",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 1073,
    campus: "\u041F\u0420",
    corpus: "1",
    floor: "2",
    number: "1216",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 1074,
    campus: "\u041F\u0420",
    corpus: "1",
    floor: "2",
    number: "1217",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 1075,
    campus: "\u041F\u0420",
    corpus: "1",
    floor: "2",
    number: "1219",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 1076,
    campus: "\u041F\u0420",
    corpus: "1",
    floor: "2",
    number: "1221",
    type: "",
    desc: "\u0430\u0440\u0445\u0438\u0432"
  },
  {
    id: 1077,
    campus: "\u041F\u0420",
    corpus: "1",
    floor: "2",
    number: "1222",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 1078,
    campus: "\u041F\u0420",
    corpus: "1",
    floor: "3",
    number: "1301",
    type: "\u043F\u0440\u0435\u043F\u043E\u0434\u0430\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0430\u044F",
    desc: "\u043A\u0430\u0444\u0435\u0434\u0440\u0430 \u0438\u043D\u043D\u043E\u0432\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432 \u043F\u0440\u0438\u043D\u0442\u043C\u0435\u0434\u0438\u0430\u0438\u043D\u0434\u0443\u0441\u0442\u0440\u0438\u0438"
  },
  {
    id: 1079,
    campus: "\u041F\u0420",
    corpus: "1",
    floor: "3",
    number: "1302",
    type: "\u043F\u0440\u0435\u043F\u0430\u0440\u0430\u0442\u043E\u0440\u0441\u043A\u0430\u044F",
    desc: ""
  },
  {
    id: 1080,
    campus: "\u041F\u0420",
    corpus: "1",
    floor: "3",
    number: "1303",
    type: "\u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F \u0444\u0438\u0437\u0438\u043A\u043E-\u0445\u0438\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u043C\u0435\u0442\u043E\u0434\u043E\u0432 \u0430\u043D\u0430\u043B\u0438\u0437\u0430",
    desc: ""
  },
  {
    id: 1081,
    campus: "\u041F\u0420",
    corpus: "1",
    floor: "3",
    number: "1304",
    type: "",
    desc: "\u0437\u0430\u0432\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u0435\u0439 \u0445\u0438\u043C\u0438\u0438"
  },
  {
    id: 1082,
    campus: "\u041F\u0420",
    corpus: "1",
    floor: "3",
    number: "1305",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u043A\u0430\u0431\u0438\u043D\u0435\u0442 \u0441\u0430\u043C\u043E\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u044B"
  },
  {
    id: 1083,
    campus: "\u041F\u0420",
    corpus: "1",
    floor: "3",
    number: "1306",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 1084,
    campus: "\u041F\u0420",
    corpus: "1",
    floor: "3",
    number: "1307",
    type: "\u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0445\u0438\u043C\u0438\u0438"
  },
  {
    id: 1085,
    campus: "\u041F\u0420",
    corpus: "1",
    floor: "3",
    number: "1308",
    type: "\u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u0445\u0438\u043C\u0438\u0438"
  },
  {
    id: 1086,
    campus: "\u041F\u0420",
    corpus: "1",
    floor: "3",
    number: "1309",
    type: "\u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: "\u043A\u043E\u043B\u043B\u043E\u0438\u0434\u043D\u043E\u0439 \u0445\u0438\u043C\u0438\u0438 \u0438 \u044D\u043A\u043E\u043B\u043E\u0433\u0438\u0438"
  },
  {
    id: 1087,
    campus: "\u041F\u0420",
    corpus: "1",
    floor: "3",
    number: "1311",
    type: "",
    desc: "\u043C\u043D\u043E\u0433\u043E\u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u0446\u0435\u043D\u0442\u0440"
  },
  {
    id: 1088,
    campus: "\u041F\u0420",
    corpus: "1",
    floor: "3",
    number: "1312",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 1089,
    campus: "\u041F\u0420",
    corpus: "1",
    floor: "3",
    number: "1313",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 1090,
    campus: "\u041F\u0420",
    corpus: "1",
    floor: "3",
    number: "1314",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 1091,
    campus: "\u041F\u0420",
    corpus: "1",
    floor: "3",
    number: "1315",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 1092,
    campus: "\u041F\u0420",
    corpus: "1",
    floor: "3",
    number: "1316",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 1093,
    campus: "\u041F\u0420",
    corpus: "1",
    floor: "3",
    number: "1317",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 1094,
    campus: "\u041F\u0420",
    corpus: "1",
    floor: "3",
    number: "1318",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 1095,
    campus: "\u041F\u0420",
    corpus: "1",
    floor: "3",
    number: "1319",
    type: "\u043A\u0430\u0444\u0435\u0434\u0440\u0430",
    desc: "\u043A\u0430\u0444\u0435\u0434\u0440\u0430 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0442\u0438\u043A\u0430 \u0438 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0435 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438"
  },
  {
    id: 1096,
    campus: "\u041F\u0420",
    corpus: "1",
    floor: "3",
    number: "1320",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 1097,
    campus: "\u041F\u0420",
    corpus: "1",
    floor: "3",
    number: "1326",
    type: "",
    desc: "(\u043F\u043E \u0432\u0441\u0435\u043C \u0432\u043E\u043F\u0440\u043E\u0441\u0430\u043C \u0432 1311)"
  },
  {
    id: 1098,
    campus: "\u041F\u0420",
    corpus: "1",
    floor: "3",
    number: "1328",
    type: "",
    desc: '\u0440\u0435\u0434\u0430\u043A\u0446\u0438\u044F \u0436\u0443\u0440\u043D\u0430\u043B\u0430 "\u0412\u044B\u0441\u0448\u0435\u0435 \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0432 \u0420\u043E\u0441\u0441\u0438\u0438"'
  },
  {
    id: 1099,
    campus: "\u041F\u0420",
    corpus: "1",
    floor: "3",
    number: "1329",
    type: "",
    desc: '\u0440\u0435\u0434\u0430\u043A\u0446\u0438\u044F \u0436\u0443\u0440\u043D\u0430\u043B\u0430 "\u0412\u044B\u0441\u0448\u0435\u0435 \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0432 \u0420\u043E\u0441\u0441\u0438\u0438"'
  },
  {
    id: 1100,
    campus: "\u041F\u0420",
    corpus: "1",
    floor: "3",
    number: "1330",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 1101,
    campus: "\u041F\u0420",
    corpus: "1",
    floor: "3",
    number: "1331",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 1102,
    campus: "\u041F\u0420",
    corpus: "1",
    floor: "3",
    number: "1332",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 1103,
    campus: "\u041F\u0420",
    corpus: "1",
    floor: "3",
    number: "1333",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 1104,
    campus: "\u041F\u0420",
    corpus: "1",
    floor: "3",
    number: "1334",
    type: "",
    desc: "\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u0441\u0435\u043A\u0442\u043E\u0440"
  },
  {
    id: 1105,
    campus: "\u041F\u0420",
    corpus: "1",
    floor: "3",
    number: "1335",
    type: "",
    desc: "\u041D\u0430\u0437\u0430\u0440\u043E\u0432 \u0412\u0438\u043A\u0442\u043E\u0440 \u0421\u0435\u0440\u0433\u0435\u0435\u0432\u0438\u0447 \u0443\u0447\u0435\u043D\u044B\u0439 \u0441\u0435\u043A\u0440\u0435\u0442\u0430\u0440\u044C \u0443\u0447\u0435\u043D\u043E\u0433\u043E \u0441\u043E\u0432\u0435\u0442\u0430 \u041C\u041E\u0421\u041A\u041E\u0412\u0421\u041A\u041E\u0413\u041E \u041F\u041E\u041B\u0418\u0422\u0415\u0425\u0410"
  },
  {
    id: 1106,
    campus: "\u041F\u0420",
    corpus: "1",
    floor: "3",
    number: "1336",
    type: "",
    desc: "\u043F\u0440\u043E\u0444\u043A\u043E\u043C"
  },
  {
    id: 1107,
    campus: "\u041F\u0420",
    corpus: "1",
    floor: "3",
    number: "1338",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 1108,
    campus: "\u041F\u0420",
    corpus: "1",
    floor: "3",
    number: "1339",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 1109,
    campus: "\u041F\u0420",
    corpus: "1",
    floor: "4",
    number: "1401",
    type: "",
    desc: "\u043F\u0441\u0438\u0445\u043E\u043B\u043E\u0433"
  },
  {
    id: 1110,
    campus: "\u041F\u0420",
    corpus: "1",
    floor: "4",
    number: "1402",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 1111,
    campus: "\u041F\u0420",
    corpus: "1",
    floor: "4",
    number: "1403",
    type: "",
    desc: "(\u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u0430\u0431\u0438\u043D\u0435\u0442\u0430 \u0437\u0430\u043A\u0440\u044B\u0442\u043E)"
  },
  {
    id: 1112,
    campus: "\u041F\u0420",
    corpus: "1",
    floor: "4",
    number: "1406",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 1113,
    campus: "\u041F\u0420",
    corpus: "1",
    floor: "4",
    number: "1407",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 1114,
    campus: "\u041F\u0420",
    corpus: "1",
    floor: "4",
    number: "1408",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 1115,
    campus: "\u041F\u0420",
    corpus: "1",
    floor: "4",
    number: "1409",
    type: "\u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: "\u044D\u043A\u043E\u043B\u043E\u0433\u0438\u0438 \u0438 \u043E\u0440\u0433\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u0445\u0438\u043C\u0438\u0438"
  },
  {
    id: 1116,
    campus: "\u041F\u0420",
    corpus: "1",
    floor: "4",
    number: "1411",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 1117,
    campus: "\u041F\u0420",
    corpus: "1",
    floor: "4",
    number: "1412",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 1118,
    campus: "\u041F\u0420",
    corpus: "1",
    floor: "4",
    number: "1413",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 1119,
    campus: "\u041F\u0420",
    corpus: "1",
    floor: "4",
    number: "1414",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 1120,
    campus: "\u041F\u0420",
    corpus: "1",
    floor: "4",
    number: "1417",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 1121,
    campus: "\u041F\u0420",
    corpus: "1",
    floor: "4",
    number: "1418",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 1122,
    campus: "\u041F\u0420",
    corpus: "1",
    floor: "4",
    number: "1419",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 1123,
    campus: "\u041F\u0420",
    corpus: "1",
    floor: "4",
    number: "1420",
    type: "",
    desc: "\u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441 \u21164"
  },
  {
    id: 1124,
    campus: "\u041F\u0420",
    corpus: "1",
    floor: "4",
    number: "1422",
    type: "",
    desc: "\u043A\u0430\u0431\u0438\u043D\u0435\u0442 \u0430\u0441\u0438\u043D\u0445\u0440\u043E\u043D\u043D\u043E\u0433\u043E \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F \u0438 \u0434\u0438\u0441\u0442\u0430\u043D\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0439"
  },
  {
    id: 1125,
    campus: "\u041F\u0420",
    corpus: "1",
    floor: "4",
    number: "1423",
    type: "\u043A\u0430\u0444\u0435\u0434\u0440\u0430",
    desc: '\u043A\u0430\u0444\u0435\u0434\u0440\u0430 "\u0418\u043D\u043E\u0441\u0442\u0440\u0430\u043D\u043D\u044B\u0435 \u044F\u0437\u044B\u043A\u0438"'
  },
  {
    id: 1126,
    campus: "\u041F\u0420",
    corpus: "1",
    floor: "4",
    number: "1424",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 1127,
    campus: "\u041F\u0420",
    corpus: "1",
    floor: "4",
    number: "1425",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 1128,
    campus: "\u041F\u0420",
    corpus: "1",
    floor: "4",
    number: "1426",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F 142 (\u0442\u0430\u043A \u043D\u0430\u043F\u0438\u0441\u0430\u043D\u043E \u044F \u0431\u0435\u0437 \u043F\u043E\u043D\u044F\u0442\u0438\u044F \u0447\u0442\u043E \u044D\u0442\u043E \u0437\u043D\u0430\u0447\u0438\u0442)"
  },
  {
    id: 1129,
    campus: "\u041F\u0420",
    corpus: "1",
    floor: "4",
    number: "1427",
    type: "",
    desc: "\u0438\u043D\u0441\u0442\u0438\u0442\u0443\u0442 \u043F\u0440\u0438\u043D\u0442\u043C\u0435\u0434\u0438\u0430 \u0438 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0439 - \u0434\u0438\u0440\u0435\u043A\u0446\u0438\u044F"
  },
  {
    id: 1130,
    campus: "\u041F\u0420",
    corpus: "1",
    floor: "4",
    number: "1428",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 1131,
    campus: "\u041F\u0420",
    corpus: "1",
    floor: "4",
    number: "1429",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 1132,
    campus: "\u041F\u0420",
    corpus: "1",
    floor: "4",
    number: "1430",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 1133,
    campus: "\u041F\u0420",
    corpus: "1",
    floor: "4",
    number: "1431",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 1134,
    campus: "\u041F\u0420",
    corpus: "1",
    floor: "4",
    number: "1432",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 1135,
    campus: "\u041F\u0420",
    corpus: "1",
    floor: "4",
    number: "1433",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 1136,
    campus: "\u041F\u0420",
    corpus: "1",
    floor: "4",
    number: "1434",
    type: "",
    desc: "\u0434\u0438\u0440\u0435\u043A\u0446\u0438\u044F \u0418\u043D\u0441\u0442\u0438\u0442\u0443\u0442\u0430 \u043A\u043E\u043C\u043C\u0443\u043D\u0438\u043A\u0430\u0446\u0438\u0439 \u0438 \u043C\u0435\u0434\u0438\u0430\u0431\u0438\u0437\u043D\u0435\u0441\u0430"
  },
  {
    id: 1137,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "2",
    number: "216",
    type: "",
    desc: ""
  },
  {
    id: 1138,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "2",
    number: "215",
    type: "\u043A\u0430\u0444\u0435\u0434\u0440\u0430",
    desc: ""
  },
  {
    id: 1139,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "2",
    number: "216\u0410",
    type: "\u043A\u0430\u0444\u0435\u0434\u0440\u0430",
    desc: ""
  },
  {
    id: 1140,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "2",
    number: "214",
    type: "\u043A\u0430\u0444\u0435\u0434\u0440\u0430",
    desc: ""
  },
  {
    id: 1141,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "2",
    number: "214\u0410",
    type: "\u043A\u0430\u0444\u0435\u0434\u0440\u0430",
    desc: ""
  },
  {
    id: 1142,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "2",
    number: "210",
    type: "\u043A\u0430\u0444\u0435\u0434\u0440\u0430",
    desc: ""
  },
  {
    id: 1143,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "2",
    number: "209",
    type: "\u043A\u0430\u0444\u0435\u0434\u0440\u0430",
    desc: ""
  },
  {
    id: 1144,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "2",
    number: "209\u0410",
    type: "\u043A\u0430\u0444\u0435\u0434\u0440\u0430",
    desc: ""
  },
  {
    id: 1145,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "2",
    number: "211\u0410",
    type: "\u043A\u0430\u0444\u0435\u0434\u0440\u0430",
    desc: ""
  },
  {
    id: 1146,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "2",
    number: "212",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 1147,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "2",
    number: "213",
    type: "\u043A\u0430\u0444\u0435\u0434\u0440\u0430",
    desc: ""
  },
  {
    id: 1148,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "2",
    number: "211",
    type: "\u043D\u0442\u0446",
    desc: ""
  },
  {
    id: 1149,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "2",
    number: "208\u0410",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 1150,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "2",
    number: "208",
    type: "",
    desc: ""
  },
  {
    id: 1151,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "2",
    number: "207",
    type: "\u043A\u0430\u0444\u0435\u0434\u0440\u0430",
    desc: ""
  },
  {
    id: 1152,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "2",
    number: "207\u0410",
    type: "\u043A\u0430\u0444\u0435\u0434\u0440\u0430",
    desc: ""
  },
  {
    id: 1153,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "2",
    number: "204",
    type: "\u043A\u0430\u0444\u0435\u0434\u0440\u0430",
    desc: ""
  },
  {
    id: 1154,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "2",
    number: "203",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 1155,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "2",
    number: "206",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 1156,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "2",
    number: "205\u0410",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 1157,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "2",
    number: "205",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 1158,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "2",
    number: "202",
    type: "\u043A\u0430\u0444\u0435\u0434\u0440\u0430",
    desc: ""
  },
  {
    id: 1159,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "2",
    number: "201",
    type: "\u043D\u0442\u0446",
    desc: ""
  },
  {
    id: 1160,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "2",
    number: "218",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 1161,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "2",
    number: "217",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 1162,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "2",
    number: "219",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 1163,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "2",
    number: "220",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 1164,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "2",
    number: "221",
    type: "\u043A\u0430\u0444\u0435\u0434\u0440\u0430",
    desc: ""
  },
  {
    id: 1165,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "2",
    number: "222",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 1166,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "2",
    number: "223",
    type: "\u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 1167,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "2",
    number: "224",
    type: "\u043A\u0430\u0444\u0435\u0434\u0440\u0430",
    desc: ""
  },
  {
    id: 1168,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "2",
    number: "228",
    type: "\u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 1169,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "2",
    number: "229",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 1170,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "2",
    number: "230",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 1171,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "2",
    number: "235",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 1172,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "2",
    number: "234",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 1173,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "2",
    number: "231",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 1174,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "2",
    number: "233",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 1175,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "2",
    number: "232",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 1176,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "2",
    number: "236",
    type: "\u043F\u043E\u0434\u0441\u043E\u0431\u043D\u043E\u0435 \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u0435",
    desc: ""
  },
  {
    id: 1177,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "2",
    number: "237",
    type: "\u043F\u043E\u0434\u0441\u043E\u0431\u043D\u043E\u0435 \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u0435",
    desc: ""
  },
  {
    id: 1178,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "3",
    number: "316",
    type: "",
    desc: ""
  },
  {
    id: 1179,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "3",
    number: "327",
    type: "",
    desc: ""
  },
  {
    id: 1180,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "3",
    number: "317",
    type: "",
    desc: ""
  },
  {
    id: 1181,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "3",
    number: "326",
    type: "",
    desc: ""
  },
  {
    id: 1182,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "3",
    number: "325",
    type: "\u043D\u043E\u0446",
    desc: ""
  },
  {
    id: 1183,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "3",
    number: "324",
    type: "\u043D\u043E\u0446",
    desc: ""
  },
  {
    id: 1184,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "3",
    number: "323",
    type: "\u043D\u043E\u0446",
    desc: ""
  },
  {
    id: 1185,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "3",
    number: "310",
    type: "\u0446\u0435\u043D\u0442\u0440 \u043A\u043E\u043C\u043F\u0435\u0442\u0435\u043D\u0446\u0438\u0439",
    desc: ""
  },
  {
    id: 1186,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "3",
    number: "312",
    type: "\u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u043F\u043E \u043C\u0435\u0436\u0434\u0443\u043D\u0430\u0440\u043E\u0434\u043D\u043E\u0439 \u0438\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438",
    desc: ""
  },
  {
    id: 1187,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "3",
    number: "313",
    type: "\u0446\u0435\u043D\u0442\u0440 \u043A\u043E\u043C\u043F\u0435\u0442\u0435\u043D\u0446\u0438\u0439",
    desc: ""
  },
  {
    id: 1188,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "3",
    number: "315",
    type: "\u043E\u0442\u0434\u0435\u043B \u043F\u043E \u0440\u0430\u0431\u043E\u0442\u0435 \u0441 \u0438\u043D\u043E\u0441\u0442\u0440\u0430\u043D\u043D\u044B\u043C\u0438 \u043E\u0431\u0443\u0447\u0430\u044E\u0449\u0438\u043C\u0441\u044F",
    desc: ""
  },
  {
    id: 1189,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "3",
    number: "314",
    type: "\u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u043F\u043E \u043C\u0435\u0436\u0434\u0443\u043D\u0430\u0440\u043E\u0434\u043D\u043E\u0439 \u0438\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438",
    desc: ""
  },
  {
    id: 1190,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "3",
    number: "309",
    type: "",
    desc: ""
  },
  {
    id: 1191,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "3",
    number: "308",
    type: "",
    desc: ""
  },
  {
    id: 1192,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "3",
    number: "303\u0410",
    type: "",
    desc: ""
  },
  {
    id: 1193,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "3",
    number: "304",
    type: "\u0446\u0435\u043D\u0442\u0440 \u043A\u043E\u043C\u043F\u0435\u0442\u0435\u043D\u0446\u0438\u0439",
    desc: ""
  },
  {
    id: 1194,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "3",
    number: "306",
    type: "",
    desc: ""
  },
  {
    id: 1195,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "3",
    number: "303\u0411",
    type: "\u0446\u0435\u043D\u0442\u0440 \u043A\u043E\u043C\u043F\u0435\u0442\u0435\u043D\u0446\u0438\u0439",
    desc: ""
  },
  {
    id: 1196,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "3",
    number: "305",
    type: "\u0446\u0435\u043D\u0442\u0440 \u043A\u043E\u043C\u043F\u0435\u0442\u0435\u043D\u0446\u0438\u0439",
    desc: ""
  },
  {
    id: 1197,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "3",
    number: "307",
    type: "",
    desc: ""
  },
  {
    id: 1198,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "3",
    number: "302",
    type: "\u0446\u0435\u043D\u0442\u0440 \u043A\u043E\u043C\u043F\u0435\u0442\u0435\u043D\u0446\u0438\u0439",
    desc: ""
  },
  {
    id: 1199,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "3",
    number: "301",
    type: "\u044D\u043A\u0441\u043F\u0435\u0440\u0442\u043D\u043E-\u0430\u043D\u0430\u043B\u0438\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0446\u0435\u043D\u0442\u0440",
    desc: ""
  },
  {
    id: 1200,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "4",
    number: "402",
    type: "\u0432\u043E\u043B\u043E\u043D\u0442\u0435\u0440\u0441\u043A\u0438\u0439 \u0446\u0435\u043D\u0442\u0440",
    desc: ""
  },
  {
    id: 1201,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "4",
    number: "406",
    type: "",
    desc: ""
  },
  {
    id: 1202,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "4",
    number: "408",
    type: "\u043F\u0440\u0438\u0435\u043C\u043D\u0430\u044F \u043A\u043E\u043C\u0438\u0441\u0441\u0438\u044F",
    desc: ""
  },
  {
    id: 1203,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "4",
    number: "409",
    type: "\u043F\u0440\u0438\u0435\u043C\u043D\u0430\u044F \u043A\u043E\u043C\u0438\u0441\u0441\u0438\u044F",
    desc: ""
  },
  {
    id: 1204,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "4",
    number: "407",
    type: "\u043F\u0440\u0438\u0435\u043C\u043D\u0430\u044F \u043A\u043E\u043C\u0438\u0441\u0441\u0438\u044F",
    desc: ""
  },
  {
    id: 1205,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "4",
    number: "418",
    type: "",
    desc: ""
  },
  {
    id: 1206,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "4",
    number: "419",
    type: "",
    desc: ""
  },
  {
    id: 1207,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "4",
    number: "410",
    type: "\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0437\u0430 \u043F\u043E\u0436\u0430\u0440\u043D\u0443\u044E \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u044C",
    desc: ""
  },
  {
    id: 1208,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "4",
    number: "411",
    type: "\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0437\u0430 \u043F\u043E\u0436\u0430\u0440\u043D\u0443\u044E \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u044C",
    desc: ""
  },
  {
    id: 1209,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "4",
    number: "415",
    type: "\u043A\u043E\u043D\u0442\u0430\u043A\u0442-\u0446\u0435\u043D\u0442\u0440",
    desc: ""
  },
  {
    id: 1210,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "4",
    number: "416",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 1211,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "4",
    number: "416\u0410",
    type: "",
    desc: ""
  },
  {
    id: 1212,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "5",
    number: "518",
    type: "\u0446\u0435\u043D\u0442\u0440 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0438 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0438 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u0441\u0438\u0441\u0442\u0435\u043C",
    desc: ""
  },
  {
    id: 1213,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "5",
    number: "519",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 1214,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "5",
    number: "512",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 1215,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "5",
    number: "517",
    type: "\u043C\u043E\u0431\u0438\u043B\u0438\u0437\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u043E\u0442\u0434\u0435\u043B",
    desc: ""
  },
  {
    id: 1216,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "5",
    number: "513",
    type: "\u0446\u0435\u043D\u0442\u0440 \u043A\u043E\u043D\u0433\u0440\u0435\u0441\u0441\u043D\u043E-\u0432\u044B\u0441\u0442\u0430\u0432\u043E\u0447\u043D\u043E\u0439 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
    desc: ""
  },
  {
    id: 1217,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "5",
    number: "516",
    type: "\u0438\u043D\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u043D\u044B\u0439 \u0446\u0435\u043D\u0442\u0440",
    desc: ""
  },
  {
    id: 1218,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "5",
    number: "514",
    type: "\u0431\u044E\u0440\u043E \u043F\u0440\u043E\u043F\u0443\u0441\u043A\u043E\u0432",
    desc: ""
  },
  {
    id: 1219,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "5",
    number: "515",
    type: "\u0448\u0442\u0430\u0431 \u0413\u041E \u0438 \u0427\u0421",
    desc: ""
  },
  {
    id: 1220,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "5",
    number: "502",
    type: "\u0441\u0435\u043A\u0442\u043E\u0440 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u044F \u043A\u0443\u043B\u044C\u0442\u0443\u0440\u043D\u043E-\u043C\u0430\u0441\u0441\u043E\u0432\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u044B",
    desc: ""
  },
  {
    id: 1221,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "5",
    number: "504",
    type: "\u0446\u0435\u043D\u0442\u0440 \u044D\u043A\u0441\u043F\u043B\u0443\u0430\u0442\u0430\u0446\u0438\u0438 \u0441\u043E\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0445 \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432",
    desc: ""
  },
  {
    id: 1222,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "5",
    number: "503",
    type: "\u0446\u0435\u043D\u0442\u0440 \u044D\u043A\u0441\u043F\u043B\u0443\u0430\u0442\u0430\u0446\u0438\u0438 \u0441\u043E\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0445 \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432",
    desc: ""
  },
  {
    id: 1223,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "5",
    number: "510",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 1224,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "5",
    number: "509",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 1225,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "5",
    number: "505",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 1226,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "5",
    number: "508",
    type: "\u0434\u0438\u0441\u043F\u0435\u0442\u0447\u0435\u0440\u0441\u043A\u0430\u044F",
    desc: ""
  },
  {
    id: 1227,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "5",
    number: "507",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 1228,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "5",
    number: "506",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 1229,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "1",
    number: "106",
    type: "\u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 1230,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "1",
    number: "105",
    type: "\u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 1231,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "1",
    number: "103",
    type: "\u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 1232,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "1",
    number: "103\u043A",
    type: "\u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 1233,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "1",
    number: "104",
    type: "\u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 1234,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "1",
    number: "101",
    type: "\u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 1235,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "1",
    number: "114",
    type: "\u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 1236,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "1",
    number: "112",
    type: "\u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 1237,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "1",
    number: "113",
    type: "\u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 1238,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "-1",
    number: "1\u0431",
    type: "\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    desc: ""
  },
  {
    id: 1239,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "-1",
    number: "1\u0430",
    type: "\u0446\u0435\u043D\u0442\u0440 \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0438 \u0432\u043E\u0434\u0438\u0442\u0435\u043B\u0435\u0439",
    desc: ""
  },
  {
    id: 1240,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "-1",
    number: "1",
    type: "\u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u043F\u043E \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044E \u0438 \u044D\u043A\u0441\u043F\u043B\u0443\u0430\u0442\u0430\u0446\u0438\u0438 \u0441\u043E\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0445 \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432",
    desc: ""
  },
  {
    id: 1241,
    campus: "\u0411\u0421",
    corpus: "",
    floor: "-1",
    number: "",
    type: "",
    desc: ""
  }
];

export { infoData as i };
//# sourceMappingURL=aud_info-52558608.mjs.map
