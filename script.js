// Simple Portfolio JavaScript

document.addEventListener('DOMContentLoaded', function() {
    
    // Navigation functionality
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    
    // Function to show a specific section
    function showSection(targetId) {
        // Hide all sections
        sections.forEach(section => {
            section.classList.remove('active');
        });
        
        // Remove active class from all nav links
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
        
        // Show target section
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.add('active');
        }
        
        // Add active class to clicked nav link
        const activeLink = document.querySelector(`[data-section="${targetId}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
        
        // Update URL
        window.history.pushState(null, null, `#${targetId}`);
    }
    
    // Add click event listeners to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('data-section');
            showSection(targetId);
        });
    });
    
    // Handle browser back/forward buttons
    window.addEventListener('popstate', function() {
        const hash = window.location.hash.substring(1) || 'home';
        showSection(hash);
    });
    
    // Set initial section based on URL hash
    const initialSection = window.location.hash.substring(1) || 'home';
    showSection(initialSection);
    
    // Simple photo modal functionality
    const photos = document.querySelectorAll('.photo img');
    
    photos.forEach(photo => {
        photo.addEventListener('click', function() {
            openPhotoModal(this);
        });
    });
    
    function openPhotoModal(img) {
        // Create modal
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
            cursor: pointer;
        `;
        
        const modalImg = document.createElement('img');
        modalImg.src = img.src;
        modalImg.alt = img.alt;
        modalImg.style.cssText = `
            max-width: 90%;
            max-height: 90%;
            border-radius: 8px;
        `;
        
        modal.appendChild(modalImg);
        document.body.appendChild(modal);
        
        // Close modal on click
        modal.addEventListener('click', function() {
            document.body.removeChild(modal);
        });
        
        // Close modal on Escape key
        document.addEventListener('keydown', function closeOnEscape(e) {
            if (e.key === 'Escape') {
                if (document.body.contains(modal)) {
                    document.body.removeChild(modal);
                }
                document.removeEventListener('keydown', closeOnEscape);
            }
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#' || href.startsWith('#') && href.length > 1) {
                const section = href.substring(1);
                if (document.getElementById(section)) {
                    e.preventDefault();
                    showSection(section);
                }
            }
        });
    });
    
});

// Utility functions for easy content management
window.PortfolioUtils = {
    
    // Add a new skill to the skills list
    addSkill: function(skillName) {
        const skillsList = document.querySelector('.skills-list');
        if (skillsList) {
            const li = document.createElement('li');
            li.textContent = skillName;
            skillsList.appendChild(li);
        }
    },
    
    // Add a new timeline item
    addTimelineItem: function(year, title, description) {
        const timeline = document.querySelector('.timeline');
        if (timeline) {
            const item = document.createElement('div');
            item.className = 'timeline-item';
            item.innerHTML = `
                <div class="year">${year}</div>
                <div class="content">
                    <h3>${title}</h3>
                    <p>${description}</p>
                </div>
            `;
            timeline.appendChild(item);
        }
    },
    
    // Add a new publication
    addPublication: function(title, authors, venue, description, links) {
        const publicationsContainer = document.querySelector('#publications .container');
        if (publicationsContainer) {
            const publication = document.createElement('div');
            publication.className = 'publication';
            
            let linksHtml = '';
            if (links && links.length > 0) {
                linksHtml = '<p>' + links.map(link => 
                    `<a href="${link.url}" class="link">${link.text}</a>`
                ).join(' | ') + '</p>';
            }
            
            publication.innerHTML = `
                <h3>${title}</h3>
                <p class="authors">${authors}</p>
                <p class="venue">${venue}</p>
                <p>${description}</p>
                ${linksHtml}
            `;
            
            publicationsContainer.appendChild(publication);
        }
    },
    
    // Add a new blog post
    addBlogPost: function(title, date, excerpt, link) {
        const blogContainer = document.querySelector('#blog .container');
        if (blogContainer) {
            const blogPost = document.createElement('div');
            blogPost.className = 'blog-post';
            blogPost.innerHTML = `
                <h3><a href="${link}">${title}</a></h3>
                <p class="date">${date}</p>
                <p>${excerpt}</p>
            `;
            blogContainer.appendChild(blogPost);
        }
    },
    
    // Add a new photo
    addPhoto: function(src, alt, caption) {
        const photoGrid = document.querySelector('.photo-grid');
        if (photoGrid) {
            const photo = document.createElement('div');
            photo.className = 'photo';
            photo.innerHTML = `
                <img src="${src}" alt="${alt}">
                <p>${caption}</p>
            `;
            photoGrid.appendChild(photo);
            
            // Add click handler for modal
            const img = photo.querySelector('img');
            img.addEventListener('click', function() {
                // Use the existing openPhotoModal function
                const modal = document.createElement('div');
                modal.style.cssText = `
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.9);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 1000;
                    cursor: pointer;
                `;
                
                const modalImg = document.createElement('img');
                modalImg.src = img.src;
                modalImg.alt = img.alt;
                modalImg.style.cssText = `
                    max-width: 90%;
                    max-height: 90%;
                    border-radius: 8px;
                `;
                
                modal.appendChild(modalImg);
                document.body.appendChild(modal);
                
                modal.addEventListener('click', function() {
                    document.body.removeChild(modal);
                });
            });
        }
    },
    
    // Update basic info
    updateInfo: function(selector, content) {
        const element = document.querySelector(selector);
        if (element) {
            element.innerHTML = content;
        }
    }
};

console.log('Simple Portfolio loaded! Use PortfolioUtils for easy updates.');
