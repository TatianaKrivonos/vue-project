export default {
  data() {
    return {
      searchName: '',
      names: ['Vlad', 'Max', 'Tanya', 'Vera']
    }
  },
  computed: {
    filteredNames() {
      return this.names.filter(name => {
        return name.toLowerCase().indexOf(this.searchName.toLowerCase()) !== -1
      })
    }
  }
}
