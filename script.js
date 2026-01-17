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
    "Suggesting to use more AI...",
    "Writing TODO comments...",
    "Debating framework choices...",
    "Adding console.logs everywhere...",
    "Optimizing prematurely...",
    "Implementing design patterns...",
    "Creating wrapper functions...",
    "Renaming variables for clarity...",
    "Adding error handling...",
    "Writing inline documentation...",
    "Configuring linters...",
    "Setting up prettier...",
    "Installing more dependencies...",
    "Upgrading packages...",
    "Fighting with TypeScript...",
    "Adding unit tests...",
    "Mocking external APIs...",
    "Fixing merge conflicts...",
    "Squashing commits...",
    "Updating README...",
    "Drawing architecture diagrams...",
    "Containerizing everything...",
    "Setting up monitoring...",
    "Implementing feature flags...",
    "Adding logging statements...",
    "Optimizing SQL queries...",
    "Caching aggressively...",
    "Implementing pagination...",
    "Adding rate limiting..."
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
    "API key exposed in commit",
    "Circular dependency detected",
    "Memory leak in production",
    "CORS errors everywhere",
    "Authentication token expired",
    "Database connection failed",
    "Port already in use",
    "SSL certificate expired",
    "Pushed directly to main",
    "Forgot to gitignore .env",
    "Hardcoded localhost URLs",
    "Missing semicolon (somehow)",
    "Wrong variable scope",
    "Callback hell achieved",
    "Promise rejection unhandled",
    "Async/await misuse",
    "State mutation detected",
    "Props drilling too deep",
    "useEffect dependency missing",
    "Memory exhausted",
    "Stack overflow (the bad kind)",
    "Segmentation fault",
    "NULL pointer dereference",
    "Integer overflow",
    "Off-by-one error",
    "Race condition triggered",
    "Deadlock detected",
    "Timezone conversion failed",
    "Unicode encoding nightmare",
    "Regex catastrophic backtracking",
    "JSON parsing failed",
    "XML is not valid",
    "YAML indentation wrong",
    "Docker container won't start",
    "Kubernetes pod crashing",
    "Load balancer misconfigured",
    "CDN cache invalidation failed",
    "S3 bucket permissions denied",
    "Lambda timeout exceeded"
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
    "Improved error handling",
    "Implemented lazy loading",
    "Added internationalization support",
    "Set up database migrations",
    "Configured auto-scaling",
    "Implemented websocket connections",
    "Added file upload functionality",
    "Created admin dashboard",
    "Set up email notifications",
    "Implemented search functionality",
    "Added user permissions system",
    "Optimized image loading",
    "Set up error tracking",
    "Implemented infinite scroll",
    "Added social media integration",
    "Created API documentation",
    "Set up staging environment",
    "Implemented rate limiting",
    "Added health check endpoints",
    "Configured load balancing",
    "Set up backup automation",
    "Implemented data validation",
    "Added accessibility features",
    "Optimized mobile experience",
    "Set up analytics tracking",
    "Implemented A/B testing",
    "Added push notifications",
    "Created onboarding flow",
    "Set up feature toggles",
    "Implemented SSO integration",
    "Added payment processing"
];

// Game State
let gameState = {
    idea: null,
    level: 1,
    funding: 50000, // Start with seed funding
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
    questCompleting: false,
    subscriptionRevenuePerUser: 10, // $ per user per month
    agentCostPerRun: 50 // $ per agent task
};

let questInterval = null;
let agentInterval = null;
let agentProgressIntervals = [];
let revenueInterval = null; // For periodic subscription revenue

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
    
    // Display startup idea
    document.getElementById('startup-idea-text').textContent = gameState.idea;
    updateStageDiagram();
    
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
    addLog(`💰 Starting with $${gameState.funding.toLocaleString()} in seed funding`, 'success');
    addLog(`💵 Subscription revenue: $${gameState.subscriptionRevenuePerUser} per user (collected every 30s)`, 'success');
    addLog(`💸 Agent cost: $${gameState.agentCostPerRun} per task`, 'success');
    
    gameState.isRunning = true;
    startQuest();
    startAgentUpdates();
    startRevenueGeneration();
}

