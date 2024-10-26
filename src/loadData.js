
const getData = async (dataKey) => {
    const response = await fetch('./src/data/data.json'); // Updated path to reflect directory structure
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return (await response.json())[dataKey];
}

async function loadQuestions() {
    const data = await getData('personalQuestions');

    const listContainer = document.getElementById('insights-list');

    data.forEach(item => {
        const listItem = document.createElement('li');
        listItem.classList.add('answer-item');

        // Question
        const question = document.createElement('h3');
        question.textContent = item.question;
        listItem.appendChild(question);

        // Answer - handle array and string cases
        if (Array.isArray(item.answer)) {
            const answerList = document.createElement('ul');
            answerList.classList.add('answer-list');
            item.answer.forEach(answerItem => {
                const answerListItem = document.createElement('li');
                answerListItem.textContent = answerItem;
                answerList.appendChild(answerListItem);
            });
            listItem.appendChild(answerList);
        } else {
            const answer = document.createElement('p');
            answer.classList.add('answer-text');
            answer.textContent = item.answer;
            listItem.appendChild(answer);
        }

        listContainer.appendChild(listItem);
    });
}

async function loadPrinciples() {
    const data = await getData('principles');
    const listContainer = document.getElementById('principles-list');

    data.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        listContainer.appendChild(listItem);
    });
}
