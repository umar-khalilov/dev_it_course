const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Who Want To Be A Millionaire?\n'
});

rl.prompt()

rl.on('line', (line) => {
    switch (line.trim()) {
        case '1':
            console.log(getQuestion(line));
    }
    rl.prompt();
}).on('close', () => {
    console.log('Have a great day!');
    process.exit(0);
});

function run(command = '', com) {
    let answers = null;
    console.log(getQuestion(command));

}


function getQuestion(question = "1") {
    const questions = {
        1: {
            question: "Кто 1-м получил Нобелевскую премию по литературе?",
            answersOptions: ['A: Романист', 'B: Драматург', 'C: Поэт', "D: Эссеист"]
        },
        2: {
            question: "Какой химический элемент назван в честь злого подземного гнома?",
            answersOptions: ['A: Гафний', 'B: Кобальт', 'C: Бериллий', 'D: Теллур']
        },
        3: {
            question: 'В какой из этих столиц бывших союзных республик раньше появилось метро?',
            answersOptions: ['A: Тбилиси', 'B: Ереван', "C: Баку", 'D: Минск'],
        },
        4: {
            question: 'Сколько морей омывают Балканский полуостров?',
            answersOptions: ['A: 3', 'B: 4', 'C: 5', 'D: 6']
        },
        5: {
            question: 'Что запрещал указ, который в 1726 году подписала Екатерина I?',
            answersOptions: ['A: Точить лясы', 'B: Бить баклуши', 'C: Пускать пыль в глаза', 'D: Переливать из пустого в порожнее']
        }
    }
    switch (question) {
        case '1':
            return questions["1"];
        case '2':
            return questions["2"];
        case '3':
            return questions["3"];
        case '4':
            return questions["4"];
        case '5':
            return questions["5"];
        default:
            return null;
    }
}


function getHelpHall(question = {}) {
    const {answersOptions} = question;
    const right50Answers = {
        1: ['B: Драматург', 'C: Поэт'],
        2: ['B: Кобальт', 'D: Теллур'],
        3: ["C: Баку", 'A: Тбилиси'],
        4: ["D: 6", "A: 3"],
        5: ["C: Пускать пыль в глаза", "D: Переливать из пустого в порожне"]
    }
    if (answersOptions[0] === 'A: Романист') {
        question.answersOptions = right50Answers["1"];
    } else if (answersOptions[0] === 'A: Гафний') {
        question.answersOptions = right50Answers["2"];
    } else if (answersOptions[0] === 'A: Тбилиси') {
        question.answersOptions = right50Answers["3"];
    } else if (answersOptions[0] === 'A: 3') {
        question.answersOptions = right50Answers["4"];
    } else {
        question.answersOptions = right50Answers["5"];
    }
    return question;
}

function callFriend(question = {}) {
    const {answersOptions} = question;
    const rightAnswers = {
        1: 'C: Поэт',
        2: 'B: Кобальт',
        3: 'A: Тбилиси',
        4: "D: 6",
        5: "C: Пускать пыль в глаза",
    }
    if (answersOptions[0] === 'A: Романист' || answersOptions[0] === 'B: Драматург') {
        question.answersOptions = rightAnswers["1"];
    } else if (answersOptions[0] === 'A: Гафний' || answersOptions[0] === 'B: Кобальт') {
        question.answersOptions = rightAnswers["2"];
    } else if (answersOptions[0] === 'A: Тбилиси' || answersOptions[0] === "C: Баку") {
        question.answersOptions = rightAnswers["3"];
    } else if (answersOptions[0] === 'A: 3' || answersOptions[0] === "D: 6") {
        question.answersOptions = rightAnswers["4"];
    } else {
        question.answersOptions = rightAnswers["5"];
    }
    return question;
}

function countMoney() {
    return {
        1: 1e5,
        2: 15e4,
        3: 2e5,
        4: 25e4,
        5: 3e5
    }
}

function selectAnswer(question = {}, select = '') {
    const {answersOptions} = question;
    return answersOptions.find((item => item[0] === select))
}

function verifySelectedAnswer(answer) {
    const listRightAnswers = {
        1: 'C: Поэт',
        2: 'B: Кобальт',
        3: 'A: Тбилиси',
        4: "D: 6",
        5: "C: Пускать пыль в глаза",
    }

    switch (answer) {
        case 'C: Поэт':
            return listRightAnswers["1"] + '---Right';
        case 'B: Кобальт':
            return listRightAnswers["2"] + '---Right';
        case 'A: Тбилиси':
            return listRightAnswers["3"] + '---Right';
        case "D: 6":
            return listRightAnswers["4"] + '---Right';
        case "C: Пускать пыль в глаза":
            return listRightAnswers["5"] + '---Right';
        default:
            return 'You wrong';
    }

}
