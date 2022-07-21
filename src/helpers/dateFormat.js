import {format,parse } from 'date-fns'
const dateFormat = (date) => {

     if (/\d\d\/\d\d\d\d/.test(date)) return format(parse(date, 'MM/yyyy', new Date()), 'MMM yyyy')
     else if (/\d\d\d\d/.test(date)) return `Jan ${format(parse(date, 'yyyy', new Date()), 'yyyy')}`
     else return date;
    
}

export default dateFormat;