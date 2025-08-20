import { parseIcsCalendar , type VCalendar, type VEvent } from "ts-ics";

const calendar_address = "https://outlook.office365.com/owa/calendar/1122bb408bfe4746955c6a007e4e7b88@srku.dk/2e46212aa50e44c89dd5ea9f26b3013d17899246183549815181/calendar.ics"

const url = 'https://corsproxy.io/?' + encodeURIComponent(calendar_address);

export async function getCalendar(): Promise<VEvent[]>{
    console.log("getCalendar");
    
    const response = await fetch(url)
    const data = await response.text()
    console.log(data);

    const calendarParsed: VCalendar = parseIcsCalendar(data);

    return calendarParsed?.events?.filter((event) => {
        return event.start?.date.getTime() > Date.now()-1000*60*60*24;
    }).sort((a,b)=> (a.start?.date.getTime() - b.start?.date.getTime())) ?? [];
}