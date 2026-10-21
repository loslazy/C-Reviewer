/* ---------- Helpers ---------- */
function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
const H = t => `<h2 class="text-2xl font-bold text-purple-300 mb-4">${t}</h2>`;
const H3 = t => `<h3 class="text-base font-bold text-white mt-6 mb-2">${t}</h3>`;
const P = t => `<p class="text-slate-300 mb-4 text-sm leading-relaxed">${t}</p>`;
const K = t => `<code class="bg-slate-950 px-2 py-0.5 rounded text-purple-400">${esc(t)}</code>`;
const CODE = src => `<pre class="bg-slate-950 p-4 rounded-xl text-xs font-mono text-slate-300 border border-slate-800 mb-4 overflow-x-auto">${esc(src)}</pre>`;
const LIST = items => `<ul class="list-disc pl-5 mb-4 space-y-1 text-sm text-slate-300">${items.map(i => `<li>${i}</li>`).join('')}</ul>`;

/* ---------- Data ---------- */
const modulesData = [
    {
        id: 'm1',
        title: '1. C# Basics & Structure',
        icon: 'fa-terminal',
        desc: 'Program structure, Main method, Console output, comments, and namespaces.',
        notes:
            H('C# Program Structure & Console I/O') +
            P(`Every C# console application starts running inside the static ${K('Main')} method. Statements end with a semicolon, and blocks are wrapped in curly braces.`) +
            CODE(`using System;

namespace ICTReview {
    class Program {
        static void Main(string[] args) {
            // This is a single-line comment
            /* This is a
               multi-line comment */
            Console.WriteLine("Hello World!");
        }
    }
}`) +
            H3('Key parts') +
            LIST([
                `${K('using System;')} lets you write ${K('Console')} instead of ${K('System.Console')}.`,
                `${K('namespace')} groups related classes together.`,
                `${K('class Program')} holds your code; C# is case-sensitive.`,
                `${K('Console.WriteLine()')} prints and moves to a new line; ${K('Console.Write()')} prints without a new line.`
            ])
    },
    {
        id: 'm2',
        title: '2. Variables & Data Types',
        icon: 'fa-database',
        desc: 'Integers, doubles, strings, booleans, and Type Conversion methods.',
        notes:
            H('Variables & Data Types') +
            P('A variable is a named container for a value. In C# you must declare the type before using it.') +
            CODE(`int age = 18;           // whole number
double price = 99.75;   // decimal number
char grade = 'A';       // one character (single quotes)
string name = "Juan";   // text (double quotes)
bool isEnrolled = true; // true or false`) +
            H3('Reading input and converting') +
            P(`${K('Console.ReadLine()')} always returns a ${K('string')}, so convert it when you need a number.`) +
            CODE(`Console.Write("Enter your age: ");
int age = Convert.ToInt32(Console.ReadLine());
double gwa = double.Parse(Console.ReadLine());`) +
            H3('Naming rules') +
            LIST([
                'Use letters, digits, and underscores; do not start with a digit.',
                'No spaces and no reserved keywords (like <code class="text-purple-400">int</code> or <code class="text-purple-400">class</code>).',
                'Use camelCase for variables, such as <code class="text-purple-400">studentName</code>.'
            ])
    },
    {
        id: 'm3',
        title: '3. Operators & Expressions',
        icon: 'fa-calculator',
        desc: 'Arithmetic, comparison, logical (&&, ||, !), and assignment operators.',
        notes:
            H('Operators') +
            P(`Operators perform actions on values. Remember: dividing two ${K('int')} values gives an ${K('int')} (the decimal part is dropped).`) +
            CODE(`// Arithmetic: + - * / %
int sum = 5 + 3;      // 8
int rem = 10 % 3;     // 1 (remainder)
int div = 5 / 2;      // 2 (integer division)

// Comparison: == != > < >= <=   (result is bool)
bool same = (4 == 4); // true

// Logical: && (and)  || (or)  ! (not)
bool canEnter = isStudent && hasID;

// Assignment shortcuts
score += 5;   // score = score + 5
count++;      // count = count + 1`) +
            H3('Common mistake') +
            P(`${K('=')} assigns a value, while ${K('==')} compares two values.`)
    },
    {
        id: 'm4',
        title: '4. Control Structures',
        icon: 'fa-code-branch',
        desc: 'Decision-making blocks, nested conditions, and switch-case selection.',
        notes:
            H('If-Else & Switch') +
            P('Control structures let your program choose which code to run.') +
            CODE(`if (score >= 90) {
    Console.WriteLine("Excellent");
} else if (score >= 75) {
    Console.WriteLine("Passed");
} else {
    Console.WriteLine("Failed");
}`) +
            H3('Switch') +
            CODE(`switch (day) {
    case 1:
        Console.WriteLine("Monday");
        break;
    case 2:
        Console.WriteLine("Tuesday");
        break;
    default:
        Console.WriteLine("Another day");
        break;
}`) +
            P(`Each ${K('case')} must end with ${K('break')} (or ${K('return')}) in C#.`)
    },
    {
        id: 'm5',
        title: '5. Loops & Iterations',
        icon: 'fa-sync',
        desc: 'for, while, do-while loops, break/continue statements.',
        notes:
            H('Loops') +
            P('Loops repeat a block of code.') +
            CODE(`// for: use when you know how many times
for (int i = 0; i < 5; i++) {
    Console.WriteLine(i);          // 0 1 2 3 4
}

// while: checks the condition first
int n = 1;
while (n <= 3) {
    Console.WriteLine(n);
    n++;
}

// do-while: runs at least once
do {
    Console.WriteLine("Runs once");
} while (false);`) +
            H3('break and continue') +
            LIST([
                `${K('break')} stops the loop immediately.`,
                `${K('continue')} skips to the next repetition.`
            ])
    },
    {
        id: 'm6',
        title: '6. Arrays & Foreach',
        icon: 'fa-list-ol',
        desc: 'Declaring single arrays, index access, element iteration.',
        notes:
            H('Arrays') +
            P('An array stores several values of the same type. Indexes start at 0.') +
            CODE(`string[] subjects = { "C#", "HTML", "Java" };
Console.WriteLine(subjects[0]);        // C#
Console.WriteLine(subjects.Length);    // 3

int[] scores = new int[5];             // five zeros
scores[0] = 90;

foreach (string s in subjects) {
    Console.WriteLine(s);
}`) +
            P(`Going outside the array (for example ${K('subjects[3]')}) causes an ${K('IndexOutOfRangeException')}.`)
    }
];

