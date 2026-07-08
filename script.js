const welcomeScreen = document.querySelector("#welcome-screen");
const activityScreen = document.querySelector("#activity-screen");
const trainingScreen = document.querySelector("#training-screen");
const testScreen = document.querySelector("#test-screen");
const vacationScreen = document.querySelector("#vacation-screen");
const startButton = document.querySelector("#start-button");
const trainButton = document.querySelector("#train-button");
const runTrainingButton = document.querySelector("#run-training-button");
const testModelButton = document.querySelector("#test-model-button");
const trainingProgressBar = document.querySelector("#training-progress-bar");
const trainingStatus = document.querySelector("#training-status");
const testVideoContainer = document.querySelector("#test-video-container");
const testProgressCount = document.querySelector("#test-progress-count");
const modelResult = document.querySelector("#model-result");
const scoreResult = document.querySelector("#score-result");
const nextTestVideoButton = document.querySelector("#next-test-video-button");
const videoList = document.querySelector("#video-list");
const progressCount = document.querySelector("#progress-count");
const statusText = document.querySelector("#status-text");
const resetButton = document.querySelector("#reset-button");

const responses = new Map();
const displayedVideos = shuffleVideos(trainingVideos);
let trainedModel = null;
let selectedTestVideos = [];
let currentTestIndex = 0;
let correctTestCount = 0;

function shuffleVideos(videos) {
  const shuffledVideos = [...videos];

  for (let index = shuffledVideos.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffledVideos[index], shuffledVideos[randomIndex]] = [shuffledVideos[randomIndex], shuffledVideos[index]];
  }

  return shuffledVideos;
}

function getCategoryClass(category) {
  return `category-${category
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")}`;
}

function renderVideos() {
  videoList.innerHTML = "";

  displayedVideos.forEach((video) => {
    const card = document.createElement("article");
    card.className = "video-card";
    card.dataset.videoId = video.id;

    card.innerHTML = `
      <div class="video-main">
        <div class="video-topline">
          <span class="category-pill ${getCategoryClass(video.categorie)}">${video.categorie}</span>
          <span class="duration">${video.duree}</span>
        </div>
        <h3>${video.titre}</h3>
        <dl class="metadata">
          <div>
            <dt>Créateur</dt>
            <dd>${video.createur}</dd>
          </div>
          <div>
            <dt>Nombre de vues</dt>
            <dd>${video.vues}</dd>
          </div>
          <div>
            <dt>Date de publication</dt>
            <dd>${video.publication}</dd>
          </div>
        </dl>
      </div>
      <fieldset class="choice-group" aria-label="Choix pour ${video.titre}">
        <legend>Ton choix</legend>
        <label class="choice choice-watch">
          <input type="radio" name="video-${video.id}" value="watch">
          <span>✅ Je regarde</span>
        </label>
        <label class="choice choice-skip">
          <input type="radio" name="video-${video.id}" value="skip">
          <span>❌ Je passe</span>
        </label>
      </fieldset>
    `;

    videoList.appendChild(card);
  });

  updateProgress();
}

function updateProgress() {
  const answeredCount = responses.size;
  const totalCount = trainingVideos.length;
  const isComplete = answeredCount === totalCount;
  progressCount.textContent = `${answeredCount} / ${totalCount}`;
  trainButton.disabled = !isComplete;

  if (isComplete) {
    statusText.textContent = "Toutes les réponses sont prêtes pour entraîner le modèle.";
    return;
  }

  const remaining = totalCount - answeredCount;
  statusText.textContent = `${remaining} vidéo${remaining > 1 ? "s" : ""} encore à évaluer.`;
}

function updateCardState(input) {
  const card = input.closest(".video-card");
  card.classList.toggle("is-watch", input.value === "watch");
  card.classList.toggle("is-skip", input.value === "skip");
}

function getTrainingResponses() {
  return trainingVideos.map((video) => ({
    ...video,
    choix: responses.get(video.id) ?? null
  }));
}

function trainCategoryModel() {
  const model = {};

  getTrainingResponses().forEach((video) => {
    if (!model[video.categorie]) {
      model[video.categorie] = { watch: 0, skip: 0 };
    }

    if (video.choix === "watch") {
      model[video.categorie].watch += 1;
    }

    if (video.choix === "skip") {
      model[video.categorie].skip += 1;
    }
  });

  return model;
}

function predictChoice(video) {
  const categoryStats = trainedModel?.[video.categorie] ?? { watch: 0, skip: 0 };
  const probability = (categoryStats.watch + 1) / (categoryStats.watch + categoryStats.skip + 2);

  return {
    choice: probability >= 0.5 ? "watch" : "skip",
    probability
  };
}

function getChoiceLabel(choice) {
  return choice === "watch" ? "✅ Je regarde" : "❌ Je passe";
}

