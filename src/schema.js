const { gql } = require('apollo-server');

const typeDefs = gql`
type User {
    id: ID!
    name: String!
    country: String!
    tournamets: [Tournament!]!
    totalPoints: Int!
}

type Tournament {
    id: ID!
    name: String!
    games: [Game!]!
}

type Game {
    id: ID!
    type: GameType!
    firstTeam: Team!
    secondTeam: Team!
    firstTeamScore: Int!
    secondTeamScore: Int!
    winner: Team!
    loser: Team!
}

type Team {
    id: ID!
    name: String!
    players: [User!]!
}

enum GameType {
    SINGLE
    DOUBLE
}

type Query {
    users: [User!]!
}
`;

module.exports = typeDefs;