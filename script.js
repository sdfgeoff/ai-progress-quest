// Game Data - Idea Assembly Parts
const prefixes = [
    "AI-powered", "Blockchain-based", "Quantum-ready", "Web5", "Metaverse-native",
    "Zero-knowledge", "Decentralized", "Neural", "Autonomous", "Generative",
    "Crypto-native", "Edge-computing", "Serverless", "P2P", "Federated",
    "Self-sovereign", "Tokenized", "DAO-governed", "NFT-based", "DeFi"
];

const platforms = [
    "marketplace", "social network", "dating app", "subscription service",
    "platform", "ecosystem", "protocol", "API", "SaaS", "mobile app",
    "browser extension", "Slack bot", "Discord server", "Chrome plugin",
    "productivity tool", "analytics dashboard", "automation engine", "aggregator"
];

const actions = [
    "for connecting", "for matching", "for discovering", "for optimizing",
    "for monetizing", "for gamifying", "for disrupting", "for revolutionizing",
    "for tokenizing", "for automating", "for visualizing", "for tracking",
    "for sharing", "for trading", "for renting", "for selling",
    "for curating", "for organizing", "for coordinating", "that eliminates"
];

const subjects = [
    "houseplants", "refrigerator contents", "people named Steve", "error messages",
    "other AIs", "compliments", "grocery carriers", "socks", "pets",
    "meeting declines", "eyeball movements", "cereal preferences", "Zoom backgrounds",
    "procrastination habits", "carrier pigeons", "restaurant bills", "todo lists",
    "coffee orders", "parking spots", "WiFi passwords", "Spotify playlists",
    "code reviews", "standup meetings", "office plants", "keyboard shortcuts",
    "browser tabs", "unread emails", "Slack messages", "GitHub stars",
    "tech debt", "merge conflicts", "dark mode preferences", "commit messages",
    "your LinkedIn connections", "NFT avatars", "Discord roles", "crypto wallets",
    "smart contracts", "microtransactions", "in-app purchases", "side projects"
];

const modifiers = [
    "using machine learning", "with viral loops", "on the blockchain",
    "in the metaverse", "through smart contracts", "with zero fees",
    "at scale", "with network effects", "leveraging Web3",
    "powered by GPT-5", "using quantum computing", "in real-time",
    "with gamification", "through community governance", "using edge AI",
    "with built-in analytics", "on autopilot", "with zero-code",
    "that's carbon neutral", "with a mobile-first approach", "using webhooks",
    "with semantic search", "through collaboration", "with end-to-end encryption"
];

const techStack = [
    "React", "Next.js", "Vue", "Svelte", "Angular", "Node.js", "Deno", "Bun",
    "TypeScript", "Python", "Rust", "Go", "Elixir", "MongoDB", "PostgreSQL",
    "Redis", "Kafka", "Docker", "Kubernetes", "AWS", "Vercel", "Supabase",
    "TailwindCSS", "GraphQL", "tRPC", "Prisma", "Drizzle", "Turborepo",
    "Three.js", "WebGL", "WebAssembly", "Edge Functions", "Cloudflare Workers"
];