function createVideoCard(video, radioName) {
  const card = document.createElement("article");
  card.className = "video-card";
  card.dataset.videoId = video.id;

  card.innerHTML = `
    <div class="video-main">
      <div class="video-topline">
        <span class="category-pill ${getCategoryClass(video.categorie)}">${video.categorie}</span>
        <span class="duration">${video.duree}</span>
      </div>
      <h3>${video.titre}</h3>
      <dl class="metadata">
        <div>
          <dt>Créateur</dt>
          <dd>${video.createur}</dd>
        </div>
        <div>
          <dt>Nombre de vues</dt>
          <dd>${video.vues}</dd>
        </div>
        <div>
          <dt>Date de publication</dt>
          <dd>${video.publication}</dd>
        </div>
      </dl>
    </div>
    <fieldset class="choice-group" aria-label="Choix pour ${video.titre}">
      <legend>Ton choix</legend>
      <label class="choice choice-watch">
        <input type="radio" name="${radioName}" value="watch">
        <span>✅ Je regarde</span>
      </label>
      <label class="choice choice-skip">
        <input type="radio" name="${radioName}" value="skip">
        <span>❌ Je passe</span>
      </label>
    </fieldset>
  `;

  return card;
}

function renderTestVideo() {
  const video = selectedTestVideos[currentTestIndex];
  testVideoContainer.innerHTML = "";
  testVideoContainer.appendChild(createVideoCard(video, "test-video-choice"));
  testProgressCount.textContent = `${currentTestIndex + 1} / ${selectedTestVideos.length}`;
  modelResult.classList.add("is-hidden");
  modelResult.innerHTML = "";
  scoreResult.classList.add("is-hidden");
  scoreResult.innerHTML = "";
  nextTestVideoButton.disabled = true;
  nextTestVideoButton.textContent = currentTestIndex === selectedTestVideos.length - 1 ? "Je pars en vacances!" : "Vidéo suivante";
}

function startModelTest() {
  selectedTestVideos = shuffleVideos(testVideos).slice(0, 5);
  currentTestIndex = 0;
  correctTestCount = 0;
  trainingScreen.classList.add("is-hidden");
  testScreen.classList.remove("is-hidden");
  renderTestVideo();
}

videoList.addEventListener("change", (event) => {
  const input = event.target;

  if (!input.matches('input[type="radio"]')) {
    return;
  }

  const videoId = Number(input.name.replace("video-", ""));
  responses.set(videoId, input.value);
  updateCardState(input);
  updateProgress();
});

resetButton.addEventListener("click", () => {
  responses.clear();
  document.querySelectorAll('input[type="radio"]').forEach((input) => {
    input.checked = false;
  });
  document.querySelectorAll(".video-card").forEach((card) => {
    card.classList.remove("is-watch", "is-skip");
  });
  updateProgress();
});

startButton.addEventListener("click", () => {
  welcomeScreen.classList.add("is-hidden");
  activityScreen.classList.remove("is-hidden");
  document.querySelector(".video-card input")?.focus();
});

trainButton.addEventListener("click", () => {
  activityScreen.classList.add("is-hidden");
  trainingScreen.classList.remove("is-hidden");
});

runTrainingButton.addEventListener("click", () => {
  runTrainingButton.disabled = true;
  testModelButton.disabled = true;
  trainingProgressBar.style.width = "0%";
  trainingStatus.textContent = "Entraînement en cours...";

  requestAnimationFrame(() => {
    trainingProgressBar.style.width = "100%";
  });

  window.setTimeout(() => {
    trainedModel = trainCategoryModel();
    trainingStatus.textContent = "Le modèle est entraîné.";
    testModelButton.disabled = false;
    testModelButton.focus();
  }, 1600);
});

testModelButton.addEventListener("click", startModelTest);

testVideoContainer.addEventListener("change", (event) => {
  const input = event.target;

  if (!input.matches('input[type="radio"]')) {
    return;
  }

  const video = selectedTestVideos[currentTestIndex];
  const prediction = predictChoice(video);
  const isSameChoice = prediction.choice === input.value;
  const card = input.closest(".video-card");

  if (isSameChoice) {
    correctTestCount += 1;
  }

  updateCardState(input);
  card.querySelectorAll('input[type="radio"]').forEach((radio) => {
    radio.disabled = true;
  });

  modelResult.className = `model-result ${isSameChoice ? "is-match" : "is-miss"}`;
  modelResult.innerHTML = `
    <p>L'IA choisirait : <strong>${getChoiceLabel(prediction.choice)}</strong></p>
    <p><strong>${isSameChoice ? "L'IA a choisi comme toi!" : "L'IA ne te connaît pas encore assez!"}</strong></p>
  `;

  if (currentTestIndex === selectedTestVideos.length - 1) {
    const percentage = Math.round((correctTestCount / selectedTestVideos.length) * 100);
    scoreResult.classList.remove("is-hidden");
    scoreResult.innerHTML = `
      <div class="score-main">
        <span class="score-trophy" aria-hidden="true">🏆</span>
        <strong>Score : ${percentage} %</strong>
      </div>
      <p>L'IA a choisi comme toi ${correctTestCount} fois sur ${selectedTestVideos.length}.</p>
    `;
  }

  nextTestVideoButton.disabled = false;
});

nextTestVideoButton.addEventListener("click", () => {
  if (currentTestIndex >= selectedTestVideos.length - 1) {
    testScreen.classList.add("is-hidden");
    vacationScreen.classList.remove("is-hidden");
    return;
  }

  currentTestIndex += 1;
  renderTestVideo();
});

window.getTrainingResponses = getTrainingResponses;

renderVideos();
