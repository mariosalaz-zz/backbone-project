
const newForm = new Form();

const FormView = Backbone.View.extend({
  el: 'form',
  model: newForm,

  events: {
    'change': 'onInputChange',
    'submit': 'onFormSubmit',
  },

  onInputChange: function(e) {
    this.model.set({[e.target.name]: e.target.value});
  },

  // validate all fields where filled
  isDataValid: function(modelData){
    for (const property in modelData){
      if (modelData[property] === '') {
        return false;
      }
    }
    return true;
  },

  onFormSubmit: async function(e) {
    e.preventDefault();
    const data = this.model.attributes
    this.model.set(data);

    if(this.isDataValid(this.model.attributes)) {
      /*this.model.save method will send a HTTP POST request*/
      // const response = await this.model.save();
      this.el.reset();
      this.model.clear();
      alert('Success!');
    } else {
      alert('Something went wrong, try again');
    }
  },
});

new FormView();

