import db from "../db.js";

export const deleteTodo = async (event, context, callback) => {
  const todoId = event.pathParameters.id;

  try {
    const numDeleted = await db.todo.destroy({ where: { id: todoId } });

    return callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        numDeleted: numDeleted
      })
    });
  } catch (error) {
    return callback(null, {
      statusCode: 500,
      body: JSON.stringify({
        error: `There was an error deleting your todo with id: ${todoId}.`
      })
    });
  }
};
