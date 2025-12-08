import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  // Create branches
  const branches = [
    {
      name: 'Cape Town Central',
      address: '123 Adderley Street',
      city: 'Cape Town',
      phoneNumber: '+27 21 123 4567',
      openingTime: '09:00',
      closingTime: '17:00',
      isActive: true,
    },
    {
      name: 'Johannesburg Sandton',
      address: '456 Rivonia Road',
      city: 'Johannesburg',
      phoneNumber: '+27 11 234 5678',
      openingTime: '08:00',
      closingTime: '18:00',
      isActive: true,
    },
    {
      name: 'Durban Umhlanga',
      address: '789 Gateway Boulevard',
      city: 'Durban',
      phoneNumber: '+27 31 345 6789',
      openingTime: '09:00',
      closingTime: '17:00',
      isActive: true,
    },
    {
      name: 'Pretoria Centurion',
      address: '321 John Vorster Drive',
      city: 'Pretoria',
      phoneNumber: '+27 12 456 7890',
      openingTime: '08:30',
      closingTime: '17:30',
      isActive: true,
    },
    {
      name: 'Port Elizabeth Greenacres',
      address: '654 Heugh Road',
      city: 'Port Elizabeth',
      phoneNumber: '+27 41 567 8901',
      openingTime: '09:00',
      closingTime: '17:00',
      isActive: true,
    },
  ];

  for (const branch of branches) {
    await prisma.branch.upsert({
      where: { name: branch.name },
      update: {},
      create: branch,
    });
  }

  console.log('✅ Database seeded successfully!');
  console.log(`Created ${branches.length} branches`);
}

main()
  .catch((e) => {
    console.error('Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
