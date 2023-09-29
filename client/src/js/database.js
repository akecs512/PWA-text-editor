import { openDB } from "idb";
const KEY = "jate-key";

const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

export const putDb = async (data) => {
  const db = await openDB("jate", 1);
  db.put("jate", { data });
  db.close();
};

export const getDb = async () => {
  const db = await openDB("jate", 1);
  db.getAll("jate");
  db.close();
};
initdb();