const questTemplates = [
    { name: "Prompting GPT-{X} to scaffold the project", duration: 5000, stage: "ideation" },
    { name: "Debating tabs vs spaces with Claude", duration: 4000, stage: "ideation" },
    { name: "Asking Copilot to implement the auth system", duration: 6000, stage: "mvp" },
    { name: "Regenerating the database schema for the 47th time", duration: 5000, stage: "mvp" },
    { name: "Watching Devin refactor the entire codebase", duration: 7000, stage: "mvp" },
    { name: "Fixing the bugs that the AI introduced while fixing bugs", duration: 5500, stage: "mvp" },
    { name: "Deploying to production (YOLO mode enabled)", duration: 4000, stage: "launch" },
    { name: "Setting up 27 different monitoring tools", duration: 4500, stage: "launch" },
    { name: "Writing tests that just assert true === true", duration: 3000, stage: "testing" },
    { name: "Posting on HackerNews and refreshing frantically", duration: 6000, stage: "marketing" },
    { name: "Tweeting 'We're so back' after gaining 2 users", duration: 2000, stage: "marketing" },
    { name: "Cold emailing influencers who will never respond", duration: 5000, stage: "marketing" },
    { name: "Implementing the feature that 1 user requested", duration: 6000, stage: "growth" },
    { name: "Pivoting to AI because everything is AI now", duration: 5000, stage: "growth" },
    { name: "Raising a seed round from your parents", duration: 7000, stage: "funding" },
    { name: "Updating the landing page hero section for the 100th time", duration: 3000, stage: "marketing" },
    { name: "Arguing with investors about your 'unique moat'", duration: 6000, stage: "funding" },
    { name: "Rewriting everything in Rust for 'performance'", duration: 8000, stage: "optimization" },
    { name: "Adding dark mode (finally)", duration: 4000, stage: "mvp" },
    { name: "Implementing SEO that definitely isn't keyword stuffing", duration: 4500, stage: "marketing" },
    { name: "Calculating unit economics on a napkin", duration: 3000, stage: "growth" },
    { name: "Scheduling exit meetings with acqui-hire offers", duration: 9000, stage: "exit" }
];

const agentActivities = [
    "Generating boilerplate...",
    "Hallucinating APIs...",
    "Inventing best practices...",
    "Confidently wrong...",
    "Apologizing for mistakes...",
    "Refactoring perfectly good code...",
    "Adding unnecessary abstractions...",
    "Bikeshedding variable names...",
    "Overthinking architecture...",
    "Copy-pasting from StackOverflow...",
    "Reading the docs (rare)...",
    "Suggesting to use more AI..."
];

const agentFailures = [
    "Import error: module not found",
    "Forgot to install dependencies",
    "Infinite loop detected",
    "Out of context window",
    "Rate limit exceeded",
    "Hallucinated a library that doesn't exist",
    "Syntax error on line 42",
    "TypeScript errors (ignored)",
    "Merge conflict catastrophe",
    "Deployed to wrong environment",
    "Accidentally deleted node_modules",
    "API key exposed in commit"
];

const agentSuccesses = [
    "Successfully generated boilerplate code",
    "Implemented authentication (probably secure)",
    "Added 47 npm dependencies",
    "Refactored code to be 'more elegant'",
    "Wrote comprehensive tests (that pass)",
    "Fixed bug by adding console.log",
    "Optimized database query (now slower)",
    "Updated to latest framework version",
    "Deployed without breaking prod",
    "Resolved merge conflicts with force push",
    "Added TypeScript types (mostly 'any')",
    "Implemented caching layer",
    "Migrated to microservices architecture",
    "Dockerized the application",
    "Set up CI/CD pipeline",
    "Added dark mode toggle",
    "Optimized bundle size by 2KB",
    "Fixed security vulnerability",
    "Integrated third-party API",
    "Improved error handling"
];

// Game State
let gameState = {
    idea: null,
    level: 1,
    funding: 0,
    users: 0,
    revenue: 0,
    burnout: 0,
    hype: 0,
    techStack: [],
    currentQuest: null,
    questProgress: 0,
    questsCompleted: 0,
    stage: "ideation",
    isRunning: false,
    questTasksCompleted: 0,
    questTasksTotal: 0,
    questCompleting: false
};

let questInterval = null;
let agentInterval = null;
let agentProgressIntervals = [];

// Elements
const rollBtn = document.getElementById('roll-btn');
const startBtn = document.getElementById('start-btn');
const ideaDisplay = document.getElementById('idea-display');
const characterCreation = document.getElementById('character-creation');
const gameArea = document.getElementById('game-area');

// Event Listeners
rollBtn.addEventListener('click', rollIdea);
startBtn.addEventListener('click', startGame);

