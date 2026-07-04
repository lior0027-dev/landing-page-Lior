const CONTACT_EMAIL = "Lior0027@gmail.com";

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

const form = document.getElementById("contactForm");

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const name = data.get("name") || "";
  const organization = data.get("organization") || "";
  const email = data.get("email") || "";
  const location = data.get("location") || "";
  const date = data.get("date") || "";
  const message = data.get("message") || "";

  const subject = `Speaking inquiry for Lior Auvgang - ${organization || name}`;
  const body = [
    "Hi Lior,",
    "",
    "I would like to inquire about inviting you to speak.",
    "",
    `Name: ${name}`,
    `Organization: ${organization}`,
    `Email: ${email}`,
    `Location: ${location}`,
    `Event date: ${date}`,
    "",
    "Message:",
    message,
    "",
    "Thank you."
  ].join("\n");

  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
