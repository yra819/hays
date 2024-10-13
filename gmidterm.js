function toggleOptions(event, optionsRowId) {
    const optionsRow = document.getElementById(optionsRowId);
    optionsRow.classList.toggle("hidden"); // Toggle visibility of the options row

    event.stopPropagation(); // Prevent the event from bubbling up to the document

    const arrow = event.currentTarget; // Get the clicked arrow
    arrow.classList.toggle("rotated"); // Rotate the arrow
}

function selectGrade(grade, gradeCellId) {
    const gradeCell = document.getElementById(gradeCellId);
    gradeCell.childNodes[0].textContent = `Grade ${grade}`; // Set the grade text

    const optionsRowId = gradeCellId.replace('Cell', 'Row'); // Create the options row ID
    document.getElementById(optionsRowId).classList.add("hidden"); // Hide the options row

    const arrow = gradeCell.querySelector('.arrow'); // Get the arrow
    if (arrow) {
        arrow.classList.remove("rotated"); // Remove rotation class if it exists
    }
}

// Close dropdowns if clicked outside
document.addEventListener("click", function(event) {
    const optionsRows = document.querySelectorAll(".hidden"); // Get all hidden rows
    optionsRows.forEach(row => {
        const arrow = row.previousElementSibling.querySelector('.arrow'); // Find the corresponding arrow
        if (!row.contains(event.target) && !arrow.contains(event.target)) {
            row.classList.add("hidden"); // Hide the options row
            arrow.classList.remove("rotated"); // Reset the arrow rotation
        }
    });
});
function toggleOptions(event, optionsRowId) {
    const optionsRow = document.getElementById(optionsRowId);
    optionsRow.classList.toggle("hidden"); // Toggle visibility of the options row
    event.stopPropagation(); // Prevent the event from bubbling up to the document
}

function selectGrade(grade, gradeCellId) {
    const gradeCell = document.getElementById(gradeCellId);
    gradeCell.textContent = `Grade ${grade}`; // Set the grade text

    // Set background color based on the selected grade
    switch (grade) {
        case 1:
            gradeCell.style.backgroundColor = "green";
            break;
        case 2:
            gradeCell.style.backgroundColor = "lightgreen";
            break;
        case 3:
            gradeCell.style.backgroundColor = "yellow";
            break;
        case 4:
            gradeCell.style.backgroundColor = "lightyellow";
            break;
        case 5:
            gradeCell.style.backgroundColor = "red";
            break;
    }

    const optionsRowId = gradeCellId.replace('Cell', 'Row'); // Create the options row ID
    document.getElementById(optionsRowId).classList.add("hidden"); // Hide the options row
}

// Close dropdowns if clicked outside
document.addEventListener("click", function(event) {
    const optionsRows = document.querySelectorAll("tr:not(.hidden)"); // Get all visible options rows
    optionsRows.forEach(row => {
        const arrow = row.previousElementSibling; // Get the corresponding grade cell
        if (!row.contains(event.target) && !arrow.contains(event.target)) {
            row.classList.add("hidden"); // Hide the options row
        }
    });
});
