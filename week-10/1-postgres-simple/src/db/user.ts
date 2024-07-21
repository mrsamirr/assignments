import { client } from "..";


/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */


export async function createUser(username: string, password: string, name: string) {
  const insertQuery = `INSERT INTO users (username, password, name) VALUES ($1, $2, $3) RETURNING *`;
  const values = [username, password, name];

  const res = await client.query(insertQuery, values);
  const insertedUser = res.rows[0];
    return insertedUser;

}

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {
        const getQuery = `SELECT * FROM users WHERE id = $1 `;
        const uId = [userId];
        const res = await client.query(getQuery, uId);
        return res.rows[0];
      
}
