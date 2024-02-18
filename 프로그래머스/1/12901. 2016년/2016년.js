const days = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
function solution(a, b) {
    let date = new Date();
    date.setYear(2016);
    date.setMonth(a-1);
    date.setDate(b);
    return days[date.getDay()]
}