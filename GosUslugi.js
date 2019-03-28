
  function gosuslugi() {

    inputs = document.getElementsByTagName('input');
      //console.log(inputs);

      var data = ["Воробьева",
      "Елена",
      "Владимировна",
      "045-395-476 81",
      "2418",
      "903846",
      "26.04.2018",
      "УМВД РОССИИ ПО ИВАНОВСКОЙ ОБЛАСТИ",
      "370-005",
      "153034",
      "Иваново",
      "Пролетарская",
      "6",
      "",
      "86",
      "89109843428",
      "vorell@yandex.ru",
      "191-552-539 80",
      "",
      "",
      "Воробьев",
      "",
      "Илья",
      "Петрович",
      1,
      2,
      "29.05.2012",
      "",
      "I-ФО",
      "",
      "697635",
      "13.06.2012",
      "",
      "",
      "2468",
      "153012",
      "",
      "Иваново",
      "Сакко",
      "",
      "1",
      "",
      "3",
      "Воробьев",
      "Петр",
      "Юрьевич",
      "14.12.1972",
      "",
      "89109843429",
      "Воробьева",
      "Елена",
      "Владимировна",
      "26.02.1973",
      "vorell@yandex.ru",
      "+79109843428"]

    for ( var i = 0 ; i < 55 ; i++ ){
      if (i == 24 || i == 25) continue;
      document.getElementById(inputs[i].id).value = data[i];
    }

  }

  gosuslugi();



//inputs = document.getElementsByTagName('input');
//document.getElementById(inputs[6].id).value = "working!!!";
