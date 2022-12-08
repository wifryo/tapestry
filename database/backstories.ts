import { sql } from './connect';

export type Backstory = {
  id: number | null;
  classId: number;
  speciesId: number;
  description: string;
  verified: boolean;
};

export type SavedBackstory = {
  id: number | null;
  userId: number;
  backstoryId: number;
};

export type SavedBackstoryContent = {
  id: number;
  class: string;
  species: string;
  firstName: string;
  lastName: string;
  description: string;
  verified: boolean;
};

export async function getRandomBackstory() {
  const backstory = await sql<Backstory[]>`
  SELECT * FROM backstories
  ORDER BY RANDOM()
  LIMIT 1`;
  return backstory[0];
}

export async function getBackstory(classId: string, speciesId: string) {
  const backstory = await sql<Backstory[]>`
  SELECT * FROM backstories
  WHERE
    backstories.class_id = ${classId} AND
    backstories.species_id = ${speciesId}
  ORDER BY RANDOM()
  LIMIT 1`;
  return backstory[0];
}

export async function createBackstory(
  backstoryToCreate: Backstory,
  token: string | undefined,
) {
  if (!token) return undefined;
  const [savedBackstory] = await sql<SavedBackstory[]>`
    INSERT INTO backstories
      (class_id, species_id, description, verified)
    VALUES
      (${backstoryToCreate.classId}, ${backstoryToCreate.speciesId}, ${backstoryToCreate.description}, ${backstoryToCreate.verified})
    RETURNING *
    `;
  return savedBackstory;
}

export async function createSavedBackstoryById(
  backstoryToSave: SavedBackstory,
  token: string | undefined,
) {
  if (!token) return undefined;
  const [savedBackstory] = await sql<SavedBackstory[]>`
    INSERT INTO saved_backstories
      (user_id, backstory_id)
    VALUES
      (${backstoryToSave.userId}, ${backstoryToSave.backstoryId})
    RETURNING *
    `;
  return savedBackstory;
}

export async function getSavedBackstoryContentByUserIdAndValidSessionToken(
  id: number,
  token: string | undefined,
) {
  if (!token) return undefined;
  const savedBackstories = await sql<SavedBackstoryContent[]>`
    SELECT
      saved_backstories.id AS id,
      classes.name AS class,
      species.name AS species,
      names.name AS first_name,
      names.name AS last_name,
      backstories.description AS backstory,
      backstories.verified AS verified
    FROM
      backstories,
      saved_backstories,
      classes,
      species,
      first_names,
      last_names
    WHERE
      saved_backstories.user_id = ${id} AND
      saved_backstories.backstory_id = backstories.id AND
      backstories.class_id = classes.id AND
      backstories.species_id = species.id AND
      saved_backstories.first_name_id = names.id AND
      saved_backstories.last_name_id = names.id
    `;

  return [savedBackstories];
}

export async function deleteSavedBackstoryById(
  id: number,
  token: string | undefined,
) {
  console.log('attempting delete');
  console.log(`id: ${id}`);
  if (!token) return undefined;
  const [savedBackstory] = await sql<SavedBackstory[]>`
    DELETE FROM
      saved_backstories
    WHERE
      id = ${id}
    RETURNING *
    `;
  return savedBackstory;
}