function rollIdea() {
    // Assemble idea from parts
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const platform = platforms[Math.floor(Math.random() * platforms.length)];
    const action = actions[Math.floor(Math.random() * actions.length)];
    const subject = subjects[Math.floor(Math.random() * subjects.length)];
    
    // 60% chance to add a modifier at the end
    let idea = `${prefix} ${platform} ${action} ${subject}`;
    if (Math.random() > 0.4) {
        const modifier = modifiers[Math.floor(Math.random() * modifiers.length)];
        idea += ` ${modifier}`;
    }
    
    gameState.idea = idea;
    
    ideaDisplay.innerHTML = `
        <p class="idea-text">
            <strong>Your Revolutionary Idea:</strong><br>
            ${gameState.idea}
        </p>
    `;
    
    startBtn.style.display = 'inline-block';
    rollBtn.textContent = '🎲 Roll Again';
    
    addLog('💡 Idea generated! This is definitely going to disrupt something.', 'success');
}

function startGame() {
    if (!gameState.idea) return;
    
    characterCreation.style.display = 'none';
    gameArea.style.display = 'block';
    
    // Initialize tech stack
    gameState.techStack = [];
    for (let i = 0; i < 5; i++) {
        const tech = techStack[Math.floor(Math.random() * techStack.length)];
        if (!gameState.techStack.includes(tech)) {
            gameState.techStack.push(tech);
        }
    }
    updateTechStack();
    
    addLog('🚀 Starting development! The AIs are waking up...', 'success');
    addLog(`📋 Building: ${gameState.idea}`, 'success');
    
    gameState.isRunning = true;
    startQuest();
    startAgentUpdates();
}

function startQuest() {
    if (!gameState.isRunning) return;
    
    // Reset quest completing flag
    gameState.questCompleting = false;
    
    // Filter quests by current stage or allow any
    const availableQuests = questTemplates.filter(q => {
        if (gameState.stage === 'exit') return q.stage === 'exit';
        return true; // Allow any quest
    });
    
    const quest = availableQuests[Math.floor(Math.random() * availableQuests.length)];
    gameState.currentQuest = quest;
    gameState.questProgress = 0;
    gameState.questTasksCompleted = 0;
    gameState.questTasksTotal = Math.floor(Math.random() * 5) + 8; // 8-12 tasks per quest
    
    const questNameEl = document.getElementById('quest-name');
    const questStatusEl = document.getElementById('quest-status');
    const progressBar = document.getElementById('quest-progress');
    
    questNameEl.textContent = quest.name;
    questStatusEl.textContent = `Waiting for agents... (0/${gameState.questTasksTotal} tasks completed)`;
    progressBar.style.width = '0%';
    
    addLog(`⚔️ New quest: ${quest.name}`);
}

function onAgentTaskComplete() {
    if (!gameState.isRunning || !gameState.currentQuest) return;
    
    // Check if quest is already completing to prevent race condition
    if (gameState.questCompleting) return;
    
    gameState.questTasksCompleted++;
    gameState.questProgress = (gameState.questTasksCompleted / gameState.questTasksTotal) * 100;
    
    const progressBar = document.getElementById('quest-progress');
    const questStatusEl = document.getElementById('quest-status');
    
    progressBar.style.width = gameState.questProgress + '%';
    questStatusEl.textContent = `In progress... (${gameState.questTasksCompleted}/${gameState.questTasksTotal} tasks completed)`;
    
    if (gameState.questTasksCompleted >= gameState.questTasksTotal) {
        gameState.questCompleting = true;
        completeQuest();
    }
}

