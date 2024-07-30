function formatHour(hour){
    let [hours, minutes] = hour.split(':').map(Number);
    let period = hours >12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    let formattedHour = hours.toString().padStart(2, '0');
    let formattedMinute = minutes.toString().padStart(2, '0');
    return `${formattedHour}:${formattedMinute} ${period}`;
}

console.log(formatHour('14:53'))