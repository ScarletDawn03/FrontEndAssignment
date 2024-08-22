$(document).ready(function () {
    const quizQuestions = [
        {
            "question": "Which festival marks the end of Ramadan, the Islamic holy month of fasting?",
            "choices": [
                "Chinese New Year",
                "Hari Gawai Dayak",
                "Hari Raya Aidilfitri",
                "Thaipusam"
            ],
            "answer": 2
        },        {
            "question": "What is another name for the festival of Deepavali?",
            "choices": [
                "Festival of Lights",
                "Festival of Harvest",
                "Festival of Prosperity",
                "Festival of Unity"
            ],
            "answer": 0
        },
        {
            "question": "Which community mainly celebrates Chinese New Year in Malaysia?",
            "choices": [
                "Indian",
                "Malay",
                "Tamil",
                "Chinese"
            ],
            "answer": 3
        },
        {
            "question": "On which date is Hari Gawai Dayak celebrated annually?",
            "choices": [
                "June 1st",
                "May 31st",
                "July 1st",
                "August 1st"
            ],
            "answer": 0
        },
        {
            "question": "Which festival is known for intense acts of devotion, including physical endurance?",
            "choices": [
                "Hari Raya Aidilfitri",
                "Deepavali",
                "Thaipusam",
                "Pesta Kaamatan"
            ],
            "answer": 2
        },
        {
            "question": "What is the primary purpose of the Pesta Kaamatan festival?",
            "choices": [
                "To honor ancestors",
                "To celebrate the end of the rice harvest season",
                "To mark the new year",
                "To celebrate Lord Murugan"
            ],
            "answer": 1
        },
        {
            "question": "Which festival is associated with the Unduk Ngadau beauty pageant?",
            "choices": [
                "Thaipusam",
                "Hari Gawai Dayak",
                "Pesta Kaamatan",
                "Deepavali"
            ],
            "answer": 2
        },
        {
            "question": "Which festival is also known as the Harvest Festival?",
            "choices": [
                "Pesta Kaamatan",
                "Hari Gawai Dayak",
                "Hari Raya Aidilfitri",
                "Deepavali"
            ],
            "answer": 0
        },
        {
            "question": "Which festival is a time for families to come together, honor their ancestors, and usher in a new year of prosperity?",
            "choices": [
                "Hari Gawai Dayak",
                "Chinese New Year",
                "Hari Raya Aidilfitri",
                "Pesta Kaamatan"
            ],
            "answer": 1
        },
        {
            "question": "Which festival is particularly celebrated in the Malaysian states of Sarawak and Sabah?",
            "choices": [
                "Chinese New Year",
                "Hari Gawai Dayak",
                "Hari Raya Aidilfitri",
                "Thaipusam"
            ],
            "answer": 1
        }
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    function initializeHighscore(){
        const highscore = localStorage.getItem('high score');
        if(!highscore){
            localStorage.setItem('high score', 0);
        }
    }

    function loadQuestion() {
        const currentQuestion = quizQuestions[currentQuestionIndex];
        $('#question').text(currentQuestion.question);
        $('#choices').empty();

        currentQuestion.choices.forEach((choice, index) => {
            $('#choices').append(`
                <div class="choice">
                    <label>
                        <input type="radio" name="choice" id="choice${index}" value="${index}">
                        ${choice}
                    </label>
                </div>
            `);
        });

        $('#next_button').attr('disabled', true);  // Disable next button until an answer is selected
        $('#try_again').hide();
    }

    function handleAnswerSelection() {
        $('input[name="choice"]').on('change', function () {
            $('#next_button').attr('disabled', false);
        });
    }

    function showResult() {
        $('#result').text(`Your score is: ${score}/${quizQuestions.length}`).show();

        initializeHighscore();
        let highscore = localStorage.getItem('high score');

        if(score > highscore){
            localStorage.setItem('high score', score);
            highscore = score
        }

        $('#high_score').html(`Current high score: <span>${highscore}<span>`).show();

        $('#question, #choices, #next_button, #correct_answer').hide();
        $('#try_again').show();
    }

    $('#next_button').click(function () {
        let selectedChoiceIndex = $('input[name="choice"]:checked').val();
        let correctAnswerIndex = quizQuestions[currentQuestionIndex].answer;

        if (selectedChoiceIndex == correctAnswerIndex) {
            score++;
            $('#correct_answer').text('Your answer is correct!').show();
        }
        else{
            $('#correct_answer').text(`Your answer is wrong. The correct answer is
                ${quizQuestions[currentQuestionIndex].choices[correctAnswerIndex]}.`).show();
        }

        currentQuestionIndex++;

        if (currentQuestionIndex < quizQuestions.length) {
            loadQuestion();
            handleAnswerSelection();
        } else {
            showResult();
        }
    });

    $('#try_again').click(function() {
        currentQuestionIndex = 0;
        score = 0;
        loadQuestion();
        handleAnswerSelection();
        $('#result, #high_score').hide();
        $('#question, #choices, #next_button').show();
    });

    loadQuestion();
    handleAnswerSelection();
});