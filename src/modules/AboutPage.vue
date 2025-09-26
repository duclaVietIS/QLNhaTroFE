<!-- About Page với CSS thông thường -->
<template>
  <div class="about-page">
    <!-- Header -->
    <div class="page-header">
      <h1>
        <i class="fas fa-info-circle"></i>
        About Our Application
      </h1>
      <p>Learn more about this modern VueJS application and the technologies behind it.</p>
    </div>

    <!-- Technology Stack -->
    <div class="tech-grid">
      <div class="tech-card vue">
        <i class="fab fa-vuejs"></i>
        <h3>Vue.js 3</h3>
        <p>Progressive JavaScript framework for building user interfaces</p>
      </div>

      <div class="tech-card vite">
        <i class="fas fa-bolt"></i>
        <h3>Vite</h3>
        <p>Next generation frontend build tool for faster development</p>
      </div>

      <div class="tech-card css">
        <i class="fas fa-paint-brush"></i>
        <h3>Modern CSS</h3>
        <p>Clean and maintainable CSS for rapid UI development</p>
      </div>

      <div class="tech-card router">
        <i class="fas fa-route"></i>
        <h3>Vue Router</h3>
        <p>Official router for Vue.js for building SPAs</p>
      </div>
    </div>

    <!-- Features Section -->
    <div class="features-section">
      <h2>
        <i class="fas fa-star"></i>
        Key Features
      </h2>
      <div class="features-list">
        <div class="feature-item">
          <i class="fas fa-check-circle"></i>
          <span>Responsive Design with Modern CSS</span>
        </div>
        <div class="feature-item">
          <i class="fas fa-check-circle"></i>
          <span>FontAwesome Icons Integration</span>
        </div>
        <div class="feature-item">
          <i class="fas fa-check-circle"></i>
          <span>Smooth CSS Animations</span>
        </div>
        <div class="feature-item">
          <i class="fas fa-check-circle"></i>
          <span>Modern Vue 3 Composition API</span>
        </div>
        <div class="feature-item">
          <i class="fas fa-check-circle"></i>
          <span>Fast Hot Module Replacement</span>
        </div>
        <div class="feature-item">
          <i class="fas fa-check-circle"></i>
          <span>Optimized Production Build</span>
        </div>
      </div>
    </div>

    <!-- Stats Cards -->
    <div class="stats-cards">
      <div class="stat-card blue">
        <i class="fas fa-code"></i>
        <div class="stat-value">Vue 3</div>
        <div class="stat-label">Latest Version</div>
      </div>

      <div class="stat-card green">
        <i class="fas fa-rocket"></i>
        <div class="stat-value">Fast</div>
        <div class="stat-label">Lightning Speed</div>
      </div>

      <div class="stat-card purple">
        <i class="fas fa-mobile-alt"></i>
        <div class="stat-value">Responsive</div>
        <div class="stat-label">All Devices</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPage'
}
</script>

<style scoped>
.about-page {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

/* Page Header */
.page-header {
  text-align: center;
  margin-bottom: 60px;
  animation: fadeInDown 0.8s ease-out;
}

.page-header h1 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
}

.page-header h1 i {
  color: #3b82f6;
  margin-right: 15px;
}

.page-header p {
  font-size: 1.2rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
}

/* Technology Grid */
.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
}

.tech-card {
  background: white;
  border-radius: 12px;
  padding: 40px 30px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: fadeInUp 0.8s ease-out;
  animation-fill-mode: both;
}

.tech-card:nth-child(1) { animation-delay: 0.2s; }
.tech-card:nth-child(2) { animation-delay: 0.4s; }
.tech-card:nth-child(3) { animation-delay: 0.6s; }
.tech-card:nth-child(4) { animation-delay: 0.8s; }

.tech-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 8px 30px rgba(0,0,0,0.15);
}

.tech-card i {
  font-size: 4rem;
  margin-bottom: 20px;
}

.tech-card.vue i { color: #4fc08d; }
.tech-card.vite i { color: #ffc131; }
.tech-card.css i { color: #3b82f6; }
.tech-card.router i { color: #8b5cf6; }

.tech-card h3 {
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #333;
}

.tech-card p {
  color: #666;
  line-height: 1.6;
}

/* Features Section */
.features-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 50px 40px;
  border-radius: 12px;
  margin-bottom: 60px;
  animation: fadeInLeft 0.8s ease-out;
}

.features-section h2 {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 40px;
}

.features-section h2 i {
  margin-right: 15px;
}

.features-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 1.1rem;
}

.feature-item i {
  color: #4ade80;
  font-size: 1.5rem;
}

/* Stats Cards */
.stats-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  animation: fadeInRight 0.8s ease-out;
}

.stat-card {
  background: white;
  border-radius: 12px;
  padding: 40px 30px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  border-left: 4px solid;
  transition: transform 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
}

.stat-card.blue { border-left-color: #3b82f6; }
.stat-card.green { border-left-color: #10b981; }
.stat-card.purple { border-left-color: #8b5cf6; }

.stat-card i {
  font-size: 3rem;
  margin-bottom: 20px;
}

.stat-card.blue i { color: #3b82f6; }
.stat-card.green i { color: #10b981; }
.stat-card.purple i { color: #8b5cf6; }

.stat-value {
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}

.stat-label {
  color: #666;
  font-weight: 500;
}

/* Animations */
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2rem;
  }
  
  .features-section {
    padding: 30px 20px;
  }
  
  .features-list {
    grid-template-columns: 1fr;
  }
}
</style>
