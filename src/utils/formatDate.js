// src/utils/formatDate.js

export function formatDate(dateInput) {
    const date = new Date(dateInput);
    return date.toLocaleDateString("en-CA", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }
  