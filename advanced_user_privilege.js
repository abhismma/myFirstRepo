let person = { role: "admin", experience: 7, active: true, department: "IT" };

let message = person.role === "admin"
  ? person.active 
    ? person.department === "IT" 
      ? "Full IT Admin Access" 
      : "Admin Access Revoked"
    : "Admin Access Revoked"
  : person.role === "manager"
  ? person.active 
    ? "Full Manager Access" 
    : "Manager Access Revoked"
  : person.role === "user"
  ? person.active 
    ? person.department === "Support"
      ? "Priority Support Access"
      : "User Access Granted"
    : "User Access Revoked"
  : "Access Denied";

console.log(message);
