"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "UserRole",
    embedded: false
  },
  {
    name: "Permission",
    embedded: false
  },
  {
    name: "PersonStatus",
    embedded: false
  },
  {
    name: "Sex",
    embedded: false
  },
  {
    name: "Country",
    embedded: false
  },
  {
    name: "MaritalStatus",
    embedded: false
  },
  {
    name: "ContactSite",
    embedded: false
  },
  {
    name: "Note",
    embedded: false
  },
  {
    name: "Team",
    embedded: false
  },
  {
    name: "Person",
    embedded: false
  },
  {
    name: "Attendance",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `http://localhost:4466`
});
exports.prisma = new exports.Prisma();
