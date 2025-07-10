
# Counter_App
## Date:10.07.2025
## Objective:
To build a live character counter using JavaScript that dynamically displays the number of characters entered into a textarea — similar to what you see in Twitter or feedback forms.

## Tasks:

#### 1. Create the HTML Structure:
Add a ```<textarea>``` for user input.

Place a ```<div> or <p>``` below it to show the live character count.

Include a label or heading like “Write your message”.

#### 2. Style with CSS:
Center the layout using margin or flexbox.

Style the textarea with border, padding, and font size.

Style the counter to be bold and place it neatly below the input area.

#### 3. Add JavaScript Functionality:
Use addEventListener("input", ...) on the textarea.

Inside the function, get the length of the value (.value.length).

Update the counter element with this number in real time.

#### 4. Enhancements:
Set a maximum character limit (e.g., 100) and show remaining characters.

Change the text color if the user exceeds the limit.

Add emojis or icons using Unicode for visual feedback.
## HTML Code:
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Live Character Counter</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <h2>Write your message</h2>
    <textarea id="message" maxlength="100" placeholder="Type here..."></textarea>
    <p id="counter">0 / 100</p>
  </div>

  <script src="script.js"></script>
</body>
</html>

```
## CSS Code:
```
body {
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  background-color: #f4f4f4;
}

.container {
  text-align: center;
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

textarea {
  width: 300px;
  height: 100px;
  padding: 10px;
  font-size: 16px;
  resize: none;
  border: 1px solid #ccc;
  border-radius: 8px;
}

#counter {
  margin-top: 10px;
  font-weight: bold;
}

```
## Javascript Code:
```
const textarea = document.getElementById("message");
const counter = document.getElementById("counter");

textarea.addEventListener("input", () => {
  const length = textarea.value.length;
  counter.textContent = `${length} / 100`;

  if (length > 100) {
    counter.style.color = "red";
  } else if (length > 90) {
    counter.style.color = "orange";
  } else {
    counter.style.color = "black";
  }
});

});
```
## Output:
<img width="448" height="340" alt="image" src="https://github.com/user-attachments/assets/825d97e6-7d39-4462-86c0-910c4be18009" />


## Result:
A live character counter using JavaScript that dynamically displays the number of characters entered into a textarea — similar to what you see in Twitter or feedback forms is built successfully.
