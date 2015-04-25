import Ember from 'ember';

export default Ember.Component.extend({
  element: null,
  classNames: ['widget'],
  tagName: 'div',
  width: 200,
  height: 100,
  col: 5,
  row: 2,
  model: [],

  iniciar: function() {
    var id = this.$()[0].getAttribute('id');


    nx.sendsTo(function(data) {
      console.log("A", data);
    });

    var a = nx.add('matrix', {
      w: this.get('width'),
      h: this.get('height'),
      name: 'volume' + id,
      parent: id,
    });

    a.row = this.get('row');
    a.col = this.get('col');
    a.init();

    this.set('element', a);

    a.on("*", function(data) {
      this.set("model", 'pepe');
      //console.log(model);
      //debugger;
      //model[data.col] = data.level;
      //console.log(model);
    }.bind(this));

  }.on('didInsertElement'),

  eliminar: function() {
    var el = this.get('element');
    el.destroy();
  }.on('willDestroyElement'),

});
