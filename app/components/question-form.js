import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    askQuestion(){
      var params = {
        theQuestion: this.get('theQuestion'),
        asker: this.get('asker'),
        date: Date(),
        inContext: this.get('inContext')
      };

      this.sendAction('saveAsk', params);
    }
  }
});
