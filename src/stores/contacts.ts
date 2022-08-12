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
    create (contactForm: IContact) {
     this.contacts.push(contactForm)
    },

    update (contactForm: IContact) {
      const updatedContacts = this.contacts.map(contact => {
        if (contact.id === contactForm.id) contact = contactForm

        return contact
      })

      this.contacts = updatedContacts
    },

    delete (contactForm: IContact) {
        const index = this.contacts.map(contact => contact.id).indexOf(contactForm.id)
        const countRemovedItems = 1
        this.contacts.splice(index, countRemovedItems)
    }
  }
})
