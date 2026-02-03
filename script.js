fetch("data/employee.json")
  .then(res => res.json())
  .then(emp => 
    {
    document.getElementById("name").textContent = emp.name;
    document.getElementById("role").textContent = emp.role + " \u2022 " + emp.team;
    document.getElementById("progressText").textContent =
      Math.round(emp.progress * 100) + "%";
    document.getElementById("status").textContent =
      emp.achievements[0];
    });
