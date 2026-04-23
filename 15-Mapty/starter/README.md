# Mapty - Workout Tracking Application

![Mapty](logo.png)

## 📋 Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Geocoding & Mapping](#geocoding--mapping)
- [Architecture](#architecture)
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)

---

## 🎯 Overview

**Mapty** is a workout tracking web application that allows users to log their running and cycling activities on an interactive map. The application uses geolocation to pinpoint workout locations and displays them as markers on a map, creating a visual history of all your workouts.

### What Makes Mapty Special?
- **Location-Based Tracking**: Every workout is tied to a specific geographic location
- **Persistent Storage**: All workouts are saved locally and persist between sessions
- **Interactive Mapping**: Click anywhere on the map to log a new workout
- **Automatic Calculations**: Pace for running and speed for cycling are calculated automatically

---

## ✨ Features

### Core Functionality
1. **Geolocation Integration**
   - Automatically detects user's current location on page load
   - Centers the map on user's position
   - Falls back gracefully if geolocation is denied

2. **Workout Types**
   - **Running**: Track distance, duration, cadence (steps per minute)
     - Calculates pace (min/km)
   - **Cycling**: Track distance, duration, elevation gain
     - Calculates speed (km/h)

3. **Interactive Map Interface**
   - Click any location on the map to create a new workout
   - Visual markers for each workout with custom popups
   - Color-coded markers (running vs cycling)
   - Click on workout in sidebar to pan map to that location

4. **Data Persistence**
   - Workouts saved to browser's LocalStorage
   - Automatically loads previous workouts on page refresh
   - Manual reset option via console

5. **Form Validation**
   - All inputs must be positive numbers
   - Real-time validation with alert feedback
   - Dynamic form fields based on workout type

---

## 🛠️ Tech Stack

### Frontend Technologies

#### 1. **HTML5**
- Semantic markup
- Form elements for data input
- Meta tags for responsive design and cross-browser compatibility

#### 2. **CSS3**
- Custom CSS variables for theming
- Flexbox layout for responsive sidebar
- Grid layout for form structure
- Modern styling with Google Fonts (Manrope)
- Responsive design principles

#### 3. **JavaScript (ES6+)**
- Modern JavaScript features:
  - Classes and OOP principles
  - Private fields (`#map`, `#workouts`, `#mapEvent`)
  - Arrow functions
  - Template literals
  - Destructuring
  - Spread operator
  - Array methods (`forEach`, `find`, `every`)
- Event-driven architecture
- LocalStorage API for data persistence

