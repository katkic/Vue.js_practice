new Vue({
  el: '#app',
  data: {
    id: 1,
    name: '',
    cource: '',
    acceptancePeriod: '',
    students: []
  },
  methods: {
    addStudent: function () {
      this.students.push({
        id: this.id++,
        name: this.name,
        cource: this.cource,
        acceptancePeriod: this.acceptancePeriod
      });
      this.name = '';
      this.cource = '';
      this.acceptancePeriod = '';
    }
  },
});
