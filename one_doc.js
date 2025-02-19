const exampleDoc = {
  _id: ObjectId("675bcfa849a97cc3b8781b6a"),
  address: {
    building: "1007",
    coord: [-73.856077, 40.848447],
    street: "Morris Park Ave",
    zipcode: "10462",
  },
  borough: "Bronx",
  cuisine: "Bakery",
  grades: [
    { date: ISODate("2014-03-03T00:00:00.000Z"), grade: "A", score: 2 },
    { date: ISODate("2013-09-11T00:00:00.000Z"), grade: "A", score: 6 },
    {
      date: ISODate("2013-01-24T00:00:00.000Z"),
      grade: "A",
      score: 10,
    },
    { date: ISODate("2011-11-23T00:00:00.000Z"), grade: "A", score: 9 },
    {
      date: ISODate("2011-03-10T00:00:00.000Z"),
      grade: "B",
      score: 14,
    },
  ],
  name: "Morris Park Bake Shop",
  restaurant_id: "30075445",
};
