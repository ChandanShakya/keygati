document.addEventListener("DOMContentLoaded", () => {

    console.log("KEYGATI WORDS STARTED");


    // ================================
    // Elements
    // ================================

    const typingText = document.getElementById("typing-text");

    const wpmValue = document.getElementById("wpm-value");
    const accuracyValue = document.getElementById("accuracy-value");
    const scoreValue = document.getElementById("score-value");

    const progressValue = document.getElementById("progress-value");

    const restartButton = document.getElementById("restart-button");


    // ================================
    // Word Bank
    // ================================

    const wordBank = [
        "ability",
        "accept",
        "account",
        "action",
        "active",
        "actually",
        "address",
        "advance",
        "almost",
        "already",
        "answer",
        "appear",
        "approach",
        "area",
        "around",
        "arrive",
        "article",
        "available",
        "become",
        "before",
        "begin",
        "believe",
        "better",
        "between",
        "build",
        "business",
        "change",
        "clear",
        "close",
        "common",
        "complete",
        "create",
        "current",
        "develop",
        "different",
        "during",
        "early",
        "effect",
        "enough",
        "example",
        "experience",
        "family",
        "follow",
        "future",
        "general",
        "great",
        "group",
        "happen",
        "important",
        "include",
        "increase",
        "information",
        "interest",
        "learn",
        "level",
        "local",
        "market",
        "member",
        "message",
        "moment",
        "number",
        "offer",
        "often",
        "order",
        "other",
        "people",
        "place",
        "point",
        "possible",
        "practice",
        "present",
        "problem",
        "process",
        "product",
        "project",
        "provide",
        "quality",
        "question",
        "reason",
        "result",
        "right",
        "service",
        "simple",
        "small",
        "something",
        "start",
        "state",
        "still",
        "strong",
        "system",
        "team",
        "thing",
        "think",
        "today",
        "together",
        "understand",
        "value",
        "website",
        "work",
        "world",
        "write",
        "year"
    ];


    // ================================
    // Practice Settings
    // ================================

    const WORDS_PER_SET = 14;


    // ================================
    // State
    // ================================

    let wordSet = [];

    let typedText = "";

    let totalTypedCharacters = 0;
    let totalCorrectCharacters = 0;

    let startTime = null;

    let practiceStarted = false;
    let practiceFinished = false;

    let nextSetTimeout = null;


    // ================================
    // Utility
    // ================================

    function getRandomWord() {

        const randomIndex =
            Math.floor(Math.random() * wordBank.length);

        return wordBank[randomIndex];
    }


    function generateWordSet() {

        const newSet = [];

        for (let i = 0; i < WORDS_PER_SET; i++) {
            newSet.push(getRandomWord());
        }

        return newSet;
    }


    function getTargetText() {

        return wordSet.join(" ");
    }


    // ================================
    // Start New Set
    // ================================

    function startNewSet() {

        if (nextSetTimeout) {
            clearTimeout(nextSetTimeout);
            nextSetTimeout = null;
        }

        wordSet = generateWordSet();

        typedText = "";

        totalTypedCharacters = 0;
        totalCorrectCharacters = 0;

        startTime = null;

        practiceStarted = false;
        practiceFinished = false;

        progressValue.textContent =
            `0 / ${WORDS_PER_SET}`;

        renderWords();
    }


    // ================================
    // Render Words
    // ================================

    function renderWords() {

        const targetText = getTargetText();

        typingText.innerHTML = "";

        [...targetText].forEach((character, index) => {

            const characterElement =
                document.createElement("span");

            /*
             * Use a non-breaking space visually so the
             * browser keeps the space character visible.
             *
             * The actual character being checked remains
             * a normal " " in targetText.
             */
            characterElement.textContent =
                character === " "
                    ? "\u00A0"
                    : character;

            characterElement.dataset.charIndex = index;

            characterElement.className =
                "text-keygati-dark/35 transition-colors duration-75";

            typingText.appendChild(characterElement);
        });

        updateCharacterDisplay();
    }


    // ================================
    // Update Character Display
    // ================================

    function updateCharacterDisplay() {

        const characters =
            typingText.querySelectorAll("[data-char-index]");

        const targetText =
            getTargetText();

        characters.forEach((characterElement, index) => {

            characterElement.classList.remove(
                "text-keygati-dark",
                "text-keygati-dark/35",
                "text-keygati-coral"
            );


            // Character has been typed
            if (index < typedText.length) {

                if (typedText[index] === targetText[index]) {

                    characterElement.classList.add(
                        "text-keygati-dark"
                    );

                } else {

                    characterElement.classList.add(
                        "text-keygati-coral"
                    );
                }

                return;
            }


            // Character has not been typed yet
            characterElement.classList.add(
                "text-keygati-dark/35"
            );
        });
    }


    // ================================
    // WPM
    // ================================

    function calculateWPM() {

        if (!startTime || totalTypedCharacters === 0) {
            return 0;
        }

        const elapsedMilliseconds =
            Date.now() - startTime;

        const elapsedMinutes =
            elapsedMilliseconds / 60000;

        if (elapsedMinutes <= 0) {
            return 0;
        }

        return Math.round(
            (totalCorrectCharacters / 5) /
            elapsedMinutes
        );
    }


    // ================================
    // Accuracy
    // ================================

    function calculateAccuracy() {

        if (totalTypedCharacters === 0) {
            return 100;
        }

        return Math.round(
            (totalCorrectCharacters /
                totalTypedCharacters) * 100
        );
    }


    // ================================
    // Score
    // ================================

    function calculateScore() {

        const wpm =
            calculateWPM();

        const errors =
            totalTypedCharacters -
            totalCorrectCharacters;

        /*
         * Score formula:
         *
         * Correct Characters × 10
         * + WPM × 5
         * − Errors × 5
         */

        return Math.max(
            0,
            Math.round(
                (totalCorrectCharacters * 10) +
                (wpm * 5) -
                (errors * 5)
            )
        );
    }


    // ================================
    // Update Stats
    // ================================

    function updateStats() {

        const wpm =
            calculateWPM();

        const accuracy =
            calculateAccuracy();

        const score =
            calculateScore();

        wpmValue.textContent =
            wpm;

        accuracyValue.textContent =
            `${accuracy}%`;

        scoreValue.textContent =
            score;
    }


    // ================================
    // Update Progress
    // ================================

    function updateProgress() {

        const targetText =
            getTargetText();

        let completedWords = 0;

        let currentPosition = 0;


        wordSet.forEach((word, index) => {

            const wordStart =
                currentPosition;

            const wordEnd =
                wordStart + word.length;


            /*
             * A word is complete when the user has
             * typed the word AND its following space.
             *
             * For the final word there is no following
             * space, so reaching its end is enough.
             */
            const isFinalWord =
                index === wordSet.length - 1;

            if (isFinalWord) {

                if (typedText.length >= wordEnd) {
                    completedWords++;
                }

            } else {

                if (typedText.length > wordEnd) {
                    completedWords++;
                }
            }

            currentPosition =
                wordEnd + 1;
        });


        completedWords =
            Math.min(
                completedWords,
                WORDS_PER_SET
            );


        progressValue.textContent =
            `${completedWords} / ${WORDS_PER_SET}`;
    }


    // ================================
    // Check Set Completion
    // ================================

    function checkSetCompletion() {

        const targetText =
            getTargetText();

        if (typedText.length < targetText.length) {
            return;
        }

        if (practiceFinished) {
            return;
        }

        practiceFinished = true;

        updateStats();


        /*
         * Small pause before loading the next set.
         * This lets the user see their final score.
         */
        nextSetTimeout = setTimeout(() => {

            startNewSet();

        }, 700);
    }


    // ================================
    // Keyboard Input
    // ================================

    document.addEventListener("keydown", (event) => {

        // Prevent buttons from capturing typing input
        if (document.activeElement instanceof HTMLButtonElement) {
            return;
        }


        // Ignore modifier and navigation keys
        if (
            event.key === "Shift" ||
            event.key === "Control" ||
            event.key === "Alt" ||
            event.key === "Meta" ||
            event.key === "Tab" ||
            event.key === "Escape" ||
            event.key === "Enter" ||
            event.key === "ArrowUp" ||
            event.key === "ArrowDown" ||
            event.key === "ArrowLeft" ||
            event.key === "ArrowRight"
        ) {
            return;
        }


        // ================================
        // Backspace
        // ================================

        if (event.key === "Backspace") {

            event.preventDefault();


            if (typedText.length === 0) {
                return;
            }


            /*
             * Remember the character being removed
             * BEFORE changing typedText.
             */
            const removedIndex =
                typedText.length - 1;

            const targetText =
                getTargetText();

            const removedCharacter =
                typedText[removedIndex];

            const expectedCharacter =
                targetText[removedIndex];


            typedText =
                typedText.slice(0, -1);

            totalTypedCharacters--;


            if (removedCharacter === expectedCharacter) {
                totalCorrectCharacters--;
            }


            updateCharacterDisplay();
            updateStats();
            updateProgress();

            return;
        }


        // ================================
        // Printable Characters
        // ================================

        /*
         * Space has event.key === " "
         * and event.key.length === 1.
         *
         * Therefore spaces are intentionally accepted.
         */
        if (event.key.length !== 1) {
            return;
        }


        event.preventDefault();


        // ================================
        // Target Text
        // ================================

        const targetText =
            getTargetText();


        // Do not type beyond the set
        if (typedText.length >= targetText.length) {
            return;
        }


        // ================================
        // Start Timer
        // ================================

        if (!practiceStarted) {

            practiceStarted = true;

            startTime = Date.now();
        }


        // ================================
        // Check Character
        // ================================

        const currentIndex =
            typedText.length;

        const expectedCharacter =
            targetText[currentIndex];


        /*
         * event.key can be:
         *
         * "a"
         * "b"
         * " "
         *
         * So spaces are handled exactly like
         * every other character.
         */
        typedText += event.key;

        totalTypedCharacters++;


        if (event.key === expectedCharacter) {
            totalCorrectCharacters++;
        }


        // ================================
        // Update UI
        // ================================

        updateCharacterDisplay();

        updateStats();

        updateProgress();

        checkSetCompletion();
    });


    // ================================
    // Restart
    // ================================

    restartButton.addEventListener("click", () => {

        restartButton.blur();

        startNewSet();
    });


    // ================================
    // Prevent Button Focus
    // ================================

    document.addEventListener("click", (event) => {

        const button =
            event.target.closest("button");

        if (button) {
            button.blur();
        }
    });


    // ================================
    // Initial State
    // ================================

    startNewSet();

});