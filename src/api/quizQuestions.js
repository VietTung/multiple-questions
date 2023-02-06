var quizQuestions = [
    {
        id: 0,
        isClicked: false,
        isCorrect: false,
        text: "What is the correct way to declare script in HTML file?",
        options: [
            {id: 0, answer: "<Script>", isCorrect: false},
            {id: 1, answer: "<script>", isCorrect: true},
            {id: 2, answer: "<input type=`script`>", isCorrect: false},
            {id: 3, answer: "<div type=`script`>", isCorrect: false},
        ]
    },

    {
        id: 1,
        isClicked: false,
        isCorrect: false,
        text: "Inside which HTML element do we put the JavaScript??",
        options: [
            {id: 0, answer: "<javascript>", isCorrect: false},
            {id: 1, answer: "<script>", isCorrect: true},
            {id: 2, answer: "<js>", isCorrect: false},
            {id: 3, answer: "<scripting>", isCorrect: false},
        ]
    },
    {
        id: 2,
        isClicked: false,
        isCorrect: false,
        text: "What is the correct JavaScript syntax to change the content of the HTML element below?\n\n<p id=`demo`>This is a demonstration.</p>",
        options: [
            {id: 0, answer: `document.getElementByName("p").innerHTML = "Hello World!";`, isCorrect: false},
            {id: 1, answer: `document.getElementById("demo").innerHTML = "Hello World!";`, isCorrect: true},
            {id: 2, answer: `$(".demo").innerHTML = "Hello World!";`, isCorrect: false},
            {id: 3, answer: `document.getElement("p").innerHTML = "Hello World!";`, isCorrect: false},
        ]
    },
    {
        id: 3,
        isClicked: false,
        isCorrect: false,
        text: "Where is the correct place to insert a JavaScript?",
        options: [
            {id: 0, answer: "<head>", isCorrect: false},
            {id: 1, answer: "<body>", isCorrect: false},
            {id: 2, answer: "both <head> or <body> can be used", isCorrect: true},
            {id: 3, answer: "The javascript can only be externally scripted and reference to HTML file", isCorrect: false},
        ]
    },
    {
        id: 4,
        isClicked: false,
        isCorrect: false,
        text: "What is the correct syntax for referring to an external script called `xxx.js`?",
        options: [
            {id: 0, answer: "<script src= `xxx.js`>", isCorrect: false},
            {id: 1, answer: "<script name= `xxx.js`>", isCorrect: true},
            {id: 2, answer: "<script href= `xxx.js`>", isCorrect: false},
            {id: 3, answer: "<script loc= `xxx.js`>", isCorrect: false},
        ]
    },


]

export default quizQuestions;