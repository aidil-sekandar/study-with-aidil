export function filterBySubject(all, subject) {
  return all.filter(({ data }) => data.subject === subject);
}
