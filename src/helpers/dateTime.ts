export function getDate(date: string, time: string): string {
  const validDate = validateDate(date);
  const validTime = validateTime(time);

  const dateTime = new Date(`${validDate}T${validTime}`);
  console.log(dateTime);
  return new Intl.DateTimeFormat('ru-RU', {
    month: 'short',
    weekday: 'short',
    day: 'numeric',
    year: 'numeric'
  }).format(dateTime);
}

function validateDate(date: string): string {
  const dateValuesArr = date.split('.').reverse();

  // 18 -> 2018
  dateValuesArr[0] = '20' + dateValuesArr[0];
  return dateValuesArr.join('-');
}

function validateTime(time: string): string {
  return (
    time
      .split(':')
      .map(timeVal => (timeVal.length === 1 ? 0 + timeVal : timeVal))
      .join(':') + ':00'
  );
}
