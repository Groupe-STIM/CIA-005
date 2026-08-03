const welcomeScreen = document.querySelector("#welcome-screen");
const bubbleLayer = document.querySelector("#bubble-layer");
const activityScreen = document.querySelector("#activity-screen");
const trainingScreen = document.querySelector("#training-screen");
const testScreen = document.querySelector("#test-screen");
const recommendationsScreen = document.querySelector("#recommendations-screen");
const vacationScreen = document.querySelector("#vacation-screen");
const echoScreen = document.querySelector("#echo-screen");
const blankScreen = document.querySelector("#blank-screen");
const openScreen = document.querySelector("#open-screen");
const openResultsScreen = document.querySelector("#open-results-screen");
const startButton = document.querySelector("#start-button");
const readyButton = document.querySelector("#ready-button");
const trainButton = document.querySelector("#train-button");
const runTrainingButton = document.querySelector("#run-training-button");
const testModelButton = document.querySelector("#test-model-button");
const testReadyButton = document.querySelector("#test-ready-button");
const trainingProgressBar = document.querySelector("#training-progress-bar");
const trainingStatus = document.querySelector("#training-status");
const testVideoContainer = document.querySelector("#test-video-container");
const modelResult = document.querySelector("#model-result");
const scoreResult = document.querySelector("#score-result");
const retryTestButton = document.querySelector("#retry-test-button");
const modelDetailsButton = document.querySelector("#model-details-button");
const modelDetailsModal = document.querySelector("#model-details-modal");
const modelDetailsBody = document.querySelector("#model-details-body");
const closeModelDetailsButton = document.querySelector("#close-model-details-button");
const nextTestVideoButton = document.querySelector("#next-test-video-button");
const runRecommendationsButton = document.querySelector("#run-recommendations-button");
const recommendationsDetailsButton = document.querySelector("#recommendations-details-button");
const recommendationProgress = document.querySelector("#recommendation-progress");
const recommendationProgressBar = document.querySelector("#recommendation-progress-bar");
const recommendationStatus = document.querySelector("#recommendation-status");
const recommendationsList = document.querySelector("#recommendations-list");
const recommendationsIntro = document.querySelector(".recommendations-intro");
const vacationStep = document.querySelector("#vacation-step");
const vacationButton = document.querySelector("#vacation-button");
const vacationReadyButton = document.querySelector("#vacation-ready-button");
const vacationMain = document.querySelector("#vacation-main");
const vacationVideoList = document.querySelector("#vacation-video-list");
const vacationTrainButton = document.querySelector("#vacation-train-button");
const vacationTrainingScreen = document.querySelector("#vacation-training-screen");
const runVacationTrainingButton = document.querySelector("#run-vacation-training-button");
const vacationTrainingProgressBar = document.querySelector("#vacation-training-progress-bar");
const vacationTrainingStatus = document.querySelector("#vacation-training-status");
const vacationRecommendButton = document.querySelector("#vacation-recommend-button");
const vacationRecommendAction = document.querySelector("#vacation-recommend-action");
const vacationRecommendDetailsButton = document.querySelector("#vacation-recommend-details-button");
const vacationRecommendationProgress = document.querySelector("#vacation-recommendation-progress");
const vacationRecommendationProgressBar = document.querySelector("#vacation-recommendation-progress-bar");
const vacationRecommendationStatus = document.querySelector("#vacation-recommendation-status");
const vacationRecommendationsList = document.querySelector("#vacation-recommendations-list");
const backToVacationStep = document.querySelector("#back-to-vacation-step");
const backToVacationButton = document.querySelector("#back-to-vacation-button");
const vacationFinalStepButton = document.querySelector("#vacation-final-step-button");
const echoReadyButton = document.querySelector("#echo-ready-button");
const echoMain = document.querySelector("#echo-main");
const echoScenarioTitle = document.querySelector("#echo-scenario-title");
const echoPrompt = document.querySelector("#echo-prompt");
const echoTrainingList = document.querySelector("#echo-training-list");
const echoFinalStepButton = document.querySelector("#echo-final-step-button");
const echoRunRecommendationsButton = document.querySelector("#echo-run-recommendations-button");
const echoRecommendationProgress = document.querySelector("#echo-recommendation-progress");
const echoRecommendationProgressBar = document.querySelector("#echo-recommendation-progress-bar");
const echoRecommendationStatus = document.querySelector("#echo-recommendation-status");
const echoComparison = document.querySelector("#echo-comparison");
const echoChildRecommendations = document.querySelector("#echo-child-recommendations");
const echoParentRecommendations = document.querySelector("#echo-parent-recommendations");
const echoComparisonNextStep = document.querySelector("#echo-comparison-next-step");
const echoComparisonNextButton = document.querySelector("#echo-comparison-next-button");
const openTrainingList = document.querySelector("#open-training-list");
const openFinalStepButton = document.querySelector("#open-final-step-button");
const openRunRecommendationsButton = document.querySelector("#open-run-recommendations-button");
const openRecommendationProgress = document.querySelector("#open-recommendation-progress");
const openRecommendationProgressBar = document.querySelector("#open-recommendation-progress-bar");
const openRecommendationStatus = document.querySelector("#open-recommendation-status");
const openRecommendationsList = document.querySelector("#open-recommendations-list");
const activityMain = document.querySelector("#activity-main");
const activityIntro = document.querySelector(".activity-intro");
const testMain = document.querySelector("#test-main");
const testIntro = document.querySelector(".test-intro");
const videoList = document.querySelector("#video-list");
const statusText = document.querySelector("#status-text");
const resetButton = document.querySelector("#reset-button");