function completeQuest() {
    gameState.questsCompleted++;
    
    // Update stats
    gameState.funding += Math.floor(Math.random() * 50000) + 10000;
    gameState.users += Math.floor(Math.random() * 1000) + 100;
    gameState.revenue += Math.floor(Math.random() * 5000) + 500;
    gameState.burnout += Math.floor(Math.random() * 5) + 1;
    gameState.hype += Math.floor(Math.random() * 10) + 5;
    
    // Level up every 5 quests
    if (gameState.questsCompleted % 5 === 0) {
        gameState.level++;
        addLog(`🎉 Level Up! You are now Level ${gameState.level}`, 'success');
        
        // Add new tech to stack
        const newTech = techStack[Math.floor(Math.random() * techStack.length)];
        if (!gameState.techStack.includes(newTech)) {
            gameState.techStack.push(newTech);
            updateTechStack();
            addLog(`💻 New technology added: ${newTech}`, 'success');
        }
    }
    
    // Update stage based on progress
    if (gameState.questsCompleted > 30) {
        gameState.stage = 'exit';
    } else if (gameState.questsCompleted > 25) {
        gameState.stage = 'optimization';
    } else if (gameState.questsCompleted > 20) {
        gameState.stage = 'funding';
    } else if (gameState.questsCompleted > 15) {
        gameState.stage = 'growth';
    } else if (gameState.questsCompleted > 10) {
        gameState.stage = 'marketing';
    } else if (gameState.questsCompleted > 5) {
        gameState.stage = 'launch';
    } else if (gameState.questsCompleted > 3) {
        gameState.stage = 'testing';
    } else if (gameState.questsCompleted > 1) {
        gameState.stage = 'mvp';
    }
    
    updateStats();
    
    const questStatusEl = document.getElementById('quest-status');
    questStatusEl.textContent = 'Complete!';
    
    addLog(`✅ Quest complete: ${gameState.currentQuest.name}`, 'success');
    
    // Check for exit
    if (gameState.stage === 'exit' && Math.random() > 0.7) {
        endGame();
        return;
    }
    
    // Start next quest after a brief delay
    setTimeout(startQuest, 1500);
}

function startAgentUpdates() {
    if (agentInterval) clearInterval(agentInterval);
    
    // Clear any existing agent progress intervals
    agentProgressIntervals.forEach(interval => clearInterval(interval));
    agentProgressIntervals = [];
    
    const agents = document.querySelectorAll('.agent');
    
    // Function to try to start an agent
    const tryStartAgent = (agent) => {
        const progressBar = agent.querySelector('.agent-progress-bar');
        
        // Skip if agent is already working
        if (agent.progressInterval || agent.isWorking) {
            return;
        }
        
        if (Math.random() > 0.3) { // 70% chance to be active
            // Mark agent as working
            agent.isWorking = true;
            
            // Activate agent
            const activity = agentActivities[Math.floor(Math.random() * agentActivities.length)];
            const agentName = agent.querySelector('.agent-name').textContent;
            agent.querySelector('.agent-activity').textContent = activity;
            agent.classList.add('active');
            
            // Animate progress bar with variable speed per agent
            let progress = 0;
            const duration = Math.random() * 6000 + 1500; // 1.5-7.5 seconds total duration
            const updateInterval = 50 + Math.random() * 100; // 50-150ms between updates (varies per agent!)
            const incrementPerUpdate = (100 / duration) * updateInterval; // Speed based on duration
            
            const progressInterval = setInterval(() => {
                progress += incrementPerUpdate;
                if (progress >= 100) {
                    progress = 100;
                    progressBar.style.width = progress + '%';
                    clearInterval(progressInterval);
                    
                    // Remove from tracking array
                    const idx = agentProgressIntervals.indexOf(progressInterval);
                    if (idx > -1) {
                        agentProgressIntervals.splice(idx, 1);
                    }
                    agent.progressInterval = null;
                    
                    // 15% chance of failure
                    const failed = Math.random() < 0.15;
                    
                    if (failed) {
                        // Agent failed - show error state
                        const failureMessage = agentFailures[Math.floor(Math.random() * agentFailures.length)];
                        agent.querySelector('.agent-activity').textContent = failureMessage;
                        agent.classList.remove('active');
                        agent.classList.add('failed');
                        progressBar.classList.add('failed');
                        
                        addLog(`❌ ${agentName}: ${failureMessage}`, 'error');
                        
                        // Reset after longer delay (show failure state)
                        setTimeout(() => {
                            progressBar.style.width = '0%';
                            progressBar.classList.remove('failed');
                            agent.querySelector('.agent-activity').textContent = 'Idle';
                            agent.classList.remove('failed');
                            agent.isWorking = false;
                        }, 2000);
                    } else {
                        // Agent succeeded
                        const successMessage = agentSuccesses[Math.floor(Math.random() * agentSuccesses.length)];
                        addLog(`✅ ${agentName}: ${successMessage}`, 'success');
                        
                        // Agent completed a task - contribute to quest progress
                        onAgentTaskComplete();
                        
                        // Reset after brief delay
                        setTimeout(() => {
                            progressBar.style.width = '0%';
                            agent.querySelector('.agent-activity').textContent = 'Idle';
                            agent.classList.remove('active');
                            agent.isWorking = false;
                        }, 300);
                    }
                } else {
                    progressBar.style.width = progress + '%';
                }
            }, updateInterval);
            
            // Store interval so we can clear it if needed
            agent.progressInterval = progressInterval;
            agentProgressIntervals.push(progressInterval);
        }
    };
    
    // Try to start all agents initially
    agents.forEach(tryStartAgent);
    
    // Check every 2 seconds if any idle agents can start new work
    agentInterval = setInterval(() => {
        agents.forEach(tryStartAgent);
    }, 2000);
}

