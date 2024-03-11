import prisma from '@/utils/db';

const prismaHandlers = async () => {
  console.log("prisma example")
  // await prisma.task.create({
  //   data: {
  //     content: "This is some content to test with"
  //   }
  // });

  return prisma.task.findMany({
    orderBy:  {
      createdAt: "desc"
    }
  })
}

const PrismaExamplePage = async () => {
  const tasks = await prismaHandlers();
  if(!tasks.length) {
    return (
      <h2 className="mt-8 font-medium text-lg">No tasks to show...</h2>
    )
  }
  return (
    <div>
      <h1 className="text-7xl">Prisma Example Page</h1>
      <ul>
        {tasks.map(aTask => (
          <h2 key={aTask.id} className="text-xl py-2">
            👍{aTask.content}
          </h2>
        ))}
      </ul>
    </div>
  )
}
export default PrismaExamplePage;