const flashcardData = [
    { id: 1,  tag: "Console Output", q: "What is the difference between Write() and WriteLine()?", a: "WriteLine() adds a line break at the end; Write() does not.", code: "Console.WriteLine(\"Test\");\nConsole.Write(\"Same line\");" },
    { id: 2,  tag: "Data Types", q: "Which data type stores text inside double quotes?", a: "string.", code: "string name = \"ICT\";" },
    { id: 3,  tag: "Conversion", q: "How do you convert Console.ReadLine() into an integer?", a: "Using Convert.ToInt32() or int.Parse().", code: "int x = Convert.ToInt32(Console.ReadLine());" },
    { id: 4,  tag: "Operators", q: "What does the Modulus operator (%) return?", a: "The remainder of a division operation.", code: "int rem = 10 % 3; // returns 1" },
    { id: 5,  tag: "Program Structure", q: "Where does a C# console program start running?", a: "Inside the static Main method.", code: "static void Main(string[] args) {\n    // program starts here\n}" },
    { id: 6,  tag: "Data Types", q: "Which data type should you use for 3.14?", a: "double (or float/decimal for other needs).", code: "double pi = 3.14;" },
    { id: 7,  tag: "Operators", q: "What is the difference between = and ==?", a: "= assigns a value; == compares two values.", code: "int a = 5;      // assign\nbool b = (a == 5); // compare" },
    { id: 8,  tag: "Logic", q: "What does && mean?", a: "Logical AND: true only when both conditions are true.", code: "if (age >= 18 && hasID) { }" },
    { id: 9,  tag: "Loops", q: "Which loop always runs at least once?", a: "The do-while loop, because it checks the condition after the body.", code: "do {\n    Console.WriteLine(\"Hi\");\n} while (false);" },
    { id: 10, tag: "Loops", q: "What does the break keyword do?", a: "It immediately exits the current loop or switch.", code: "for (int i = 0; i < 10; i++) {\n    if (i == 3) break;\n}" },
    { id: 11, tag: "Arrays", q: "What is the index of the first element of an array?", a: "0 (zero).", code: "string[] a = { \"C#\", \"HTML\" };\nConsole.WriteLine(a[0]); // C#" },
    { id: 12, tag: "Arrays", q: "Which loop is best for visiting every element of an array?", a: "foreach.", code: "foreach (string s in subjects) {\n    Console.WriteLine(s);\n}" }
];

