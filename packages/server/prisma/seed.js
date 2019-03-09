// @ts-check
const { prisma } = require('@gnm/core/prisma-client');

const permissions = [
  'Person:ListAll',
  'Person:ListAssigned',
  'Person:ListArea',
  'Person:Create',
  'Person:Assign',
  'Person:View',
  'Person:ViewAssigned',
  'Person:ViewArea',
  'Person:Update',
  'Person:UpdateAssigned',
  'Person:UpdateArea',
  'Person:Delete',
  'User:ListAll',
  'User:Update',
  'User:Delete',
];

const roles = [
  {
    title: 'Admin',
    permissions,
  },
  {
    title: 'Local Pastor',
    permissions: [
      'Person:ListArea',
      'Person:Create',
      'Person:ViewArea',
      'Person:UpdateArea',
      'Person:Assign',
    ],
  },
  {
    title: 'Bible Worker',
    permissions: [
      'Person:ListAssigned',
      'Person:Create',
      'Person:ViewAssigned',
      'Person:UpdateAssigned',
    ],
  },
  {
    title: 'Church',
    permissions: [
      'Person:ListArea',
      'Person:Create',
      'Person:ViewArea',
      'Person:UpdateArea',
    ],
  },
  {
    title: 'Registrar',
    permissions: [
      'Person:ListAll',
      'Person:Create',
      'Person:View',
      'Person:Update',
    ],
  },
];

const contactSites = {
  Barbados: [
    'Rock Dundo',
    'Holders',
    'Victory',
    'Gardens',
    'Ebenezer',
    'Black Rock',
    'Cave Hill',
    'Chance Hall',
    'Northern Light',
    'Checker Hall',
    'Boscobel',
    'Indian Ground',
    'Speighstown',
    'Mile and Quarter',
    'Black Bess',
    'Goodland',
    'Advent Avenue',
    'Kingstreet',
    'Pinelands',
    'Government Hill',
    'Mapp Hill',
    'Alpha Emmanuel',
    'Hillaby',
    'Belleplaine',
    'Mt Zion',
    'Ephesus',
    'Marantha',
    'Sugar Hill',
    'Berea',
  ],
  Dominica: [
    'Marigot',
    'Wesley',
    'Woodford hill',
    'Calibishie',
    'Beryl',
    'Portsmouth',
    'Du Blanc',
    'St Joseph',
    'Salisbury',
    'Layou',
    'Eggleston',
    'Grand Bay',
    'Point Michel',
    'Bethel',
    'Mahaut',
    'Trafalgar',
    'Roseau',
  ],
};

const statuses = ['Contact', 'Interest', 'Prospect', 'Member'];

async function main() {
  // Permissions
  const results = await Promise.all(
    permissions.map(title => prisma.createPermission({ title }))
  );

  // Roles
  await Promise.all(
    roles.map(role =>
      prisma.createUserRole({
        title: role.title,
        permissions: {
          connect: role.permissions.map(permission => ({
            id: results.find(a => a.title === permission).id,
          })),
        },
      })
    )
  );

  // Statuses
  await Promise.all(
    statuses.map(status => prisma.createPersonStatus({ title: status }))
  );

  // Contact sites
  await Promise.all(
    contactSites.Barbados.map(name =>
      prisma.createContactSite({ country: 'Barbados', name })
    )
  );

  await Promise.all(
    contactSites.Dominica.map(name =>
      prisma.createContactSite({ country: 'Dominica', name })
    )
  );

  // Test User
  const contactSite = (await prisma.contactSites({
    where: { name: 'Rock Dundo' },
  }))[0];

  await prisma.createUser({
    name: 'Admin',
    email: 'admin@user.com',
    role: { connect: { title: 'Admin' } },
    password: '$2b$10$NWxXH9Yn.2em8.mxwJx29Oa.8S4TksFRyF/2J00vuBy8BIPMXCRkK', // Hash 1234
    contactSites: { connect: { id: contactSite.id } },
  });
}

main().catch(e => console.error(e));
