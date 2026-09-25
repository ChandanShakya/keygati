document.addEventListener("DOMContentLoaded", function () {

    console.log("KEYGATI STARTED");

    const typingText = document.getElementById("typing-text");
    const wpmValue = document.getElementById("wpm-value");
    const timeValue = document.getElementById("time-value");
    const accuracyValue = document.getElementById("accuracy-value");
    const restartButton = document.getElementById("restart-button");
    const charStatsValue = document.getElementById("char-stats-value");

    const duration15Button = document.getElementById("duration-15");
    const duration30Button = document.getElementById("duration-30");
    const duration60Button = document.getElementById("duration-60");
    const duration120Button = document.getElementById("duration-120");
    
    
    const resultsModal =
        document.getElementById("results-modal");

    const resultWpm =
        document.getElementById("result-wpm");

    const resultAccuracy =
        document.getElementById("result-accuracy");

    const resultCharacters =
        document.getElementById("result-characters");

    const resultRestartButton =
        document.getElementById("result-restart-button");
   
    const passages = [

        "The best way to improve your typing speed is to practice regularly and focus on accuracy before trying to type faster.",

        "Technology has changed the way people communicate, work, and learn. New tools continue to make everyday tasks faster and easier.",

        "Small improvements made consistently over time can lead to significant results. The key is to practice regularly and remain patient.",

        "Good communication is an important skill in both personal and professional life. Clear writing helps people understand ideas more easily.",

        "Learning something new can feel difficult at first, but regular practice makes unfamiliar tasks gradually become easier and more natural.",

        "Octopuses have three hearts, and two of their hearts pump blood toward their gills. Their third heart pumps blood to the rest of their body.",

        "A group of flamingos is called a flamboyance. These colorful birds often stand on one leg, although scientists are still studying why this is so comfortable for them.",

        "Cows have best friends and can become stressed when they are separated from animals they are particularly close to.",

        "Sea otters sometimes hold hands while sleeping in the water. This behavior can help them stay together while floating on the surface.",

        "A snail can have thousands of tiny teeth arranged along a structure called a radula. Despite their small size, some snails have remarkably complex mouths.",

        "Elephants can recognize themselves in mirrors, which is considered an interesting sign of self awareness in animals.",

        "Crows are remarkably intelligent birds. They can solve certain problems, remember faces, and use objects as tools to accomplish tasks.",

        "Penguins cannot fly through the air, but their wings have evolved into powerful flippers that help them move quickly underwater.",

        "Some frogs can survive being partially frozen during winter and later recover when temperatures rise again.",

        "Giraffes have long necks, but they have the same number of neck bones as humans. Both species normally have seven cervical vertebrae.",

        "Nepal is home to Mount Everest, the highest mountain above sea level. The mountain stands in the Himalayas along the Nepal and China border.",

        "Kathmandu is the capital city of Nepal and sits in a valley surrounded by hills. The Kathmandu Valley has a long history of art, architecture, and trade.",

        "Nepal is known for its diverse geography, ranging from lowland plains in the south to some of the world's highest mountains in the north.",

        "The national flag of Nepal is unusual because it is not rectangular. It consists of two joined triangular shapes containing symbols of the moon and sun.",

        "Nepal is the birthplace of Siddhartha Gautama, who later became known as the Buddha. Lumbini is traditionally recognized as his birthplace.",

        "Nepal has eight of the fourteen mountains in the world that rise above eight thousand meters in elevation.",

        "The Himalayas have played an important role in Nepal's culture, tourism, geography, and economy for generations.",

        "Pokhara is famous for its lakes, mountain views, and access to trekking routes in the Annapurna region.",

        "The Annapurna region is one of Nepal's best known trekking destinations and attracts visitors from many parts of the world.",

        "Nepal is home to the one horned rhinoceros, Bengal tiger, red panda, snow leopard, and many other species.",

        "The red panda is a small mammal found in the forests of the Himalayan region. Despite its name, it is not closely related to the giant panda.",

        "Dashain is one of Nepal's major festivals and is celebrated by people across the country with family gatherings, blessings, food, and cultural traditions.",

        "Tihar is known as the festival of lights in Nepal. Different days of the festival honor crows, dogs, cows, and other cultural traditions.",

        "Nepal has many ethnic groups, languages, traditions, and cultural practices. This diversity is one of the country's most distinctive characteristics.",

        "The internet allows computers around the world to communicate with each other using a huge collection of connected networks.",

        "The first website was created by Tim Berners Lee while he was working at CERN. It helped explain the idea of the World Wide Web.",

        "A computer processor performs instructions that allow software to run. Modern processors can perform billions of operations every second.",

        "Artificial intelligence can analyze large amounts of information and identify patterns that may be difficult for people to notice manually.",

        "Machine learning is a branch of artificial intelligence in which computer systems learn patterns from data rather than relying only on explicitly written rules.",

        "A password should be unique and difficult to guess. Using the same password across many websites can increase the damage caused by a single compromised account.",

        "Two factor authentication adds another layer of protection to an account by requiring something beyond just a password.",

        "Cloud computing allows people and organizations to use computing resources through the internet instead of relying entirely on local hardware.",

        "The first electronic computers were enormous compared with modern computers. Advances in electronics have made computing devices dramatically smaller and more powerful.",

        "Smartphones combine communication, computing, photography, navigation, entertainment, and many other functions in a single portable device.",

        "The World Wide Web and the internet are not exactly the same thing. The internet is the underlying network, while the web is a service that operates on it.",

        "Programming languages allow humans to give instructions to computers using structured rules and syntax.",

        "HTML provides the structure of a web page, CSS controls its presentation, and JavaScript can add interactive behavior.",

        "Git allows developers to track changes in code and return to earlier versions of a project when necessary.",

        "A database stores organized information so that applications can efficiently create, retrieve, update, and manage data.",

        "Good software is not only about making features work. It should also be understandable, maintainable, accessible, and reasonably secure.",

        "Consistency is more powerful than occasional bursts of motivation. A small amount of focused work repeated every day can create meaningful progress.",

        "Discipline means doing something because it matters, even when you do not feel particularly motivated to do it.",

        "You do not need to become perfect before you begin. Starting with an imperfect first attempt is often better than waiting forever for the perfect moment.",

        "Progress can be difficult to notice when you look at only one day. Compare your current skills with where you were several months ago.",

        "A difficult task becomes easier when it is divided into smaller steps. Focus on completing the next useful step instead of worrying about the entire journey.",

        "Failure can provide useful information when you take time to understand what went wrong and adjust your approach.",

        "Building a skill requires repetition. The goal is not to avoid mistakes completely, but to learn from them and gradually make fewer mistakes.",

        "Your attention is limited, so protecting your focus is important. Turning off unnecessary notifications can make concentrated work easier.",

        "Motivation can help you begin a task, but habits and systems can help you continue when motivation disappears.",

        "A strong routine does not have to be complicated. A simple schedule that you can actually follow is often more useful than an ambitious plan that you abandon.",

        "Reading, practicing, building projects, and asking questions are all practical ways to develop knowledge and improve your skills.",

        "The fastest way to learn is not always to consume more information. Applying what you already know can reveal what you still need to understand.",

        "Patience does not mean doing nothing. It means continuing to work while accepting that meaningful results often take time.",

        "Cristiano Ronaldo is one of the most recognizable football players of his generation. He has played for several major European clubs and Portugal.",

        "Lionel Messi is an Argentine footballer who spent much of his club career at Barcelona before later playing for Paris Saint Germain and Inter Miami.",

        "Michael Jordan became one of the most famous basketball players in history. He won six NBA championships with the Chicago Bulls.",

        "Serena Williams became one of the most successful tennis players of her era, winning numerous Grand Slam singles titles during her career.",

        "Usain Bolt is a Jamaican sprinter known for his extraordinary performances in the 100 meter and 200 meter events at the Olympic Games.",

        "Marie Curie was a pioneering scientist whose research into radioactivity earned her Nobel Prizes in both Physics and Chemistry.",

        "Albert Einstein developed the theory of relativity and made major contributions to modern physics. His name became closely associated with scientific genius.",

        "Leonardo da Vinci was an Italian artist, engineer, inventor, and thinker. His interests extended across art, science, anatomy, and engineering.",

        "Steve Jobs co founded Apple and became one of the most influential figures in the development and popularization of consumer technology.",

        "Bill Gates co founded Microsoft and became one of the best known figures in the personal computer software industry.",

        "Elon Musk has been involved in several technology companies, including Tesla and SpaceX, and has become a prominent figure in the technology industry.",

        "A good typing session is not a race against someone else. It is an opportunity to improve your own accuracy, rhythm, and consistency.",

        "Typing faster is useful, but typing accurately is equally important. Speed without accuracy can create more work because mistakes need to be corrected.",

        "Your keyboard is a tool, and like any tool, it becomes more effective when you learn how to use it properly.",

        "Looking at every key while typing can slow you down. Touch typing aims to help you type without constantly searching for individual keys.",

        "The home row provides an important reference point for touch typing. Keeping your fingers positioned correctly can make movement more predictable.",

        "A comfortable typing posture can reduce unnecessary strain during long sessions. Keep your shoulders relaxed and avoid pressing the keys harder than necessary.",

        "When practicing typing, accuracy should usually come before maximum speed. A steady rhythm can gradually lead to faster performance.",

        "Short practice sessions can be easier to maintain than long sessions. Regular practice is often more useful than practicing only once in a while.",

        "Every character you type is an opportunity to improve your rhythm. Try to remain relaxed instead of rushing whenever the timer starts.",

        "A typing test measures performance at a particular moment. Your score can change depending on the passage, concentration, fatigue, and familiarity with the words.",

        "Curiosity is one of the most useful qualities for learning. Asking why something works can lead to deeper understanding than simply memorizing an answer.",

        "The moon does not produce its own visible light. What we see from Earth is sunlight reflected from its surface.",

        "Honeybees communicate information about food sources through movements often called the waggle dance.",

        "Bananas are berries according to botanical definitions, while strawberries are considered aggregate fruits rather than true botanical berries.",

        "A day on Venus is longer than its year. Venus rotates very slowly compared with the time it takes to orbit the Sun.",

        "Lightning can heat the surrounding air to temperatures much hotter than the surface of the Sun for a very brief moment.",

        "Sharks are older than trees in evolutionary history. Shark ancestors existed hundreds of millions of years ago.",

        "Some bamboo species can grow remarkably quickly under suitable conditions, making bamboo one of the fastest growing plants in the world.",

        "Water can exist naturally as a solid, liquid, or gas. Temperature and pressure determine which state is stable under particular conditions.",

        "The human brain contains billions of neurons that communicate with each other through electrical and chemical signals.",

        "Sleep is important for the body and brain. Getting enough quality sleep can support memory, attention, learning, and overall well being.",

        "The best projects are not always the biggest projects. A small project that teaches you something and actually gets finished can be extremely valuable.",

        "When learning to code, encountering errors is normal. Reading the error message carefully is often the first step toward finding the problem.",

        "A website can look simple on the surface while requiring many different technologies underneath. Design, structure, logic, data, and hosting all play different roles.",

        "Good design is not only about making something look attractive. It is also about helping people understand what they can do and making actions feel natural.",

        "The most useful feature is not always the most complicated one. Simple features that solve real problems can create a better experience for users.",

        "When building a new product, testing assumptions early can save time. It is usually better to discover a weak idea quickly than spend months building it.",

        "Every experienced developer was once a beginner who did not understand many of the things they know today.",

        "You do not need to understand an entire programming language before building something useful. Learning one concept at a time can be enough to start.",

        "Keep building, keep testing, and keep asking questions. Skills grow through practice, and every completed project becomes part of your experience.",

        "The goal of practice is not to prove that you are already good. The goal is to become slightly better than you were before.",

        "Consistency may feel boring, but boring repetition is often what turns a difficult skill into an automatic one.",

        "When progress feels slow, remember that improvement is not always visible immediately. Skills can develop quietly before the results become obvious.",

        "Focus on the process you can control. You cannot control every result, but you can control how carefully you practice and how often you return.",

        "A calm mind and steady rhythm can make typing more enjoyable. Take a breath, start typing, and let your fingers find their rhythm."
    ];

    let passage = "";
    let typedText = "";
    let testDuration = 30;
    let timeLeft = testDuration;
    let started = false;
    let timer = null;

    /* ================================
    RESTART
    ================================ */

    function restartTest() {

        console.log("RESTART CLICKED");

        /* Stop current timer */

        clearInterval(timer);

        timer = null;


        /* Reset test */

        typedText = "";

        timeLeft = testDuration;

        started = false;


        /* Reset display */

        timeValue.textContent = testDuration + "s";

        wpmValue.textContent = "0 wpm";

        accuracyValue.innerHTML =
            '100<span class="text-sm text-keygati-dark/40">%</span>';

        charStatsValue.innerHTML =
            '0<span class="text-sm text-keygati-coral"> / 0</span>';


        /* Show fresh passage */

        selectRandomPassage();

        renderPassage();

    }

    renderPassage();

        function selectRandomPassage() {

            const randomIndex =
                Math.floor(Math.random() * passages.length);

            passage =
                passages[randomIndex];

        }


    function setDuration(duration) {

        clearInterval(timer);

        timer = null;

        testDuration = duration;
        timeLeft = testDuration;

        typedText = "";
        started = false;

        timeValue.textContent =
            testDuration + "s";

        wpmValue.textContent =
            "0 wpm";

        accuracyValue.innerHTML =
            '100<span class="text-sm text-keygati-dark/40">%</span>';

        charStatsValue.innerHTML =
            '0<span class="text-sm text-keygati-coral"> / 0</span>';


        /* Select a new random passage */

        selectRandomPassage();


        /* Show the new passage */

        renderPassage();


        /* ================================
        UPDATE ACTIVE DURATION BUTTON
        ================================ */

        duration15Button.classList.remove(
            "bg-keygati-teal",
            "text-white"
        );

        duration30Button.classList.remove(
            "bg-keygati-teal",
            "text-white"
        );

        duration60Button.classList.remove(
            "bg-keygati-teal",
            "text-white"
        );

        duration120Button.classList.remove(
            "bg-keygati-teal",
            "text-white"
        );


        if (duration === 15) {

            duration15Button.classList.add(
                "bg-keygati-teal",
                "text-white"
            );

        }


        if (duration === 30) {

            duration30Button.classList.add(
                "bg-keygati-teal",
                "text-white"
            );

        }


        if (duration === 60) {

            duration60Button.classList.add(
                "bg-keygati-teal",
                "text-white"
            );

        }


        if (duration === 120) {

            duration120Button.classList.add(
                "bg-keygati-teal",
                "text-white"
            );

        }

    }

    /* ================================
       BUTTON LISTENERS
    ================================ */

    restartButton.addEventListener("click", function () {

        restartTest();

    });

    duration15Button.addEventListener("click", function () {

        setDuration(15);

    });

    duration30Button.addEventListener("click", function () {

        setDuration(30);

    });

    duration60Button.addEventListener("click", function () {

        setDuration(60);

    });

    duration120Button.addEventListener("click", function () {

        setDuration(120);

    });

    resultRestartButton.addEventListener("click", function () {

        resultsModal.classList.add("hidden");

        resultsModal.classList.remove("flex");

        restartTest();

    });

    /* ================================
       RENDER PASSAGE
    ================================ */

    function renderPassage() {

        let html = "";

        for (let i = 0; i < passage.length; i++) {

            const character = passage[i];

            /* Not typed yet */

            if (i >= typedText.length) {

                html +=
                    `<span class="text-keygati-dark/50">${character}</span>`;

            }

            /* Correct character */

            else if (typedText[i] === character) {

                html +=
                    `<span class="text-keygati-teal">${character}</span>`;

            }

            /* Incorrect character */

            else {

                html +=
                    `<span class="text-keygati-coral">${character}</span>`;

            }
        }

        typingText.innerHTML = html;
    }


    /* ================================
       START TIMER
    ================================ */

    function startTimer() {

        if (started) {
            return;
        }

        started = true;

        console.log("TIMER STARTED");

        timer = setInterval(function () {

            timeLeft--;

            timeValue.textContent =
                timeLeft + "s";

            if (timeLeft <= 0) {

                clearInterval(timer);

                timer = null;

                started = false;

                console.log("TEST FINISHED");

                showResults();
            }

        }, 1000);
    }

    /* ================================
       UPDATE WPM
    ================================ */

    function updateWPM() {

        const elapsedSeconds =
            testDuration - timeLeft;

        if (elapsedSeconds <= 0) {
            return;
        }

        const correctCharacters =
            getCorrectCharacters();

        const minutes =
            elapsedSeconds / 60;

        const words =
            correctCharacters / 5;

        const wpm =
            Math.round(words / minutes);

        wpmValue.textContent =
            wpm + " wpm";
    }


    /* ================================
       COUNT CORRECT CHARACTERS
    ================================ */

    function getCorrectCharacters() {

        let correct = 0;

        for (let i = 0; i < typedText.length; i++) {

            if (typedText[i] === passage[i]) {
                correct++;
            }
        }

        return correct;
    }

    /* ================================
        UPDATE ACCURACY
    ================================ */

    function updateAccuracy() {

        const totalCharacters =
            typedText.length;

        if (totalCharacters === 0) {

            accuracyValue.innerHTML =
                '100<span class="text-sm text-keygati-dark/40">%</span>';

            return;
        }

        const correctCharacters =
            getCorrectCharacters();

        const accuracy =
            Math.round(
                (correctCharacters / totalCharacters) * 100
            );

        accuracyValue.innerHTML =
            accuracy +
            '<span class="text-sm text-keygati-dark/40">%</span>';

    }

    /* ================================
    UPDATE CHARACTER STATS
    ================================ */

    function updateCharacterStats() {

        const totalCharacters =
            typedText.length;

        const correctCharacters =
            getCorrectCharacters();

        charStatsValue.innerHTML =
            correctCharacters +
            '<span class="text-sm text-keygati-coral"> / ' +
            totalCharacters +
            '</span>';

    }


    /* ================================
    SHOW RESULTS
    ================================ */

    function showResults() {

        const correctCharacters =
            getCorrectCharacters();

        const totalCharacters =
            typedText.length;


        /* Calculate accuracy */

        let accuracy = 100;

        if (totalCharacters > 0) {

            accuracy =
                Math.round(
                    (correctCharacters / totalCharacters) * 100
                );
        }


        /* Calculate WPM */

        const words =
            correctCharacters / 5;

        const minutes =
            testDuration / 60;

        const wpm =
            Math.round(words / minutes);


        /* Put results into popup */

        resultWpm.textContent =
            wpm;

        resultAccuracy.textContent =
            accuracy + "%";

        resultCharacters.textContent =
            correctCharacters +
            " / " +
            totalCharacters;


        /* Show popup */

        resultsModal.classList.remove("hidden");

        resultsModal.classList.add("flex");

    }


    /* ================================
       KEYBOARD INPUT
    ================================ */

    document.addEventListener("keydown", function (event) {

        console.log("KEY PRESSED:", event.key);


        /* Backspace */

        if (event.key === "Backspace") {

            event.preventDefault();

            if (typedText.length > 0) {

                typedText =
                    typedText.slice(0, -1);

            }

            renderPassage();

            updateCharacterStats();
            
            updateWPM();

            return;
        }


        /* Ignore special keys */

        if (
            event.key === "Shift" ||
            event.key === "Control" ||
            event.key === "Alt" ||
            event.key === "Meta" ||
            event.key === "Tab" ||
            event.key === "Escape" ||
            event.key === "Enter" ||
            event.key.startsWith("Arrow")
        ) {
            return;
        }


        /* Normal character */

        if (event.key.length === 1) {

            /*
             * Don't allow typing beyond
             * the passage length.
             */

            if (typedText.length >= passage.length) {

                selectRandomPassage();

                typedText = "";

                renderPassage();

                return;
            }


            typedText += event.key;

            console.log(
                "TYPED:",
                typedText
            );

            if (typedText.length === passage.length) {

                renderPassage();

                setTimeout(function () {

                    selectRandomPassage();

                    typedText = "";

                    renderPassage();

                }, 100);

                return;
            }


            if (!started) {
                startTimer();
            }


            renderPassage();

            updateAccuracy();
            
            updateCharacterStats();
            
            updateWPM();
        }

    });


    /* ================================
       INITIAL STATE
    ================================ */

    timeValue.textContent = testDuration + "s";

    wpmValue.textContent = "0 wpm";

    selectRandomPassage();

    renderPassage();

});