const examQuestions = [
    {
        q: "What is the output of the code below?",
        code: "int a = 10;\nint b = 4;\nConsole.WriteLine(a % b);",
        options: ["2.5", "2", "0", "4"],
        correct: 1,
        explanation: "10 divided by 4 leaves a remainder of 2."
    },
    {
        q: "Which statement reads an integer input from the console?",
        code: null,
        options: [
            "int num = Console.ReadLine();",
            "int num = Convert.ToInt32(Console.ReadLine());",
            "int num = Console.ReadInt();",
            "int num = (int)Console.ReadLine();"
        ],
        correct: 1,
        explanation: "Console.ReadLine() returns a string, so Convert.ToInt32() is required."
    },
    {
        q: "What will be printed by this loop?",
        code: "for (int i = 0; i < 3; i++) { Console.Write(i + \" \"); }",
        options: ["0 1 2 3 ", "1 2 3 ", "0 1 2 ", "0 1 "],
        correct: 2,
        explanation: "It starts at 0 and loops while i < 3, outputting 0 1 2."
    },
    {
        q: "Which keyword is used to immediately terminate a loop?",
        code: null,
        options: ["stop", "exit", "break", "return"],
        correct: 2,
        explanation: "The 'break' keyword exits loops or switch blocks."
    },
    {
        q: "Which data type is best for storing the value 3.14?",
        code: null,
        options: ["int", "double", "char", "bool"],
        correct: 1,
        explanation: "double stores numbers with decimal parts."
    },
    {
        q: "What is the output of this code?",
        code: "Console.WriteLine(5 > 3 && 2 > 4);",
        options: ["True", "False", "5", "Error"],
        correct: 1,
        explanation: "5 > 3 is true, but 2 > 4 is false. AND needs both to be true, so the result is False."
    },
    {
        q: "What is printed by this code?",
        code: "string[] a = { \"C#\", \"HTML\", \"Java\" };\nConsole.WriteLine(a[1]);",
        options: ["C#", "HTML", "Java", "Error"],
        correct: 1,
        explanation: "Array indexes start at 0, so a[1] is the second element: HTML."
    },
    {
        q: "How many times does this loop print A?",
        code: "int x = 10;\ndo {\n    Console.Write(\"A\");\n} while (x < 5);",
        options: ["0 times", "1 time", "5 times", "Infinite"],
        correct: 1,
        explanation: "A do-while loop runs its body once before checking the condition."
    },
    {
        q: "What is the output of this code?",
        code: "Console.WriteLine(5 / 2);",
        options: ["2.5", "2", "3", "2.0"],
        correct: 1,
        explanation: "Both numbers are integers, so C# performs integer division and drops the decimal part."
    },
    {
        q: "Which method is the entry point of a C# console program?",
        code: null,
        options: ["Start()", "Run()", "Main()", "Begin()"],
        correct: 2,
        explanation: "Execution starts in the static Main method."
    }
];

/* ---------- State ---------- */
const STORAGE_KEY = 'ictSharpReviewProgress';
let activeTab = 'dashboard';
let activeLesson = 'm1';
let reviewedModules = new Set();
let currentFlashcardIndex = 0;
let masteredCards = new Set();
let examCurrentIndex = 0;
let examScore = 0;
let selectedOptionIndex = null;
let examHighScore = 0;
let answerLocked = false;

