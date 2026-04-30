db.matches.insertMany([
  { match_id: 1, team1: "A", team2: "B", venue: "X", match_date: new Date("2025-01-01"), winner: "A", runs_scored_team1: 200, runs_scored_team2: 180, wickets_lost_team1: 5, wickets_lost_team2: 8, player_of_match: "P1", top_scorer: "P1", best_bowler: "P2" },
  { match_id: 2, team1: "C", team2: "D", venue: "Y", match_date: new Date("2025-02-01"), winner: "D", runs_scored_team1: 150, runs_scored_team2: 160, wickets_lost_team1: 7, wickets_lost_team2: 6, player_of_match: "P3", top_scorer: "P4", best_bowler: "P3" },
  { match_id: 3, team1: "A", team2: "C", venue: "Z", match_date: new Date("2025-03-01"), winner: "C", runs_scored_team1: 220, runs_scored_team2: 221, wickets_lost_team1: 6, wickets_lost_team2: 5, player_of_match: "P5", top_scorer: "P6", best_bowler: "P5" },
  { match_id: 4, team1: "B", team2: "D", venue: "X", match_date: new Date("2025-04-01"), winner: null, runs_scored_team1: 180, runs_scored_team2: 180, wickets_lost_team1: 8, wickets_lost_team2: 8, player_of_match: "P2", top_scorer: "P2", best_bowler: "P1" },
  { match_id: 5, team1: "A", team2: "D", venue: "Y", match_date: new Date("2025-05-01"), winner: "A", runs_scored_team1: 210, runs_scored_team2: 190, wickets_lost_team1: 4, wickets_lost_team2: 7, player_of_match: "P1", top_scorer: "P1", best_bowler: "P3" }
]);

db.matches.createIndex({ team1: 1, match_date: 1 });

db.matches.aggregate([
  {
    $group: {
      _id: null,
      total_runs: {
        $sum: { $add: ["$runs_scored_team1", "$runs_scored_team2"] }
      }
    }
  }
]);

db.matches.updateMany(
  { winner: { $ne: null } },
  { $set: { match_completed: true } }
);

db.matches.aggregate([
  { $group: { _id: "$player_of_match", count: { $sum: 1 } } },
  { $sort: { count: -1 } },
  { $limit: 2 }
]);