function startRevenueGeneration() {
    if (revenueInterval) clearInterval(revenueInterval);
    
    // Generate subscription revenue every 30 seconds
    revenueInterval = setInterval(() => {
        if (!gameState.isRunning) return;
        
        const monthlyRevenue = gameState.users * gameState.subscriptionRevenuePerUser;
        if (monthlyRevenue > 0) {
            gameState.funding += monthlyRevenue;
            gameState.revenue = monthlyRevenue; // Update monthly revenue display
            updateStats();
            addLog(`💰 Subscription revenue: +$${monthlyRevenue.toLocaleString()} from ${gameState.users.toLocaleString()} users`, 'success');
        }
    }, 30000); // Every 30 seconds = 1 "month" in game time
}

function deductAgentCost() {
    if (!gameState.isRunning) return false;
    
    gameState.funding -= gameState.agentCostPerRun;
    updateStats();
    
    // Check if funding ran out
    if (gameState.funding <= 0) {
        gameState.funding = 0;
        updateStats();
        gameOver();
        return false; // Indicates game over
    }
    
    return true; // Continue playing
}

function gameOver() {
    gameState.isRunning = false;
    clearInterval(questInterval);
    clearInterval(agentInterval);
    clearInterval(revenueInterval);
    
    // Clear all agent progress intervals
    agentProgressIntervals.forEach(interval => clearInterval(interval));
    agentProgressIntervals = [];
    
    addLog('💀 OUT OF FUNDING! Your startup has run out of money!', 'error');
    addLog(`📊 Final stats: Level ${gameState.level}, ${gameState.users.toLocaleString()} users, ${gameState.questsCompleted} quests completed`, 'error');
    addLog('💡 Try to balance user growth with AI agent costs!', '');
    
    document.getElementById('quest-name').textContent = '💸 Bankrupt!';
    document.getElementById('quest-status').textContent = 'Out of funding - Game Over';
    
    // Offer to restart
    setTimeout(() => {
        if (confirm('You ran out of funding! Play again with a new idea?')) {
            location.reload();
        }
    }, 3000);
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
    
    // Update stats - gain users (which generate subscription revenue)
    const newUsers = Math.floor(Math.random() * 1000) + 100;
    gameState.users += newUsers;
    gameState.burnout += Math.floor(Math.random() * 5) + 1;
    gameState.hype += Math.floor(Math.random() * 10) + 5;
    
    addLog(`👥 Gained ${newUsers} new users! Total: ${gameState.users.toLocaleString()}`, 'success');
    
    // Level up every 5 quests
    const previousLevel = gameState.level;
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
    
    // Update stage based on level (with varying durations per stage)
    const previousStage = gameState.stage;
    if (gameState.level >= 50) {
        gameState.stage = 'exit';
    } else if (gameState.level >= 40) {
        gameState.stage = 'optimization';
    } else if (gameState.level >= 30) {
        gameState.stage = 'funding';
    } else if (gameState.level >= 20) {
        gameState.stage = 'growth';
    } else if (gameState.level >= 12) {
        gameState.stage = 'marketing';
    } else if (gameState.level >= 6) {
        gameState.stage = 'launch';
    } else if (gameState.level >= 4) {
        gameState.stage = 'testing';
    } else if (gameState.level >= 2) {
        gameState.stage = 'mvp';
    } else {
        gameState.stage = 'ideation';
    }
    
    // Log stage change (only when level changes and stage changes)
    if (previousLevel !== gameState.level && previousStage !== gameState.stage) {
        updateStageDiagram();
        addLog(`📍 Stage advanced: ${previousStage} → ${gameState.stage}`, 'success');
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
                        
                        // Deduct agent cost - check if game continues
                        const canContinue = deductAgentCost();
                        if (!canContinue) {
                            // Game over due to lack of funding
                            return;
                        }
                        
                        addLog(`✅ ${agentName}: ${successMessage} (-$${gameState.agentCostPerRun})`, 'success');
                        
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

function updateStageDiagram() {
    const stages = ['ideation', 'mvp', 'testing', 'launch', 'marketing', 'growth', 'funding', 'optimization', 'exit'];
    const currentStageIndex = stages.indexOf(gameState.stage);
    
    // Update all stage nodes
    stages.forEach((stage, index) => {
        const node = document.querySelector(`.stage-node[data-stage="${stage}"]`);
        if (!node) return;
        
        node.classList.remove('active', 'completed');
        
        if (index === currentStageIndex) {
            node.classList.add('active');
        } else if (index < currentStageIndex) {
            node.classList.add('completed');
        }
    });
    
    // Update connectors
    const connectors = document.querySelectorAll('.stage-connector');
    connectors.forEach((connector, index) => {
        connector.classList.remove('completed');
        if (index < currentStageIndex) {
            connector.classList.add('completed');
        }
    });
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
    clearInterval(revenueInterval);
    
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