/* ---------- Save / Load ---------- */
function saveProgress() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({
            reviewed: [...reviewedModules],
            mastered: [...masteredCards],
            highScore: examHighScore
        }));
    } catch (e) { /* storage unavailable, ignore */ }
}

function loadProgress() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return;
        const data = JSON.parse(raw);
        reviewedModules = new Set(data.reviewed || []);
        masteredCards = new Set(data.mastered || []);
        examHighScore = data.highScore || 0;
    } catch (e) { /* bad data, start fresh */ }
}

/* ---------- Init ---------- */
document.addEventListener('DOMContentLoaded', () => {
    loadProgress();
    document.getElementById('exam-count-label').innerText = `${examQuestions.length} Items`;
    document.getElementById('exam-total-count').innerText = examQuestions.length;
    renderModulesGrid();
    loadLesson('m1', false);
    renderFlashcard();
    updateStats();
});

/* ---------- Tabs ---------- */
function switchTab(tabId) {
    activeTab = tabId;
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.add('hidden'));
    document.getElementById(`tab-${tabId}`).classList.remove('hidden');

    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.toggle('is-active', btn.dataset.tab === tabId);
    });
    window.scrollTo({ top: 0 });
}

/* ---------- Dashboard & Lessons ---------- */
function renderModulesGrid() {
    const container = document.getElementById('modules-list');
    container.innerHTML = modulesData.map(m => `
        <div onclick="openModule('${m.id}')" class="glass-card p-5 rounded-2xl cursor-pointer hover:border-purple-500/50 transition duration-300 space-y-3 group">
            <div class="flex items-center justify-between">
                <div class="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center text-lg border border-purple-500/20 group-hover:scale-110 transition">
                    <i class="fas ${m.icon}"></i>
                </div>
                <span class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${reviewedModules.has(m.id) ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-slate-800 text-slate-400'}">
                    ${reviewedModules.has(m.id) ? 'Reviewed' : 'Unread'}
                </span>
            </div>
            <h3 class="font-bold text-white group-hover:text-purple-300 transition">${m.title}</h3>
            <p class="text-xs text-slate-400 leading-relaxed">${m.desc}</p>
        </div>
    `).join('');
}

function openModule(id) {
    switchTab('lessons');
    loadLesson(id);
}

function renderLessonSidebar() {
    const container = document.getElementById('lesson-sidebar');
    container.innerHTML =
        `<h3 class="text-xs font-bold text-slate-400 uppercase tracking-wider px-3 mb-2">Modules</h3>` +
        modulesData.map(m => {
            const active = m.id === activeLesson;
            const cls = active
                ? 'bg-purple-900/40 text-purple-300 border border-purple-700/50'
                : 'text-slate-400 hover:bg-slate-800/60 border border-transparent';
            return `
        <button onclick="loadLesson('${m.id}')" id="side-btn-${m.id}" class="w-full text-left px-3 py-2.5 rounded-xl text-xs font-semibold transition flex items-center justify-between ${cls}">
            <span class="truncate">${m.title}</span>
            ${reviewedModules.has(m.id) ? '<i class="fas fa-check-circle text-emerald-400 text-xs"></i>' : ''}
        </button>`;
        }).join('');
}

function loadLesson(id, markReviewed = true) {
    activeLesson = id;
    if (markReviewed) {
        reviewedModules.add(id);
        saveProgress();
    }
    const module = modulesData.find(m => m.id === id);
    if (module) {
        document.getElementById('lesson-view-container').innerHTML = module.notes;
    }
    renderModulesGrid();
    renderLessonSidebar();
    updateStats();
}

function updateStats() {
    document.getElementById('stat-reviewed').innerText = `${reviewedModules.size} / ${modulesData.length}`;
    document.getElementById('stat-flashcards').innerText = `${masteredCards.size} / ${flashcardData.length}`;
    document.getElementById('stat-highscore').innerText = `${examHighScore}%`;
    const readiness = Math.round(
        (reviewedModules.size / modulesData.length) * 40 +
        (masteredCards.size / flashcardData.length) * 30 +
        (examHighScore / 100) * 30
    );
    document.getElementById('stat-readiness').innerText = `${readiness}%`;
}

