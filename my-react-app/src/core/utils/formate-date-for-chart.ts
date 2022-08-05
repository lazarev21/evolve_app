import { format } from "date-fns";
import { ru } from "date-fns/locale";

export function formatDateForChart(date: string): string {
  return (
    format(new Date(date), "dd") +
    "/" +
    format(new Date(date), "MM", { locale: ru }) +
    "/" +
    format(new Date(date), "yy")
  );
}
