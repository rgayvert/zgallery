import { atom, Atom } from "zaffre";

type FlightDirection = "one-way flight" | "return flight";

export class FlightBookerModel {
  booking = atom("");
  direction: Atom<FlightDirection> = atom("one-way flight", { action: () => this.booking.set("") });
  startDate: Atom<Date | undefined> = atom(new Date(), { action: (val) => console.log("startDate="+val) });
  returnDate: Atom<Date | undefined> = atom(new Date());

  isOneWay(): boolean {
    return this.direction.get() === "one-way flight";
  }
  parseDateString(s: string): Date | undefined {
    if (!this.dateStringIsValid(s)) {
      return undefined;
    }
    const day = parseInt(s.slice(0, 2));
    const month = parseInt(s.slice(3, 5)) - 1;
    const year = parseInt(s.slice(6, 10));
    return new Date(year, month, day);
  }
  formatDate(date: Date): string {
    return `${date.getDate().toString().padStart(2, "0")}.${(date.getMonth() + 1).toString().padStart(2, "0")}.${date.getFullYear().toString()}`;
  }
  dateStringIsValid(s: string): boolean {
    const validDate = new RegExp(/^\d\d\.\d\d\.\d\d\d\d$/);
    return validDate.test(s);
  }
  bookFlight(): void {
    const startDate = this.startDate.get();
    const returnDate = this.returnDate.get();
    const line1 = startDate && this.formatDate(startDate);
    const line2 = returnDate && this.formatDate(returnDate);
    this.booking.set(this.isOneWay() ? `Leaving: ${line1}` : `Leaving: ${line1}<br>Returning: ${line2}`);
  }
  datesAreValid(): boolean {
    const startDate = this.startDate.get();
    const returnDate = this.returnDate.get();    
    return Boolean(this.isOneWay() ? startDate : startDate && returnDate && startDate < returnDate);
  }
}
