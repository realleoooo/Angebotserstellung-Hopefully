import {Customer} from "../../offer/stepper/involvedPersons/customer";
import {Creator} from "../../offer/stepper/involvedPersons/creator";

export interface Offer {
  id: number;
  offerTitle: string;
  creationDate: string;
  customerData: Customer;
  creatorData: Creator;
}
