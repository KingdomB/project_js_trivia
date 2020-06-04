
function QuestionViewModel(){
    this.questions=ko.observableArray([
    //Question 1: index 0
    {question: "Which of the following is not an escape sequence in JavaScript?",
    A: "\\",
    B: "\\t",
    C: "\\r",
    D: "\\\'",
    correct: A,
    },
    //Question 2, index 1
    {question: "Which of the following are used to enclose function parameters?",
    A: "{}",
    B: "[]",
    C: "()",
    D: "<>",
    correct: C,
    },
    //Question 3, index 2
    {question: "Which method of an Array calls a function for each element in the array?",
    A: "forEach()",
    B: "every()",
    C: "forEvery()",
    D: "each()",
    correct: A,
    },
    //Question 4, index 3
    {question: "Under which HTML tag is JavaScript code written?",
    A: "<javascript>",
    B: "<jscode>", 
    C: "<js>",
    D: "<script>",
    correct: D,
    },
    //Question 5, index 4
    {question: "How do you call myFunction() in JavaScript?",
    A: "Call myFunc()",
    B: "myFunction()",
    C: "Call function myFunction()",
    D: "function myFunction",
    correct: B,
    },
    //Question 6, index 5
    {question: "Which of the following is not valid in JavaScript?",
    A: "const name = 'John';",
    B: "var name = 'John';",
    C: "console.log(name);",
    D: "int number = 10;",
    correct: D,
    },
    //Question 7, index 6
    {question: "Which assignment operator is invalid in JavaScript?",
    A: "x **= y;",
    B: "x == y;",
    C: "x %= y;",
    D: "x -= y;",
    correct: B,
    },
    //Question 8, index 7
    {question: "JavaScript is a ________-side scripting language.",
    A: "Server",
    B: "ISP",
    C: "Browser",
    D: "All of the above.",
    correct: C,
    },
    //Question 9, index 8
    {question: "Which of the following JavaScript statements displays 'Hello World' in an alert box?",
    A: "alerttext(“HelloWorld!”);",
    B: "alertmsg(“HelloWorld!”);",
    C: "msgbox(“HelloWorld!”);",
    D: "alert(“HelloWorld!”);",
    correct: D,
    },
    //Question 10, index 9
    {question: "What is the correct syntax for adding a comment in JavaScript?",
    A: "//This is a comment",
    B: "<!–-This is a comment-->",
    C: "-*This is a comment",
    D: "!This is a comment",
    correct: A,
    };
  ]);
};
ko.applyBindings(new QuestionViewModel());

