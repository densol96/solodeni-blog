export function formatDate(date: Date) {
    const formatter = new Intl.DateTimeFormat("en-US");
    return formatter.format(date)
}
