//this function is activated by the Start button and makes the 
            //landing page heading and the start button disappear, while the
            //question and answers button appear. Can do this with knockout if 
            //we want. Need to include the next button here as well

function hide(){
    if(document.getElementById){ 
        document.getElementById("start").style.visibility = "hidden";
        document.getElementById("jsquiz").style.visibility = "hidden";
        document.getElementById("question").style.visibility = "visible";
        document.getElementById("answers").style.visibility = "visible";
    }
}

function Question(data) {
    this.id = data.id;
    this.question = data.question;
    this.A = data.A;
    this.B = data.B;
    this.C = data.C;
    this.D = data.D;
    this.correct = data.correct;
    this.type = data.type;    
}

function QuizModel() {
    var self = this;
    
    self.questions = ko.observableArray([]);

    self.currentIndex = ko.observable(); // store the current filter

    //set the questions values in the array
    self.questions([
        new Question({
            id: 1, 
            question: "Which of the following is not an escape sequence in JavaScript?",
            A: "\\",
            B: "\\t",
            C: "\\r",
            D: "\\\'",
            correct: "A",
            type: "Easy"
        }),
        new Question({
            id: 2, 
            question: "Which of the following are used to enclose function parameters?",
            A: "{}",
            B: "[]",
            C: "()",
            D: "<>",
            correct: "C",
            type: "Medium"
        }),
        new Question({
            id: 3, 
            question: "Which method of an Array calls a function for each element in the array?",
            A: "forEach()",
            B: "every()",
            C: "forEvery()",
            D: "each()",
            correct: "A",
            type: "Difficult"
        }),
        new Question({
            id: 4, 
            question: "Under which HTML tag is JavaScript code written?",
            A: "<javascript>",
            B: "<jscode>", 
            C: "<js>",
            D: "<script>",
            correct: "D",
            type: "Difficult"
        }),
        new Question({
            id: 5, 
            question: "How do you call myFunction() in JavaScript?",
            A: "Call myFunc()",
            B: "myFunction()",
            C: "Call function myFunction()",
            D: "function myFunction",
            correct: "B",
            type: "Easy"
        }),
        new Question({   
            id: 6, 
            question: "Which of the following is not valid in JavaScript?",
            A: "const name = 'John';",
            B: "var name = 'John';",
            C: "console.log(name);",
            D: "int number = 10;",
            correct: "D",
            type: "Difficult"
            }),
        new Question({   
            id: 7, 
            question: "Which assignment operator is invalid in JavaScript?",
            A: "x **= y;",
            B: "x == y;",
            C: "x %= y;",
            D: "x -= y;",
            correct: "B",
            type: "Medium"
        }),
        new Question({ 
            id: 8, 
            question: "JavaScript is a ________-side scripting language.",
            A: "Server",
            B: "ISP",
            C: "Browser",
            D: "All of the above.",
            correct: "C",
            type: "Easy"
        }),
        new Question({   
            id: 9, 
            question: "Which of the following JavaScript statements displays 'Hello World' in an alert box?",
            A: "alerttext(“HelloWorld!”);",
            B: "alertmsg(“HelloWorld!”);",
            C: "msgbox(“HelloWorld!”);",
            D: "alert(“HelloWorld!”);",
            correct: "D",
            type: "Difficult"
        }),
        new Question({
            id: 10, 
            question: "What is the correct syntax for adding a comment in JavaScript?",
            A: "//This is a comment",
            B: "<!–-This is a comment-->",
            C: "-*This is a comment",
            D: "!This is a comment",
            correct: "A",
            type: "Medium"           
        }), ])

        self.filterQuestionsById = ko.computed(function () {
            if (!self.currentIndex()) {
                return self.questions();
            } else {
                return ko.utils.arrayFilter(self.questions(), function (ques) {
                    return ques.id == self.currentIndex();
                });
            }
        });

        self.filter = function(idNum) {
            self.currentIndex(idNum);
        }
}

ko.applyBindings(new QuizModel())