export const ProgrammingTasks = {
  [0]: {
    title: "Zestaw zadań nr 1",
    1: {
      Task: "Co to jest debugowanie?",
      Options: {
        a: "Proces pisania dokumentacji do aplikacji.",
        b: "Proces szukania i naprawiania błędów w kodzie.",
        c: "Tworzenie kopii zapasowych projektów.",
      },
      Right_answer: "b",
      Complete: null,
      answerType: "Choose",
    },
    2: {
      Task: "Który typ bazy danych jest najczęściej używany do przechowywania danych w formacie klucz-wartość?",
      Options:{
      a: "Relacyjna baza danych",
      b: "NoSQL",
      c: "Baza grafowa",
      },
      Right_answer: "b",
      Complete: null,
      answerType: "Choose",
    },
    3: {
      Task: "Utwórz zmienną o nazwie carName i przypisz jej wartość Volvo.",
      Right_answer: "var carName = 'Volvo';",
      answerType: "Type",
      Complete: null,
    },
    4: {
      Task: "Co to jest algorytm?",
      Options:{
      a: "Zbiór kroków do rozwiązania konkretnego problemu.",
      b: "Forma graficzna przedstawiająca dane.",
      c: "Rodzaj języka programowania.",
      },
      Right_answer: "a",
      answerType: "Choose",
      Complete: null,
    },
    5: {
      Task: "Co to jest front-end?",
      Options:{
      a: "Część aplikacji odpowiedzialna za bazę danych",
      b: "Warstwa aplikacji, którą widzi i z której korzysta użytkownik",
      c: "Narzędzie do automatyzacji zadań programistycznych.",
      },
      Right_answer: "b",
      answerType: "Choose",
      Complete: null,
    },
  },
  [1]: {
    title: "Zestaw zadań nr 2",
    1: {
      Task: "wybierz program SQL, który wyświtli wszystkie kolumny z tabeli Customers.",
      Options:{
      a: "select * FROM Customers;",
      b: "choose * WHERE Customers;",
      c: "select * WITHIN Customers;",
      },
      Right_answer: "a",
      answerType: "Choose",
    },
    2: {
      Task: "Wybierz właściwy program JavaScript, który zmierza długość tekstu",
      Options:{
      a: "let txt = 'Hello World!'; let x = txt.width; alert(x);",
      b: "let txt = 'Hello World!'; let x = txt.length; alert(x);",
      c: "add txt = 'Hello World!'; add x = txt.length; console.log(x);",
      },
      Right_answer: "b",
      answerType: "Choose",
    },
    3: {
      Task: "Pomnóż 10 przez 5 i wyświetl wynik w oknie alertu w języku JavaScript.",
      Right_answer: "alert(10 * 5);",
      answerType: "Type",
      Complete: false,
    },
    4: {
      Task: "Jaką funkcję należy użyć, aby sprawdzić, czy zmienna jest liczbą całkowitą?",
      Options:{
      a: "isnumeric()",
      b: "typeisint()",
      c: "is_int()",
      },
      Right_answer: "c",
      answerType: "Choose",
    },
    5: {
      Task: "Listy w Pythonie mogą być używane jako tablice. Jaki będzie wynik następującego kodu: fruits = ['apple', 'bananan', 'cherry'] print(fruits[0])",
      Options:{
      a: "apple",
      b: "bananan",
      c: "cherry",
      },
      Right_answer: "a",
      answerType: "Choose",
    },
  },
};
