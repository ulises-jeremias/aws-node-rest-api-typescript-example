import db from "../db";

export const getTodo = async (event, context, callback) => {
  const todo_id = event.pathParameters.id;
  try {
    const todo = await db.todo.findOne({
      where: { id: todo_id },
      attributes: ["id", "task", "completed"]
    });

    const response = {
      statusCode: 200,
      body: JSON.stringify({
        todo: todo
      })
    };

    callback(null, response);
  } catch (error) {
    return callback(null, {
      statusCode: 500,
      body: JSON.stringify({
        error: `There was an error fetching your todo with id: ${todo_id}.`
      })
    });
  }
};

export const listTodos = async (event, context, callback) => {
  try {
    const todos = await db.todo.findAll({
      attributes: ["id", "task", "completed"]
    });

    const response = {
      statusCode: 200,
      body: JSON.stringify({
        todos: todos
      })
    };

    callback(null, response);
  } catch (error) {
    return callback(null, {
      statusCode: 500,
      body: JSON.stringify({
        error: `There was an error fetching your todos.`
      })
    });
  }
};
