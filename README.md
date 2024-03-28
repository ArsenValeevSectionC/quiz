## Quiz
Users have to log in to start the quiz, answer a series of questions, and view their score at the end. Additionally, users can restart the quiz to try again.

### Instructions
1. Log in with your username and password.
2. Click the "Start" button to begin the quiz.
3. Answer each question by selecting one of the provided options.
4. After answering all questions, view your score.
5. To restart the quiz and try again, click the "Restart Quiz" button.

### Code
To add new questions to the quiz, follow these steps:
1. Open the JavaScript file (`script.js`).
2. Find the `questions` array.
3. Add a new object to the `questions` array in the following format:
    ```javascript
    {
        question: "Your question here?",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        answer: "Correct option"
    }
    ```
4. Save the file.
