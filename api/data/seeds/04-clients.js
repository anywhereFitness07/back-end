// const bcrypt = require('bcryptjs');
// const { SEED_PASSWORD } = process.env;

// let password = '';
// const hash = bcrypt.hashSync(SEED_PASSWORD, 8);

exports.seed = function(knex) {
  return knex('clients').del()
    .then(function () {
      return knex('clients').insert([
        // {client_name: 'Alfred',password: password= hash, role: 'client'},
        // {client_name: 'Shelton', password: password= hash, role: 'client'},
        // {client_name: 'Trey', password: password= hash, role: 'client'},
        // {client_name: 'Vern', password: password= hash, role: 'client'},
        // {client_name: 'Jason', password: password= hash, role: 'client'},
        // {client_name: 'Mallory', password: password= hash, role: 'client'}

        {client_name: 'Nathan Summers', password: '1234', role: 'client'},
        {client_name: 'Rahne Sinclair', password: '1234', role: 'client'},
        {client_name: 'Roberto DaCosta', password: '1234', role: 'client'},
        {client_name: 'Benjamin Russell', password: '1234', role: 'client'},
        {client_name: 'Dani Moonstar', password: '1234', role: 'client'},
        {client_name: 'Roberto da Costa', password: '1234', role: 'client'},
        {client_name: 'Tabitha Smith', password: '1234', role: 'client'},
        {client_name: 'Illyana Rasputin', password: '1234', role: 'client'}
      ]);
    });
};
