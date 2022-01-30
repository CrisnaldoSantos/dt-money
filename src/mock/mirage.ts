import { createServer, Model } from 'miragejs';

export const mock = () =>
  createServer({
    models: {
      transaction: Model,
    },
    seeds(server) {
      server.db.loadData({
        transactions: [
          {
            id: 1,
            title: 'Consultoria de front-end',
            amount: 3000,
            type: 'deposit',
            category: 'Job',
            createdAt: new Date('2022-01-10 09:00:00'),
          },
          {
            id: 2,
            title: 'Energia elétrica',
            amount: 130,
            type: 'withdraw',
            category: 'Casa',
            createdAt: new Date('2022-01-10 09:10:00'),
          },
        ],
      });
    },
    routes() {
      this.namespace = 'api';

      this.get('/transactions', () => {
        return this.schema.all('transaction');
      });

      this.post('/transactions', (schema, request) => {
        const data = JSON.parse(request.requestBody);
        return schema.create('transaction', { ...data, createdAt: new Date() });
      });
    },
  });
