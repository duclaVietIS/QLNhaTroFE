<!-- Home Page với CSS thông thường -->
<template>
  <div class="home-page">
    <!-- Hero Section -->
    <div class="hero-section">
      <h1>🏠 Welcome to VueJS Application</h1>
      <p>This is a modern VueJS application with clean CSS styling</p>
      <div class="button-group">
        <button class="btn btn-primary">Get Started</button>
        <button class="btn btn-secondary">Learn More</button>
      </div>
    </div>

    <!-- Features Grid -->
    <div class="features-grid">
      <div class="feature-card">
        <div class="feature-icon">⚡</div>
        <h3>Fast Performance</h3>
        <p>Built with Vite for lightning-fast development and optimized production builds.</p>
      </div>
      
      <div class="feature-card">
        <div class="feature-icon">🎨</div>
        <h3>Beautiful UI</h3>
        <p>Styled with modern CSS for responsive and beautiful user interfaces.</p>
      </div>
      
      <div class="feature-card">
        <div class="feature-icon">🚀</div>
        <h3>Easy to Use</h3>
        <p>Simple and intuitive navigation with Vue Router for seamless page transitions.</p>
      </div>
    </div>

    <!-- Stats Section -->
    <div class="stats-section">
      <h2>Project Stats</h2>
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-number blue">100%</div>
          <div class="stat-label">Vue 3</div>
        </div>
        <div class="stat-card">
          <div class="stat-number green">⚡</div>
          <div class="stat-label">Vite</div>
        </div>
        <div class="stat-card">
          <div class="stat-number purple">🎨</div>
          <div class="stat-label">Clean CSS</div>
        </div>
        <div class="stat-card">
          <div class="stat-number orange">🛣️</div>
          <div class="stat-label">Vue Router</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style scoped>
.home-page {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

/* Hero Section */
.hero-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 60px 40px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  text-align: center;
  margin-bottom: 40px;
}

.hero-section h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  font-weight: bold;
}

.hero-section p {
  font-size: 1.2rem;
  margin-bottom: 30px;
  opacity: 0.9;
}

.button-group {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
}

.btn-primary {
  background: white;
  color: #667eea;
}

.btn-primary:hover {
  background: #f8f9ff;
  transform: translateY(-2px);
}

.btn-secondary {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.btn-secondary:hover {
  background: white;
  color: #667eea;
}

/* Features Grid */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 50px;
}

.feature-card {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 20px;
}

.feature-card h3 {
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #333;
}

.feature-card p {
  color: #666;
  line-height: 1.6;
}

/* Stats Section */
.stats-section {
  background: white;
  padding: 50px 30px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  text-align: center;
}

.stats-section h2 {
  font-size: 2rem;
  margin-bottom: 40px;
  color: #333;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
}

.stat-card {
  padding: 20px;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.stat-number.blue { color: #3b82f6; }
.stat-number.green { color: #10b981; }
.stat-number.purple { color: #8b5cf6; }
.stat-number.orange { color: #f59e0b; }

.stat-label {
  color: #666;
  font-weight: 500;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-section {
    padding: 40px 20px;
  }
  
  .hero-section h1 {
    font-size: 2rem;
  }
  
  .button-group {
    flex-direction: column;
    align-items: center;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>