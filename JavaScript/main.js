function toggleText(elementId, toggleId) {
    const conten = document.getElementById(elementId);
    const role = document.getElementById(toggleId);
    conten.addEventListener("click", () => {
        if (role.style.display === "none") {
            role.style.display = "block";
        }else {
            role.style.display = "none";
        };
    });
}



