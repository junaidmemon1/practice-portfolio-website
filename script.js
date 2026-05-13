// Get elements
const submitBtn = document.getElementById("submitBtn");
const newRecommendation = document.getElementById("newRecommendation");
const modal = document.getElementById("confirmationModal");
const closeBtn = document.querySelector(".close-btn");

// Show modal on submit
submitBtn.addEventListener("click", function() {
    const text = newRecommendation.value.trim();

    if (text === "") {
        alert("Please write a recommendation before submitting!");
        return;
    }

    // Add new recommendation dynamically
    const newCard = document.createElement("div");
    newCard.classList.add("recommendation-card");

    const p = document.createElement("p");
    p.textContent = `"${text}"`;

    const h4 = document.createElement("h4");
    h4.textContent = "– Anonymous";

    newCard.appendChild(p);
    newCard.appendChild(h4);

    document.querySelector(".recommendations-container").appendChild(newCard);

    // Show the modal
    modal.style.display = "block";

    // Clear textarea
    newRecommendation.value = "";
});

// Close modal on X click
closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
});

// Close modal if clicked outside
window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});
