import {Injectable} from '@angular/core';
import {Offer} from "./overview/overview-table/offer";
import {Customer} from "./offer/stepper/involvedPersons/customer";
import {Creator} from "./offer/stepper/involvedPersons/creator";
import {Router} from "@angular/router";
import {_MOCK_TABLE_DATA} from "./overview/overview-table/mock-tableData";

@Injectable({
  providedIn: 'root'
})
export class DataBaseService {

  private _MockTableData: Offer[] = _MOCK_TABLE_DATA;

  getMockTableData(): Offer[] {
    return this._MockTableData;
  }

  _CustomerData: Customer = {department: "", postCode: "", street: "", companyName: ""};

  _CreatorData: Creator = {department: "", email: "", name: "", telephone: ""};

  saveInvolvedPersons(customerData: Customer, creatorData: Creator, id: number) {
    this._CustomerData.companyName = customerData.companyName;
    this._CustomerData.department = customerData.department;
    this._CustomerData.street = customerData.street;
    this._CustomerData.postCode = customerData.postCode;
    this._CreatorData.name = creatorData.name;
    this._CreatorData.department = creatorData.department;
    this._CreatorData.telephone = creatorData.telephone;
    this._CreatorData.email = creatorData.email;
    this._MockTableData.find(element => element.id === id)!.customerData = this._CustomerData;
    this._MockTableData.find(element => element.id === id)!.creatorData = this._CreatorData;
  }

  constructor(private router: Router) {
  }

  addOffer(id: number, companyName: string, offerTitle: string, creationDate: string) {
    this._MockTableData.push(
      {
        id: Math.max(...this.getMockTableData().map(element => element.id)) + 1,
        offerTitle: offerTitle,
        creationDate: creationDate,
        customerData: {department: "", postCode: "", street: "", companyName: companyName},
        creatorData: {department: "", name: "", telephone: "", email: ""}
      }
    );
  }

  deleteData(offer: Offer) {
    this._MockTableData = this._MockTableData.filter((a) => a.id !== offer.id);
  }

  copyOffer(offer: Offer, offerTitle: string, creationDate: string, customerData: Customer, creatorData: Creator) {
    this._MockTableData.push(
      {
        id: Math.max(...this.getMockTableData().map(element => element.id)) + 1,
        offerTitle: offerTitle,
        creationDate: creationDate,
        customerData: customerData,
        creatorData: creatorData
      }
    )
  }

  correctOfferTitle(offerTitle: string, id: number) {
    this._MockTableData.find(element => element.id === id)!.offerTitle = offerTitle;
  }

  quitStepper() {
    this.router.navigateByUrl('/overview');
  }
}
