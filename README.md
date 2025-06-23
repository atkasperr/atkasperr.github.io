# Portfolio Website - Easy Editing Guide

This is your modern, professional portfolio website. Here's how to customize it to make it your own!

## 🎨 What's Included

Your portfolio includes these sections:
- **Home**: Hero section with your introduction
- **About**: Detailed biography and skills
- **Timeline**: Major events and milestones in your life
- **CV**: Professional curriculum vitae
- **Publications**: Your research papers and publications
- **Blog**: Personal blog posts and articles
- **Photos**: Photo gallery with modal viewing

## 📝 How to Edit Content

### 1. Basic Information

Open `index.html` and find these sections to update:

**Update Your Name and Title:**
```html
<!-- Find and replace "Your Name" with your actual name -->
<h1 class="hero-title">Hello, I'm <span class="highlight">Your Name</span></h1>
<p class="hero-subtitle">Your Professional Title</p>

<!-- Also update in the header -->
<div class="nav-brand">
    <h2>Your Name</h2>
</div>
```

**Update Your Bio:**
```html
<!-- Find the hero-description paragraph -->
<p class="hero-description">
    Write a compelling introduction about yourself here...
</p>
```

### 2. About Section

**Update Your Biography:**
```html
<!-- Find the about-text div -->
<div class="about-text">
    <p>Write your detailed biography here...</p>
    <p>Add more paragraphs as needed...</p>
</div>
```

**Update Skills:**
```html
<!-- Find skill-tags div and update -->
<div class="skill-tags">
    <span class="skill-tag">Your Skill 1</span>
    <span class="skill-tag">Your Skill 2</span>
    <!-- Add more skills -->
</div>
```

**Update Statistics:**
```html
<!-- Update the numbers and labels -->
<div class="stat">
    <h3>5+</h3>
    <p>Years Experience</p>
</div>
```

### 3. Timeline Section

**Add Timeline Events:**
```html
<!-- Copy this structure for each event -->
<div class="timeline-item" data-year="2024">
    <div class="timeline-marker"></div>
    <div class="timeline-content">
        <h3>Your Event Title</h3>
        <p class="timeline-date">2024 - Present</p>
        <p>Description of the event...</p>
    </div>
</div>
```

### 4. CV Section

**Add Education:**
```html
<div class="cv-item">
    <h4>Your Degree</h4>
    <p class="cv-institution">University Name</p>
    <p class="cv-date">Year - Year</p>
    <p>Brief description...</p>
</div>
```

**Add Experience:**
```html
<div class="cv-item">
    <h4>Job Title</h4>
    <p class="cv-institution">Company Name</p>
    <p class="cv-date">Year - Year</p>
    <ul>
        <li>Achievement or responsibility</li>
        <li>Another achievement</li>
    </ul>
</div>
```

### 5. Publications

**Add Publications:**
```html
<div class="publication-item">
    <h3>Publication Title</h3>
    <p class="publication-authors">Your Name, Co-Authors</p>
    <p class="publication-venue">Journal/Conference, Year</p>
    <p class="publication-abstract">Abstract or description...</p>
    <div class="publication-links">
        <a href="link-to-paper" class="btn btn-sm">View Paper</a>
        <a href="link-to-code" class="btn btn-sm btn-outline">Code</a>
    </div>
</div>
```

### 6. Blog Posts

**Add Blog Posts:**
```html
<div class="blog-post">
    <img src="images/blog-image.jpg" alt="Blog post" class="blog-image">
    <div class="blog-info">
        <h3>Post Title</h3>
        <p class="blog-date">Date</p>
        <p class="blog-excerpt">Post excerpt...</p>
        <a href="blog/post-file.html" class="btn btn-sm">Read More</a>
    </div>
</div>
```

### 7. Photos

**Add Photos:**
```html
<div class="photo-item">
    <img src="images/your-photo.jpg" alt="Description" class="gallery-img">
    <div class="photo-overlay">
        <p>Photo caption</p>
    </div>
</div>
```

## 🖼️ Adding Images

1. Place your images in the `images/` folder
2. Use these standard names for best results:
   - `profile.jpg` - Your main profile photo
   - `blog1.jpg`, `blog2.jpg` - Blog post images
   - `photo1.jpg`, `photo2.jpg`, etc. - Gallery photos

## 🔗 Social Links

Update your social media links in the footer:
```html
<div class="social-links">
    <a href="your-linkedin-url" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
    <a href="your-twitter-url" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
    <a href="your-github-url" aria-label="GitHub"><i class="fab fa-github"></i></a>
    <a href="mailto:your-email" aria-label="Email"><i class="fas fa-envelope"></i></a>
</div>
```

## 🎨 Customizing Colors

The main brand color is defined in CSS. To change it:

1. Open `style.css`
2. Find all instances of `#6366f1` (the purple color)
3. Replace with your preferred color (use a hex color picker)

## 📱 Mobile Responsive

The website is fully responsive and will look great on all devices automatically.

## 🚀 Advanced Features

### Using JavaScript Utilities

The website includes utility functions for dynamic content:

```javascript
// Add a new skill
PortfolioUtils.addSkill('New Skill Name');

// Update statistics
PortfolioUtils.updateStat(0, '10+', 'New Label');

// Update social links
PortfolioUtils.updateSocialLink('linkedin', 'https://linkedin.com/in/yourprofile');
```

### Adding New Timeline Events

```javascript
portfolio.addTimelineEvent({
    title: 'New Achievement',
    date: '2024',
    year: '2024',
    description: 'Description of achievement'
});
```

### Adding New Publications

```javascript
portfolio.addPublication({
    title: 'Paper Title',
    authors: 'Your Name, Co-Authors',
    venue: 'Conference Name, 2024',
    abstract: 'Paper abstract...',
    links: [
        { text: 'View Paper', url: 'paper-url' },
        { text: 'Code', url: 'code-url' }
    ]
});
```

## 📁 File Structure

```
├── index.html          # Main portfolio page
├── style.css           # All styling
├── script.js           # Interactive functionality
├── images/             # Your photos and images
├── blog/               # Blog post HTML files
│   └── post-1.html     # Sample blog post
├── files/              # Downloadable files (CV, etc.)
└── README.md           # This guide
```

## 🔧 Tips for Customization

1. **Always backup** your files before making changes
2. **Test on mobile** after making changes
3. **Optimize images** - keep them under 1MB for fast loading
4. **Keep it simple** - the design works best with clean, professional content
5. **Update regularly** - keep your content fresh and current

## 🌟 Making It Yours

1. Replace all placeholder text with your actual information
2. Add your real photos and images
3. Customize the colors to match your brand
4. Add your actual social media links
5. Write genuine blog posts about your experiences
6. Keep your CV and publications up to date

That's it! You now have a beautiful, professional portfolio website that's easy to maintain and update. Good luck with your portfolio! 🎉