/* ---------- Flashcards ---------- */
function renderFlashcard() {
    const card = flashcardData[currentFlashcardIndex];
    document.getElementById('flashcard-counter').innerText = `${currentFlashcardIndex + 1} / ${flashcardData.length}`;
    document.getElementById('card-tag').innerText = card.tag;
    document.getElementById('card-question').innerText = card.q;
    document.getElementById('card-answer').innerText = card.a;

    const codeBlock = document.getElementById('card-code-block');
    if (card.code) {
        codeBlock.innerText = card.code;
        codeBlock.classList.remove('hidden');
    } else {
        codeBlock.classList.add('hidden');
    }
    updateMasterButton();
}

function updateMasterButton() {
    const card = flashcardData[currentFlashcardIndex];
    const btn = document.getElementById('card-master-btn');
    if (masteredCards.has(card.id)) {
        btn.innerText = "Mastered ✓";
        btn.className = "px-4 py-1.5 rounded-lg text-xs font-semibold bg-emerald-900 text-emerald-200 border border-emerald-500";
    } else {
        btn.innerText = "Mark as Mastered";
        btn.className = "px-4 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700 transition";
    }
}

function flipFlashcard() {
    document.getElementById('flashcard-element').classList.toggle('rotate-y-180');
}

// Flip back first, then swap text so the next answer is never visible mid-flip
function goToFlashcard(index) {
    const el = document.getElementById('flashcard-element');
    currentFlashcardIndex = index;
    if (el.classList.contains('rotate-y-180')) {
        el.classList.remove('rotate-y-180');
        setTimeout(renderFlashcard, 300);
    } else {
        renderFlashcard();
    }
}

function nextFlashcard() {
    if (currentFlashcardIndex < flashcardData.length - 1) goToFlashcard(currentFlashcardIndex + 1);
}

function prevFlashcard() {
    if (currentFlashcardIndex > 0) goToFlashcard(currentFlashcardIndex - 1);
}

function toggleMasteredCard() {
    const card = flashcardData[currentFlashcardIndex];
    if (masteredCards.has(card.id)) {
        masteredCards.delete(card.id);
    } else {
        masteredCards.add(card.id);
    }
    updateMasterButton();
    updateStats();
    saveProgress();
}

/* ---------- Practice Exam ---------- */
function startExam() {
    switchTab('exam');
    examCurrentIndex = 0;
    examScore = 0;
    selectedOptionIndex = null;
    document.getElementById('exam-start-view').classList.add('hidden');
    document.getElementById('exam-results-view').classList.add('hidden');
    document.getElementById('exam-active-view').classList.remove('hidden');
    document.getElementById('exam-total-count').innerText = examQuestions.length;
    renderExamQuestion();
}

const OPT_BASE = "w-full text-left p-4 rounded-xl border bg-slate-950 transition font-mono text-xs sm:text-sm flex items-center gap-3";

function renderExamQuestion() {
    const q = examQuestions[examCurrentIndex];
    selectedOptionIndex = null;
    answerLocked = false;
    document.getElementById('exam-current-idx').innerText = examCurrentIndex + 1;
    document.getElementById('exam-progress-bar').style.width = `${(examCurrentIndex / examQuestions.length) * 100}%`;
    document.getElementById('exam-question-text').innerText = q.q;

    const codeSnippet = document.getElementById('exam-code-snippet');
    if (q.code) {
        codeSnippet.innerText = q.code;
        codeSnippet.classList.remove('hidden');
    } else {
        codeSnippet.classList.add('hidden');
    }

    const container = document.getElementById('exam-options-container');
    container.innerHTML = q.options.map((opt, idx) => `
        <button onclick="selectOption(${idx})" id="opt-btn-${idx}" class="${OPT_BASE} border-slate-800 hover:border-purple-500/50 text-slate-200">
            <span class="w-6 h-6 rounded-lg bg-slate-800 flex items-center justify-center font-sans font-bold text-xs text-slate-400">${String.fromCharCode(65 + idx)}</span>
            <span class="flex-grow">${esc(opt)}</span>
        </button>
    `).join('');

    document.getElementById('exam-feedback').classList.add('hidden');
    document.getElementById('exam-submit-btn').classList.remove('hidden');
    document.getElementById('exam-next-btn').classList.add('hidden');
}

