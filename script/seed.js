const db = require('../server/db');
const { User, Article } = require('../server/db/models');

async function seed() {
  await db.sync({ force: true });
  console.log('db synced!');

  await Promise.all([
    User.create({
      firstName: 'Cody',
      lastName: 'Le-pug',
      email: 'cody@email.com',
      password: '123',
    }),
    User.create({
      firstName: 'Murphy',
      lastName: 'Bloodhound',
      email: 'murphy@email.com',
      password: '123',
    }),
  ]);

  await Promise.all([
    Article.create({
      title: 'Who is a RecTrekker?',
      content:
        'Who is a RecTrekker? <br />You won’t find RecTrekker in any dictionary out there. It’s a fusion of two words that do exist, recreation and trek. A RecTrekker is someone who lives to gain experiences, both by way of travel and learning new skills and hobbies. For us, many of those things have centered around getting outside physically and outside our comfort zones. If you enjoy a challenge and consistently look for opportunities to learn new things, you might just be a RecTrekker. We live for recreational travel, and think there are many more of us out there! Read more below to find out!<br />Do you love travel?<br />Most people do, so that’s an easy question. You’ve probably heard this saying before, “travel is the only thing you buy that makes you richer”. It’s inspirational and a driver for many in today’s world. Growing up in the Midwest, there is added benefit to want to get out and travel, but it’s not always easy to duck out of work and fork over a bunch of money to go to the beach. Considering these obstacles, we view travel as a reward. Our goal is to do it as often as we can, but it often falls flat when you get to that beach chair and are expected to read a book all day. Sometimes, that’s can be a great release, but mostly we just can’t help to want to be doing something.',
    }),
    Article.create({
      title: 'Blah Blah Test Title',
      content:
        'Who is a RecTrekker? <br />You won’t find RecTrekker in any dictionary out there. It’s a fusion of two words that do exist, recreation and trek. A RecTrekker is someone who lives to gain experiences, both by way of travel and learning new skills and hobbies. For us, many of those things have centered around getting outside physically and outside our comfort zones. If you enjoy a challenge and consistently look for opportunities to learn new things, you might just be a RecTrekker. We live for recreational travel, and think there are many more of us out there! Read more below to find out!<br />Do you love travel?<br />Most people do, so that’s an easy question. You’ve probably heard this saying before, “travel is the only thing you buy that makes you richer”. It’s inspirational and a driver for many in today’s world. Growing up in the Midwest, there is added benefit to want to get out and travel, but it’s not always easy to duck out of work and fork over a bunch of money to go to the beach. Considering these obstacles, we view travel as a reward. Our goal is to do it as often as we can, but it often falls flat when you get to that beach chair and are expected to read a book all day. Sometimes, that’s can be a great release, but mostly we just can’t help to want to be doing something.',
    }),
    Article.create({
      title: 'Starting New Hobbies Part 1',
      content:
        'In “Who is a RecTrekker” and all over our Instagram, the concept of gaining new experiences and picking up new hobbies is abundant. In your head, it often sounds like an awesome idea (and it is). Unfortunately, knowing how to actually start can be difficult. On top of that, once they commit to trying something, people start to second guess their abilities and worry about how stupid they might look. All of these things are natural.<br/>In this post, you’ll find a list of hobbies that you can do in a range of climates and locations. Click on the links below each one if one or more interest you. These sites will help you get started. We hope this helps you overcome the mental obstacle of trying something for the first time. Who knows, it could be your passion! All of the activities below are great things to add to the itinerary of your next trip.<br/>We’ll post a part 2 with more soon, so if you have something you’d like to learn about, comment here or on our Instagram.',
    }),
  ]);

  console.log(`seeded successfully`);
}

seed()
  .catch(err => {
    console.error(err.message);
    console.error(err.stack);
    process.exitCode = 1;
  })
  .then(() => {
    db.close();
    console.log('db connection closed');
  });

console.log('seeding...');
