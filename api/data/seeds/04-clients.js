
exports.seed = function(knex) {
  return knex('clients').del()
    .then(function () {
      return knex('clients').insert([
        {client_name: 'Alfred', password: '1234', role: 'client'},
        {client_name: 'Shelton', password: '1234', role: 'client'},
        {client_name: 'Trey', password: '1234', role: 'client'},
        {client_name: 'Vern', password: '1234', role: 'client'},
        {client_name: 'Jason', password: '1234', role: 'client'},
        {client_name: 'Mallory', password: '1234', role: 'client'}
      ]);
    });
};
