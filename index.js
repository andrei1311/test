const userGrid = document.querySelector(".user-grid");
const modal = document.querySelector(".modal");
const modalImage = document.querySelector(".modal-image");
const modalClose = document.querySelector(".close");

// Function to create a user card
function createUserCard(user) {
  const userCard = document.createElement("div");
  userCard.classList.add("user-card");
  userCard.innerHTML = `
    <img src="${user.picture.thumbnail}" alt="${user.name.first} ${user.name.last}">
    <h3>${user.name.first} ${user.name.last}</h3>
	<p>From: ${user.location.country}</p>
    <p>${user.email}</p>
  `;
  userCard.addEventListener("click", () => {
    modal.style.display = "block";
    modalImage.src = user.picture.large;
  });
  return userCard;
}

// Fetch 250 users from the randomuser API
fetch("https://randomuser.me/api/?results=250")
  .then((response) => response.json())
  .then((data) => {
    // Create a user card for each user and add it to the grid
    data.results.forEach((user) => {
      userGrid.appendChild(createUserCard(user));
    });
  })
  .catch((error) => {
    console.error(error);
  });

// Close the modal when the close button is clicked
window.onclick = function (event) {
  if (event.target == modalClose) {
    modal.style.display = "none";
  }
};
