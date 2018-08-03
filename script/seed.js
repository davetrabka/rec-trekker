const db = require('../server/db');
const { User, Article, Plan } = require('../server/db/models');

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

  await Plan.create({
    name: 'Whistler Ski Trip',
    public: true,
    shortDescription:
      'Fusce pellentesque sed turpis nec aliquet. Mauris quis diam lacinia neque dictum cursus. Fusce accumsan, ante a feugiat interdum, lectus nunc egestas urna, id suscipit quam ex blandit elit. In id leo vitae lectus hendrerit rutrum.',
    longDescription:
      'In hac habitasse platea dictumst. Vivamus porttitor neque eget augue elementum luctus. Cras ante urna, porttitor nec viverra sit amet, semper at sapien. Mauris tristique felis sed dolor gravida, at mollis lorem semper. Fusce viverra laoreet ante vel rhoncus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce pellentesque sed turpis nec aliquet. Mauris quis diam lacinia neque dictum cursus. Fusce accumsan, ante a feugiat interdum, lectus nunc egestas urna, id suscipit quam ex blandit elit. In id leo vitae lectus hendrerit rutrum. Ut sollicitudin aliquet orci quis semper. Aenean sodales sagittis massa porta rutrum. Aliquam semper sem ipsum, a scelerisque neque gravida at. Proin rutrum elit id bibendum elementum. Fusce vehicula tellus purus, nec sollicitudin diam facilisis in. Sed viverra pretium dui vitae hendrerit.',
  });

  await Plan.create({
    name: 'Thailand in August',
    public: true,
    shortDescription:
      'Lectus nunc egestas urna, id suscipit quam ex blandit elit. In id leo vitae lectus hendrerit rutrum. Ut sollicitudin aliquet orci quis semper.',
    longDescription:
      'In hac habitasse platea dictumst. Vivamus porttitor neque eget augue elementum luctus. Cras ante urna, porttitor nec viverra sit amet, semper at sapien. Mauris tristique felis sed dolor gravida, at mollis lorem semper. Fusce viverra laoreet ante vel rhoncus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce pellentesque sed turpis nec aliquet. Mauris quis diam lacinia neque dictum cursus. Fusce accumsan, ante a feugiat interdum, lectus nunc egestas urna, id suscipit quam ex blandit elit. In id leo vitae lectus hendrerit rutrum. Ut sollicitudin aliquet orci quis semper. Aenean sodales sagittis massa porta rutrum. Aliquam semper sem ipsum, a scelerisque neque gravida at. Proin rutrum elit id bibendum elementum. Fusce vehicula tellus purus, nec sollicitudin diam facilisis in. Sed viverra pretium dui vitae hendrerit.',
  });

  await Plan.create({
    name: 'London Camping Trip',
    public: true,
    shortDescription:
      'Aenean sodales sagittis massa porta rutrum. Aliquam semper sem ipsum, a scelerisque neque gravida at.',
    longDescription:
      'Fusce viverra laoreet ante vel rhoncus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce pellentesque sed turpis nec aliquet. Mauris quis diam lacinia neque dictum cursus. Fusce accumsan, ante a feugiat interdum, lectus nunc egestas urna, id suscipit quam ex blandit elit. In id leo vitae lectus hendrerit rutrum. Ut sollicitudin aliquet orci quis semper. Aenean sodales sagittis massa porta rutrum. Aliquam semper sem ipsum, a scelerisque neque gravida at. Proin rutrum elit id bibendum elementum. Fusce vehicula tellus purus, nec sollicitudin diam facilisis in. Sed viverra pretium dui vitae hendrerit.',
  });

  await Plan.create({
    name: 'Colobian Lost City Hike',
    public: true,
    shortDescription:
      'Aliquam semper sem ipsum, a scelerisque neque gravida at. Proin rutrum elit id bibendum elementum. Fusce vehicula tellus purus, nec sollicitudin diam facilisis in. Sed viverra pretium dui vitae hendrerit.',
    longDescription:
      'Fusce viverra laoreet ante vel rhoncus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce pellentesque sed turpis nec aliquet. Mauris quis diam lacinia neque dictum cursus. Fusce accumsan, ante a feugiat interdum, lectus nunc egestas urna, id suscipit quam ex blandit elit. In id leo vitae lectus hendrerit rutrum. Ut sollicitudin aliquet orci quis semper. Aenean sodales sagittis massa porta rutrum. Aliquam semper sem ipsum, a scelerisque neque gravida at. Proin rutrum elit id bibendum elementum. Fusce vehicula tellus purus, nec sollicitudin diam facilisis in. Sed viverra pretium dui vitae hendrerit.',
  });

  await Promise.all([
    Article.create({
      title: 'Who is a RecTrekker?',
      content: `In hac habitasse platea dictumst. Vivamus porttitor neque eget augue elementum luctus. Cras ante urna, porttitor nec viverra sit amet, semper at sapien. Mauris tristique felis sed dolor gravida, at mollis lorem semper. Fusce viverra laoreet ante vel rhoncus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce pellentesque sed turpis nec aliquet. Mauris quis diam lacinia neque dictum cursus. Fusce accumsan, ante a feugiat interdum, lectus nunc egestas urna, id suscipit quam ex blandit elit. In id leo vitae lectus hendrerit rutrum. Ut sollicitudin aliquet orci quis semper. Aenean sodales sagittis massa porta rutrum. Aliquam semper sem ipsum, a scelerisque neque gravida at. Proin rutrum elit id bibendum elementum. Fusce vehicula tellus purus, nec sollicitudin diam facilisis in. Sed viverra pretium dui vitae hendrerit.

        In hac habitasse platea dictumst. Vivamus porttitor neque eget augue elementum luctus. Cras ante urna, porttitor nec viverra sit amet, semper at sapien. Mauris tristique felis sed dolor gravida, at mollis lorem semper. Fusce viverra laoreet ante vel rhoncus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce pellentesque sed turpis nec aliquet. Mauris quis diam lacinia neque dictum cursus. Fusce accumsan, ante a feugiat interdum, lectus nunc egestas urna, id suscipit quam ex blandit elit. In id leo vitae lectus hendrerit rutrum. Ut sollicitudin aliquet orci quis semper. Aenean sodales sagittis massa porta rutrum. Aliquam semper sem ipsum, a scelerisque neque gravida at. Proin rutrum elit id bibendum elementum. Fusce vehicula tellus purus, nec sollicitudin diam facilisis in. Sed viverra pretium dui vitae hendrerit.

        Cras fringilla magna turpis. Duis rhoncus varius mauris id venenatis. Aliquam blandit neque vitae pulvinar varius. In dictum quam id ultrices consequat. Ut ultricies quam eget ultricies iaculis. Donec sem mi, accumsan at auctor at, posuere eu nisi. Aliquam dapibus odio nisi, eget dignissim erat ornare vitae. Proin in eleifend lacus, in consectetur orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec egestas eros justo, at mollis elit iaculis non. Aliquam quis elementum neque. Fusce id massa luctus, tristique sem a, egestas erat. Integer non vehicula tortor, a feugiat mi.

        Cras nec neque nunc. Pellentesque rutrum varius tincidunt. Nullam felis lorem, porttitor in efficitur dapibus, pellentesque in est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla in accumsan odio. Aenean lacinia libero sed facilisis commodo. Donec lectus tortor, aliquet vitae justo euismod, pulvinar viverra quam. Mauris venenatis nibh vitae diam dapibus posuere. Nulla ac convallis quam. Ut sed erat ullamcorper, sollicitudin tortor at, aliquet ante. Nullam ligula purus, mollis a viverra ut, maximus sed magna. Quisque imperdiet mi risus, nec vehicula justo rutrum id. Suspendisse tincidunt est quam, id aliquet nisl vestibulum non.

        Integer quis pellentesque nisl. Suspendisse dolor tortor, semper ut ultricies et, porta quis lectus. Suspendisse pretium laoreet condimentum. Suspendisse varius erat in rhoncus vehicula. Quisque sed aliquam augue. Etiam ultrices aliquet diam ac elementum. Nam mauris quam, tincidunt non tellus sit amet, faucibus ornare nisl. Curabitur vel scelerisque erat. Vivamus malesuada id nibh ut tempus. Proin sed lorem sed lacus mollis mollis eget id ante. Nunc eros nisi, lobortis non magna vitae, consequat dapibus risus. Quisque viverra orci vitae orci feugiat imperdiet. Donec et convallis massa. Vivamus feugiat sed massa vitae mollis. Nunc ornare tellus elit, sit amet vulputate quam hendrerit at. Interdum et malesuada fames ac ante ipsum primis in faucibus.`,
    }),
    Article.create({
      title: 'Blah Blah Test Title',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ipsum turpis, dignissim sed ultricies in, viverra quis nisl. Sed eu dapibus arcu. Quisque facilisis nisi ut enim vehicula, a volutpat nunc suscipit. Morbi semper et mauris faucibus pellentesque. Nullam id posuere magna. Curabitur semper neque sed rhoncus porta. Nulla at tellus et lectus posuere porttitor non elementum justo. Maecenas massa justo, faucibus ac orci efficitur, accumsan lobortis lorem. Nulla sodales nisi lacus. Duis semper, ipsum a laoreet blandit, erat quam gravida nisi, ac semper dolor turpis a quam. Aenean aliquet dapibus elit ac hendrerit. Phasellus eu risus id orci sodales sagittis sed ac odio. Donec vitae dignissim felis. Ut ullamcorper egestas augue vel maximus. Curabitur molestie egestas purus, non dignissim justo cursus vel. Donec lobortis urna id accumsan scelerisque.

        In hac habitasse platea dictumst. Vivamus porttitor neque eget augue elementum luctus. Cras ante urna, porttitor nec viverra sit amet, semper at sapien. Mauris tristique felis sed dolor gravida, at mollis lorem semper. Fusce viverra laoreet ante vel rhoncus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce pellentesque sed turpis nec aliquet. Mauris quis diam lacinia neque dictum cursus. Fusce accumsan, ante a feugiat interdum, lectus nunc egestas urna, id suscipit quam ex blandit elit. In id leo vitae lectus hendrerit rutrum. Ut sollicitudin aliquet orci quis semper. Aenean sodales sagittis massa porta rutrum. Aliquam semper sem ipsum, a scelerisque neque gravida at. Proin rutrum elit id bibendum elementum. Fusce vehicula tellus purus, nec sollicitudin diam facilisis in. Sed viverra pretium dui vitae hendrerit.

        Cras fringilla magna turpis. Duis rhoncus varius mauris id venenatis. Aliquam blandit neque vitae pulvinar varius. In dictum quam id ultrices consequat. Ut ultricies quam eget ultricies iaculis. Donec sem mi, accumsan at auctor at, posuere eu nisi. Aliquam dapibus odio nisi, eget dignissim erat ornare vitae. Proin in eleifend lacus, in consectetur orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec egestas eros justo, at mollis elit iaculis non. Aliquam quis elementum neque. Fusce id massa luctus, tristique sem a, egestas erat. Integer non vehicula tortor, a feugiat mi.

        Cras nec neque nunc. Pellentesque rutrum varius tincidunt. Nullam felis lorem, porttitor in efficitur dapibus, pellentesque in est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla in accumsan odio. Aenean lacinia libero sed facilisis commodo. Donec lectus tortor, aliquet vitae justo euismod, pulvinar viverra quam. Mauris venenatis nibh vitae diam dapibus posuere. Nulla ac convallis quam. Ut sed erat ullamcorper, sollicitudin tortor at, aliquet ante. Nullam ligula purus, mollis a viverra ut, maximus sed magna. Quisque imperdiet mi risus, nec vehicula justo rutrum id. Suspendisse tincidunt est quam, id aliquet nisl vestibulum non.

        Integer quis pellentesque nisl. Suspendisse dolor tortor, semper ut ultricies et, porta quis lectus. Suspendisse pretium laoreet condimentum. Suspendisse varius erat in rhoncus vehicula. Quisque sed aliquam augue. Etiam ultrices aliquet diam ac elementum. Nam mauris quam, tincidunt non tellus sit amet, faucibus ornare nisl. Curabitur vel scelerisque erat. Vivamus malesuada id nibh ut tempus. Proin sed lorem sed lacus mollis mollis eget id ante. Nunc eros nisi, lobortis non magna vitae, consequat dapibus risus. Quisque viverra orci vitae orci feugiat imperdiet. Donec et convallis massa. Vivamus feugiat sed massa vitae mollis. Nunc ornare tellus elit, sit amet vulputate quam hendrerit at. Interdum et malesuada fames ac ante ipsum primis in faucibus.`,
    }),
    Article.create({
      title: 'Starting New Hobbies Part 1',
      content: `Cras fringilla magna turpis. Duis rhoncus varius mauris id venenatis. Aliquam blandit neque vitae pulvinar varius. In dictum quam id ultrices consequat. Ut ultricies quam eget ultricies iaculis. Donec sem mi, accumsan at auctor at, posuere eu nisi. Aliquam dapibus odio nisi, eget dignissim erat ornare vitae. Proin in eleifend lacus, in consectetur orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec egestas eros justo, at mollis elit iaculis non. Aliquam quis elementum neque. Fusce id massa luctus, tristique sem a, egestas erat. Integer non vehicula tortor, a feugiat mi.

        In hac habitasse platea dictumst. Vivamus porttitor neque eget augue elementum luctus. Cras ante urna, porttitor nec viverra sit amet, semper at sapien. Mauris tristique felis sed dolor gravida, at mollis lorem semper. Fusce viverra laoreet ante vel rhoncus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce pellentesque sed turpis nec aliquet. Mauris quis diam lacinia neque dictum cursus. Fusce accumsan, ante a feugiat interdum, lectus nunc egestas urna, id suscipit quam ex blandit elit. In id leo vitae lectus hendrerit rutrum. Ut sollicitudin aliquet orci quis semper. Aenean sodales sagittis massa porta rutrum. Aliquam semper sem ipsum, a scelerisque neque gravida at. Proin rutrum elit id bibendum elementum. Fusce vehicula tellus purus, nec sollicitudin diam facilisis in. Sed viverra pretium dui vitae hendrerit.

        Cras fringilla magna turpis. Duis rhoncus varius mauris id venenatis. Aliquam blandit neque vitae pulvinar varius. In dictum quam id ultrices consequat. Ut ultricies quam eget ultricies iaculis. Donec sem mi, accumsan at auctor at, posuere eu nisi. Aliquam dapibus odio nisi, eget dignissim erat ornare vitae. Proin in eleifend lacus, in consectetur orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec egestas eros justo, at mollis elit iaculis non. Aliquam quis elementum neque. Fusce id massa luctus, tristique sem a, egestas erat. Integer non vehicula tortor, a feugiat mi.

        Cras nec neque nunc. Pellentesque rutrum varius tincidunt. Nullam felis lorem, porttitor in efficitur dapibus, pellentesque in est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla in accumsan odio. Aenean lacinia libero sed facilisis commodo. Donec lectus tortor, aliquet vitae justo euismod, pulvinar viverra quam. Mauris venenatis nibh vitae diam dapibus posuere. Nulla ac convallis quam. Ut sed erat ullamcorper, sollicitudin tortor at, aliquet ante. Nullam ligula purus, mollis a viverra ut, maximus sed magna. Quisque imperdiet mi risus, nec vehicula justo rutrum id. Suspendisse tincidunt est quam, id aliquet nisl vestibulum non.

        Integer quis pellentesque nisl. Suspendisse dolor tortor, semper ut ultricies et, porta quis lectus. Suspendisse pretium laoreet condimentum. Suspendisse varius erat in rhoncus vehicula. Quisque sed aliquam augue. Etiam ultrices aliquet diam ac elementum. Nam mauris quam, tincidunt non tellus sit amet, faucibus ornare nisl. Curabitur vel scelerisque erat. Vivamus malesuada id nibh ut tempus. Proin sed lorem sed lacus mollis mollis eget id ante. Nunc eros nisi, lobortis non magna vitae, consequat dapibus risus. Quisque viverra orci vitae orci feugiat imperdiet. Donec et convallis massa. Vivamus feugiat sed massa vitae mollis. Nunc ornare tellus elit, sit amet vulputate quam hendrerit at. Interdum et malesuada fames ac ante ipsum primis in faucibus.`,
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
