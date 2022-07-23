import { format, parse } from "date-fns";

// function to change the date format (11-2022 => Nov-2022)  
const dateFormat = (date) => {
  if (/\d\d\/\d\d\d\d/.test(date))
    return format(parse(date, "MM/yyyy", new Date()), "MMM yyyy");
  else if (/\d\d\d\d/.test(date))
    return `Jan ${format(parse(date, "yyyy", new Date()), "yyyy")}`;   //if no month is provided, month is assumed as Jan
  else return date;
};

export default dateFormat;
