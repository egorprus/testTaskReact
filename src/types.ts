import { type } from "os"

export type FormFieldsType = {
    username: string,
    name: string,
    website: string,
    phone: string,
    email: string,
    company_name: string,
    bs: string,
    catchPhrase: string,
    city: string,
    street: string,
    zipcode: string,
    suite: string,
    lng: string,
    lat: string
}

export type UserType = {
    id: number,
    email: string,
    name: string,
    phone: string,
    username: string,
    website: string,
    address: UserAddressType,
    company: UserCompanyType
}

export type UserAddressType = {
    city: string,
    street: string,
    suite: string,
    zipcode: string
    geo: {
        lat: string,
        lng: string
    }
}

export type UserCompanyType = {
    bs: string,
    catchPhrase: string,
    name: string
}