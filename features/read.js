import db from "../db";

export const getTodo = async (event, context, callback) => {
  const todoId = event.pathParameters.id;
  try {
    const todo = await db.todo.findOne({
      where: { id: todoId },
      attributes: ["id", "task", "completed"]
    });

    const response = {
      statusCode: 200,
      body: JSON.stringify({
        todo: todo
      })
    };

    return callback(null, response);
  } catch (error) {
    return callback(null, {
      statusCode: 500,
      body: JSON.stringify({
        error: `There was an error fetching your todo with id: ${todoId}.`
      })
    });
  }
};

export const listTodos = async (event, context, callback) => {
  try {
    console.log('AAAA');
    const todos = await db.todo.findAll({
      attributes: ["id", "task", "completed"]
    });
    console.log(todos);

    const response = {
      statusCode: 200,
      body: JSON.stringify({
        todos: todos
      })
    };

    return callback(null, response);
  } catch (error) {
    return callback(null, {
      statusCode: 500,
      body: JSON.stringify({
        error: `There was an error fetching your todos.`
      })
    });
  }
};