#### 4. **Leaflet.js (v1.9.4)**
- Open-source JavaScript library for interactive maps
- Official website: [leafletjs.com](https://leafletjs.com/)
- Features used:
  - Map initialization and rendering
  - Tile layers from OpenStreetMap
  - Custom markers and popups
  - Map events (click handlers)
  - View manipulation (setView, pan)

---

## 🌍 Geocoding & Mapping

### What is Geocoding?

**Geocoding** is the process of converting addresses or place names into geographic coordinates (latitude and longitude). **Reverse geocoding** converts coordinates back into human-readable addresses.

### How Mapty Uses Geolocation & Mapping

#### 1. **Geolocation API (Browser Native)**

Mapty uses the browser's built-in Geolocation API to determine the user's current position:

```javascript
navigator.geolocation.getCurrentPosition(successCallback, errorCallback)
```

**How It Works:**
- **Permission Request**: Browser asks user to allow location access
- **GPS/WiFi/IP**: Uses device GPS, WiFi triangulation, or IP address to determine location
- **Accuracy**: Provides latitude and longitude with varying accuracy (typically 10-50 meters)
- **Returns**: Position object containing:
  ```javascript
  {
    coords: {
      latitude: 40.7128,
      longitude: -74.0060,
      accuracy: 20  // in meters
    }
  }
  ```

**Mapty Implementation:**
```javascript
_getPosition() {
  if (navigator.geolocation)
    navigator.geolocation.getCurrentPosition(
      this._loadMap.bind(this),
      function () {
        alert('Could not get your Position');
      }
    );
}
```

#### 2. **Leaflet.js Mapping Library**

Leaflet is used to render interactive maps and handle all mapping functionality.

**Key Components:**

##### a) **Map Initialization**
```javascript
this.#map = L.map('map').setView(coords, this.#mapZoom);
```
- Creates a map instance attached to the HTML element with id `map`
- `setView()`: Centers map on coordinates with specified zoom level (15)

##### b) **Tile Layers (OpenStreetMap)**
```javascript
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(this.#map);
```

**What are Tile Layers?**
- Maps are composed of 256x256 pixel square tiles
- Tiles are loaded dynamically based on map viewport
- **OpenStreetMap (OSM)**: Free, open-source map data
- URL pattern: `{z}` = zoom level, `{x}` and `{y}` = tile coordinates
- Alternative providers: Mapbox, Google Maps, Stamen, etc.

##### c) **Markers & Popups**
```javascript
L.marker(workout.coords)
  .addTo(this.#map)
  .bindPopup(L.popup({
    maxWidth: 250,
    minWidth: 100,
    className: `${workout.type}-popup`
  }))
  .setPopupContent(`🏃‍♂️ Running on January 15`)
  .openPopup();
```

**Marker Features:**
- **Coordinates**: Placed at exact [latitude, longitude]
- **Custom Popups**: Bound to markers with workout information
- **Styling**: CSS classes for custom appearance
- **Interactivity**: Click to open/close popups

##### d) **Map Events**
```javascript
this.#map.on('click', this._showForm.bind(this));
```

**Event System:**
- Captures user clicks on map
- Returns precise coordinates (`latlng`) of click location
- Used to trigger workout form display
- Other events available: zoom, drag, move, etc.

##### e) **Programmatic Map Movement**
```javascript
this.#map.setView(workout.coords, this.#mapZoom, {
  animate: true,
  pan: { duration: 2 }
});
```
- Moves map to specific coordinates with smooth animation
- Used when clicking workout in sidebar
- Duration: 2 seconds pan animation

### No Reverse Geocoding (Currently)

**Note**: Mapty currently does NOT implement reverse geocoding. The workout descriptions show only the date (e.g., "Running on January 15"), not the address or location name.

**Potential Enhancement:**
To add reverse geocoding, you could use:
- **Nominatim API** (OpenStreetMap's free geocoding service)
- **Google Geocoding API**
- **Mapbox Geocoding API**

Example implementation:
```javascript
async _reverseGeocode(lat, lng) {
  const response = await fetch(
    `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
  );
  const data = await response.json();
  return data.display_name; // "123 Main St, City, Country"
}
```

### Coordinate System Used

- **Format**: Decimal Degrees (DD)
- **Example**: `[40.7128, -74.0060]` (latitude, longitude)
- **Range**: 
  - Latitude: -90° to +90° (South to North)
  - Longitude: -180° to +180° (West to East)
- **Precision**: ~6 decimal places (±0.1 meter accuracy)

---

## 🏗️ Architecture

### Object-Oriented Programming Design

#### Class Structure

```
Workout (Abstract Base Class)
│
├── Running (extends Workout)
│   ├── Properties: coords, distance, duration, cadence, pace
│   └── Methods: calcPace(), _setDescription()
│
└── Cycling (extends Workout)
    ├── Properties: coords, distance, duration, elevationGain, speed
    └── Methods: calcSpeed(), _setDescription()

App (Main Application Controller)
├── Private Fields: #map, #mapEvent, #workouts, #mapZoom
└── Methods: 
    ├── _getPosition()
    ├── _loadMap()
    ├── _showForm()
    ├── _hideForm()
    ├── _toggleElevationField()
    ├── _newWorkout()
    ├── _renderWorkoutMarker()
    ├── _renderWorkout()
    ├── _movToPopup()
    ├── _setLocalStorage()
    └── _getLocalStorage()
```

#### Data Flow

1. **Initialization**
   ```
   App Constructor → _getPosition() → _loadMap() → Map Rendered
   ```

2. **Creating a Workout**
   ```
   User Clicks Map → _showForm() → User Fills Form → _newWorkout()
   → Create Workout Object → _renderWorkoutMarker() → _renderWorkout()
   → _setLocalStorage()
   ```

3. **Loading Saved Workouts**
   ```
   Page Load → _getLocalStorage() → Parse JSON → _renderWorkout()
   → Display in Sidebar
   ```

### Key Design Patterns

1. **Inheritance**: `Running` and `Cycling` inherit from `Workout`
2. **Encapsulation**: Private fields using `#` notation
3. **Event-Driven**: All interactions trigger specific methods
4. **Factory Pattern**: Workout creation based on type selection

---

## 🚀 Installation

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection (for loading map tiles and fonts)

### Setup

1. **Clone or Download** the project files

2. **File Structure**
   ```
   mapty/
   ├── index.html      # Main HTML file
   ├── script.js       # Application logic
   ├── style.css       # Styling
   ├── logo.png        # App logo
   └── icon.png        # Favicon
   ```

3. **Open the Application**
   - Simply open `index.html` in your web browser
   - Or use a local development server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js http-server
     npx http-server
     ```

4. **Grant Location Permission**
   - Browser will request location access
   - Click "Allow" to enable geolocation features

---

## 📖 Usage

### Creating a Workout

1. **Allow location access** when prompted
2. **Wait for map to load** (centers on your location)
3. **Click anywhere on the map** where you exercised
4. **Form appears** in the sidebar
5. **Select workout type**: Running or Cycling
6. **Fill in details**:
   - Distance (km)
   - Duration (min)
   - Cadence (for running) OR Elevation gain (for cycling)
7. **Press Enter** or click OK
8. **Marker appears** on map with popup
9. **Workout added** to sidebar list

### Viewing Workouts

- **All workouts** are listed in the sidebar
- **Click a workout** in the list to pan map to that location
- **Markers persist** on the map with custom popups
- **Data persists** across browser sessions

### Clearing Data

Open browser console and type:
```javascript
app.reset()
```

This will:
- Clear all workouts from LocalStorage
- Reload the page
- Start fresh

---

## 🔧 API Documentation

### Workout Class

**Base class for all workout types**

```javascript
class Workout {
  date: Date
  id: String
  coords: [Number, Number]  // [latitude, longitude]
  distance: Number          // in km
  duration: Number          // in minutes
  
