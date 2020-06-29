import db from "../db";

export const createTodo = async (event, context, callback) => {
  const body = JSON.parse(event.body);
  const { task } = body;

  if (!task) {
    return callback(null, {
      statusCode: 500,
      body: JSON.stringify({
        error: 'The property "task" is required.'
      })
    });
  }

  try {
    const todo = await db.todo.create({ task: body.task });
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        todo: todo
      })
    });
  } catch (error) {
    return callback(null, {
      statusCode: 500,
      body: JSON.stringify({
        error: "There was an error creating your todo."
      })
    });
  }
};