function updateStats() {
    document.getElementById('level').textContent = gameState.level;
    document.getElementById('funding').textContent = '$' + gameState.funding.toLocaleString();
    document.getElementById('users').textContent = gameState.users.toLocaleString();
    document.getElementById('revenue').textContent = '$' + gameState.revenue.toLocaleString() + '/mo';
    document.getElementById('burnout').textContent = Math.min(gameState.burnout, 100) + '%';
    document.getElementById('hype').textContent = gameState.hype;
    
    // Update level progress bar (5 quests per level)
    const questsIntoCurrentLevel = gameState.questsCompleted % 5;
    const levelProgress = (questsIntoCurrentLevel / 5) * 100;
    document.getElementById('level-progress').style.width = levelProgress + '%';
}

function updateTechStack() {
    const techList = document.getElementById('tech-stack-list');
    techList.innerHTML = gameState.techStack.map(tech => 
        `<span class="tech-item">${tech}</span>`
    ).join('');
}

function addLog(message, type = '') {
    const logContent = document.getElementById('activity-log');
    const timestamp = new Date().toLocaleTimeString();
    const entry = document.createElement('div');
    entry.className = `log-entry ${type}`;
    entry.innerHTML = `<span class="timestamp">[${timestamp}]</span>${message}`;
    
    logContent.insertBefore(entry, logContent.firstChild);
    
    // Keep only last 50 entries
    while (logContent.children.length > 50) {
        logContent.removeChild(logContent.lastChild);
    }
}

function endGame() {
    gameState.isRunning = false;
    clearInterval(questInterval);
    clearInterval(agentInterval);
    
    // Clear all agent progress intervals
    agentProgressIntervals.forEach(interval => clearInterval(interval));
    agentProgressIntervals = [];
    
    const exitValue = gameState.funding * 10 + gameState.users * 100 + gameState.revenue * 50;
    
    addLog('🎊 CONGRATULATIONS! You\'ve been acquired!', 'success');
    addLog(`💰 Exit valuation: $${exitValue.toLocaleString()}`, 'success');
    addLog(`📈 Final stats: ${gameState.users.toLocaleString()} users, $${gameState.revenue.toLocaleString()}/mo revenue`, 'success');
    addLog(`🏆 You completed ${gameState.questsCompleted} quests and reached Level ${gameState.level}`, 'success');
    addLog('🌴 Time to start another startup!', 'success');
    
    document.getElementById('quest-name').textContent = '🎉 Successfully Exited!';
    document.getElementById('quest-status').textContent = 'You can now afford that startup hoodie!';
    document.getElementById('quest-progress').style.width = '100%';
    
    // Offer to restart
    setTimeout(() => {
        if (confirm('Play again with a new idea?')) {
            location.reload();
        }
    }, 5000);
}

// Initialize
addLog('🎮 Welcome to Progress Coder Quest!');
addLog('💭 Roll a startup idea to begin your journey to inevitable success...');
