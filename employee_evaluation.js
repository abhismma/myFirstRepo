function evaluateEmployees(employees) {
    return employees
        .filter(e => e.tasksCompleted > 5)
        .map(e => ({
            name: e.name,
            performance: e.rating > 4.5 ? "Excellent" : e.rating >= 3 ? "Good" : "Needs Improvement"
        }))
        .sort((a, b) => ["Excellent", "Good", "Needs Improvement"].indexOf(a.performance) - 
                        ["Excellent", "Good", "Needs Improvement"].indexOf(b.performance));
}


const employees = [
    { name: "Alice", tasksCompleted: 8, rating: 4.7 },
    { name: "Bob", tasksCompleted: 4, rating: 4.0 },
    { name: "Charlie", tasksCompleted: 6, rating: 3.5 },
    { name: "David", tasksCompleted: 10, rating: 4.9 },
    { name: "Eve", tasksCompleted: 7, rating: 2.8 }
];

console.log(evaluateEmployees(employees));
