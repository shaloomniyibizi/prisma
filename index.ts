import { PrismaClient } from '@prisma/client';
import { title } from 'process';
const db = new PrismaClient();

async function main() {
  // Insert single user
  // const user = await db.user.create({data:{name:'Shaloom',email:"shaloom@gmail.com"}})

  // Insert many users at the same time
  // const users = await db.user.createMany({
  //   data: [
  //     { name: 'eric', email: 'eric@gmail.com' },
  //     { name: 'ella', email: 'ella@gmail.com' },
  //     { name: 'lucas', email: 'lucas@gmail.com' },
  //   ],
  // });

  // To get all users
  // const users = await db.user.findMany();
  // console.log(users);

  // To get single user by Email
  // const user = await db.user.findUnique({
  //   where: {
  //     email: 'ella@gmail.com',
  //   },
  // });
  // console.log(user);

  // To update user by id
  // const user = await db.user.update({
  //   where: { id: '90b3fc55-6f1d-47e0-8e61-ee249fc20d3a' },
  //   data: {
  //     name: 'Updated',
  //   },
  // });
  // console.log(user);

  // To delete user
  // await db.user.delete({ where: { email: 'eric@gmail.com' } });
  // console.log('User succefull Deleted');

  // Create article and associate it to user
  // const article = await db.article.create({
  //   data: {
  //     title: 'Shalooms article',
  //     body: 'Web devs is simple as you think',
  //     author: {
  //       connect: {
  //         id: 'b7bf063c-e578-4e20-92b9-ed4c60ab8322',
  //       },
  //     },
  //   },
  // });
  // console.log(article);

  const user = await db.user.findFirst({
    where: {
      email: 'shaloom@gmail.com',
    },
    select: {
      articles: {
        where: {
          authorId: 'b7bf063c-e578-4e20-92b9-ed4c60ab8322',
        },
      },
    },
  });
  console.log(user);
}

main()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