const responses = new Map();
const vacationResponses = new Set();
const echoResponses = new Set();
const openResponses = new Set();
const displayedVideos = shuffleVideos(trainingVideos);
const displayedEchoTrainingVideos = shuffleVideos(echoTrainingVideos);
const displayedOpenTrainingVideos = shuffleVideos(echoTrainingVideos);
let trainedModel = null;
let echoModel = null;
let echoPhase = "child";
let echoChildModel = null;
let echoParentModel = null;
let openModel = null;
const echoChildRecommendedVideoIds = new Set();
const echoParentRecommendedVideoIds = new Set();
const openRecommendedVideoIds = new Set();
let selectedTestVideos = [];
let currentTestIndex = 0;
let correctTestCount = 0;
const testedVideoIds = new Set();
const recommendedVideoIds = new Set();
const vacationTrainedVideoIds = new Set();

function createWelcomeBubbles() {
  const bubbleCount = 42;

  for (let index = 0; index < bubbleCount; index += 1) {
    const bubble = document.createElement("span");
    const size = 14 + Math.random() * 54;
    const drift = -40 + Math.random() * 80;
    const duration = 12 + Math.random() * 14;
    const delay = Math.random() * 12;

    bubble.className = "bubble";
    bubble.style.setProperty("--bubble-left", `${Math.random() * 100}%`);
    bubble.style.setProperty("--bubble-size", `${size}px`);
    bubble.style.setProperty("--bubble-drift", `${drift}px`);
    bubble.style.setProperty("--bubble-duration", `${duration}s`);
    bubble.style.setProperty("--bubble-delay", `-${delay}s`);
    bubbleLayer.appendChild(bubble);
  }
}

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
          <div>
            <dt>Durée</dt>
            <dd>${video.duree}</dd>
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

function getCategoryProbability(stats) {
  return (stats.watch + 1) / (stats.watch + stats.skip + 2);
}

function getCategoryRecommendationScore(stats) {
  return getCategoryProbability(stats) * Math.sqrt(stats.watch);
}

function getModelRows() {
  return Object.entries(trainedModel ?? {})
    .map(([category, stats]) => {
      const probability = getCategoryProbability(stats);
      const score = getCategoryRecommendationScore(stats);

      return {
        category,
        watch: stats.watch,
        skip: stats.skip,
        probability,
        score
      };
    })
    .sort((firstRow, secondRow) => firstRow.category.localeCompare(secondRow.category, "fr"));
}

function renderModelDetails() {
  modelDetailsBody.innerHTML = "";

  getModelRows().forEach((row) => {
    const tableRow = document.createElement("tr");
    tableRow.innerHTML = `
      <td><span class="category-pill ${getCategoryClass(row.category)}">${row.category}</span></td>
      <td>${row.watch}</td>
      <td>${row.skip}</td>
      <td>${Math.round(row.probability * 100)} %</td>
      <td>${row.score.toFixed(2)}</td>
    `;
    modelDetailsBody.appendChild(tableRow);
  });
}

function predictChoice(video) {
  const categoryStats = trainedModel?.[video.categorie] ?? { watch: 0, skip: 0 };
  const probability = getCategoryProbability(categoryStats);

  return {
    choice: probability >= 0.5 ? "watch" : "skip",
    probability
  };
}