function selectOption(idx) {
    if (answerLocked) return;
    selectedOptionIndex = idx;
    document.querySelectorAll('#exam-options-container button').forEach((btn, i) => {
        btn.className = i === idx
            ? `${OPT_BASE} border-2 border-purple-500 bg-purple-950/40 text-white shadow-md`
            : `${OPT_BASE} border-slate-800 text-slate-200 opacity-60 hover:opacity-100`;
    });
}

function submitExamAnswer() {
    if (selectedOptionIndex === null) {
        alert("Please select an answer.");
        return;
    }
    answerLocked = true;
    const q = examQuestions[examCurrentIndex];
    const feedback = document.getElementById('exam-feedback');
    feedback.classList.remove('hidden');
    const isCorrect = selectedOptionIndex === q.correct;

    if (isCorrect) {
        examScore++;
        feedback.className = "p-4 rounded-xl text-xs sm:text-sm bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 space-y-1";
        feedback.innerHTML = `<strong>Correct!</strong><p>${esc(q.explanation)}</p>`;
    } else {
        feedback.className = "p-4 rounded-xl text-xs sm:text-sm bg-rose-950/80 border border-rose-500/50 text-rose-300 space-y-1";
        feedback.innerHTML = `<strong>Incorrect.</strong><p>Correct answer: <code>${esc(q.options[q.correct])}</code>. ${esc(q.explanation)}</p>`;
    }

    // Show the right answer in green and a wrong pick in red
    document.querySelectorAll('#exam-options-container button').forEach((btn, i) => {
        if (i === q.correct) {
            btn.className = `${OPT_BASE} border-2 border-emerald-500 bg-emerald-950/50 text-emerald-200`;
        } else if (i === selectedOptionIndex) {
            btn.className = `${OPT_BASE} border-2 border-rose-500 bg-rose-950/50 text-rose-200`;
        } else {
            btn.className = `${OPT_BASE} border-slate-800 text-slate-400 opacity-50`;
        }
    });

    document.getElementById('exam-submit-btn').classList.add('hidden');
    const nextBtn = document.getElementById('exam-next-btn');
    nextBtn.classList.remove('hidden');
    nextBtn.innerHTML = examCurrentIndex === examQuestions.length - 1
        ? 'See Results <i class="fas fa-flag-checkered ml-1"></i>'
        : 'Next Question <i class="fas fa-arrow-right ml-1"></i>';
}

function nextExamQuestion() {
    examCurrentIndex++;
    if (examCurrentIndex < examQuestions.length) {
        renderExamQuestion();
    } else {
        showExamResults();
    }
}

function showExamResults() {
    document.getElementById('exam-active-view').classList.add('hidden');
    document.getElementById('exam-results-view').classList.remove('hidden');

    const percentage = Math.round((examScore / examQuestions.length) * 100);
    if (percentage > examHighScore) {
        examHighScore = percentage;
    }
    updateStats();
    saveProgress();

    const passed = percentage >= 70;
    document.getElementById('result-title').innerText = passed ? 'Congratulations, you passed!' : 'Keep practicing!';
    document.getElementById('result-message').innerText = passed
        ? 'Great work. You are ready for the next level.'
        : 'Review the lessons and try again. You need 70% to pass.';
    document.getElementById('result-badge').className =
        `w-20 h-20 rounded-full mx-auto flex items-center justify-center text-4xl shadow-xl ${passed ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'}`;
    document.getElementById('result-icon').className = passed ? 'fas fa-trophy' : 'fas fa-book-open';
    document.getElementById('result-score-text').innerText = `${percentage}%`;
    document.getElementById('result-breakdown').innerText = `You correctly answered ${examScore} out of ${examQuestions.length} questions.`;
}

/* ---------- Cheat sheet ---------- */
function filterCheatSheet() {
    const query = document.getElementById('cheat-search').value.toLowerCase();
    document.querySelectorAll('.cheat-card').forEach(card => {
        card.classList.toggle('hidden', !card.innerText.toLowerCase().includes(query));
    });
}
