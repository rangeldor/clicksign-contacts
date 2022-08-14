import { defineStore } from 'pinia'
import { IContact } from '@/interfaces/contacts'

interface IState {
  contacts: IContact[]
  contact: IContact | Record<string, never>
  contactId: number
  createdItemId: number
  createDialog: boolean
  updateDialog: boolean
  deleteDialog: boolean
}

export const useContactsStore = defineStore('contacts', {
  state: (): IState => ({
    contacts: [],
    contact: {},
    contactId: 0,
    createdItemId: 0,
    createDialog: false,
    updateDialog: false,
    deleteDialog: false
  }),

  actions: {
    create (contactForm: IContact) {
     this.contacts.push(contactForm)
     this.createdItemId = contactForm.id
    },

    update (contactForm: IContact) {
      const updatedContacts = this.contacts.map(contact => {
        if (contact.id === contactForm.id) contact = contactForm

        return contact
      })

      this.contacts = updatedContacts
    },

    delete (id: number) {
        const index = this.contacts.map(contact => contact.id).indexOf(id)
        const countRemovedItems = 1
        this.contacts.splice(index, countRemovedItems)
    },

    setContactById (id: number) {
      const contact = this.contacts.find(contact => contact.id === id)
      this.contact = contact || {}
    }
  }
})