function getChoiceLabel(choice) {
  return choice === "watch" ? "✅ Je regarde" : "❌ Je passe";
}

function createVideoCard(video, radioName, options = {}) {
  const card = document.createElement("article");
  card.className = "video-card";
  card.classList.toggle("is-recommendation", !radioName && !options.checkboxName);
  card.dataset.videoId = video.id;

  let choices = "";

  if (radioName) {
    choices = `
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
  }

  if (options.checkboxName) {
    choices = `
      <fieldset class="choice-group" aria-label="Choix pour ${video.titre}">
        <legend>Ton choix</legend>
        <label class="choice choice-watch">
          <input type="checkbox" name="${options.checkboxName}" value="watch">
          <span>Je regarde</span>
        </label>
      </fieldset>
    `;
  }

  card.innerHTML = `
    <div class="video-main">
      <div class="video-topline">
        <span class="category-pill ${getCategoryClass(video.categorie)}">${video.categorie}</span>
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
        <div>
          <dt>Durée</dt>
          <dd>${video.duree}</dd>
        </div>
      </dl>
    </div>
    ${choices}
  `;

  return card;
}

function renderVacationVideos() {
  vacationVideoList.innerHTML = "";
  vacationResponses.clear();

  shuffleVideos(vacationVideos).forEach((video) => {
    vacationVideoList.appendChild(createVideoCard(video, null, { checkboxName: `vacation-${video.id}` }));
  });
}

function getWeightedRecommendations(count = 5) {
  const eligibleVideos = shuffleVideos(testVideos)
    .filter((video) => !testedVideoIds.has(video.id))
    .filter((video) => !recommendedVideoIds.has(video.id))
    .map((video) => ({
      video,
      prediction: predictChoice(video),
      score: getCategoryRecommendationScore(trainedModel?.[video.categorie] ?? { watch: 0, skip: 0 })
    }))
    .filter((item) => item.prediction.choice === "watch")
    .filter((item) => item.score > 0);

  if (eligibleVideos.length === 0) {
    return [];
  }

  const groups = new Map();

  eligibleVideos.forEach(({ video, score }) => {
    if (!groups.has(video.categorie)) {
      groups.set(video.categorie, {
        score,
        videos: []
      });
    }

    groups.get(video.categorie).videos.push(video);
  });

  const recommendationCount = Math.min(count, eligibleVideos.length);
  const categories = [...groups.entries()].map(([category, group]) => ({
    category,
    score: group.score,
    videos: group.videos,
    count: 0,
    remainder: 0,
    tieBreaker: Math.random()
  }));

  const totalScore = categories.reduce((sum, category) => sum + category.score, 0);

  categories.forEach((category) => {
    const exactShare = (category.score / totalScore) * recommendationCount;
    category.count = Math.min(Math.floor(exactShare), category.videos.length);
    category.remainder = exactShare - Math.floor(exactShare);
  });

  let allocatedCount = categories.reduce((sum, category) => sum + category.count, 0);

  const categoriesByRemainder = [...categories]
    .filter((category) => category.count < category.videos.length)
    .sort((firstCategory, secondCategory) => {
      if (secondCategory.remainder !== firstCategory.remainder) {
        return secondCategory.remainder - firstCategory.remainder;
      }

      return firstCategory.tieBreaker - secondCategory.tieBreaker;
    });

  for (const category of categoriesByRemainder) {
    if (allocatedCount >= recommendationCount) {
      break;
    }

    category.count += 1;
    allocatedCount += 1;
  }

  while (allocatedCount < recommendationCount) {
    const availableCategories = categories
      .filter((category) => category.count < category.videos.length)
      .sort((firstCategory, secondCategory) => {
        if (secondCategory.score !== firstCategory.score) {
          return secondCategory.score - firstCategory.score;
        }

        return firstCategory.tieBreaker - secondCategory.tieBreaker;
      });

    if (availableCategories.length === 0) {
      break;
    }

    availableCategories[0].count += 1;
    allocatedCount += 1;
  }

  return shuffleVideos(categories.flatMap((category) => category.videos.slice(0, category.count)));
}

function renderRecommendationList(targetList) {
  const recommendedVideos = getWeightedRecommendations(5);

  targetList.innerHTML = "";

  if (recommendedVideos.length === 0) {
    const emptyMessage = document.createElement("p");
    emptyMessage.className = "empty-message";
    emptyMessage.textContent = "L'IA n'a plus de nouvelles vidéos à recommander pour le moment.";
    targetList.appendChild(emptyMessage);
    return;
  }

  recommendedVideos.forEach((video) => {
    recommendedVideoIds.add(video.id);
    targetList.appendChild(createVideoCard(video));
  });
}

function renderRecommendations() {
  renderRecommendationList(recommendationsList);
}

function renderVacationRecommendations() {
  renderRecommendationList(vacationRecommendationsList);
}

function createEchoTrainingCard(video) {
  const card = document.createElement("article");
  card.className = "echo-video-card";
  card.dataset.videoId = video.id;
  card.innerHTML = `
    <h3>${video.titre}</h3>
    <label class="choice choice-watch">
      <input type="checkbox" name="echo-${video.id}" value="watch">
      <span>Je regarde</span>
    </label>
  `;

  return card;
}

function createEchoComparisonCard(video) {
  const card = document.createElement("article");
  card.className = "echo-comparison-card";
  card.dataset.videoId = video.id;
  card.innerHTML = `
    <span class="category-pill ${getCategoryClass(video.categorie)}">${video.categorie}</span>
    <h3>${video.titre}</h3>
  `;

  return card;
}

function renderEchoTrainingVideos() {
  echoTrainingList.innerHTML = "";

  displayedEchoTrainingVideos.forEach((video) => {
    echoTrainingList.appendChild(createEchoTrainingCard(video));
  });
}

function createOpenTrainingCard(video) {
  const card = document.createElement("article");
  card.className = "echo-video-card";
  card.dataset.videoId = video.id;
  card.innerHTML = `
    <h3>${video.titre}</h3>
    <label class="choice choice-watch">
      <input type="checkbox" name="open-${video.id}" value="watch">
      <span>Je regarde</span>
    </label>
  `;

  return card;
}

function renderOpenTrainingVideos() {
  openTrainingList.innerHTML = "";

  displayedOpenTrainingVideos.forEach((video) => {
    openTrainingList.appendChild(createOpenTrainingCard(video));
  });
}

function resetEchoChoices() {
  echoResponses.clear();
  echoModel = null;
  echoTrainingList.querySelectorAll('input[type="checkbox"]').forEach((input) => {
    input.checked = false;
  });
  echoTrainingList.querySelectorAll(".echo-video-card").forEach((card) => {
    card.classList.remove("is-watch");
  });
}

function trainScenarioModel(selectedResponses) {
  const model = {};

  echoTrainingVideos.forEach((video) => {
    if (!model[video.categorie]) {
      model[video.categorie] = { watch: 0, skip: 0 };
    }

    if (selectedResponses.has(video.id)) {
      model[video.categorie].watch += 1;
      return;
    }

    model[video.categorie].skip += 1;
  });

  return model;
}

function trainEchoModel() {
  return trainScenarioModel(echoResponses);
}

function trainOpenModel() {
  return trainScenarioModel(openResponses);
}

function getWeightedEchoRecommendations(model, excludedVideoIds, count = 5) {
  const eligibleVideos = shuffleVideos(echoRecommendationVideos)
    .filter((video) => !excludedVideoIds.has(video.id))
    .map((video) => ({
      video,
      score: getCategoryRecommendationScore(model?.[video.categorie] ?? { watch: 0, skip: 0 })
    }))
    .filter((item) => item.score > 0);

  if (eligibleVideos.length === 0) {
    return [];
  }

  const groups = new Map();

  eligibleVideos.forEach(({ video, score }) => {
    if (!groups.has(video.categorie)) {
      groups.set(video.categorie, {
        score,
        videos: []
      });
    }

    groups.get(video.categorie).videos.push(video);
  });

  const recommendationCount = Math.min(count, eligibleVideos.length);
  const categories = [...groups.entries()].map(([category, group]) => ({
    category,
    score: group.score,
    videos: group.videos,
    count: 0,
    remainder: 0,
    tieBreaker: Math.random()
  }));

  const totalScore = categories.reduce((sum, category) => sum + category.score, 0);

  categories.forEach((category) => {
    const exactShare = (category.score / totalScore) * recommendationCount;
    category.count = Math.min(Math.floor(exactShare), category.videos.length);
    category.remainder = exactShare - Math.floor(exactShare);
  });

  let allocatedCount = categories.reduce((sum, category) => sum + category.count, 0);

  const categoriesByRemainder = [...categories]
    .filter((category) => category.count < category.videos.length)
    .sort((firstCategory, secondCategory) => {
      if (secondCategory.remainder !== firstCategory.remainder) {
        return secondCategory.remainder - firstCategory.remainder;
      }

      return firstCategory.tieBreaker - secondCategory.tieBreaker;
    });

  for (const category of categoriesByRemainder) {
    if (allocatedCount >= recommendationCount) {
      break;
    }

    category.count += 1;
    allocatedCount += 1;
  }

  while (allocatedCount < recommendationCount) {
    const availableCategories = categories
      .filter((category) => category.count < category.videos.length)
      .sort((firstCategory, secondCategory) => {
        if (secondCategory.score !== firstCategory.score) {
          return secondCategory.score - firstCategory.score;
        }

        return firstCategory.tieBreaker - secondCategory.tieBreaker;
      });

    if (availableCategories.length === 0) {
      break;
    }

    availableCategories[0].count += 1;
    allocatedCount += 1;
  }

  return shuffleVideos(categories.flatMap((category) => category.videos.slice(0, category.count)));
}

function renderEchoComparisonList(targetList, videos) {
  targetList.innerHTML = "";

  if (videos.length === 0) {
    const emptyMessage = document.createElement("p");
    emptyMessage.className = "empty-message";
    emptyMessage.textContent = "Aucune recommandation mémorisée.";
    targetList.appendChild(emptyMessage);
    return;
  }

  videos.forEach((video) => {
    targetList.appendChild(createEchoComparisonCard(video));
  });
}

function rememberEchoRecommendations(videos, targetSet) {
  videos.forEach((video) => {
    targetSet.add(video.id);
  });
}

function renderEchoComparison() {
  const childRecommendations = getWeightedEchoRecommendations(echoChildModel, echoChildRecommendedVideoIds, 5);
  const parentRecommendations = getWeightedEchoRecommendations(echoParentModel, echoParentRecommendedVideoIds, 5);

  rememberEchoRecommendations(childRecommendations, echoChildRecommendedVideoIds);
  rememberEchoRecommendations(parentRecommendations, echoParentRecommendedVideoIds);
  renderEchoComparisonList(echoChildRecommendations, childRecommendations);
  renderEchoComparisonList(echoParentRecommendations, parentRecommendations);
  echoComparison.classList.remove("is-hidden");
}

function renderOpenRecommendations() {
  const recommendations = getWeightedEchoRecommendations(openModel, openRecommendedVideoIds, 5);

  rememberEchoRecommendations(recommendations, openRecommendedVideoIds);
  openRecommendationsList.innerHTML = "";

  if (recommendations.length === 0) {
    const emptyMessage = document.createElement("p");
    emptyMessage.className = "empty-message";
    emptyMessage.textContent = "Aucune nouvelle recommandation disponible.";
    openRecommendationsList.appendChild(emptyMessage);
    return;
  }

  recommendations.forEach((video) => {
    openRecommendationsList.appendChild(createEchoComparisonCard(video));
  });
}

function runRecommendationLoading({ button, progress, bar, status, onComplete }) {
  button.disabled = true;
  progress.classList.remove("is-hidden");
  status.classList.remove("is-hidden");
  bar.style.transition = "none";
  bar.style.width = "0%";

  requestAnimationFrame(() => {
    bar.offsetWidth;
    bar.style.transition = "";
    bar.style.width = "100%";
  });

  window.setTimeout(() => {
    onComplete();
    progress.classList.add("is-hidden");
    status.classList.add("is-hidden");
    button.disabled = false;
    bar.style.width = "0%";
  }, 3000);
}

function applyVacationTraining() {
  if (!trainedModel) {
    trainedModel = {};
  }

  vacationResponses.forEach((videoId) => {
    if (vacationTrainedVideoIds.has(videoId)) {
      return;
    }

    const video = vacationVideos.find((vacationVideo) => vacationVideo.id === videoId);

    if (!video) {
      return;
    }

    if (!trainedModel[video.categorie]) {
      trainedModel[video.categorie] = { watch: 0, skip: 0 };
    }

    trainedModel[video.categorie].watch += 1;
    vacationTrainedVideoIds.add(videoId);
  });
}

function startVacationTraining() {
  runVacationTrainingButton.disabled = true;
  vacationRecommendButton.disabled = true;
  vacationRecommendAction.classList.add("is-hidden");
  vacationRecommendDetailsButton.disabled = true;
  vacationRecommendationProgress.classList.add("is-hidden");
  vacationRecommendationStatus.classList.add("is-hidden");
  vacationTrainingStatus.classList.add("is-hidden");
  vacationRecommendationsList.classList.add("is-hidden");
  backToVacationStep.classList.add("is-hidden");
  vacationTrainingProgressBar.style.transition = "none";
  vacationTrainingProgressBar.style.width = "0%";

  requestAnimationFrame(() => {
    vacationTrainingProgressBar.offsetWidth;
    vacationTrainingProgressBar.style.transition = "";
    vacationTrainingProgressBar.style.width = "100%";
  });

  window.setTimeout(() => {
    applyVacationTraining();
    vacationTrainingStatus.classList.remove("is-hidden");
    vacationRecommendAction.classList.remove("is-hidden");
    vacationRecommendButton.disabled = false;
    vacationRecommendDetailsButton.disabled = false;
    vacationRecommendButton.focus();
  }, 1600);
}

function renderTestVideo() {
  const video = selectedTestVideos[currentTestIndex];
  testVideoContainer.innerHTML = "";
  testVideoContainer.appendChild(createVideoCard(video, "test-video-choice"));
  modelResult.classList.add("is-hidden");
  modelResult.innerHTML = "";
  scoreResult.classList.add("is-hidden");
  scoreResult.innerHTML = "";
  retryTestButton.classList.add("is-hidden");
  modelDetailsButton.classList.add("is-hidden");
  nextTestVideoButton.disabled = true;
  nextTestVideoButton.textContent = currentTestIndex === selectedTestVideos.length - 1 ? "Prochaine étape" : "Vidéo suivante";
}

function startModelTest() {
  selectedTestVideos = shuffleVideos(testVideos)
    .filter((video) => !testedVideoIds.has(video.id))
    .slice(0, 5);
  currentTestIndex = 0;
  correctTestCount = 0;
  trainingScreen.classList.add("is-hidden");
  testScreen.classList.remove("is-hidden");
  testReadyButton.classList.remove("is-hidden");
  testMain.classList.add("is-hidden");
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
  readyButton.focus();
});

readyButton.addEventListener("click", () => {
  readyButton.classList.add("is-hidden");
  activityIntro.textContent = "Afin de pouvoir te recommander des vidéos qui pourraient te plaire, notre IA a besoin de te connaître un peu mieux. Elle te présentera une série de vidéos et, pour chacune d'elles, tu devras lui indiquer si tu regardes ou si tu passes.";
  activityMain.classList.remove("is-hidden");
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

testReadyButton.addEventListener("click", () => {
  testReadyButton.classList.add("is-hidden");
  testIntro.textContent = "Maintenant que tu as entraîné le modèle d'IA, nous allons le tester. Nous allons afficher quelques vidéos. Choisis ce que tu ferais, puis nous comparerons ta réponse avec celle de l'IA.";
  testMain.classList.remove("is-hidden");
  document.querySelector('#test-video-container input[type="radio"]')?.focus();
});

testVideoContainer.addEventListener("change", (event) => {
  const input = event.target;

  if (!input.matches('input[type="radio"]')) {
    return;
  }

  const video = selectedTestVideos[currentTestIndex];
  testedVideoIds.add(video.id);
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
    retryTestButton.classList.remove("is-hidden");
    modelDetailsButton.classList.remove("is-hidden");
  }

  nextTestVideoButton.disabled = false;
});

retryTestButton.addEventListener("click", () => {
  selectedTestVideos = shuffleVideos(testVideos)
    .filter((video) => !testedVideoIds.has(video.id))
    .slice(0, 5);
  currentTestIndex = 0;
  correctTestCount = 0;
  renderTestVideo();
});

closeModelDetailsButton.addEventListener("click", () => {
  modelDetailsModal.classList.add("is-hidden");
});

[modelDetailsButton, recommendationsDetailsButton, vacationRecommendDetailsButton].forEach((detailsButton) => {
  detailsButton.addEventListener("click", () => {
    renderModelDetails();
    modelDetailsModal.classList.remove("is-hidden");
    closeModelDetailsButton.focus();
  });
});

nextTestVideoButton.addEventListener("click", () => {
  if (currentTestIndex >= selectedTestVideos.length - 1) {
    testScreen.classList.add("is-hidden");
    recommendationsList.classList.add("is-hidden");
    recommendationProgress.classList.add("is-hidden");
    recommendationStatus.classList.add("is-hidden");
    recommendationProgressBar.style.width = "0%";
    runRecommendationsButton.disabled = false;
    vacationStep.classList.add("is-hidden");
    vacationButton.disabled = true;
    recommendationsScreen.classList.remove("is-hidden");
    return;
  }

  currentTestIndex += 1;
  renderTestVideo();
});

runRecommendationsButton.addEventListener("click", () => {
  runRecommendationsButton.disabled = true;
  recommendationsIntro.textContent = "D'après ce que j'ai appris de toi, je peux te faire des recommandations de vidéos qui pourront te plaire.";
  recommendationsList.classList.add("is-hidden");
  recommendationProgress.classList.remove("is-hidden");
  recommendationStatus.classList.remove("is-hidden");
  recommendationProgressBar.style.transition = "none";
  recommendationProgressBar.style.width = "0%";
  vacationStep.classList.add("is-hidden");
  vacationButton.disabled = true;

  requestAnimationFrame(() => {
    recommendationProgressBar.offsetWidth;
    recommendationProgressBar.style.transition = "";
    recommendationProgressBar.style.width = "100%";
  });

  window.setTimeout(() => {
    renderRecommendations();
    recommendationProgress.classList.add("is-hidden");
    recommendationStatus.classList.add("is-hidden");
    recommendationsList.classList.remove("is-hidden");
    runRecommendationsButton.disabled = false;
    vacationStep.classList.remove("is-hidden");
    vacationButton.disabled = false;
  }, 3000);
});

vacationButton.addEventListener("click", () => {
  recommendationsScreen.classList.add("is-hidden");
  vacationScreen.classList.remove("is-hidden");
  vacationReadyButton.focus();
});

vacationReadyButton.addEventListener("click", () => {
  vacationReadyButton.classList.add("is-hidden");
  renderVacationVideos();
  vacationMain.classList.remove("is-hidden");
});

vacationVideoList.addEventListener("change", (event) => {
  const input = event.target;

  if (!input.matches('input[type="checkbox"]')) {
    return;
  }

  const card = input.closest(".video-card");
  const videoId = Number(input.name.replace("vacation-", ""));

  card.classList.toggle("is-watch", input.checked);

  if (input.checked) {
    vacationResponses.add(videoId);
    return;
  }

  vacationResponses.delete(videoId);
});

vacationTrainButton.addEventListener("click", () => {
  vacationScreen.classList.add("is-hidden");
  vacationTrainingScreen.classList.remove("is-hidden");
  runVacationTrainingButton.disabled = false;
  vacationTrainingProgressBar.style.width = "0%";
  vacationTrainingStatus.classList.add("is-hidden");
  vacationRecommendAction.classList.add("is-hidden");
  vacationRecommendButton.disabled = true;
  vacationRecommendDetailsButton.disabled = true;
  vacationRecommendationProgress.classList.add("is-hidden");
  vacationRecommendationStatus.classList.add("is-hidden");
  vacationRecommendationsList.classList.add("is-hidden");
  vacationRecommendationsList.innerHTML = "";
  backToVacationStep.classList.add("is-hidden");
  startVacationTraining();
});

runVacationTrainingButton.addEventListener("click", startVacationTraining);

vacationRecommendButton.addEventListener("click", () => {
  vacationRecommendationsList.classList.add("is-hidden");
  backToVacationStep.classList.add("is-hidden");
  runRecommendationLoading({
    button: vacationRecommendButton,
    progress: vacationRecommendationProgress,
    bar: vacationRecommendationProgressBar,
    status: vacationRecommendationStatus,
    onComplete: () => {
      renderVacationRecommendations();
      vacationRecommendationsList.classList.remove("is-hidden");
      backToVacationStep.classList.remove("is-hidden");
    }
  });
});

backToVacationButton.addEventListener("click", () => {
  vacationTrainingScreen.classList.add("is-hidden");
  vacationScreen.classList.remove("is-hidden");
  vacationMain.classList.remove("is-hidden");
  vacationTrainButton.focus();
});

vacationFinalStepButton.addEventListener("click", () => {
  vacationTrainingScreen.classList.add("is-hidden");
  echoScreen.classList.remove("is-hidden");
  echoReadyButton.focus();
});

echoReadyButton.addEventListener("click", () => {
  echoReadyButton.classList.add("is-hidden");
  renderEchoTrainingVideos();
  echoPhase = "child";
  echoChildModel = null;
  echoParentModel = null;
  echoChildRecommendedVideoIds.clear();
  echoParentRecommendedVideoIds.clear();
  echoScenarioTitle.textContent = "Scénario 1: L'enfant";
  echoPrompt.textContent = "Tu es un enfant passionné par les jeux vidéo. Choisis les vidéos que tu regarderais à ce sujet.";
  echoMain.classList.remove("is-hidden");
  document.querySelector('#echo-training-list input[type="checkbox"]')?.focus();
});

echoTrainingList.addEventListener("change", (event) => {
  const input = event.target;

  if (!input.matches('input[type="checkbox"]')) {
    return;
  }

  const card = input.closest(".echo-video-card");
  const videoId = Number(input.name.replace("echo-", ""));

  card.classList.toggle("is-watch", input.checked);

  if (input.checked) {
    echoResponses.add(videoId);
    return;
  }

  echoResponses.delete(videoId);
});

echoFinalStepButton.addEventListener("click", () => {
  echoModel = trainEchoModel();

  if (echoPhase === "child") {
    echoChildModel = echoModel;
    echoPhase = "parent";
    echoScenarioTitle.textContent = "Scénario 2: Le parent";
    echoPrompt.textContent = "Tu es un parent inquiet par les jeux vidéo de ton enfant. Choisis les vidéos que tu regarderais à ce sujet.";
    resetEchoChoices();
    renderEchoTrainingVideos();
    document.querySelector('#echo-training-list input[type="checkbox"]')?.focus();
    return;
  }

  echoParentModel = echoModel;
  echoComparison.classList.add("is-hidden");
  echoComparisonNextStep.classList.add("is-hidden");
  echoChildRecommendations.innerHTML = "";
  echoParentRecommendations.innerHTML = "";
  echoScreen.classList.add("is-hidden");
  blankScreen.classList.remove("is-hidden");
  echoRunRecommendationsButton.focus();
});

echoRunRecommendationsButton.addEventListener("click", () => {
  echoComparison.classList.add("is-hidden");
  echoComparisonNextStep.classList.add("is-hidden");
  runRecommendationLoading({
    button: echoRunRecommendationsButton,
    progress: echoRecommendationProgress,
    bar: echoRecommendationProgressBar,
    status: echoRecommendationStatus,
    onComplete: () => {
      renderEchoComparison();
      echoComparisonNextStep.classList.remove("is-hidden");
    }
  });
});

echoComparisonNextButton.addEventListener("click", () => {
  blankScreen.classList.add("is-hidden");
  openScreen.classList.remove("is-hidden");
  openResponses.clear();
  openModel = null;
  openRecommendedVideoIds.clear();
  renderOpenTrainingVideos();
  document.querySelector('#open-training-list input[type="checkbox"]')?.focus();
});

openTrainingList.addEventListener("change", (event) => {
  const input = event.target;

  if (!input.matches('input[type="checkbox"]')) {
    return;
  }

  const card = input.closest(".echo-video-card");
  const videoId = Number(input.name.replace("open-", ""));

  card.classList.toggle("is-watch", input.checked);

  if (input.checked) {
    openResponses.add(videoId);
    return;
  }

  openResponses.delete(videoId);
});

openFinalStepButton.addEventListener("click", () => {
  openModel = trainOpenModel();
  openRecommendationsList.classList.add("is-hidden");
  openRecommendationsList.innerHTML = "";
  openScreen.classList.add("is-hidden");
  openResultsScreen.classList.remove("is-hidden");
  openRunRecommendationsButton.focus();
});

openRunRecommendationsButton.addEventListener("click", () => {
  openRecommendationsList.classList.add("is-hidden");
  runRecommendationLoading({
    button: openRunRecommendationsButton,
    progress: openRecommendationProgress,
    bar: openRecommendationProgressBar,
    status: openRecommendationStatus,
    onComplete: () => {
      renderOpenRecommendations();
      openRecommendationsList.classList.remove("is-hidden");
    }
  });
});

window.getTrainingResponses = getTrainingResponses;

createWelcomeBubbles();
renderVideos();
