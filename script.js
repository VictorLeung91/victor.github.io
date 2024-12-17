// dom
const menuLinks = document.querySelectorAll('#menu a');
const contentSections = document.querySelectorAll('.page-content');
console.log(contentSections)

// side bar and top bar scroll 
window.addEventListener('scroll', () => {
    let fromTop = window.scrollY;
    console.log(22, fromTop)
    contentSections.forEach((section, index) => {
        if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
            menuLinks.forEach(link => link.classList.remove('active'));
            menuLinks[index].classList.add('active');
        }
    });
});


const btn = document.querySelector("#mobile-menu-btn")
const close = document.querySelector("#close")
btn.addEventListener("click", function () {
    menu.style.display = "flex";
    menu.style.position = "absolute";
    close.style.display = "block";
    btn.style.display = "none";
});

close.addEventListener("click", function () {
    menu.style.display = "none";
    close.style.display = "none";
    btn.style.display = "block";
});
menuLinks.forEach(function (item) {
    item.addEventListener("click", function () {
        if (menu.style.display == 'block') {
            menu.style.display = "none";
            close.style.display = "none";
            btn.style.display = "block";
        }
    })
});

window.addEventListener('resize', function () {
    if (window.innerWidth <= 900) {

    } else {
        if (menu.style.display == 'none') {
            menu.style = "";
        }
    }
});

//main page name scroll
document.addEventListener('DOMContentLoaded', function () {
    var options = {
        strings: ["Hello, My name is Victor!", "I'm a Software development student in Bow Valley College.", "Welcome to my Personal Website!"],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true
    };

    var typed = new Typed('#introduce-myself', options);
});
// Link Generator Function
function generateLink() {
    const url = document.getElementById("url").value.trim();
    const text = document.getElementById("text").value.trim() || "Click here";
    const title = document.getElementById("title").value.trim();

    if (url) {
        const linkHTML = `<a href="${url}" title="${title}" >${text}</a>`;
        const output = document.getElementById("link-output");
        const outputText = document.getElementById("link-output-text");
        output.style.display = "block";
        outputText.textContent = linkHTML;
    } else {
        alert("Please enter a valid URL.");
    }
}

// Table Generator Function
function generateTable() {
    const rows = parseInt(document.getElementById("rows").value) || 0;
    const headers = parseInt(document.getElementById("headers").value) || 0;
    const cells = parseInt(document.getElementById("cells").value) || 0;

    if (rows <= 0 || (headers === 0 && cells === 0)) {
        alert("Please enter valid numbers for rows, headers, or cells.");
        return;
    }

    let tableHTML = "<table border='1'>\n";

    for (let i = 0; i < rows; i++) {
        tableHTML += "  <tr>\n";

        // Add <th> for headers
        for (let j = 0; j < headers; j++) {
            tableHTML += `    <th>Header ${j + 1}</th>\n`;
        }

        // Add <td> for cells
        for (let k = 0; k < cells; k++) {
            tableHTML += `    <td>Cell ${k + 1}</td>\n`;
        }

        tableHTML += "  </tr>\n";
    }

    tableHTML += "</table>";

    const output = document.getElementById("table-output");
    const outputText = document.getElementById("table-output-text");
    output.style.display = "block";
    outputText.textContent = tableHTML;
}

// Copy to Clipboard Function
function copyToClipboard(outputId) {
    const outputText = document.querySelector(`#${outputId} pre`).textContent;
    navigator.clipboard.writeText(outputText)
        .then(() => alert("Copied to clipboard!"))
        .catch(err => console.error("Failed to copy: ", err));
}

//Age calculator
const birthYear = 1991;
const currentYear = new Date().getFullYear();
const age = currentYear - birthYear;

document.getElementById("age").textContent = age;