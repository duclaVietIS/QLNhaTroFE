<!-- Contact Page với CSS thông thường -->
<template>
  <div class="contact-page">
    <!-- Header -->
    <div class="page-header">
      <h1>
        <i class="fas fa-envelope"></i>
        Contact Us
      </h1>
      <p>Get in touch with our team for any questions or support.</p>
    </div>

    <div class="contact-grid">
      <!-- Contact Form -->
      <div class="contact-form-section">
        <div class="form-card">
          <h2>Send us a Message</h2>
          <form class="contact-form">
            <div class="form-group">
              <label for="name">
                <i class="fas fa-user"></i>
                Full Name
              </label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Your full name"
                required
              >
            </div>

            <div class="form-group">
              <label for="email">
                <i class="fas fa-envelope"></i>
                Email Address
              </label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="your.email@example.com"
                required
              >
            </div>

            <div class="form-group">
              <label for="subject">
                <i class="fas fa-tag"></i>
                Subject
              </label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                placeholder="What is this about?"
                required
              >
            </div>

            <div class="form-group">
              <label for="message">
                <i class="fas fa-comment"></i>
                Message
              </label>
              <textarea 
                id="message" 
                name="message" 
                rows="5" 
                placeholder="Tell us more about your inquiry..."
                required
              ></textarea>
            </div>

            <button type="submit" class="submit-button">
              <i class="fas fa-paper-plane"></i>
              Send Message
            </button>
          </form>
        </div>
      </div>

      <!-- Contact Info -->
      <div class="contact-info-section">
        <!-- Contact Details -->
        <div class="info-card contact-details">
          <h3>
            <i class="fas fa-info-circle"></i>
            Contact Information
          </h3>
          <div class="contact-item">
            <i class="fas fa-map-marker-alt"></i>
            <div>
              <strong>Address</strong>
              <p>123 Tech Street, Digital City, DC 12345</p>
            </div>
          </div>
          <div class="contact-item">
            <i class="fas fa-phone"></i>
            <div>
              <strong>Phone</strong>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>
          <div class="contact-item">
            <i class="fas fa-envelope"></i>
            <div>
              <strong>Email</strong>
              <p>contact@example.com</p>
            </div>
          </div>
        </div>

        <!-- Office Hours -->
        <div class="info-card office-hours">
          <h3>
            <i class="fas fa-clock"></i>
            Office Hours
          </h3>
          <div class="hours-list">
            <div class="hours-item">
              <span>Monday - Friday</span>
              <span>9:00 AM - 6:00 PM</span>
            </div>
            <div class="hours-item">
              <span>Saturday</span>
              <span>10:00 AM - 4:00 PM</span>
            </div>
            <div class="hours-item">
              <span>Sunday</span>
              <span>Closed</span>
            </div>
          </div>
        </div>

        <!-- Social Links -->
        <div class="info-card social-links">
          <h3>
            <i class="fas fa-share-alt"></i>
            Follow Us
          </h3>
          <div class="social-buttons">
            <a href="#" class="social-btn facebook">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="social-btn twitter">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="social-btn linkedin">
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a href="#" class="social-btn github">
              <i class="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactPage'
}
</script>

<style scoped>
.contact-page {
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

/* Contact Grid */
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 40px;
  animation: fadeInUp 0.8s ease-out;
}

/* Contact Form Section */
.form-card {
  background: white;
  border-radius: 12px;
  padding: 40px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
}

.form-card h2 {
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 30px;
  text-align: center;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group label {
  font-weight: 600;
  color: #555;
  display: flex;
  align-items: center;
  gap: 10px;
}

.form-group label i {
  color: #3b82f6;
  width: 16px;
}

.form-group input,
.form-group textarea {
  padding: 12px 16px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.submit-button {
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.submit-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(59, 130, 246, 0.3);
}

/* Contact Info Section */
.contact-info-section {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.info-card {
  background: white;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.info-card h3 {
  font-size: 1.3rem;
  color: #333;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.info-card h3 i {
  color: #3b82f6;
}

/* Contact Details */
.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  margin-bottom: 20px;
}

.contact-item:last-child {
  margin-bottom: 0;
}

.contact-item i {
  color: #3b82f6;
  font-size: 1.2rem;
  margin-top: 2px;
  width: 20px;
  flex-shrink: 0;
}

.contact-item div strong {
  display: block;
  color: #333;
  font-weight: 600;
  margin-bottom: 5px;
}

.contact-item div p {
  color: #666;
  margin: 0;
  line-height: 1.5;
}

/* Office Hours */
.hours-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.hours-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #f1f5f9;
}

.hours-item:last-child {
  border-bottom: none;
}

.hours-item span:first-child {
  font-weight: 600;
  color: #333;
}

.hours-item span:last-child {
  color: #666;
}

/* Social Links */
.social-buttons {
  display: flex;
  gap: 15px;
  justify-content: center;
}

.social-btn {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  transition: all 0.3s ease;
}

.social-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 15px rgba(0,0,0,0.2);
}

.social-btn.facebook { background: #1877f2; }
.social-btn.twitter { background: #1da1f2; }
.social-btn.linkedin { background: #0077b5; }
.social-btn.github { background: #333; }

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

/* Responsive */
@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .form-card {
    padding: 30px 20px;
  }

  .page-header h1 {
    font-size: 2rem;
  }

  .social-buttons {
    flex-wrap: wrap;
  }
}
</style>
