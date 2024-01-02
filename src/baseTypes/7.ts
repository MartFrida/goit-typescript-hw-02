/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum WeekDay {
  LUNES,
  MARTES,
  MIERCOLES,
  HUEVES,
  VIEERNES,
  SABADO,
  DOMINGO,
}
function isWeekend(day: WeekDay): boolean {
  return day === WeekDay.SABADO || day === WeekDay.DOMINGO ? true : false;
}
