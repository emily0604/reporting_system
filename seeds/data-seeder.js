const mongoose = require('mongoose');
const faker = require('faker');
const keys = require('../config/keys');

const Team = mongoose.model('teams');

// mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

const database = {
  daily_reports: [],
  weekly_reports: [],
  users: [],
  teams: [],
  divisions: [
    {
      name: 'Development Division 1',
      description: faker.lorem.paragraph(),
    },
    {
      name: 'Development Division 2',
      description: faker.lorem.paragraph(),
    },
    {
      name: 'Development Division 3',
      description: faker.lorem.paragraph(),
    },
    {
      name: 'Design & Marketing Division',
      description: faker.lorem.paragraph(),
    },
    {
      name: 'Human Development',
      description: faker.lorem.paragraph(),
    },
  ],
};

for (let i = 0; i < 10; i++) {
  database.teams.push({
    name: faker.name.firstName(),
    description: faker.lorem.paragraph(),
  });
}

Team
  .insertMany(database.teams)
  .then(() => {
    console.log('Seed teams data success');
    mongoose.disconnect();
  })
  .catch((err) => {
    console.log('Error while seeding data', err);
  });

// Division.insertMany(database.divisions)
//   .then(() => {
//     console.log('Seed divisions data success');
//     mongoose.disconnect();
//   })
//   .catch((err) => {
//     console.log('Error while seeding data', err);
//   });

// User.insertMany(database.users)
//   .then(() => {
//     console.log('Seed users data success');
//   })
//   .catch((err) => {
//     console.log('Error while seeding data', err);
//   });

