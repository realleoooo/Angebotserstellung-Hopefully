import {Offer} from "./offer";

export const _MOCK_TABLE_DATA: Offer[] = [
  {
    id: 1,
    offerTitle: 'Baba',
    creationDate: new Date().toISOString().slice(0, 10),
    customerData: {department: "alt", postCode: "alt", street: "", companyName: "Thomas Müller"},
    creatorData: {department: "", name: "", telephone: "", email: ""}
  },
  {
    id: 2,
    offerTitle: 'Pups',
    creationDate: new Date().toISOString().slice(0, 10),
    customerData: {department: "", postCode: "", street: "", companyName: "Bernd Schröder"},
    creatorData: {department: "", name: "", telephone: "", email: ""}
  },
  {
    id: 3,
    offerTitle: 'Pops',
    creationDate: new Date().toISOString().slice(0, 10),
    customerData: {department: "", postCode: "", street: "", companyName: "Olaf Katzenberger"},
    creatorData: {department: "", name: "", telephone: "", email: ""}
  },
  {
    id: 4,
    offerTitle: 'Brub',
    creationDate: new Date().toISOString().slice(0, 10),
    customerData: {department: "", postCode: "", street: "", companyName: "Ole Katze"},
    creatorData: {department: "", name: "", telephone: "", email: ""}
  },
  {
    id: 5,
    offerTitle: 'Bobo',
    creationDate: new Date().toISOString().slice(0, 10),
    customerData: {department: "", postCode: "", street: "", companyName: "Lela Gr"},
    creatorData: {department: "", name: "", telephone: "", email: ""}
  },
  {
    id: 6,
    offerTitle: 'Cool',
    creationDate: new Date().toISOString().slice(0, 10),
    customerData: {department: "", postCode: "", street: "", companyName: "Finn Kratze"},
    creatorData: {department: "", name: "", telephone: "", email: ""}
  },
  {
    id: 7,
    offerTitle: 'Blab',
    creationDate: new Date().toISOString().slice(0, 10),
    customerData: {department: "", postCode: "", street: "", companyName: "Blub"},
    creatorData: {department: "", name: "", telephone: "", email: ""}
  },
];
