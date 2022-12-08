const names = [
  { name: 'Achillos', first_name: true, last_name: false, verified: true },
  { name: 'Aerofib', first_name: true, last_name: false, verified: true },
  { name: 'Aggsy', first_name: true, last_name: false, verified: true },
  { name: 'Ariadne', first_name: true, last_name: false, verified: true },
  { name: 'Arse', first_name: true, last_name: false, verified: true },
  { name: 'Bastardus', first_name: true, last_name: false, verified: true },
  { name: 'Bobe', first_name: true, last_name: false, verified: true },
  { name: 'Bog', first_name: true, last_name: false, verified: true },
  { name: 'Borros', first_name: true, last_name: false, verified: true },
  { name: 'Brevor', first_name: true, last_name: false, verified: true },
  { name: 'Buster', first_name: true, last_name: false, verified: true },
  { name: 'Ceebers', first_name: true, last_name: false, verified: true },
  { name: 'Chogbert', first_name: true, last_name: false, verified: true },
  { name: 'Choggle', first_name: true, last_name: false, verified: true },
  { name: 'Crab', first_name: true, last_name: false, verified: true },
  { name: 'Crondo', first_name: true, last_name: false, verified: true },
  { name: 'Crumpet', first_name: true, last_name: false, verified: true },
  { name: 'Denulon', first_name: true, last_name: false, verified: true },
  { name: 'Diagonal', first_name: true, last_name: false, verified: true },
  { name: 'Ebberp', first_name: true, last_name: false, verified: true },
  { name: 'Edmunb', first_name: true, last_name: false, verified: true },
  { name: 'Egg', first_name: true, last_name: false, verified: true },
  { name: 'Eldrosc', first_name: true, last_name: false, verified: true },
  { name: 'Elizabits', first_name: true, last_name: false, verified: true },
  { name: 'Floop', first_name: true, last_name: false, verified: true },
  { name: 'Fred', first_name: true, last_name: false, verified: true },
  { name: 'Fredders', first_name: true, last_name: false, verified: true },
  { name: 'Frod', first_name: true, last_name: false, verified: true },
  { name: 'Fujj', first_name: true, last_name: false, verified: true },
  { name: 'Gibbard', first_name: true, last_name: false, verified: true },
  { name: 'Giles', first_name: true, last_name: false, verified: true },
  { name: 'Glopper', first_name: true, last_name: false, verified: true },
  { name: 'Greg', first_name: true, last_name: false, verified: true },
  { name: 'Greggsy', first_name: true, last_name: false, verified: true },
  { name: 'Gulpo', first_name: true, last_name: false, verified: true },
  { name: 'Halio', first_name: true, last_name: false, verified: true },
  { name: 'Herred', first_name: true, last_name: false, verified: true },
  { name: 'Hoddle', first_name: true, last_name: false, verified: true },
  { name: 'Hunberg', first_name: true, last_name: false, verified: true },
  { name: 'Ibble', first_name: true, last_name: false, verified: true },
  { name: 'Ignot', first_name: true, last_name: false, verified: true },
  { name: 'Ilonius', first_name: true, last_name: false, verified: true },
  { name: 'Irascible', first_name: true, last_name: false, verified: true },
  { name: 'Jeremiah', first_name: true, last_name: false, verified: true },
  { name: 'Jerold', first_name: true, last_name: false, verified: true },
  { name: 'Jobathan', first_name: true, last_name: false, verified: true },
  { name: 'Joddles', first_name: true, last_name: false, verified: true },
  { name: 'Jonathan', first_name: true, last_name: false, verified: true },
  { name: 'Juice', first_name: true, last_name: false, verified: true },
  { name: 'Knepp', first_name: true, last_name: false, verified: true },
  { name: 'Kober', first_name: true, last_name: false, verified: true },
  { name: 'Kranch', first_name: true, last_name: false, verified: true },
  { name: 'Kreep', first_name: true, last_name: false, verified: true },
  { name: 'Kwerb', first_name: true, last_name: false, verified: true },
  { name: 'Labbard', first_name: true, last_name: false, verified: true },
  { name: 'Lagrange', first_name: true, last_name: false, verified: true },
  { name: 'Leodribble', first_name: true, last_name: false, verified: true },
  { name: 'Loop', first_name: true, last_name: false, verified: true },
  { name: 'Lunch', first_name: true, last_name: false, verified: true },
  { name: 'Misquinch', first_name: true, last_name: false, verified: true },
  { name: 'Misty', first_name: true, last_name: false, verified: true },
  { name: 'Moober', first_name: true, last_name: false, verified: true },
  { name: 'Munch', first_name: true, last_name: false, verified: true },
  { name: 'Nevertheless', first_name: true, last_name: false, verified: true },
  { name: 'Nibb', first_name: true, last_name: false, verified: true },
  { name: 'Nippsy', first_name: true, last_name: false, verified: true },
  { name: 'Noodle', first_name: true, last_name: false, verified: true },
  { name: 'Nugg', first_name: true, last_name: false, verified: true },
  { name: 'Obb', first_name: true, last_name: false, verified: true },
  { name: 'Offle', first_name: true, last_name: false, verified: true },
  { name: 'Onion', first_name: true, last_name: false, verified: true },
  { name: 'Oober', first_name: true, last_name: false, verified: true },
  { name: 'Oratio', first_name: true, last_name: false, verified: true },
  { name: 'Ouch', first_name: true, last_name: false, verified: true },
  { name: 'Peep', first_name: true, last_name: false, verified: true },
  { name: 'Penenelope', first_name: true, last_name: false, verified: true },
  { name: 'Peppo', first_name: true, last_name: false, verified: true },
  { name: 'Perpley', first_name: true, last_name: false, verified: true },
  { name: 'Pip', first_name: true, last_name: false, verified: true },
  { name: 'Poff', first_name: true, last_name: false, verified: true },
  { name: 'Porker', first_name: true, last_name: false, verified: true },
  { name: 'Porky', first_name: true, last_name: false, verified: true },
  { name: 'Prerp', first_name: true, last_name: false, verified: true },
  { name: 'Queeb', first_name: true, last_name: false, verified: true },
  { name: 'Quenters', first_name: true, last_name: false, verified: true },
  { name: 'Quentin', first_name: true, last_name: false, verified: true },
  { name: 'Quisp', first_name: true, last_name: false, verified: true },
  { name: 'Rimpert', first_name: true, last_name: false, verified: true },
  { name: 'Roast', first_name: true, last_name: false, verified: true },
  { name: 'Roger', first_name: true, last_name: false, verified: true },
  { name: 'Roggle', first_name: true, last_name: false, verified: true },
  { name: 'Scrudith', first_name: true, last_name: false, verified: true },
  { name: 'Scundy', first_name: true, last_name: false, verified: true },
  { name: 'Settring', first_name: true, last_name: false, verified: true },
  { name: 'Skeems', first_name: true, last_name: false, verified: true },
  { name: 'Splib', first_name: true, last_name: false, verified: true },
  { name: 'Splog', first_name: true, last_name: false, verified: true },
  { name: 'Sprunge', first_name: true, last_name: false, verified: true },
  { name: 'Sprune', first_name: true, last_name: false, verified: true },
  { name: 'Squeems', first_name: true, last_name: false, verified: true },
  { name: 'Stinker', first_name: true, last_name: false, verified: true },
  {
    name: 'Trandlehampton',
    first_name: true,
    last_name: false,
    verified: true,
  },
  { name: 'Tremendous', first_name: true, last_name: false, verified: true },
  { name: 'Trevor', first_name: true, last_name: false, verified: true },
  { name: 'Tweemers', first_name: true, last_name: false, verified: true },
  { name: 'Unguent', first_name: true, last_name: false, verified: true },
  { name: 'Urdlesnap', first_name: true, last_name: false, verified: true },
  { name: 'Urgus', first_name: true, last_name: false, verified: true },
  { name: 'Vallank', first_name: true, last_name: false, verified: true },
  { name: 'Veems', first_name: true, last_name: false, verified: true },
  { name: 'Vevvsy', first_name: true, last_name: false, verified: true },
  { name: 'Vodrimal', first_name: true, last_name: false, verified: true },
  { name: 'Weems', first_name: true, last_name: false, verified: true },
  { name: 'Wham', first_name: true, last_name: false, verified: true },
  { name: 'Whargle', first_name: true, last_name: false, verified: true },
  { name: 'Whebber', first_name: true, last_name: false, verified: true },
  { name: 'Wheff', first_name: true, last_name: false, verified: true },
  { name: 'Whilliam', first_name: true, last_name: false, verified: true },
  { name: 'Willian', first_name: true, last_name: false, verified: true },
  { name: 'Willy', first_name: true, last_name: false, verified: true },
  { name: 'Wonks', first_name: true, last_name: false, verified: true },
  { name: 'Xausage', first_name: true, last_name: false, verified: true },
  { name: 'Xeg', first_name: true, last_name: false, verified: true },
  { name: 'Xristopher', first_name: true, last_name: false, verified: true },
  { name: 'Yargle', first_name: true, last_name: false, verified: true },
  { name: 'Yebbert', first_name: true, last_name: false, verified: true },
  { name: 'Yosom', first_name: true, last_name: false, verified: true },
  { name: 'Zip', first_name: true, last_name: false, verified: true },
  { name: 'Zoob', first_name: true, last_name: false, verified: true },

  { name: 'Angle', first_name: false, last_name: true, verified: true },
  { name: 'Baragh', first_name: false, last_name: true, verified: true },
  { name: 'Beef', first_name: false, last_name: true, verified: true },
  { name: 'Blerdge', first_name: false, last_name: true, verified: true },
  { name: 'Bonk', first_name: false, last_name: true, verified: true },
  { name: 'Brebblington', first_name: false, last_name: true, verified: true },
  { name: 'Cheesefellow', first_name: false, last_name: true, verified: true },
  { name: 'Crudge', first_name: false, last_name: true, verified: true },
  {
    name: 'Crunglebuckets',
    first_name: false,
    last_name: true,
    verified: true,
  },
  { name: 'Crust', first_name: false, last_name: true, verified: true },
  { name: 'Dredgeton', first_name: false, last_name: true, verified: true },
  { name: 'Drudgeon', first_name: false, last_name: true, verified: true },
  { name: 'Englepip', first_name: false, last_name: true, verified: true },
  { name: 'Fartsson', first_name: false, last_name: true, verified: true },
  { name: 'Flibs', first_name: false, last_name: true, verified: true },
  { name: 'Gruggoid', first_name: false, last_name: true, verified: true },
  { name: 'Hazelthorn', first_name: false, last_name: true, verified: true },
  { name: 'Ittringham', first_name: false, last_name: true, verified: true },
  { name: 'Jackson', first_name: false, last_name: true, verified: true },
  { name: 'Jamson', first_name: false, last_name: true, verified: true },
  { name: 'Jojoba', first_name: false, last_name: true, verified: true },
  { name: 'Juice', first_name: false, last_name: true, verified: true },
  { name: 'Keeblestring', first_name: false, last_name: true, verified: true },
  { name: 'Kimplecrunch', first_name: false, last_name: true, verified: true },
  { name: 'Klembert', first_name: false, last_name: true, verified: true },
  { name: 'Klobb', first_name: false, last_name: true, verified: true },
  { name: 'Kreaston', first_name: false, last_name: true, verified: true },
  { name: 'Landlescrump', first_name: false, last_name: true, verified: true },
  { name: 'Loobthwaite', first_name: false, last_name: true, verified: true },
  { name: 'Loremongler', first_name: false, last_name: true, verified: true },
  { name: 'Manglechops', first_name: false, last_name: true, verified: true },
  { name: 'McGunty', first_name: false, last_name: true, verified: true },
  { name: 'Meadgulp', first_name: false, last_name: true, verified: true },
  { name: 'Mengerts', first_name: false, last_name: true, verified: true },
  { name: 'Mincemeat', first_name: false, last_name: true, verified: true },
  { name: 'Mingle', first_name: false, last_name: true, verified: true },
  { name: 'Nadrasco', first_name: false, last_name: true, verified: true },
  { name: 'Nibbler', first_name: false, last_name: true, verified: true },
  { name: 'Nibbles', first_name: false, last_name: true, verified: true },
  { name: 'Nibbs', first_name: false, last_name: true, verified: true },
  { name: 'Nincompoop', first_name: false, last_name: true, verified: true },
  { name: 'Nobber', first_name: false, last_name: true, verified: true },
  { name: 'Nobbler', first_name: false, last_name: true, verified: true },
  { name: 'Oblongman', first_name: false, last_name: true, verified: true },
  { name: 'Ogreson', first_name: false, last_name: true, verified: true },
  { name: 'Oswespry', first_name: false, last_name: true, verified: true },
  { name: 'Page', first_name: false, last_name: true, verified: true },
  { name: 'Pearson', first_name: false, last_name: true, verified: true },
  { name: 'Perdlehampton', first_name: false, last_name: true, verified: true },
  { name: 'Pinkelmann', first_name: false, last_name: true, verified: true },
  { name: 'Plimpenhaus', first_name: false, last_name: true, verified: true },
  { name: 'Ponderstop', first_name: false, last_name: true, verified: true },
  { name: 'Quebbs', first_name: false, last_name: true, verified: true },
  { name: 'Quegg', first_name: false, last_name: true, verified: true },
  { name: 'Quelchson', first_name: false, last_name: true, verified: true },
  { name: 'Quencrab', first_name: false, last_name: true, verified: true },
  { name: 'Quoip', first_name: false, last_name: true, verified: true },
  { name: 'Ranglepap', first_name: false, last_name: true, verified: true },
  { name: 'Rascalholme', first_name: false, last_name: true, verified: true },
  { name: 'Roop', first_name: false, last_name: true, verified: true },
  { name: 'Sausage', first_name: false, last_name: true, verified: true },
  { name: 'Scabber', first_name: false, last_name: true, verified: true },
  { name: 'Scridge', first_name: false, last_name: true, verified: true },
  { name: 'Scwibb', first_name: false, last_name: true, verified: true },
  { name: 'Snackson', first_name: false, last_name: true, verified: true },
  { name: 'Spedge', first_name: false, last_name: true, verified: true },
  { name: 'Stabb', first_name: false, last_name: true, verified: true },
  { name: 'Steamchump', first_name: false, last_name: true, verified: true },
  { name: 'Teebson', first_name: false, last_name: true, verified: true },
  { name: 'Teppich', first_name: false, last_name: true, verified: true },
  { name: 'Trentscum', first_name: false, last_name: true, verified: true },
  { name: 'Troople', first_name: false, last_name: true, verified: true },
  { name: 'Trundlepops', first_name: false, last_name: true, verified: true },
  { name: 'Turdelson', first_name: false, last_name: true, verified: true },
  { name: 'Uggrod', first_name: false, last_name: true, verified: true },
  { name: 'Undulate', first_name: false, last_name: true, verified: true },
  { name: 'Urdlescrabber', first_name: false, last_name: true, verified: true },
  { name: 'Veenerts', first_name: false, last_name: true, verified: true },
  { name: 'Viewlook', first_name: false, last_name: true, verified: true },
  { name: 'Vobblechops', first_name: false, last_name: true, verified: true },
  { name: 'Vololo', first_name: false, last_name: true, verified: true },
  { name: 'Wonkleton', first_name: false, last_name: true, verified: true },
  { name: 'Xibb', first_name: false, last_name: true, verified: true },
  { name: 'Xiop', first_name: false, last_name: true, verified: true },
  { name: 'Xol', first_name: false, last_name: true, verified: true },
  { name: 'Yardlechip', first_name: false, last_name: true, verified: true },
  { name: 'Yeek', first_name: false, last_name: true, verified: true },
  { name: 'Yinderts', first_name: false, last_name: true, verified: true },
  { name: 'Yoggbox', first_name: false, last_name: true, verified: true },
  { name: 'Zerdlepeep', first_name: false, last_name: true, verified: true },
  { name: 'Zoggo', first_name: false, last_name: true, verified: true },
  { name: 'Zombodge', first_name: false, last_name: true, verified: true },
];

export async function up(sql) {
  await sql`
    INSERT INTO names ${sql(
      names,
      'name',
      'first_name',
      'last_name',
      'verified',
    )}
  `;
}

export async function down(sql) {
  for (const singleName of names) {
    await sql`
      DELETE FROM
        names
      WHERE
        name = ${singleName.name} AND
        first_name = ${singleName.first_name} AND
        last_name = ${singleName.last_name} AND
        verified = ${singleName.verified}

    `;
  }
}
