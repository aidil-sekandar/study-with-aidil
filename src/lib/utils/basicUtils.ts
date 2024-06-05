export function subjectURL(subject) {
  return subject.toLowerCase().split(" ").join("");
}

export function filterBySubject(all, subject) {
  return all.filter(({ data }) => data.subject === subject);
}
