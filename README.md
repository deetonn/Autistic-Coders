# Autistic Coders Website

A Bootstrap-powered website celebrating the connection between autism and programming, highlighting how autistic traits can be tremendous assets in the programming world.

## Project Overview

This project creates an accessible and informative platform that:
- Explores the natural connection between autism and programming
- Highlights successful autistic programmers in tech
- Provides a sensory-friendly user experience
- Demonstrates responsive web design principles

## Features

### Home Page
- Welcoming hero section with gradient background
- Explanation of autism traits beneficial to programming:
  - Direct Communication
  - Pattern Recognition
  - Deep Focus
  - Logical Thinking
- Profiles of notable autistic programmers including:
  - Bram Cohen (BitTorrent creator)
  - Satoshi Tajiri (Pokémon creator)
  - Temple Grandin
  - Susan Rakov

### Design Elements
- Sensory-friendly color scheme using:
  - Calming blues (#3498db)
  - Soft greens (#2ecc71)
  - Neutral grays (#2c3e50)
- Smooth animations and transitions
- Clear visual hierarchy
- Accessible contrast ratios
- Responsive card layouts
- Quote highlighting

### Interactive Features
- JavaScript Mind-Boggle Quiz
  - Accessible from homepage header
  - Links to dedicated quiz page
  - Visual feedback on hover
  - Engaging call-to-action design

## Technical Stack
- HTML5
- CSS3
- Bootstrap 5.3
- Google Fonts

## Technical Implementation Details

### HTML Components
- Semantic structure using HTML5 elements:
  - `<header>` for hero section
  - `<nav>` for navigation
  - `<main>` for primary content
  - `<section>` for content grouping
  - `<article>` for pioneer profiles
  - `<blockquote>` for testimonials

### CSS Features
- Custom Properties (CSS Variables):
  ```css
  :root {
    --primary-color: #3498db;
    --accent-color: #2ecc71;
    --dark-color: #2c3e50;
    --light-color: #ecf0f1;
  }
  ```

- Gradient Backgrounds:
  ```css
  .hero-section {
    background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
  }
  ```

- Card Animations:
  ```css
  .trait-card {
    transition: transform 0.3s ease;
  }
  .trait-card:hover {
    transform: translateY(-5px);
  }
  ```

### Bootstrap Classes Used
- Layout:
  - `.container` for centered content
  - `.row` and `.col-*` for grid system
  - `.g-4` for grid gutters
- Components:
  - `.navbar` and `.navbar-*` for navigation
  - `.card` for content boxes
  - `.display-4` for hero text
  - `.lead` for emphasized paragraphs

### Responsive Breakpoints
```css
/* Mobile First Approach */
/* Base styles for mobile */

/* Medium devices (tablets) */
@media (min-width: 768px) {
    .trait-card {
        padding: 2rem;
    }
}

/* Large devices (desktops) */
@media (min-width: 992px) {
    .hero-section {
        padding: 5rem 0;
    }
}
```

### Accessibility Implementation
- ARIA labels where needed
- Semantic HTML structure
- Color contrast ratios:
  - Normal text: minimum 4.5:1
  - Large text: minimum 3:1
- Focus states for interactive elements
- Responsive text sizing

## File Structure

```
project/
│
├── index.html # Main homepage
├── css/
│ └── styles.css # Custom styling
└── README.md # Project documentation
```


## Accessibility Features
- High contrast text
- Clear visual hierarchy
- Smooth transitions
- Semantic HTML
- Responsive design
- Screen reader friendly headings
- Alternative text for images

## Color Scheme
- Primary Color: #3498db (Calming Blue)
- Accent Color: #2ecc71 (Soft Green)
- Dark Color: #2c3e50 (Deep Blue-Gray)
- Light Color: #ecf0f1 (Soft Gray-White)

## Responsive Design
- Mobile-first approach
- Breakpoints:
  - Small: up to 576px
  - Medium: 576px - 768px
  - Large: 768px and above

## Future Enhancements
- Resources section
- Community stories
- Learning pathways
- Career guidance
- Support resources

## Contributing
This project is part of an educational assignment and is not currently open for contributions.