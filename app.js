import Chart from 'chart.js/auto';

const ctx = document.getElementById('marksChart');

const marksChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [
            'Marketing',
            'Accounting',
            'Economics',
            'Computer',
            'Mathematics'
        ],
        datasets: [{
            label: 'Marks',
            data: [0, 0, 0, 0, 0],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                max: 100
            }
        }
    }
});

document.getElementById("generateChart").addEventListener("click", function () {

    const studentName = document.getElementById("studentName").value;

    const marketing = Number(document.getElementById("marketing").value);
    const accounting = Number(document.getElementById("accounting").value);
    const economics = Number(document.getElementById("economics").value);
    const computer = Number(document.getElementById("computer").value);
    const mathematics = Number(document.getElementById("mathematics").value);

    // Check for empty fields
    if (
        studentName === "" ||
        document.getElementById("marketing").value === "" ||
        document.getElementById("accounting").value === "" ||
        document.getElementById("economics").value === "" ||
        document.getElementById("computer").value === "" ||
        document.getElementById("mathematics").value === ""
    ) {
        alert("Please fill in all fields.");
        return;
    }

    // Check marks range
    if (
        marketing < 0 || marketing > 100 ||
        accounting < 0 || accounting > 100 ||
        economics < 0 || economics > 100 ||
        computer < 0 || computer > 100 ||
        mathematics < 0 || mathematics > 100
    ) {
        alert("Please enter marks between 0 and 100.");
        return;
    }

    // Update chart
    marksChart.data.datasets[0].data = [
        marketing,
        accounting,
        economics,
        computer,
        mathematics
    ];

    marksChart.update();

    // Show report
    document.getElementById("resultBox").style.display = "block";

    const marks = [
        marketing,
        accounting,
        economics,
        computer,
        mathematics
    ];

    const subjects = [
        "Marketing",
        "Accounting",
        "Economics",
        "Computer",
        "Mathematics"
    ];

    const average =
        (marketing + accounting + economics + computer + mathematics) / 5;

    const highestMark = Math.max(...marks);
    const lowestMark = Math.min(...marks);

    const highestSubject = subjects[marks.indexOf(highestMark)];
    const lowestSubject = subjects[marks.indexOf(lowestMark)];

    let grade = "";

    if (average >= 90)
        grade = "A+";
    else if (average >= 80)
        grade = "A";
    else if (average >= 70)
        grade = "B";
    else if (average >= 60)
        grade = "C";
    else
        grade = "Fail";

    document.getElementById("displayName").innerHTML =
        "<strong>Student:</strong> " + studentName;

    document.getElementById("average").innerHTML =
        "<strong>Average:</strong> " + average.toFixed(2);

    document.getElementById("highest").innerHTML =
        "<strong>Highest Subject:</strong> " +
        highestSubject +
        " (" + highestMark + ")";

    document.getElementById("lowest").innerHTML =
        "<strong>Lowest Subject:</strong> " +
        lowestSubject +
        " (" + lowestMark + ")";

    document.getElementById("grade").innerHTML =
        "<strong>Grade:</strong> " + grade;

});

document.getElementById("resetBtn").addEventListener("click", function () {

    document.getElementById("studentName").value = "";

    document.getElementById("marketing").value = "";
    document.getElementById("accounting").value = "";
    document.getElementById("economics").value = "";
    document.getElementById("computer").value = "";
    document.getElementById("mathematics").value = "";

    marksChart.data.datasets[0].data = [0, 0, 0, 0, 0];
    marksChart.update();

    document.getElementById("displayName").innerHTML = "";
    document.getElementById("average").innerHTML = "";
    document.getElementById("highest").innerHTML = "";
    document.getElementById("lowest").innerHTML = "";
    document.getElementById("grade").innerHTML = "";

    document.getElementById("resultBox").style.display = "none";

});