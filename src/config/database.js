module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'meetup',
  database: 'meetup',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
