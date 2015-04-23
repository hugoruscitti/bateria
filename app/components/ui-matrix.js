import Ember from 'ember';

export default Ember.Component.extend({
  iniciar: function() {

    Ember.run.scheduleOnce('afterRender', this, function(){
      nx.onload = function() {
        matrix.row = 1;
        matrix.col = 8;
        matrix.init();

        //beatmatrix5.matrix = [ [1,0,0,0],[0,1,0,0],[0,0,1,0] ];
        //beatmatrix5.draw();
      }
    });

  }.on('didInsertElement')

});
