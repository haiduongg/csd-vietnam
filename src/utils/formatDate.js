const toMonthName = (num) => {
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  return monthNames[num];
};

export default function formatDate(date) {
  const year = new Date(date).getFullYear();
  const month = toMonthName(new Date(date).getMonth());
  const day =
    new Date(date).getDate() < 10
      ? `0${new Date(date).getDate()}`
      : new Date(date).getDate();
  return `${year} ${month} ${day}`;
}
