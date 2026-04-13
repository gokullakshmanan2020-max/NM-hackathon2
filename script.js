const activities = [
    { title: "Learn HTML Basics", desc: "Understand tags & structure", completed: true },
    { title: "Learn CSS Basics", desc: "Practice styling & layout", completed: true },
    { title: "JavaScript Intro", desc: "Variables, loops, functions", completed: false },
    { title: "Build Mini Project", desc: "Create a simple webpage", completed: true },
    { title: "Assignment Completion", desc: "Finish coursework tasks", completed: false },
    { title: "Daily Revision", desc: "Revise topics learned", completed: true }
];

const list = document.getElementById("activityList");
const progress = document.getElementById("progress");

function renderActivities() {
    list.innerHTML = "";

    activities.forEach((activity, index) => {
        const div = document.createElement("div");
        div.className = "activity";

        div.innerHTML = `
            <h3>${activity.title}</h3>
            <p>${activity.desc}</p>
            <p class="${activity.completed ? 'completed' : 'pending'}">
                Status: ${activity.completed ? 'Completed' : 'Pending'}
            </p>
            ${!activity.completed ? `<button onclick="markComplete(${index})">Mark as Completed</button>` : ""}
        `;

        list.appendChild(div);
    });

    updateProgress();
}

function markComplete(index) {
    activities[index].completed = true;
    renderActivities();
}

function updateProgress() {
    const completedCount = activities.filter(a => a.completed).length;
    progress.textContent = `${completedCount} out of ${activities.length} activities completed`;

    if (completedCount === activities.length) {
        progress.textContent += " 🎉 All tasks completed!";
    }
}

renderActivities();