import db from "../db";

export const updateTodo = async (event, context, callback) => {
  const todoId = event.pathParameters.id;
  const body = JSON.parse(event.body);

  try {
    const resArr = await db.todo
      .update(body, {
        where: { id: todoId },
        returning: true
      });

    console.log(resArr);
    const [rowsAffected, todoArr] = resArr;
    console.log(
      `${rowsAffected} row(s) were updated with this obj: ${JSON.stringify(
        body
      )}`
    );
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        todo: todoArr[0]
      })
    });
  } catch (error) {
    return callback(null, {
      statusCode: 500,
      body: JSON.stringify({
        error: `There was an error updating todo id ${todoId}`
      })
    });
  }
};
