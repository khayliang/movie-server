module.exports = {
  tables: [
    {
      TableName: 'movies-db',
      KeySchema: [
        {
          AttributeName: 'title',
          KeyType: 'HASH',
        },
      ],
      AttributeDefinitions: [
        {
          AttributeName: 'title',
          AttributeType: 'S',
        },
      ],
      BillingMode: 'PAY_PER_REQUEST',
    },
  ],
};
