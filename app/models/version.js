import DS from 'ember-data';

export default DS.Model.extend({
    num: DS.attr('string'),
    dl_path: DS.attr('string'),
    pkg: DS.belongsTo('package'),
    created_at: DS.attr('date'),
    updated_at: DS.attr('date'),
    downloads: DS.attr('number'),
});
