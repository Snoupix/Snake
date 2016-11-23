class StartScreenManager {
   static updateLastScore(score) {
       const lastScoreValue = document.getElementById("lastScoreValue");
       lastScoreValue.innerHTML = score || localStorage.getItem("last_score") || 0;
   }
   static updateBestScore(score) {
       const bestScoreValue = document.getElementById("bestScoreValue");
       bestScoreValue.innerHTML = score || localStorage.getItem("best_score") || 0;
   }
}