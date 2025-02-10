// prisma/seed.js
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
 
(async function main() {
  try {
    const martinFowler = await prisma.user.upsert({
        where: { email: "test@gmail.com" },
        update: {},
        create: {
          email: "test@gmail.com",
        },
    });
    }catch(e){
        console.error(e);
        process.exit(1);

}finally{
    await prisma.$disconnect();

}
})();
