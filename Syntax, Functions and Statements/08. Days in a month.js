function daysInMonth(month, year) {
    let date = new Date(`${year},${month}`)
    const getDays = (year, month) => { return new Date(year, month, 0).getDate(); };
    let days = getDays(year, month);
    console.log(days);
}