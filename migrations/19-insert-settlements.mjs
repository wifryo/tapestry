const settlements = [
  {
    prosperity_level_id: 3,
    origin_id: 3,
    size_id: 3,
    description:
      'Vervost has a sinister reputation among the countryside, known for its colorful dyes and its energetic horses. The ruler is a feared tyrant. While Elves make up the majority of the town, the races live together mostly in harmony.',
    verified: true,
  },
  {
    prosperity_level_id: 2,
    origin_id: 8,
    size_id: 3,
    description:
      'Edvost is built nearby an important tomb or graveyard, and is known for its quarries and its skilled craftsmen. The city is ruled by a priest of the local religion. There is talk of a grave menace stalking the countryside nearby.',
    verified: true,
  },
];

export async function up(sql) {
  await sql`
    INSERT INTO settlements ${sql(
      settlements,
      'size_id',
      'prosperity_level_id',
      'origin_id',
      'description',
      'verified',
    )}
  `;
}

export async function down(sql) {
  for (const settlement of settlements) {
    await sql`
      DELETE FROM
        settlements
      WHERE
        size_id = ${settlement.size_id} AND
        prosperity_level_id = ${settlement.prosperity_level_id} AND
        origin_id = ${settlement.origin_id} AND
        description = ${settlement.description} AND
        verified = ${settlement.verified}
    `;
  }
}