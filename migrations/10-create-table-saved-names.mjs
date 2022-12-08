export async function up(sql) {
  await sql`
    CREATE TABLE saved_names (
      id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
      user_id integer REFERENCES users (id) ON DELETE CASCADE,
      first_name_id integer REFERENCES names (id) ON DELETE CASCADE,
      last_name_id integer REFERENCES names (id) ON DELETE CASCADE
    )
  `;
}

export async function down(sql) {
  await sql`
    DROP TABLE saved_names
  `;
}