import { shallowMount } from '@vue/test-utils'
import { createApp } from 'vue'
import { setActivePinia, createPinia } from 'pinia'
import ContactListItem from '@/components/ContactListItem.vue'

const app = createApp({})
beforeEach(() => {
  const pinia = createPinia()
  app.use(pinia)
  setActivePinia(pinia)
})

describe('ContactListItem.vue', () => {
  it('Should get first letter of the contact name', () => {
    const contact = {
        id: 0,
        name: 'Daniel',
        email: 'dan@gmail.com',
        phone: '21999999999'
    }
    const wrapper = shallowMount(ContactListItem, {
      props: { contact }
    })
    expect(wrapper.vm.firstLetter).toMatch('D')
  })
})
