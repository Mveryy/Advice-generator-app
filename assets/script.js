const url = "https://api.adviceslip.com/advice";
const button = document.querySelector("button");

function advicePicker() {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            adviceId.innerText = `Advice #${data.slip.id}`;
            adviceText.innerHTML = `<q>${data.slip.advice}</q>`;
        })
        .catch((error) => console.error(error.message));
}

// advice();

button.addEventListener("click", () => advicePicker());