  constructor(coords, distance, duration)
  _setDescription(): void   // Generates description string
}
```

### Running Class

```javascript
class Running extends Workout {
  type: 'running'
  cadence: Number           // steps per minute
  pace: Number              // min/km (calculated)
  
  constructor(coords, distance, duration, cadence)
  calcPace(): Number        // Returns pace value
}
```

### Cycling Class

```javascript
class Cycling extends Workout {
  type: 'cycling'
  elevationGain: Number     // meters
  speed: Number             // km/h (calculated)
  
  constructor(coords, distance, duration, elevationGain)
  calcSpeed(): Number       // Returns speed value
}
```

### App Class

**Main application controller**

```javascript
class App {
  // Private Fields
  #map: L.Map
  #mapZoom: 15
  #mapEvent: L.MapEvent
  #workouts: Array<Workout>
  
  // Public Methods
  constructor()
  reset(): void             // Clear all data and reload
  
  // Private Methods
  _getPosition(): void
  _loadMap(position): void
  _showForm(mapEvent): void
  _hideForm(): void
  _toggleElevationField(): void
  _newWorkout(event): void
  _renderWorkoutMarker(workout): void
  _renderWorkout(workout): void
  _movToPopup(event): void
  _setLocalStorage(): void
  _getLocalStorage(): void
}
```

---

## 🌐 External Dependencies

### Leaflet.js
- **Version**: 1.9.4
- **CDN**: unpkg.com
- **License**: BSD 2-Clause License
- **Purpose**: Interactive mapping functionality
- **Documentation**: [leafletjs.com](https://leafletjs.com/)

### OpenStreetMap
- **Provider**: OpenStreetMap Foundation
- **License**: Open Database License (ODbL)
- **Purpose**: Map tile provider
- **Attribution Required**: Yes
- **Website**: [openstreetmap.org](https://www.openstreetmap.org/)

### Google Fonts
- **Font Family**: Manrope
- **Weights**: 400, 600, 700, 800
- **License**: Open Font License
- **Purpose**: Typography

---

## 🎨 Styling

The application uses a modern, dark-themed interface with:
- **Color Scheme**: 
  - Brand colors: Orange (#ffb545) and Green (#00c46a)
  - Dark backgrounds (#2d3439, #42484d)
  - Light text (#ececec, #aaa)
- **Layout**: Flexbox sidebar with fixed width (50rem)
- **Responsive**: Adapts to different screen sizes
- **Custom markers**: Color-coded by workout type

---

## 🔒 Data Storage

### LocalStorage Implementation

```javascript
// Saving data
localStorage.setItem('workouts', JSON.stringify(this.#workouts));

// Loading data
const data = JSON.parse(localStorage.getItem('workouts'));
```

**Characteristics:**
- **Capacity**: ~5-10MB per domain
- **Persistence**: Data persists until explicitly cleared
- **Scope**: Domain-specific (www.example.com vs example.com)
- **Type**: String-based key-value storage
- **Security**: Not encrypted, accessible via JavaScript

**Limitations:**
- No complex queries
- Synchronous operations (blocks main thread)
- Lost prototype chain (objects become plain data)

---

## 🚧 Potential Enhancements

1. **Reverse Geocoding**: Show location names instead of just dates
2. **Edit/Delete Workouts**: Add buttons to modify or remove entries
3. **Sort/Filter**: Organize workouts by date, type, or distance
4. **Statistics**: Display totals, averages, charts
5. **Export Data**: Download workouts as CSV/JSON
6. **Weather Integration**: Show weather conditions during workout
7. **Route Drawing**: Allow users to draw their actual path
8. **Backend Integration**: Store data on server for cross-device access
9. **User Authentication**: Personal accounts and profiles
10. **Social Features**: Share workouts with friends

---

## 📄 License

This project is part of Jonas Schmedtmann's JavaScript course.

---

## 👨‍💻 Developer Notes

- **Compatible Browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile Support**: Yes, but optimized for desktop
- **Offline Mode**: No (requires internet for map tiles)
- **Performance**: Smooth for up to ~1000 workouts

---

## 🙏 Credits

- **Course**: Jonas Schmedtmann's "The Complete JavaScript Course"
- **Mapping**: Leaflet.js & OpenStreetMap
- **Icons**: Unicode Emojis (🏃‍♂️, 🚴‍♀️, ⏱, ⚡️, 🦶🏼, ⛰)

---

**Made with ❤️ and JavaScript**
