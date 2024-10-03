let feedbacks = [];

function submitFeedback() {
    let feedbackInput = document.getElementById("feedback-input");
    let feedbackText = feedbackInput.value.trim();

    if (feedbackText !== "") {
        feedbacks.push(feedbackText);
        updateFeedbackList();
        feedbackInput.value = "";
    } else {
        alert("Please enter your feedback!");
    }
}

function updateFeedbackList() {
    let feedbackList = document.getElementById("feedback-list");
    feedbackList.innerHTML = "";

    feedbacks.forEach((feedback, index) => {
        let feedbackItem = document.createElement("div");
        feedbackItem.className = "feedback-item";
        feedbackItem.innerText = `${index + 1}. ${feedback}`;
        feedbackList.appendChild(feedbackItem);
    });
}
