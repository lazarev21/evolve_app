import { format } from "date-fns";
import { ru } from "date-fns/locale";

export function formatDateForPopularTasks(date: string): string {
  return (
    format(new Date(date), "dd") +
    " " +
    format(new Date(date), "MMMM", { locale: ru })
  );
}
