import { defineStore } from 'pinia'
import { IContact } from '@/interfaces/contacts'

interface IState {
  contacts: IContact[]
  contact: IContact | Record<string, never>
}

export const useContactsStore = defineStore('contacts', {
  state: (): IState => ({
    contacts: [],
    contact: {}
  }),

  actions: {
    async addContact (contact: IContact) {
     this.contacts.push(contact)
    }
  }
})
