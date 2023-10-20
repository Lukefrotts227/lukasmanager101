/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "81cz7ablwtn7lcs",
    "created": "2023-10-19 23:38:06.649Z",
    "updated": "2023-10-19 23:38:06.649Z",
    "name": "dada",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "wweqm1q9",
        "name": "email",
        "type": "email",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("81cz7ablwtn7lcs");

  return dao.deleteCollection(collection);
})
