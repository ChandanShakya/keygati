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
    const typingInput = document.getElementById("typing-input");


    // ================================
    // Word Bank
    // ================================

    const wordBank = [

        // ========================================
        // VERY EASY
        // ========================================

        "a",
        "an",
        "as",
        "at",
        "be",
        "by",
        "do",
        "go",
        "he",
        "if",
        "in",
        "is",
        "it",
        "me",
        "my",
        "no",
        "of",
        "on",
        "or",
        "so",
        "to",
        "up",
        "us",
        "we",

        "and",
        "are",
        "can",
        "for",
        "get",
        "has",
        "have",
        "her",
        "his",
        "how",
        "not",
        "now",
        "one",
        "our",
        "out",
        "see",
        "the",
        "this",
        "was",
        "what",
        "when",
        "who",
        "will",
        "with",
        "you",

        // ========================================
        // EASY
        // ========================================

        "able",
        "back",
        "best",
        "book",
        "call",
        "case",
        "city",
        "come",
        "data",
        "days",
        "done",
        "down",
        "each",
        "even",
        "fact",
        "feel",
        "find",
        "first",
        "food",
        "from",
        "give",
        "good",
        "help",
        "home",
        "idea",
        "into",
        "keep",
        "kind",
        "know",
        "last",
        "left",
        "life",
        "like",
        "line",
        "list",
        "long",
        "look",
        "made",
        "make",
        "many",
        "more",
        "most",
        "much",
        "name",
        "need",
        "next",
        "only",
        "open",
        "part",
        "place",
        "plan",
        "play",
        "point",
        "read",
        "real",
        "right",
        "same",
        "show",
        "side",
        "small",
        "some",
        "start",
        "take",
        "talk",
        "team",
        "tell",
        "than",
        "that",
        "them",
        "then",
        "they",
        "thing",
        "think",
        "time",
        "today",
        "turn",
        "used",
        "very",
        "want",
        "ways",
        "week",
        "well",
        "work",
        "year",

        // ========================================
        // MEDIUM
        // ========================================

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
        "service",
        "simple",
        "something",
        "state",
        "still",
        "strong",
        "system",
        "together",
        "understand",
        "value",
        "website",
        "world",
        "write",

        // ========================================
        // HARD
        // ========================================

        "accurate",
        "analysis",
        "application",
        "appropriate",
        "available",
        "challenge",
        "communication",
        "community",
        "comparison",
        "computer",
        "consider",
        "continue",
        "customer",
        "decision",
        "development",
        "different",
        "direction",
        "environment",
        "especially",
        "essential",
        "experience",
        "familiar",
        "following",
        "frequently",
        "generation",
        "government",
        "immediately",
        "individual",
        "industry",
        "language",
        "management",
        "necessary",
        "organization",
        "performance",
        "personal",
        "platform",
        "potential",
        "professional",
        "recommend",
        "relationship",
        "research",
        "responsibility",
        "security",
        "significant",
        "similar",
        "specific",
        "structure",
        "technology",
        "therefore",
        "through",
        "throughout",
        "understanding",
        "usually",

        // ========================================
        // TYPING-CHALLENGING
        // ========================================

        "awkward",
        "beautiful",
        "beginning",
        "business",
        "character",
        "comfortable",
        "consequence",
        "consistently",
        "coordinate",
        "description",
        "difficulty",
        "efficient",
        "equipment",
        "excellent",
        "exercise",
        "government",
        "knowledge",
        "maintenance",
        "necessary",
        "occasionally",
        "particularly",
        "privilege",
        "probably",
        "process",
        "pronunciation",
        "psychology",
        "questionnaire",
        "recognize",
        "recommendation",
        "requirement",
        "schedule",
        "strength",
        "successful",
        "technique",
        "temporary",
        "throughout",
        "trouble",
        "variety",
        "whether",
        "written"

    ];


    // ================================
    // Practice Settings
    // ================================

    const WORDS_PER_SET = 24;


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

        typingInput.value = "";

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

        let characterIndex = 0;

        wordSet.forEach((word, wordIndex) => {

            // Create an unbreakable container for the whole word
            const wordElement =
                document.createElement("span");

            wordElement.className =
                "inline-block whitespace-nowrap";

            // Create individual character spans
            [...word].forEach((character) => {

                const characterElement =
                    document.createElement("span");

                characterElement.textContent =
                    character;

                characterElement.dataset.charIndex =
                    characterIndex;

                characterElement.className =
                    "text-keygati-dark/35 transition-colors duration-75";

                wordElement.appendChild(characterElement);

                characterIndex++;
            });

            typingText.appendChild(wordElement);

            // Add a real space between words
            if (wordIndex < wordSet.length - 1) {

                const spaceElement =
                    document.createElement("span");

                spaceElement.textContent = "\u00A0";

                spaceElement.dataset.charIndex =
                    characterIndex;

                spaceElement.className =
                    "text-keygati-dark/35";

                typingText.appendChild(spaceElement);

                characterIndex++;
            }
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


        // Remove any existing cursor
        const existingCursor =
            typingText.querySelector(".typing-cursor");

        if (existingCursor) {
            existingCursor.remove();
        }


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


        // Add cursor below the current character
        const currentCharacter =
            typingText.querySelector(
                `[data-char-index="${typedText.length}"]`
            );

        if (currentCharacter) {

            const cursor =
                document.createElement("span");

            cursor.className =
                "typing-cursor";

            currentCharacter.parentNode.insertBefore(
                cursor,
                currentCharacter
            );

        } else {

            // Cursor at the very end of the text
            const cursor =
                document.createElement("span");

            cursor.className =
                "typing-cursor";

            typingText.appendChild(cursor);
        }
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

        const accuracy =
        calculateAccuracy();

        return Math.round(
            ((wpm / 150) * 1000) +
            ((accuracy / 100) * 500)
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
    // Mobile + Keyboard Input
    // ================================

    function focusTypingInput() {

        if (!practiceFinished) {
            typingInput.focus();
        }

    }


    typingInput.addEventListener("input", () => {

        if (practiceFinished) {

            typingInput.value =
                typedText;

            return;
        }


        const newValue =
            typingInput.value;


        // ================================
        // Backspace / Deletion
        // ================================

        if (newValue.length < typedText.length) {

            if (typedText.length === 0) {

                typingInput.value = "";

                return;
            }


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


            typingInput.value =
                typedText;


            updateCharacterDisplay();
            updateStats();
            updateProgress();

            return;
        }


        // ================================
        // New Characters
        // ================================

        const newCharacters =
            newValue.slice(typedText.length);


        if (newCharacters.length === 0) {
            return;
        }


        const targetText =
            getTargetText();


        for (const character of newCharacters) {

            if (typedText.length >= targetText.length) {
                break;
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


            typedText += character;

            totalTypedCharacters++;


            if (character === expectedCharacter) {

                totalCorrectCharacters++;

            }


            // ================================
            // Update UI
            // ================================

            updateCharacterDisplay();

            updateStats();

            updateProgress();

            checkSetCompletion();

        }


        /*
         * Keep the hidden textarea
         * synchronized with typedText.
         */
        typingInput.value =
            typedText;

    });


    // ================================
    // Focus Typing Input
    // ================================

    document.addEventListener("click", (event) => {

        if (event.target.closest("button")) {
            return;
        }

        focusTypingInput();

    });


    /*
     * Initial focus.
     */
    focusTypingInput();


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