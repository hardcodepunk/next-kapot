export interface IEvent {
  title: string
  price: string
  location: string
  date?: string
  /** ISO 8601 start date (e.g. "2027-03-08") — when set, the event gets emitted as JSON-LD Event structured data for Google. */
  startDate?: string
  /** ISO 8601 end date — optional. */
  endDate?: string
  /** Postal address of the venue — required by Google Event schema. */
  venueAddress?: string
  description: string
  buttonLink?: string
  buttonLabel: string
  disabledButton: boolean
}
